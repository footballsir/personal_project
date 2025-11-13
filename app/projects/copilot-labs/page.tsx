'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import VideoPlaceholder from '@/app/components/VideoPlaceholder';
import ContentSection from '@/app/components/ContentSection';
import ProjectHeader from '@/app/components/ProjectHeader';
import TopNavigation from '@/app/components/TopNavigation';
import Footer from '@/app/components/Footer';
import Loading from '@/app/components/Loading';

function CopilotLabsContent() {
  return (
  <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto px-8">
        <ProjectHeader
          title="Copilot Labs — AI Design Experiments"
          description="Copilot Labs is the experimental playground of Copilot — a space to prototype and test the newest AI-driven ideas before they reach millions of users. As the design lead for the 3D Modeling project, I pioneered a new way for designers and engineers to design directly within the codebase, enabling real-time creation and iteration rather than reviewing static mockups. This approach turned design from a spec-driven process into a hands-on, collaborative experience, allowing teams to build, test, and feel the product as they design it."
        />

        {/* Section 1: I code to prototype on Copilot labs */}
        <section
          className="flex flex-col items-center"
          style={{ marginTop: '240px', marginBottom: '80px' }}
        >
          <div style={{ marginBottom: '80px' }}>
            <ContentSection
              title="I code to prototype on Copilot"
              paragraphs={[
                {
                  text: "To bring this vision to life, I went beyond traditional design deliverables — I checked code directly into the Copilot Labs codebase, embedding design into the real product environment. This allowed the team to interact with live prototypes, experience 3D behaviors firsthand, and iterate instantly based on real usage rather than static visuals. It bridged the gap between design and engineering, letting everyone feel the design in action."
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
            title="3D coding demo on real product"
            paragraphs={[
              {
                text: "After checking in my code to the Copilot Labs codebase, I deployed it to our internal environment so the team could access the live prototype directly via an internal URL. This allowed designers, PMs, and engineers to experience the 3D model interaction firsthand — no setup required — and provide feedback based on real use."
              }
            ]}
          />
        </section>

        {/* Video - 3D vibe coding demo */}
        <div style={{ marginTop: '80px' }}>
          <VideoPlaceholder
            videoSrc="/videos/copilotlab-vibe.mp4"
            maxWidth="1200px"
            borderRadius="8px"
            backgroundColor="transparent"
            aspectRatio="16/10"
            autoPlay
            loop
            muted
            controls
          />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default function CopilotLabsPage() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-hero -z-10" />
      <TopNavigation title="Copilot Labs" />
      <CopilotLabsContent />
    </Suspense>
  );
}
