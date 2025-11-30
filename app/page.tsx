'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ProjectCard from './components/ProjectCard';
import FeaturedProjectCard from './components/FeaturedProjectCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { useLanguage } from '@/app/i18n/LanguageContext';
import TopNavigation from '@/app/components/TopNavigation';

const HeroModel = dynamic(() => import('./components/HeroModel'), { 
  ssr: false,
  loading: () => <div className="w-full h-[360px] relative z-10" /> // Placeholder to prevent layout shift
});

interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  color: string;
}

function HomeContent() {
  const router = useRouter();
  const { t } = useLanguage();

  // Animation constants
  const INITIAL_DELAY = 400;
  const INCREMENTAL_DELAY = 200;

  const regularProjects: ProjectData[] = [
    {
      slug: 'ai-browser',
      title: "Microsoft AI Browser",
      summary: "Design leader - vision & design",
      cover: '/images/ai-browser-cover.png',
      color: '#7F63A6'
    },
    {
      slug: 'unified-composer',
      title: "Unified AI Composer",
      summary: "Lead designer",
      cover: '/images/unified-composer-cover.png',
      color: '#4C4642'
    },
    {
      slug: 'journey',
      title: "AI Canvas",
      summary: "Lead designer",
      cover: '/images/journey-cover.png',
      color: '#59422F'
    }
  ];

  const featuredProjects: ProjectData[] = [
    {
      slug: 'copilot-labs',
      title: "Copilot Labs",
      summary: "I wrote real code to demo 3D in Copilot!",
      cover: '/images/copilot-labs-cover.png',
      color: '#A88C76'
    },
    {
      slug: 'copilot-image',
      title: "Copilot Image Create",
      summary: "Generate stunning images with AI creativity",
      cover: '/images/copilot-image-cover.png',
      color: '#EBE7E2'
    }
  ];

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
  <main className="min-h-screen relative m-0 p-0 overflow-x-hidden">
      <TopNavigation title="Menghui Hu" showBackButton={false} />
      {/* Background gradient - fixed to viewport height */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        {/* Greeting section: 40px from top, 120px to cards */}
        <section
          className="flex flex-col items-center text-center"
          style={{ paddingTop: '40px', paddingBottom: '120px', position: 'relative' }}
        >
          {/* Decorative stickers */}
          <div
            className="absolute w-[320px] h-[320px] z-0 transition-all duration-300 ease-out opacity-0 transform"
            style={{ left: '-200px', top: '-120px' }}
          >
            <Image
              src="/images/sticker1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute w-[480px] h-[480px] z-0 transition-all duration-300 ease-out opacity-100 transform"
            style={{ right: '-240px', top: '-120px' }}
          >
            <Image
              src="/images/sticker2.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center" style={{ gap: '24px', position: 'relative', zIndex: 1 }}>
            {/* 3D Model */}
            <div className="w-full max-w-[800px] -mb-20">
              <HeroModel />
            </div>

            {/* Title container with 8px gap */}
            <div 
              className="flex flex-col items-center animate-fade-in-up" 
              style={{ 
                gap: '8px', 
                marginTop: '16px',
                animationDelay: `${INITIAL_DELAY}ms`
              }}
            >
              <h1 className="text-hero" style={{ margin: 0, padding: 0 }}>Hi, I am Menghui<br />Design leader @ Microsoft</h1>
              {/* <p className="text-hero-subtitle" style={{ margin: 0, padding: 0 }}>Senior design leader @ Microsoft</p> */}
            </div>
            
            {/* Squiggle SVG */}
            <Image
              src="/images/squiggle.svg"
              alt=""
              width={95}
              height={16}
              className="animate-fade-in-up"
              style={{ animationDelay: `${INITIAL_DELAY + INCREMENTAL_DELAY}ms` }}
            />
          </div>
          
          <p 
            className="text-hero-description max-w-[720px] animate-fade-in-up" 
            style={{ 
              marginTop: '24px', 
              textAlign: 'center', 
              position: 'relative', 
              zIndex: 1,
              animationDelay: `${INITIAL_DELAY + INCREMENTAL_DELAY * 2}ms`
            }}
          >
            {t.home.description}
          </p>
        </section>

        {/* Cards section with 120px gap */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '120px', marginBottom: '240px' }}>
          {regularProjects.map((project, index) => (
            <div 
              key={project.slug} 
              className="w-full animate-fade-in-up" 
              style={{ 
                animationDelay: `${INITIAL_DELAY + INCREMENTAL_DELAY * (3 + index)}ms` 
              }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project.slug)}
              />
            </div>
          ))}
        </section>

        <section className="flex flex-col items-center">
          <div className="flex flex-col items-center" style={{ marginBottom: '80px' }}>
            <h2 className="text-section-title">{t.home.creativeTitle}</h2>
            <Image
              src="/images/squiggle.svg"
              alt=""
              width={95}
              height={16}
              style={{ marginTop: '24px', marginBottom: '24px' }}
            />
            <p className="text-base max-w-[720px]" style={{ textAlign: 'left' }}>
              {t.home.creativeDescription}
            </p>
          </div>

          <div 
            className="featured-projects-grid w-full max-w-[960px] mx-auto overflow-visible" 
            style={{ gap: '40px' }}
          >
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
              <h2 className="text-section-title">{t.home.aboutTitle}</h2>
              <Image
                src="/images/squiggle.svg"
                alt=""
                width={95}
                height={16}
                style={{ marginTop: '24px', marginBottom: '24px' }}
              />
              <div className="text-base max-w-[720px] space-y-4 text-left">
              <p>
                {t.home.aboutP1}
              </p>
              <p>
                {t.home.aboutP2}
              </p>
              <p>
                {t.home.aboutP3}
              </p>
            </div>
            </div>
          </section>
        </div>

        <ContactSection />

        <Footer />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  );
}
