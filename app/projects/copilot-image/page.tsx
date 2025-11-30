'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import ContentSection from '@/app/components/ContentSection';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';
import Footer from '@/app/components/Footer';
import Loading from '@/app/components/Loading';
import { useLanguage } from '@/app/i18n/LanguageContext';

function CopilotImageContent() {
  const { t } = useLanguage();

  return (
  <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title={t.copilotImagePage.header.title}
          description={t.copilotImagePage.header.description}
          titleColor="#311F10"
        />

        {/* Hero Image - Full width */}
        <div
          className="video-outer-container"
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '80px',
            paddingRight: '80px',
            boxSizing: 'border-box'
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
              borderRadius: '40px'
            }}
          />
        </div>

        {/* Section 0: Imagery Principles */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '0' }}
        >
          <div style={{ marginBottom: '80px' }}>
            <ContentSection
              title={t.copilotImagePage.imageryPrinciples0.title}
              titleColor="#311F10"
              paragraphs={[
                {
                  text: t.copilotImagePage.imageryPrinciples0.p1
                }
              ]}
            />
          </div>
        </section>

        {/* Imagery Principles Image - Full width */}
        <div
          className="video-outer-container"
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '80px',
            paddingRight: '80px',
            boxSizing: 'border-box'
          }}
        >
          <Image
            src="/images/copilotimage-imageryprinciples-0.png"
            alt="Imagery Principles"
            width={1920}
            height={1080}
            style={{
              maxWidth: '1680px',
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '40px'
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
              title={t.copilotImagePage.promptEngineering.title}
              titleColor="#311F10"
              paragraphs={[
                {
                  text: t.copilotImagePage.promptEngineering.p1,
                  boldWords: []
                },
                {
                  text: t.copilotImagePage.promptEngineering.p2,
                  boldWords: []
                },
                {
                  text: t.copilotImagePage.promptEngineering.p3,
                  boldWords: []
                },
                {
                  text: t.copilotImagePage.promptEngineering.p4,
                  boldWords: []
                },
                {
                  text: t.copilotImagePage.promptEngineering.p5,
                  boldWords: []
                },
                {
                  text: t.copilotImagePage.promptEngineering.p6,
                  boldWords: []
                },
                {
                  text: t.copilotImagePage.promptEngineering.p7,
                  boldWords: []
                }
              ]}
            />
          </div>
        </section>

        {/* Prompt Engineering Image - Full width */}
        <div
          className="video-outer-container"
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '80px',
            paddingRight: '80px',
            boxSizing: 'border-box'
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
              borderRadius: '40px'
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
              title={t.copilotImagePage.imageryPrinciples.title}
              titleColor="#311F10"
              paragraphs={[
                {
                  text: t.copilotImagePage.imageryPrinciples.p1
                }
              ]}
            />
          </div>
        </section>

        {/* Imagery Principles Image - Full width */}
        <div
          className="video-outer-container"
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '80px',
            paddingRight: '80px',
            boxSizing: 'border-box'
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
              borderRadius: '40px'
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
    <Suspense fallback={<Loading />}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen -z-10" style={{ backgroundColor: '#E7CAAD' }} />
      <TopNavigation title="AI Image" />
      <CopilotImageContent />
    </Suspense>
  );
}
