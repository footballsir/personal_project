'use client';

import Image from 'next/image';
import React from 'react';

interface Paragraph {
  text: string;
  boldWords?: string[]; // Words or phrases to make bold
}

interface ContentSectionProps {
  title: string;
  paragraphs: string | Paragraph[]; // Support both simple string and array of paragraphs
  alignment?: 'left' | 'center';
  maxWidth?: string;
}

/**
 * Reusable content section component with title, squiggle decoration, and description
 * Used across multiple project detail pages
 */
export default function ContentSection({ 
  title, 
  paragraphs, 
  alignment = 'center',
  maxWidth = '720px' 
}: ContentSectionProps) {
  // Convert string to array format for consistent handling
  const paragraphArray = typeof paragraphs === 'string' 
    ? [{ text: paragraphs }] 
    : paragraphs;

  // Helper function to render text with bold words
  const renderParagraphWithBold = (paragraph: Paragraph) => {
    if (!paragraph.boldWords || paragraph.boldWords.length === 0) {
      return paragraph.text;
    }

    let result = paragraph.text;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Create a regex pattern that matches any of the bold words/phrases
    const pattern = new RegExp(
      `(${paragraph.boldWords.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
      'g'
    );

    const matches = [...result.matchAll(pattern)];
    
    matches.forEach((match, index) => {
      const matchIndex = match.index!;
      
      // Add text before the match
      if (matchIndex > lastIndex) {
        parts.push(result.substring(lastIndex, matchIndex));
      }
      
      // Add bold text
      parts.push(
        <strong key={`bold-${index}`} style={{ fontWeight: 600 }}>
          {match[0]}
        </strong>
      );
      
      lastIndex = matchIndex + match[0].length;
    });

    // Add remaining text
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }

    return parts.length > 0 ? parts : result;
  };

  return (
    <div 
      className="flex flex-col"
      style={{
        position: 'relative',
        zIndex: 2,
        alignItems: alignment === 'center' ? 'center' : 'flex-start',
        width: '100%',
        gap: '24px'
      }}
    >
      <h2 
        style={{
          fontFamily: 'Ginto Copilot Nord, sans-serif',
          fontWeight: 700,
          fontSize: '36px',
          lineHeight: '1.33em',
          letterSpacing: '-0.02em',
          color: '#33607D',
          margin: 0,
          textAlign: alignment,
          maxWidth: '720px',
          width: '100%'
        }}
      >
        {title}
      </h2>
      
      <Image
        src="/images/squiggle.svg"
        alt=""
        width={95}
        height={16}
      />
      
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth,
          width: '100%'
        }}
      >
        {paragraphArray.map((paragraph, index) => (
          <p 
            key={index}
            className="text-base"
            style={{
              textAlign: 'left',
              margin: 0
            }}
          >
            {renderParagraphWithBold(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
}
