'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import VideoPlaceholder from '@/app/components/VideoPlaceholder';
import Button from '@/app/components/Button';
import ContentSection from '@/app/components/ContentSection';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';
import Footer from '@/app/components/Footer';
import Loading from '@/app/components/Loading';
import { useLanguage } from '@/app/i18n/LanguageContext';

function JourneyContent() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title={t.journeyPage.header.title}
          description={t.journeyPage.header.description}
        />

        {/* AI browser release video Button */}
        <div className="flex justify-center" style={{ marginTop: '-80px', marginBottom: '80px', position: 'relative', zIndex: 30 }}>
          <Button 
            text="Microsoft release video" 
            onClick={() => window.open('https://www.youtube.com/watch?v=5fUKoF0_6jQ', '_blank')}
          />
        </div>

        {/* Hero video - Full width */}
        <VideoPlaceholder videoSrc="/videos/journey-hero.mp4" />

        {/* Section 1: Vision */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.journeyPage.vision.title}
            paragraphs={[
              {
                text: t.journeyPage.vision.p1
              }
            ]}
          />
        </section>

        {/* Video 1 - Vision */}
        <VideoPlaceholder videoSrc="/videos/journey-vision-0.mp4" />

        {/* Section 1.5: Canvas */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.journeyPage.canvas.title}
            paragraphs={[
              {
                text: t.journeyPage.canvas.p1
              }
            ]}
          />
        </section>

        {/* Video 1.5 - Canvas */}
        <VideoPlaceholder videoSrc="/videos/journey-vision.mp4" />

        {/* Section 2: Flow */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.journeyPage.flow.title}
            paragraphs={[
              {
                text: t.journeyPage.flow.p1
              }
            ]}
          />
        </section>

        {/* Video 2 - Flow */}
        <VideoPlaceholder videoSrc="/videos/journey-flow.mp4" />

        {/* Section 3: Card */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.journeyPage.card.title}
            paragraphs={[
              {
                text: t.journeyPage.card.p1
              }
            ]}
          />
        </section>

        {/* Video 3 - Card */}
        <VideoPlaceholder videoSrc="/videos/journey-card.mp4" />

        {/* Section 4: Impact */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px', gap: '40px' }}
        >
          <ContentSection
            title={t.journeyPage.impact.title}
            paragraphs={[
              {
                text: t.journeyPage.impact.p1
              }
            ]}
          />

          <Button
            icon="/images/play-icon.svg"
            text="Microsoft press release"
            onClick={() => window.open('https://www.youtube.com/watch?v=CLH8gU--YBU', '_blank')}
          />

          <div
            style={{
              width: '100vw',
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
              backgroundColor: '#F1E0BC',
              display: 'flex',
              justifyContent: 'center',
              padding: '0'
            }}
          >
            <div style={{ width: '100%', maxWidth: '960px', padding: '0 32px' }}>
              <Image
                src="/images/journey-impact.png"
                alt="Impact highlights of Edge Copilot mode"
                width={1200}
                height={720}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default function JourneyPage() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      <TopNavigation title="AI Canvas" />
      <JourneyContent />
    </Suspense>
  );
}
