'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import VideoPlaceholder from '@/app/components/VideoPlaceholder';
import Button from '@/app/components/Button';
import ContentSection from '@/app/components/ContentSection';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';

function JourneyContent() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title="Journey"
          description="Journey redefines how users interact with the web. It transforms AI from a passive tool into an active, empathetic companion, capable of understanding user intent and context. Based on browsing history, AI can automatically summarize related content, mapping it into a visual, topic-based Journey. Within each Journey, users can efficiently explore, organize, and complete all tasks tied to a specific topic — turning fragmented tabs into a coherent story. The impact was remarkable: Journey received widespread positive feedback from media and users alike, recognized as one of the most innovative ways to experience AI-native browsing and storytelling on the web."
        />

        {/* Hero video - Full width */}
        <VideoPlaceholder videoSrc="/videos/aibrowser-journey.mp4" />

        {/* Section 1: Vision */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="Vision - Passive AI to Proactive Intelligence"
            paragraphs={[
              {
                text: "Journey takes Edge AI Mode to a new level, where AI becomes truly proactive — not just responding to queries, but organizing, guiding, and completing tasks for the user. It redefines how people interact with the web, turning browsing into a continuous, intelligent dialogue. By analyzing a user's browsing history and context, Journey can aggregate related pages into topics, surface insights, start conversations, and even help users finish tasks. It represents a shift from AI as a tool to AI as a thinking partner — one that understands what users are trying to achieve and helps them get there faster."
              }
            ]}
          />
        </section>

        {/* Video 1 - Vision */}
        <VideoPlaceholder videoSrc="/videos/journey-vision.mp4" />

        {/* Section 2: Flow */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <ContentSection
            title="From Vision to Experience — Bringing Journey to Life"
            paragraphs={[
              {
                text: "In Edge, Journey comes to life through AI-generated Journey cards and direct Copilot conversations. As users browse, AI continuously understands their context — whether they're planning a business project or organizing a trip — and surfaces relevant Journeys with summarized insights, links, and next steps. Users can dive in instantly, chatting with Copilot to refine plans, explore options, or act on recommendations. Each Journey evolves dynamically with user intent, delivering personalized, contextual guidance that feels natural and anticipatory — turning browsing into true collaboration with AI."
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
            title="Card Design — Emotional, Intelligent, and Human"
            paragraphs={[
              {
                text: "The Journey Card was crafted to be more than just a functional surface — it's a bridge between intelligence and emotion. Each card blends clarity, warmth, and the subtle presence of AI, using visual rhythm, motion, and tone to make intelligence feel approachable and alive. The design conveys a sense of care and companionship — AI that not only helps users work more efficiently, but also connects with them emotionally. Through thoughtful composition, adaptive color, and gentle interaction cues, the Journey Card turns productivity into a moment of calm, trust, and inspiration."
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
            title="Deeply Recognized, Resonant"
            paragraphs={[
              {
                text: "Journey quickly became one of the most talked-about innovations within Edge AI Mode. It received overwhelmingly positive responses from both users and the press, praised for making browsing feel more intelligent, intuitive, and human. The feature was highlighted in major media coverage as a breakthrough in proactive AI design, and celebrated internally by Microsoft executive leaders as a defining step toward the future of AI-native browsing. Beyond engagement metrics, Journey's impact was emotional — it made people feel that AI in Edge wasn't just powerful, but genuinely thoughtful and personal."
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

        <div style={{ height: '240px' }} />
      </div>
    </main>
  );
}

export default function JourneyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      <TopNavigation />
      <JourneyContent />
    </Suspense>
  );
}
