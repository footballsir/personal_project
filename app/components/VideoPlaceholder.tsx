'use client';

import React from 'react';
import Image from 'next/image';
import { useStickers } from '@/app/hooks/useStickers';

interface VideoPlaceholderProps {
  videoSrc?: string;
  aspectRatio?: string;
  borderRadius?: string;
  backgroundColor?: string;
  padding?: string;
  maxWidth?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Optimized Video component
 * - Maintains aspect ratio by default (16/9)
 * - Configurable autoplay, loop, muted, controls
 * - Supports custom maxWidth and style
 * - Can add background color and padding for full-width sections
 * - Randomly adds 1-2 stickers as decorations around the video
 */
export default function VideoPlaceholder({ 
  videoSrc,
  aspectRatio = '16/9',
  borderRadius = '48px',
  backgroundColor,
  padding,
  maxWidth = '1680px',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  playsInline = true,
  style,
  className
}: VideoPlaceholderProps) {
  // Use stickers hook (limit to 1-2 stickers for video decoration)
  const { stickers } = useStickers({ count: { min: 1, max: 2 } });

  // Always create outer container to break out of parent constraints
  const outerContainerStyle: React.CSSProperties = {
    width: '100vw',
    position: 'relative',
    left: '50%',
    marginLeft: '-50vw',
    backgroundColor,
    padding,
    paddingLeft: padding || '60px',
    paddingRight: padding || '60px',
    boxSizing: 'border-box'
  };

  // Inner wrapper - constrains max width and contains stickers
  const innerWrapperStyle: React.CSSProperties = {
    maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    position: 'relative' // For sticker positioning
  };

  // Video wrapper - maintains aspect ratio
  const videoWrapperStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio,
    borderRadius,
    overflow: 'hidden',
    position: 'relative',
    ...style
  };

  if (videoSrc) {
    // Always use full-width container to break out of parent constraints
    return (
      <div style={outerContainerStyle}>
        <div style={innerWrapperStyle}>
          {/* Stickers - placed before video so they appear behind */}
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
              } as React.CSSProperties & { '--sticker-rotation': string }}
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

          {/* Video content */}
          <div style={{ ...videoWrapperStyle, position: 'relative', zIndex: 1 }} className={className}>
            <video
              src={videoSrc}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              controls={controls}
              playsInline={playsInline}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }

  // Placeholder when no video
  const placeholderStyle: React.CSSProperties = {
    ...videoWrapperStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: '#FFFFFF',
    fontSize: '17px',
    fontFamily: 'Ginto Copilot, sans-serif'
  };

  // Always use full-width container to break out of parent constraints
  return (
    <div style={outerContainerStyle}>
      <div style={innerWrapperStyle}>
        {/* Stickers - placed before placeholder so they appear behind */}
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
            } as React.CSSProperties & { '--sticker-rotation': string }}
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

        {/* Placeholder content */}
        <div style={{ ...placeholderStyle, position: 'relative', zIndex: 1 }} className={className}>
          Video placeholder
        </div>
      </div>
    </div>
  );
}
