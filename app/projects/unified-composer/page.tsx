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

function UnifiedComposerContent() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title="Unified Composer"
          description="Unified Composer is the foundation of how AI becomes part of the main browsing flow in Microsoft Edge. It integrates AI conversation, browsing, and search into a single, continuous experience — allowing users to talk to AI anywhere, browse with AI’s help, and search through natural dialogue without breaking context. From vision to product, Unified Composer transformed how users engage with AI in the browser, driving Edge AI Mode retention from under 40% to over 80% — a more than 100% increase. It redefined the address bar as the starting point for intelligence, making AI an effortless and integral part of everyday browsing."
        />

        {/* Hero video - Full width */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-uc.mp4" />

        {/* Section 1: Side Pane */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="Sidepane — Browse with AI, Side by Side"
            paragraphs={[
              {
                text: "The Sidepane makes AI a natural companion throughout the browsing journey. Users can open it at any moment, viewing web content and their AI assistant side by side. This allows seamless interaction — asking AI to summarize, explain, compare, or explore without leaving the page. The Sidepane turns AI from a separate destination into an always-available co-pilot, empowering users to browse smarter and stay in flow."
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
            title="New Tab Page - The Entry to AI-Native Browsing"
            paragraphs={[
              {
                text: "The New Tab Page is where AI, browsing, and search fully converge. It transforms the traditional start page into an intelligent entry point — where users can begin with a search, a question, or a conversation, all in the same unified flow. From this surface, users can talk to AI anywhere, letting it assist in browsing, refine searches, or discover new paths based on intent. It marks the moment AI becomes embedded in the core experience of how people start and navigate the web."
              }
            ]}
          />
        </section>

        {/* Video 2 - NTP */}
        <VideoPlaceholder videoSrc="/videos/uc-ntp.mp4" />

        {/* Section 3: Feeds */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="Feeds — Traditional and AI-Powered Discovery"
            paragraphs={[
              {
                text: "The Feeds experience on the New Tab Page combines traditional news and content feeds with AI-generated recommendations, creating a more personalized and meaningful stream of information. AI understands user interests, browsing context, and current intent to surface relevant, timely, and useful content — turning passive scrolling into active discovery. This hybrid model not only makes feeds more engaging and useful for users but also unlocks new revenue opportunities through personalized content and ad experiences powered by AI insight."
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
            title="Background — Emotion as a Driver of Retention"
            paragraphs={[
              {
                text: "The New Tab Page background became one of the most effective ways to elevate user retention. Beyond functionality, it introduced a sense of emotion, calm, and beauty to each browsing moment. Through curated visuals, adaptive themes, and subtle motion, the background turned the NTP into a space users enjoy returning to. What began as a visual layer evolved into a powerful habit-forming touchpoint — proving that design aesthetics can meaningfully drive engagement and retention."
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
            title="Impact of Unified Composer"
            paragraphs={[
              {
                text: "Following the launch of AI Mode, Unified Composer became one of the key drivers of Edge's growth — contributing to over 20 million weekly active users and powering a more than 100% increase in retention through continuous design and product iteration. By unifying conversation, search, and browsing into one seamless flow, Unified Composer proved that thoughtful AI integration can not only transform the browsing experience but also deliver tangible, lasting engagement at scale."
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
      <TopNavigation title="Unified Composer" />
      <UnifiedComposerContent />
    </Suspense>
  );
}
