'use client';

import { useState, useEffect } from 'react';

export interface StickerPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface Sticker {
  src: string;
  position: StickerPosition;
  rotation?: number;
}

export type StickerEdge = 'left' | 'right' | 'top' | 'bottom';

interface UseStickerOptions {
  count?: { min: number; max: number };
  size?: number;
  overlapThreshold?: number;
  containerWidth?: number;
  containerHeight?: number;
  edges?: StickerEdge[];
}

/**
 * Generate random stickers around a container with balanced edge placement
 */
function generateStickers(options: UseStickerOptions = {}): Sticker[] {
  const {
    count = { min: 1, max: 3 },
    size = 192,
    containerWidth = 1920,
    containerHeight = 1080,
    edges
  } = options;

  const stickerCount = Math.floor(Math.random() * (count.max - count.min + 1)) + count.min;
  const stickers: Sticker[] = [];

  const baseEdges: StickerEdge[] = edges && edges.length ? edges : ['left', 'right', 'top', 'bottom'];
  const shuffleEdges = (list: StickerEdge[]) => [...list].sort(() => Math.random() - 0.5);

  const edgeSequence: StickerEdge[] = (() => {
    if (stickerCount <= 0) {
      return [];
    }

    if (stickerCount <= baseEdges.length) {
      return shuffleEdges(baseEdges).slice(0, stickerCount);
    }

    const sequence: StickerEdge[] = [];
    let remaining = stickerCount;

    while (remaining >= baseEdges.length) {
      sequence.push(...shuffleEdges(baseEdges));
      remaining -= baseEdges.length;
    }

    if (remaining > 0) {
      sequence.push(...shuffleEdges(baseEdges).slice(0, remaining));
    }

    return sequence;
  })();

  for (let i = 0; i < stickerCount; i++) {
    const stickerNumber = Math.floor(Math.random() * 39) + 1; // 1-39
    const src = `/images/stickers/${stickerNumber}.png`;

    const edge = edgeSequence[i] ?? baseEdges[i % baseEdges.length];
    const safeHeight = containerHeight || 1;
    const safeWidth = containerWidth || 1;

    let position: StickerPosition;

    if (edge === 'left' || edge === 'right') {
      const minY = 48;
      const maxY = Math.max(minY, containerHeight - 100 - size);
      const span = Math.max(0, maxY - minY);
      const absoluteY = minY + Math.random() * span;
      const percentage = (absoluteY / safeHeight) * 100;
      const offset = absoluteY - (safeHeight * percentage / 100);

      position = {
        [edge]: '-144px',
        top: `calc(${percentage}% + ${offset}px)`
      };
    } else {
      const minX = 48;
      const maxX = Math.max(minX, containerWidth - 100 - size);
      const span = Math.max(0, maxX - minX);
      const absoluteX = minX + Math.random() * span;
      const percentage = (absoluteX / safeWidth) * 100;
      const offset = absoluteX - (safeWidth * percentage / 100);

      position = {
        [edge]: '-144px',
        left: `calc(${percentage}% + ${offset}px)`
      };
    }

    const rotation = Math.random() * 60 - 30; // -30 to +30 degrees
    stickers.push({ src, position, rotation });
  }

  return stickers;
}

/**
 * Hook to generate stickers only on client side to avoid hydration mismatch
 */
export function useStickers(options?: UseStickerOptions) {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStickers(generateStickers(options));
  }, []);

  return { stickers, mounted };
}
