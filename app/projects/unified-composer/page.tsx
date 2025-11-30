'use client';

import { Suspense } from 'react';
import VideoPlaceholder from '@/app/components/VideoPlaceholder';
import Button from '@/app/components/Button';
import ContentSection from '@/app/components/ContentSection';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Loading from '@/app/components/Loading';
import { useLanguage } from '@/app/i18n/LanguageContext';

function UnifiedComposerContent() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title={t.unifiedComposerPage.header.title}
          description={t.unifiedComposerPage.header.description}
        />

        {/* AI browser release video Button */}
        <div className="flex justify-center" style={{ marginTop: '-80px', marginBottom: '80px', position: 'relative', zIndex: 30 }}>
          <Button 
            text="Microsoft release video" 
            onClick={() => window.open('https://www.youtube.com/watch?v=5fUKoF0_6jQ', '_blank')}
          />
        </div>

        {/* Hero video - Full width */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-uc.mp4" />

        {/* Section 1: Side Pane */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.unifiedComposerPage.sidepane.title}
            paragraphs={[
              {
                text: t.unifiedComposerPage.sidepane.p1
              }
            ]}
          />
        </section>

        {/* Video 1 - Side Pane */}
        <VideoPlaceholder videoSrc="/videos/uc-sidepane.mp4" />

        {/* Section 2: NTP */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.unifiedComposerPage.ntp.title}
            paragraphs={[
              {
                text: t.unifiedComposerPage.ntp.p1
              }
            ]}
          />
        </section>

        {/* Video 2 - NTP */}
        <VideoPlaceholder videoSrc="/videos/uc-ntp.mp4" />

        {/* Vision section */}
        {/* <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.vision.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.vision.p1
              }
            ]}
          />
        </section> */}

        {/* Video block - Vision */}
        {/* <VideoPlaceholder videoSrc="/videos/airbrowser-vision.mov" /> */}

        {/* Section 3: Feeds */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.unifiedComposerPage.feeds.title}
            paragraphs={[
              {
                text: t.unifiedComposerPage.feeds.p1
              }
            ]}
          />
        </section>

        {/* Video 3 - Feeds */}
        <VideoPlaceholder videoSrc="/videos/uc-feeds.mp4" />

        {/* Section 4: Background */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.unifiedComposerPage.background.title}
            paragraphs={[
              {
                text: t.unifiedComposerPage.background.p1
              }
            ]}
          />
        </section>

        {/* Video 4 - Background */}
        <VideoPlaceholder videoSrc="/videos/uc-background.mp4" />

        {/* Section 5: Impact */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px', gap: '40px' }}
        >
          <ContentSection
            title={t.unifiedComposerPage.impact.title}
            paragraphs={[
              {
                text: t.unifiedComposerPage.impact.p1
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
                src="/images/uc-impact.png"
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

export default function UnifiedComposerPage() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      <TopNavigation title="Unified AI Composer" />
      <UnifiedComposerContent />
    </Suspense>
  );
}
