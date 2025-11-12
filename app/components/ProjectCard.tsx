'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { useStickers } from '@/app/hooks/useStickers';
import type { StickerEdge } from '@/app/hooks/useStickers';

interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  color: string;
}

interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const baseConfig: {
    count: { min: number; max: number };
    size: number;
    containerWidth: number;
    containerHeight: number;
    edges: StickerEdge[];
  } = {
    count: { min: 1, max: 1 },
    size: 192,
    containerWidth: 960,
    containerHeight: 576,
    edges: ['left', 'right'] as StickerEdge[]
  };

  let stickersConfig = baseConfig;

  if (project.slug === 'ai-browser') {
    stickersConfig = {
      ...baseConfig,
      count: { min: 2, max: 2 },
      edges: ['left', 'right'] as StickerEdge[]
    };
  } else if (project.slug === 'unified-composer') {
    stickersConfig = {
      ...baseConfig,
      count: { min: 1, max: 1 },
      edges: ['left'] as StickerEdge[]
    };
  } else if (project.slug === 'journey') {
    stickersConfig = {
      ...baseConfig,
      count: { min: 2, max: 2 },
      edges: ['right', 'bottom'] as StickerEdge[]
    };
  }

  // Use stickers hook for project card (960x576)
  const { stickers } = useStickers(stickersConfig);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '960px', margin: '0 auto' }}>
      {/* Stickers - positioned around the card as background decoration */}
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className="transition-transform duration-300 [transform:rotate(var(--sticker-rotation))] hover:[transform:rotate(var(--sticker-rotation))_scale(1.2)]"
          style={{
            position: 'absolute',
            width: '192px',
            height: '192px',
            pointerEvents: 'auto',
            zIndex: 0,
            ...sticker.position,
            '--sticker-rotation': `${sticker.rotation ?? 0}deg`
          } as CSSProperties & { '--sticker-rotation': string }}
        >
          <Image
            src={sticker.src}
            alt=""
            width={192}
            height={192}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ))}

      {/* Card content */}
      <div
        className="card-base no-hover project-card group cursor-pointer relative w-full h-[576px] overflow-hidden"
        style={{ 
          backgroundColor: project.color, 
          paddingLeft: '60px', 
          paddingRight: '60px', 
          paddingTop: '48px', 
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1
        }}
        onClick={onClick}
      >
        {project.summary && (
          <div
            className="pointer-events-none absolute left-1/2 flex w-full max-w-[720px] -translate-x-1/2 flex-col items-center gap-2 px-4 text-center transition-all duration-300 ease-out opacity-0 -translate-y-6 group-hover:translate-y-0 group-hover:opacity-100"
            style={{ top: '48px' }}
          >
            <p className="card-hover-text" style={{ margin: 0 }}>
              {project.summary}
            </p>
          </div>
        )}

  <div className="flex h-full w-full flex-col items-center transition-transform duration-300 ease-out group-hover:translate-y-[52px] group-hover:max-[960px]:translate-y-[28px]">
          {/* Title - fills width, text centered, no bottom spacing */}
          <h3 className="text-card-title w-full text-center" style={{ marginBottom: '32px', paddingBottom: 0 }}>
            {project.title}
          </h3>

          {/* Image container - fills remaining space */}
          {project.cover && (
            <div className="relative w-full flex-1 transition-transform duration-300 ease-out" style={{ borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
              <Image
                src={project.cover}
                alt={project.title}
                width={840}
                height={0}
                className="w-full h-auto"
                style={{ borderRadius: '8px 8px 0 0' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 840px"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
