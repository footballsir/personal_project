'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ProjectCard from './components/ProjectCard';
import FeaturedProjectCard from './components/FeaturedProjectCard';
import ContactSection from './components/ContactSection';

interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  color: string;
}

const regularProjects: ProjectData[] = [
  {
    slug: 'ai-browser',
    title: 'Microsoft AI Browser',
    summary: 'Design leader vision & design',
    cover: '/images/ai-browser-cover.png',
    color: '#7F63A6'
  },
  {
    slug: 'unified-composer',
    title: 'Unified Composer',
    summary: 'Lead designer',
    cover: '/images/unified-composer-cover.png',
    color: '#4C4642'
  },
  {
    slug: 'journey',
    title: 'Journey',
    summary: 'Lead designer',
    cover: '/images/journey-cover.png',
    color: '#59422F'
  }
];

const featuredProjects: ProjectData[] = [
  {
    slug: 'copilot-labs',
    title: 'Copilot Labs',
    summary: 'I wrote real code to demo 3D in Copilot!',
    cover: '/images/copilot-labs-cover.png',
    color: '#A88C76'
  },
  {
    slug: 'copilot-image',
    title: 'Copilot Image Create',
    summary: 'Generate stunning images with AI creativity',
    cover: '/images/copilot-image-cover.png',
    color: '#EBE7E2'
  }
];

function HomeContent() {
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
  <main className="min-h-screen relative m-0 p-0 overflow-x-hidden">
      {/* Background gradient - fixed to viewport height */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      
      {/* Clouds - centered, lower z-index, 48px from top */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none z-0" style={{ top: '48px' }}>
        <Image
          src="/images/clouds.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        {/* Greeting section: 240px from top, 120px to cards */}
        <section
          className="flex flex-col items-center text-center"
          style={{ paddingTop: '240px', paddingBottom: '120px', position: 'relative' }}
        >
          {/* Decorative stickers */}
          <div
            className="absolute w-[480px] h-[480px] z-0 transition-all duration-300 ease-out opacity-50 blur-[10px] filter transform hover:opacity-100 hover:filter-none hover:scale-[0.8]"
            style={{ left: '-240px', top: '60px' }}
          >
            <Image
              src="/images/sticker1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute w-[480px] h-[480px] z-0 transition-all duration-300 ease-out opacity-50 blur-[10px] filter transform hover:opacity-100 hover:filter-none hover:scale-[0.8]"
            style={{ right: '-240px', top: '60px' }}
          >
            <Image
              src="/images/sticker2.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center" style={{ gap: '24px', position: 'relative', zIndex: 1 }}>
            {/* Title container with 8px gap */}
            <div className="flex flex-col items-center" style={{ gap: '8px' }}>
              <h1 className="text-hero" style={{ margin: 0, padding: 0 }}>Hi, I am Menghui</h1>
              <p className="text-hero-subtitle" style={{ margin: 0, padding: 0 }}>Senior design leader @ Microsoft</p>
            </div>
            
            {/* Squiggle SVG */}
            <Image
              src="/images/squiggle.svg"
              alt=""
              width={95}
              height={16}
            />
          </div>
          
          <p className="text-hero-description max-w-[720px]" style={{ marginTop: '24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            I lead a team of designers at Microsoft to reimagine Edge browser experience with AI. Exprienced design lead with 10+ years of experience with a focus on AI, before Microsoft I lead design at Bytedance at San Francisco and Shanghai.
          </p>
        </section>

        {/* Cards section with 120px gap */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '120px', marginBottom: '240px' }}>
          {regularProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => handleProjectClick(project.slug)}
            />
          ))}
        </section>

        <section className="flex flex-col items-center">
          <div className="flex flex-col items-center" style={{ marginBottom: '80px' }}>
            <h2 className="text-section-title">Creative product design</h2>
            <Image
              src="/images/squiggle.svg"
              alt=""
              width={95}
              height={16}
              style={{ marginTop: '24px', marginBottom: '24px' }}
            />
            <p className="text-base max-w-[720px]" style={{ textAlign: 'left' }}>
              I explored how AI can fundamentally transform the design process. I pioneered using prompt engineering to generate 100% AI-driven images and went beyond traditional design tools by writing code directly on product codebase, allowing teams to experience live designs instead of static mockups. These experiments bridged creativity and engineering, accelerating iteration, improving quality, and redefining how design comes to life in AI products.
            </p>
          </div>

          <div className="grid grid-cols-2 w-full max-w-[960px] mx-auto overflow-visible" style={{ gap: '40px' }}>
            {featuredProjects.map((project) => (
              <FeaturedProjectCard
                key={project.slug}
                project={project}
                onClick={() => handleProjectClick(project.slug)}
              />
            ))}
          </div>
        </section>

        {/* Clouds and About section - overlapped */}
        <div className="relative w-full h-[600px] flex items-center justify-center" style={{ marginTop: '240px', marginBottom: '80px' }}>
          {/* Clouds background */}
          <Image
            src="/images/clouds.svg"
            alt=""
            fill
            className="object-contain pointer-events-none"
          />
          
          {/* About section overlapped on clouds */}
          <section className="relative z-10 px-8">
            <div className="flex flex-col items-center w-full max-w-[960px]">
              <h2 className="text-section-title">About Menghui</h2>
              <Image
                src="/images/squiggle.svg"
                alt=""
                width={95}
                height={16}
                style={{ marginTop: '24px', marginBottom: '24px' }}
              />
              <div className="text-base max-w-[720px] space-y-4 text-left">
              <p>
                As a Senior Design Leader at Microsoft, I have the privilege of leading a talented team 
                reimagining how AI transforms the browser experience. My work sits at the intersection 
                of innovation, user experience, and cutting-edge technology.
              </p>
              <p>
                With years of experience in product design and a deep passion for creating intuitive, 
                powerful tools, I focus on making complex AI capabilities accessible and delightful for 
                millions of users worldwide.
              </p>
              <p>
                I believe great design emerges from the balance of technical possibility, user needs, 
                and creative vision. Every project is an opportunity to push boundaries while staying 
                grounded in real human experiences.
              </p>
            </div>
            </div>
          </section>
        </div>

        <ContactSection />

        <div className="h-24" />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
