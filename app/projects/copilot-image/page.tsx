'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import ContentSection from '@/app/components/ContentSection';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';
import Footer from '@/app/components/Footer';

function CopilotImageContent() {
  return (
  <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title="AI Image — 100% AI-Generated for Real Products"
          description="In the Copilot Image Project, I explored how prompt engineering can redefine visual creation inside product design. Every image in this project was generated entirely by AI — no stock photos, no manual illustration. By designing precise, expressive prompts, I produced high-quality visuals that were directly used across Copilot’s AI experiences, from UI imagery to storytelling and brand moments. The project demonstrated how AI can become a creative collaborator, accelerating production while maintaining a strong, human-centered aesthetic."
        />

        {/* Hero Image - Full width */}
        <div
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image
            src="/images/copilotimage-hero.png"
            alt="Copilot Image Hero"
            width={1920}
            height={1080}
            style={{
              maxWidth: '1680px',
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '60px'
            }}
          />
        </div>

        {/* Section 1: Prompt Engineering */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '0' }}
        >
          <div style={{ marginBottom: '80px' }}>
            <ContentSection
              title="Prompt Engineering"
              paragraphs={[
                {
                  text: "All AI-generated images followed a consistent visual and emotional framework:",
                  boldWords: []
                },
                {
                  text: "•\tCalm, minimalist aesthetic with matte off-white or neutral backgrounds.",
                  boldWords: []
                },
                {
                  text: "•\tSoft, directional lighting that feels warm and natural.",
                  boldWords: []
                },
                {
                  text: "•\tBalanced composition emphasizing depth, texture, and harmony.",
                  boldWords: []
                },
                {
                  text: "•\tNeutral tones with gentle warmth, avoiding neon or artificial lighting.",
                  boldWords: []
                },
                {
                  text: "•\tInspired by morning sunlight and subtle shadows for a serene, human feel.",
                  boldWords: []
                },
                {
                  text: "This guidance ensured every image felt cohesive, calm, and authentically Copilot.",
                  boldWords: []
                }
              ]}
            />
          </div>
        </section>

        {/* Prompt Engineering Image - Full width */}
        <div
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image
            src="/images/copilotimage-promptengineering.png"
            alt="Prompt Engineering"
            width={1920}
            height={1080}
            style={{
              maxWidth: '1680px',
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '60px'
            }}
          />
        </div>

        {/* Section 2: Imagery Principles */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '0' }}
        >
          <div style={{ marginBottom: '80px' }}>
            <ContentSection
              title="Imagery Principles"
              paragraphs={[
                {
                  text: "Imagery is never decorative and should always support the story being told. We avoid pictures that mirror people using technology, instead always focusing on imagery as a way to enhance real world scenarios and real world feelings."
                }
              ]}
            />
          </div>
        </section>

        {/* Imagery Principles Image - Full width */}
        <div
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image
            src="/images/copilotimage-imageryprinciples.png"
            alt="Imagery Principles"
            width={1920}
            height={1080}
            style={{
              maxWidth: '1680px',
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '60px'
            }}
          />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default function CopilotImagePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      <TopNavigation title="AI Image" />
      <CopilotImageContent />
    </Suspense>
  );
}
