import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function loadGLTFModel(scene, glbPath, options) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "planet";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        console.log(error);
        reject(error);
      }
    );
  });
}

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const PlanetsModel = ({ planet, size }) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scene = new THREE.Scene();
      let scale = 100;
      if (planet === "terre") scale /= 2.3;
      if (planet === "uranus") scale *= 443;
      if (planet === "saturne") scale *= 1.95;
      if (planet === "soleil") scale /= 1900;
      if (planet === "pin") scale /= 38;
      if (planet === "rocket") scale /= 5;

      let camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );

      const target = new THREE.Vector3(0, 0, 0);
      const initialCameraPosition = new THREE.Vector3(0, 0, 1000);
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.enableZoom = false;
      controls.target = target;
      if (planet === "pin") {
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;
      }

      loadGLTFModel(scene, `images/${planet}.glb`, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        if (planet === "rocket") controls.enabled = false;
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return planet === "rocket" ? (
    <motion.div
      initial={{ x: "-420%", y: -90, rotate: 40, opacity: 0.9 }}
      animate={{
        x: "450%",
        y: [-70, -100, -20],
        rotate: [0, 100, 0],
        opacity: [0, 1, 1],
      }}
      transition={{ ease: "easeInOut", duration: 5 }}
      style={{
        height: size,
        width: size,
        position: "relative",
      }}
      ref={refContainer}
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </motion.div>
  ) : (
    <div
      style={{ height: size, width: size, position: "relative" }}
      ref={refContainer}
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </div>
  );
};

export default PlanetsModel;
