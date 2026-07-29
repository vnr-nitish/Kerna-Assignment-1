import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeDStudioCanvas({ interactive = true, style }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 450;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 3D Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xd4af37, 3, 50);
    goldPointLight.position.set(5, 5, 5);
    scene.add(goldPointLight);

    const emeraldPointLight = new THREE.PointLight(0x1e4a3c, 4, 50);
    emeraldPointLight.position.set(-5, -5, 2);
    scene.add(emeraldPointLight);

    // Group for entire 3D mannequin / couture mesh
    const coutureGroup = new THREE.Group();
    scene.add(coutureGroup);

    // 1. Mannequin Torso Mesh (Bust silhouette)
    const torsoGeometry = new THREE.CylinderGeometry(0.8, 1.3, 2.8, 32);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false
    });
    const torsoMesh = new THREE.Mesh(torsoGeometry, goldMaterial);
    torsoMesh.position.y = 0.2;
    coutureGroup.add(torsoMesh);

    // 2. Inner Glowing Core Mesh (Icosahedron jewel)
    const coreGeometry = new THREE.IcosahedronGeometry(0.95, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xebd68d,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreMesh.position.y = 0.2;
    coutureGroup.add(coreMesh);

    // 3. Rotating Orbital 3D Rings
    const ring1Geo = new THREE.TorusGeometry(1.8, 0.03, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    coutureGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
    const ring2 = new THREE.Mesh(ring2Geo, ringMaterial);
    ring2.rotation.y = Math.PI / 4;
    coutureGroup.add(ring2);

    // 4. Floating 3D Sparkle Particle Field
    const particlesCount = 120;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.75
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    if (interactive && containerRef.current) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp mouse tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate 3D Couture Group
      coutureGroup.rotation.y = elapsedTime * 0.4 + targetX * 0.8;
      coutureGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 - targetY * 0.5;

      // Rotate Rings in opposite directions
      ring1.rotation.z = elapsedTime * 0.5;
      ring2.rotation.z = -elapsedTime * 0.3;

      // Pulse Core
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.04;
      coreMesh.scale.set(scale, scale, scale);

      // Rotate Particle Field
      particlesMesh.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div 
      ref={containerRef} 
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        position: 'relative',
        ...style
      }}
    />
  );
}
