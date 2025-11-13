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

function AIBrowserContent() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title="Microsoft Edge - a rethink of AI Browser"
          description="As the Senior Design Leader, I led a team of five designers to shape the vision and experience of Edge AI Browser, transforming it into the world’s largest AI-powered browser, leading the industry with over 20 million weekly users using Edge AI mode."
        />

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
              title="Why AI browser"
              paragraphs={[
                {
                  text: "As AI-first browsers emerged — Dia (Jun 2025), Comet (Jul 2025), Chrome AI Mode (Sep 2025), and ChatGPT Atlas (Oct 2025) — it became clear the future of browsing was intelligent. We built Edge AI Mode because the browser and OS are the two largest AI platforms — they access all information, connect to every app, and understand user context. To surpass Chrome, Edge needed a disruptive leap, redefining the browser as an intelligent companion that learns, anticipates, and empowers how people browse and create."
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
              title="How might we?"
              paragraphs={[
                {
                  text: "Define a bold and uncompromising vision of  the AI Browser—one that transforms how we think about relationship between you, your AI Companion, the browser and the web."
                },
                {
                  text: "4 designers, 6 days of sprinting, So many HMWs, post its and feature ideas."
                }
              ]}
            />
          </div>

          {/* Full-width HMW image */}
          <div
            style={{
              position: 'relative',
              width: '100vw',
              left: '50%',
              marginLeft: '-50vw',
              marginTop: '80px',
              display: 'flex',
              justifyContent: 'center'
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
            title="A complete rethink of browser and its architecture with AI"
            paragraphs={[
              {
                text: "We realized this was the moment to rebuild the browser from the ground up. An AI Browser can't just add intelligence on top — it must redefine how people browse, organize and think."
              },
              {
                text: "1. AI belongs in the core browsing flow, not on the side.",
                boldWords: ["1. AI belongs in the core browsing flow, not on the side."]
              },
              {
                text: "2. AI transforms from reactive to proactive, from cold utility to a warm, human companion.",
                boldWords: ["2. AI transforms from reactive to proactive"]
              },
              {
                text: "3. AI should act as the new OS layer for information, changing how users access, reason about, and navigate the web.",
                boldWords: ["3. AI should act as the new OS layer for information"]
              },
              {
                text: "This required not just a product reinvention, but a design reinvention — rethinking interaction patterns, visual language, and how intelligence itself feels inside the browser."
              }
            ]}
          />
        </section>

        {/* Video block 2 - Framework */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-framework.mp4" />

        {/* Unified composer section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="Unified composer: AI in the main flow"
            paragraphs={[
              {
                text: "At the heart of this vision is the Unified Composer — the foundation of how AI becomes part of the main browsing journey. In a browser, the most essential actions all begin in one place: the address bar and search box. Unified Composer brings AI conversation, browsing, and search together into this single, continuous flow. Users can now talk to AI anywhere, without switching context — asking questions, refining searches, or letting AI help them explore and make sense of what they see. It turns everyday browsing into a natural dialogue between the user, the web, and intelligence itself."
              }
            ]}
          />
        </section>

        {/* Video block 3 - Unified Composer */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-uc.mp4" />

        {/* Journey section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="Journey: AI way to browse"
            paragraphs={[
              {
                text: "Journey redefines how users browse and make sense of the web. It transforms AI from a passive tool into an active, empathetic companion. By understanding a user's browsing history and intent, AI can automatically summarize and organize related content into a visual, topic-based Journey. Within each Journey, users can seamlessly explore, revisit, and complete all tasks connected to a topic — turning scattered tabs and searches into a coherent, meaningful flow."
              }
            ]}
          />
        </section>

        {/* Video block 4 - Journey */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-journey.mp4" />

        {/* Content remix section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="Content remix: redefine how content is rendered"
            paragraphs={[
              {
                text: "Content Remix reimagines how content is rendered inside the browser. With AI, a webpage is no longer static — it becomes fluid, adaptive, and deeply personal. Text, images, audio, or video can be remixed and presented in the most natural format for each user and context. Whether summarizing an article into visuals, turning a video into notes, or narrating content aloud, Content Remix lets AI reshape information to fit the user — not the other way around."
              }
            ]}
          />
        </section>

        {/* Video block 5 - Content Remix */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-content.mp4" />

        {/* User story section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="User story behind the scene"
            paragraphs={[
              {
                text: "To validate our design direction, we conducted in-depth user research with over 40 participants across different regions and browsing habits. The insights revealed clear themes — users resonated with a sleek, minimalist experience, seamless AI integration, and personalized, proactive assistance that saves time and feels intuitive. At the same time, they expressed concerns about control, transparency, privacy, and AI fatigue. These findings guided how we balanced intelligence and trust, ensuring AI feels both helpful and human."
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
        />

        {/* Impact of Copilot mode section */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px', gap: '40px' }}
        >
          <ContentSection
            title="Impact of Copilot mode"
            paragraphs={[
              {
                text: "Launched in 2025 under Microsoft AI CEO Mustafa Suleyman, Edge AI Mode became the most impactful AI innovation in Edge's history — transforming it into the largest AI browser in the market with over 20 million weekly active users. For the first time in 20 years, Edge re-imagined how people interact with the web — making AI a native, seamless part of browsing. The release received widespread media coverage and highly positive user feedback, establishing Edge as a leader in the new era of intelligent, human-centered browsing."
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
