# Apple-Inspired 3D MacBook Experience

An interactive, Apple-inspired product experience built with **React, TypeScript, Three.js, React Three Fiber, and GSAP**.

This project explores how 3D models, scroll-based animations, responsive layouts, and modern frontend techniques can be combined to create an immersive product website similar to Apple's product pages.

## 🚀 Overview

The project features interactive MacBook 3D models rendered directly in the browser using **Three.js and React Three Fiber**. Users can interact with the models while scrolling through different sections of the page, with **GSAP and ScrollTrigger** controlling smooth animations and transitions.

The project also demonstrates how to integrate optimized `.glb` 3D assets into a React/TypeScript application and manipulate their materials dynamically.

## ✨ Features

- Interactive 3D MacBook models using React Three Fiber
- GLB/GLTF model integration with `@react-three/drei`
- Dynamically typed 3D model nodes and materials with TypeScript
- Interactive model controls with `PresentationControls`
- Scroll-based animations using GSAP and ScrollTrigger
- Smooth image positioning and transitions
- Responsive behavior for desktop and mobile devices
- Dynamic MacBook color/material changes
- Reusable React components
- Responsive media queries
- Custom animations and transitions
- Optimized 3D assets using `gltfjsx`

## 🛠️ Technologies

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### 3D

- Three.js
- React Three Fiber
- React Three Drei
- GLTF / GLB

### Animation

- GSAP
- GSAP ScrollTrigger
- `@gsap/react`

### Utilities

- React Responsive

## 🎨 3D Model Integration

The MacBook models were imported as `.glb` assets and converted into React components using **gltfjsx**.

The generated model components expose individual Three.js meshes and materials, allowing the application to manipulate parts of the model programmatically.

For example, the model can be loaded with:

```tsx
const { nodes, materials, scene } = useGLTF(
  "/models/macbook-14-transformed.glb",
);
```

The project also uses TypeScript definitions for the generated GLTF nodes and materials to provide better type safety when working with the 3D model.

## 🎬 GSAP Animations

GSAP is used to create scroll-driven animations throughout the experience.

`ScrollTrigger` controls when animations begin and end based on the user's scroll position.

Example:

```tsx
gsap.timeline({
  scrollTrigger: {
    trigger: sectionEl,
    start: "top bottom",
    end: "center center",
    scrub: 1,
  },
});
```

This allows elements to smoothly transition between their initial and final positions as the user scrolls.

## 📱 Responsive Design

The experience adapts to different screen sizes using responsive React logic.

For example:

```tsx
const isMobile = useMediaQuery({
  query: "(max-width: 1024px)",
});
```

This allows certain animations and 3D behaviors to be adjusted or disabled on smaller devices when necessary for usability and performance.

## 🎯 What I Learned

This project provided hands-on experience with:

- Integrating Three.js into a React application
- Working with React Three Fiber
- Loading and manipulating GLTF/GLB models
- Typing generated Three.js models with TypeScript
- Working with Three.js scenes, meshes, materials, and groups
- Using Drei's `PresentationControls`
- Creating scroll-based animations with GSAP
- Working with GSAP `ScrollTrigger`
- Creating reusable animation timelines
- Handling responsive 3D experiences
- Managing complex animation state
- Combining DOM animations with WebGL/3D content
- Optimizing and structuring 3D assets for the web

## 📌 Purpose

This project was created as a practical exploration of **3D web development and advanced frontend animation**.

The goal was to understand how modern technologies such as **React, TypeScript, Three.js, and GSAP** can work together to build visually rich and interactive web experiences.

## 🚧 Status

This project is currently a work in progress as additional animations, interactions, and performance improvements are being explored.

## 📄 License

This project is for educational and portfolio purposes.

The MacBook 3D model was sourced from Sketchfab and remains subject to its original creator's license.
