'use client';

import { useEffect, useRef } from 'react';
import { 
  Engine, 
  Scene, 
  SceneLoader, 
  Vector3, 
  Color4, 
  ArcRotateCamera, 
  HDRCubeTexture,
  AnimationGroup
} from '@babylonjs/core';
import '@babylonjs/loaders/glTF';

export default function HeroModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const introAnimRef = useRef<AnimationGroup | null>(null);
  const idleAnimRef = useRef<AnimationGroup | null>(null);
  const curiousAnimRef = useRef<AnimationGroup | null>(null);
  const reactionAnimsRef = useRef<AnimationGroup[]>([]);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Engine and Scene
    const engine = new Engine(canvasRef.current, true, { 
      preserveDrawingBuffer: true, 
      stencil: true,
      alpha: true 
    });
    
    // Handle Retina/High-DPI screens for sharper rendering
    // This effectively renders at higher resolution and scales down
    engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
    
    const scene = new Scene(engine);

    // Transparent background
    scene.clearColor = new Color4(0, 0, 0, 0);

    // Camera setup - Fixed position, no controls
    const camera = new ArcRotateCamera(
      "camera", 
      Math.PI / 2, // alpha (horizontal)
      Math.PI / 2, // beta (vertical) - level with object
      5,           // radius
      new Vector3(0, 0, 0), // target
      scene
    );
    // Adjust camera position to match previous view
    camera.setPosition(new Vector3(0, 0, 6));
    
    // We do NOT attach controls to disable interaction
    // camera.attachControl(canvasRef.current, true);

    // Environment (HDR) - This is key for the "Sandbox" look
    const hdrTexture = new HDRCubeTexture(
      "/potsdamer_platz_1k.hdr", 
      scene, 
      128, 
      false, 
      true, 
      false, 
      true
    );
    scene.environmentTexture = hdrTexture;
    scene.environmentIntensity = 1.0; // Adjust intensity if needed

    // Load the GLB Model
    SceneLoader.Append("/", "face_rig_16_full_opt_4.glb", scene, function (scene) {
      // Find the root mesh of the model
      // Usually the first mesh or __root__
      const rootMesh = scene.meshes[0];
      
      if (rootMesh) {
        // Adjust position and scale to match previous Three.js setup
        rootMesh.scaling = new Vector3(14, 14, 14);
        rootMesh.position = new Vector3(0, -0.5, 0);
        
        // Ensure rotation is correct (Babylon uses Left-Handed system, GLTF is Right-Handed)
        // SceneLoader usually handles this, but sometimes we need to tweak
        rootMesh.rotationQuaternion = null; // Reset quaternion if we want to use Euler angles
        rootMesh.rotation = new Vector3(0, 0, 0); // Face front
      }

      // Play Animations Sequence
      const introAnim = scene.getAnimationGroupByName("Intro_FlyIn");
      const idleAnim = scene.getAnimationGroupByName("Idle_01_Basic");
      const curiousAnim = scene.getAnimationGroupByName("Idle_04_Curious");

      // Load reaction animations
      const reactionNames = [
        "Interactive_01_Jiggle",
        "Reaction_Spin_Right",
        "Reaction_CatShape",
        // "Reaction_Shake",
        "Reaction_HeartShape",
        "Reaction_Spin_Clockwise"
      ];
      reactionAnimsRef.current = reactionNames
        .map(name => scene.getAnimationGroupByName(name))
        .filter((anim): anim is AnimationGroup => anim !== null);

      // Store refs for interaction
      introAnimRef.current = introAnim;
      idleAnimRef.current = idleAnim;
      curiousAnimRef.current = curiousAnim;

      if (introAnim && idleAnim) {
        // Stop all animations initially
        scene.animationGroups.forEach(ag => ag.stop());
        
        // Play intro once (loop = false)
        introAnim.play(false);
        
        // When intro ends, play idle looping ONLY if not hovering
        introAnim.onAnimationGroupEndObservable.addOnce(() => {
          if (isHoveringRef.current) {
            curiousAnim?.play(true);
          } else {
            idleAnim.play(true);
          }
        });
      } else if (scene.animationGroups.length > 0) {
        // Fallback: just play the first animation if specific ones aren't found
        scene.animationGroups[0].play(true);
      }
    });

    // Render Loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Resize Handler
    const resize = () => {
      engine.resize();
    };
    window.addEventListener("resize", resize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      scene.dispose();
      engine.dispose();
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;

    // If intro is playing, let it finish
    if (introAnimRef.current?.isPlaying) return;

    // If curious is already playing, let it continue (don't restart)
    if (curiousAnimRef.current?.isPlaying) return;

    // If a reaction is playing, let it finish (it will transition to curious automatically)
    const isReactionPlaying = reactionAnimsRef.current.some(anim => anim.isPlaying);
    if (isReactionPlaying) return;

    if (curiousAnimRef.current) {
      // Stop others
      if (introAnimRef.current) introAnimRef.current.stop();
      if (idleAnimRef.current) idleAnimRef.current.stop();
      
      // Play curious
      curiousAnimRef.current.play(true);
    }
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    
    // If curious is playing, wait for loop to finish before switching
    if (curiousAnimRef.current?.isPlaying) {
      curiousAnimRef.current.onAnimationLoopObservable.addOnce(() => {
        // Only switch if user hasn't come back
        if (!isHoveringRef.current) {
          curiousAnimRef.current?.stop();
          idleAnimRef.current?.play(true);
        }
      });
    } else if (!reactionAnimsRef.current.some(anim => anim.isPlaying)) {
      // If not curious and not reacting (e.g. was idle or intro), ensure we are idle
      // (Unless intro is playing? But usually we want to respect intro. 
      // If intro is playing, we shouldn't force idle. 
      // But if we were idle, we stay idle.)
      
      // Actually, if we are not playing curious, we might be playing idle.
      // If we are playing idle, we do nothing.
      // If we are playing intro, we do nothing.
      // So we only need to handle the case where we might have been in a state that needs transition?
      // No, if curious is NOT playing, we are likely already in a safe state or a reaction state.
      // So we don't need to force anything here.
    }
  };

  const handleClick = () => {
    const reactions = reactionAnimsRef.current;
    if (reactions.length === 0) return;

    // Pick random reaction
    const randomIndex = Math.floor(Math.random() * reactions.length);
    const randomReaction = reactions[randomIndex];

    // Stop all other animations
    if (introAnimRef.current) introAnimRef.current.stop();
    if (idleAnimRef.current) idleAnimRef.current.stop();
    if (curiousAnimRef.current) curiousAnimRef.current.stop();
    reactions.forEach(anim => anim.stop());

    // Play reaction
    randomReaction.play(false);

    // On end, return to state
    randomReaction.onAnimationGroupEndObservable.addOnce(() => {
      if (isHoveringRef.current) {
        curiousAnimRef.current?.play(true);
      } else {
        idleAnimRef.current?.play(true);
      }
    });
  };

  return (
    <div 
      className="w-full h-[360px] relative z-10 flex justify-center items-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="outline-none" 
        style={{ width: '400px', height: '360px' }}
      />
    </div>
  );
}
