'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button';
import ContentSection from '@/app/components/ContentSection';
import VideoPlaceholder from '@/app/components/VideoPlaceholder';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';
import Footer from '@/app/components/Footer';
import Loading from '@/app/components/Loading';
import { useLanguage } from '@/app/i18n/LanguageContext';

function AIBrowserContent() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title={t.aiBrowserPage.header.title}
          description={t.aiBrowserPage.header.description}
        />

        {/* Microsoft Edge AI browser Button */}
        <div className="flex justify-center" style={{ marginTop: '-80px', marginBottom: '80px', position: 'relative', zIndex: 30 }}>
          <Button 
            text="Microsoft Edge AI browser" 
            onClick={() => window.open('https://www.microsoft.com/en-us/edge/copilot-mode?form=MG0AWI&cs=1918255293', '_blank')}
          />
        </div>

        {/* Video block 1 - Full width */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-hero.mp4" />

        {/* Why AI browser section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          {/* Title + Squiggle + Description */}
          <div style={{ marginBottom: '80px' }}>
            <ContentSection
              title={t.aiBrowserPage.whyAiBrowser.title}
              paragraphs={[
                {
                  text: t.aiBrowserPage.whyAiBrowser.p1
                }
              ]}
            />
          </div>

          {/* Why AI browser image */}
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <Image
              src="/images/why_ai_browser.png"
              alt="Why AI browser"
              width={1200}
              height={844}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        {/* HMW section with cloud2 background and full-width image */}
        <div
          className="relative"
          style={{
            marginTop: '240px',
            marginBottom: '80px'
          }}
        >
          {/* Cloud2 background */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '0px',
              transform: 'translateX(-50%)',
              width: '720px',
              height: '800px',
              zIndex: 0
            }}
          >
            <Image
              src="/images/clouds_2.svg"
              alt=""
              width={720}
              height={800}
              style={{ display: 'block' }}
            />
          </div>

          {/* Content centered on background */}
          <div className="flex flex-col items-center" style={{ position: 'relative', zIndex: 1, paddingTop: '309px' }}>
            <ContentSection
              title={t.aiBrowserPage.hmw.title}
              paragraphs={[
                {
                  text: t.aiBrowserPage.hmw.p1
                },
                {
                  text: t.aiBrowserPage.hmw.p2,
                  boldWords: ["4 designers, 6 days of sprinting", "4 位设计师，6 天的冲刺"]
                }
              ]}
            />
          </div>

          {/* Full-width HMW image */}
          <div
            className="video-outer-container"
            style={{
              position: 'relative',
              width: '100vw',
              left: '50%',
              marginLeft: '-50vw',
              marginTop: '80px',
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: '80px',
              paddingRight: '80px',
              boxSizing: 'border-box'
            }}
          >
            <Image
              src="/images/hmw.png"
              alt="How might we explorations"
              width={1680}
              height={900}
              style={{ width: '100%', maxWidth: '1680px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* A complete rethink section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.rethink.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.rethink.p1
              },
              {
                text: t.aiBrowserPage.rethink.p2,
                boldWords: [t.aiBrowserPage.rethink.p2]
              },
              {
                text: t.aiBrowserPage.rethink.p3,
                boldWords: ["2. AI transforms from reactive to proactive", "2. AI 从被动转变为主动"]
              },
              {
                text: t.aiBrowserPage.rethink.p4,
                boldWords: ["3. AI should act as the new OS layer for information", "3. AI 应该充当信息的新操作系统层"]
              },
              {
                text: t.aiBrowserPage.rethink.p5
              }
            ]}
          />
        </section>

        {/* Video block 2 - Framework */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-framework.mp4" />

        {/* Unified AI Composer section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.unifiedComposer.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.unifiedComposer.p1
              }
            ]}
          />
        </section>

        {/* Video block 3 - Unified AI Composer */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-uc.mp4" />

        {/* Journey section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.journey.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.journey.p1
              }
            ]}
          />
        </section>

        {/* Video block 4 - Journey */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-journey.mp4" />

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

        {/* Content remix section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.contentRemix.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.contentRemix.p1
              }
            ]}
          />
        </section>

        {/* Video block 5 - Content Remix */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-content.mp4" />

        {/* Mobile section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.mobile.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.mobile.p1
              }
            ]}
          />
        </section>

        {/* Mobile Image - Full width style like videos */}
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
          <div 
            style={{ 
              width: '100%', 
              maxWidth: '1680px', 
              position: 'relative',
              borderRadius: '40px',
              overflow: 'hidden'
            }} 
            className="video-wrapper"
          >
            <Image
              src="/images/aibrowser-mobile.png"
              alt="AI browser on mobile"
              width={1680}
              height={945}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>

        {/* User story section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.userStory.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.userStory.p1
              }
            ]}
            alignment="center"
          />
        </section>

        {/* UXR Summary video - special layout with controls */}
        <VideoPlaceholder
          videoSrc="/videos/uxr_summary.mp4"
          autoPlay={false}
          muted={false}
          controls={true}
          maxWidth="1200px"
          borderRadius="40px"
          poster="/images/aibrowser-uservideocover.png"
        />

        {/* Impact of Copilot mode section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px', gap: '40px' }}
        >
          <ContentSection
            title={t.aiBrowserPage.impact.title}
            paragraphs={[
              {
                text: t.aiBrowserPage.impact.p1
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
                src="/images/aibrowser-impact.png"
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

export default function AIBrowserPage() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      <TopNavigation title="AI Browser" />
      <AIBrowserContent />
    </Suspense>
  );
}
