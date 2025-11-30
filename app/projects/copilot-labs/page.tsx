'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button';
import VideoPlaceholder from '@/app/components/VideoPlaceholder';
import ContentSection from '@/app/components/ContentSection';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';
import Footer from '@/app/components/Footer';
import Loading from '@/app/components/Loading';
import { useLanguage } from '@/app/i18n/LanguageContext';

function CopilotLabsContent() {
  const { t } = useLanguage();

  return (
  <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title={t.copilotLabsPage.header.title}
          description={t.copilotLabsPage.header.description}
          titleColor="#311F10"
          showSticker={false}
        />

        {/* Try Copilot 3D Button */}
        <div className="flex justify-center" style={{ marginTop: '-80px', marginBottom: '80px', position: 'relative', zIndex: 30 }}>
          <Button 
            text="Try Copilot 3D" 
            onClick={() => window.open('https://copilot.microsoft.com/labs/experiments/3d-generations', '_blank')}
          />
        </div>

        {/* Hero Video */}
        <VideoPlaceholder
          videoSrc="/videos/copilot3d-hero.mp4"
          maxWidth="1680px"
          borderRadius="40px"
          backgroundColor="transparent"
          aspectRatio="16/9"
          autoPlay
          loop
          muted
          controls={false}
          showStickers={false}
        />

        {/* Section 1: I code to prototype on Copilot labs */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <div style={{ marginBottom: '80px' }}>
            <ContentSection
              title={t.copilotLabsPage.codeToPrototype.title}
              titleColor="#311F10"
              paragraphs={[
                {
                  text: t.copilotLabsPage.codeToPrototype.p1
                }
              ]}
            />
          </div>

          {/* Image */}
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <Image
              src="/images/copilotlab-vibe.png"
              alt="I code to prototype on Copilot labs"
              width={1200}
              height={844}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '48px' }}
            />
          </div>
        </section>

        {/* Section 2: 3D vibe coding demo on real product */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.copilotLabsPage.codingDemo.title}
            titleColor="#311F10"
            paragraphs={[
              {
                text: t.copilotLabsPage.codingDemo.p1
              }
            ]}
          />
        </section>

        {/* Video - 3D vibe coding demo */}
        <VideoPlaceholder videoSrc="/videos/copilot3d-vibe.mp4" showStickers={false} />

        <Footer />
      </div>
    </main>
  );
}

export default function CopilotLabsPage() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen -z-10">
        <Image
          src="/images/copilot3d-background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <TopNavigation title="Copilot Labs" />
      <CopilotLabsContent />
    </Suspense>
  );
}
