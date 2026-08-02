import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeDStudioCanvas({ 
  interactive = true, 
  style, 
  fabricColor = 0x006b6e, 
  accentColor = 0xd4af37 
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 300;
    const height = containerRef.current.clientHeight || 240;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, -0.3, 4.9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 3D Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(accentColor, 4.0, 50);
    goldPointLight.position.set(5, 5, 5);
    scene.add(goldPointLight);

    const fillPointLight = new THREE.PointLight(0xffffff, 2.5, 50);
    fillPointLight.position.set(-5, -3, 3);
    scene.add(fillPointLight);

    // Bottom Gold Spotlight specifically illuminating the Pedestal Base
    const baseSpotLight = new THREE.PointLight(0xd4af37, 4.5, 30);
    baseSpotLight.position.set(0, -2.5, 3.5);
    scene.add(baseSpotLight);

    // Group for entire 3D Fashion Studio Dress Form Mannequin
    const mannequinGroup = new THREE.Group();
    mannequinGroup.position.y = 0.35;
    scene.add(mannequinGroup);

    // Dark Mahogany Wood & Gold Material for Stand Base
    const woodMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a2d0c,
      metalness: 0.45,
      roughness: 0.3
    });

    // Dynamic Fabric & Accent Trim Materials
    const mainFabricMaterial = new THREE.MeshStandardMaterial({
      color: fabricColor,
      metalness: 0.5,
      roughness: 0.35,
      bumpScale: 0.05
    });

    const waistFabricMaterial = new THREE.MeshStandardMaterial({
      color: accentColor,
      metalness: 0.7,
      roughness: 0.25
    });

    const trimGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5d77f,
      metalness: 0.9,
      roughness: 0.15
    });

    // 1. Wooden Pedestal Base
    const standBaseGeo = new THREE.CylinderGeometry(0.7, 0.8, 0.1, 32);
    const standBaseMesh = new THREE.Mesh(standBaseGeo, woodMaterial);
    standBaseMesh.position.y = -2.1;
    mannequinGroup.add(standBaseMesh);

    // 2. Wooden Center Pillar Column
    const standPillarGeo = new THREE.CylinderGeometry(0.045, 0.045, 1.8, 16);
    const standPillarMesh = new THREE.Mesh(standPillarGeo, woodMaterial);
    standPillarMesh.position.y = -1.2;
    mannequinGroup.add(standPillarMesh);

    // 3. Wooden Neck Cap
    const neckCapGeo = new THREE.CylinderGeometry(0.12, 0.16, 0.22, 16);
    const neckCapMesh = new THREE.Mesh(neckCapGeo, woodMaterial);
    neckCapMesh.position.y = 1.15;
    mannequinGroup.add(neckCapMesh);

    // 4. Dress Form Chest & Shoulder Bust
    const chestGeo = new THREE.CylinderGeometry(0.55, 0.42, 0.75, 32);
    const chestMesh = new THREE.Mesh(chestGeo, mainFabricMaterial);
    chestMesh.position.y = 0.65;
    mannequinGroup.add(chestMesh);

    // 5. Hourglass Waist Contour
    const waistGeo = new THREE.CylinderGeometry(0.42, 0.58, 0.65, 32);
    const waistMesh = new THREE.Mesh(waistGeo, waistFabricMaterial);
    waistMesh.position.y = -0.05;
    mannequinGroup.add(waistMesh);

    // 6. Flared Lehenga / Saree Skirt Draping Base
    const skirtGeo = new THREE.CylinderGeometry(0.58, 1.05, 0.9, 32);
    const skirtMesh = new THREE.Mesh(skirtGeo, mainFabricMaterial);
    skirtMesh.position.y = -0.75;
    mannequinGroup.add(skirtMesh);

    // 7. Gold Maggam / Zardozi Neck Collar Trim
    const neckTrimGeo = new THREE.TorusGeometry(0.46, 0.035, 16, 60);
    const neckTrimMesh = new THREE.Mesh(neckTrimGeo, trimGoldMaterial);
    neckTrimMesh.position.y = 0.98;
    neckTrimMesh.rotation.x = Math.PI / 2;
    mannequinGroup.add(neckTrimMesh);

    // 8. Gold Waist Sash Belt
    const waistBeltGeo = new THREE.TorusGeometry(0.43, 0.04, 16, 60);
    const waistBeltMesh = new THREE.Mesh(waistBeltGeo, trimGoldMaterial);
    waistBeltMesh.position.y = 0.28;
    waistBeltMesh.rotation.x = Math.PI / 2;
    mannequinGroup.add(waistBeltMesh);

    // 9. Floating Gold Zardozi Embroidery Sparkle Particle Field
    const particlesCount = 140;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 6;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      color: accentColor,
      transparent: true,
      opacity: 0.85
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Mouse & Touch Drag Rotation (iOS & Android Touchscreen Support)
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };
    let dragRotY = 0;
    let dragRotX = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      previousPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPosition.x;
      const deltaY = e.clientY - previousPosition.y;

      dragRotY += deltaX * 0.01;
      dragRotX += deltaY * 0.005;
      dragRotX = Math.max(-0.4, Math.min(0.4, dragRotX));

      previousPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch Handlers for Mobile Phones
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousPosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousPosition.x;
      const deltaY = e.touches[0].clientY - previousPosition.y;

      dragRotY += deltaX * 0.01;
      dragRotX += deltaY * 0.005;
      dragRotX = Math.max(-0.4, Math.min(0.4, dragRotX));

      previousPosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const container = containerRef.current;
    if (interactive && container) {
      container.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);
    }

    // Animation Loop (Continuous 360 Revolving + Drag)
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Continuous 360-degree revolving rotation
      mannequinGroup.rotation.y = elapsedTime * 0.55 + dragRotY;
      mannequinGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.06 + dragRotX;

      // Orbiting particles
      particlesMesh.rotation.y = -elapsedTime * 0.12;

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
      if (container) {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('touchstart', handleTouchStart);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive, fabricColor, accentColor]);

  return (
    <div 
      ref={containerRef} 
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        ...style
      }}
    />
  );
}
