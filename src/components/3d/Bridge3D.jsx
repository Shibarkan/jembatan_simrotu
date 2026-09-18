import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Bridge3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // 1. Setup Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog('#1a202c', 20, 150);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(40, 20, 50);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;

    // 2. Pencahayaan & Struktur Jembatan (Salin dari file HTML sebelumnya)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    // ... [Masukkan variabel deck, pillar, arch, cable dari kode sebelumnya di sini] ...

    // 3. Render Loop
    let animationFrameId;
    const animate = function () {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 4. Cleanup (Mencegah memory leak di React)
    return () => {
      cancelAnimationFrame(animationFrameId);
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[500px] bg-slate-900 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
    />
  );
}