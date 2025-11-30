export type Locale = 'en' | 'zh';

export const dictionary = {
  en: {
    home: {
      greeting: "Hi, I am Menghui",
      subtitle: "Senior design leader @ Microsoft",
      description: "I lead a team of designers at Microsoft to reimagine Edge browser experience with AI. Exprienced design lead with 10+ years of experience with a focus on AI, before Microsoft I lead design at Bytedance at San Francisco and Shanghai.",
      creativeTitle: "Creative product design",
      creativeDescription: "I explored how AI can fundamentally transform the design process. I pioneered using prompt engineering to generate 100% AI-driven images and went beyond traditional design tools by writing code directly on product codebase, allowing teams to experience live designs instead of static mockups. These experiments bridged creativity and engineering, accelerating iteration, improving quality, and redefining how design comes to life in AI products.",
      aboutTitle: "About Menghui",
      aboutP1: "I’m a Senior Design Leader at Microsoft, leading a team focused on reimagining how AI transforms the browser and the way people work. With over 240 million daily active users, Microsoft Edge is one of the world’s largest consumer products — and I led the creation of Edge AI Mode, making Edge the first mainstream AI browser in the market.",
      aboutP2: "Previously, I led design at ByteDance, SurveyMonkey, driving product innovation and AI-centered design initiatives across San Francisco and Shanghai.",
      aboutP3: "As an AI-native design leader, I bridge technology, design, and product strategy — moving fluidly between them to create experiences that deliver both human impact and business value. My work centers on exploring how AI can not only enhance productivity but also redefine creativity, expression, and interaction itself.",
    },
    projects: {
      aiBrowser: {
        title: "Microsoft AI Browser",
        summary: "Design leader - vision & design"
      },
      unifiedComposer: {
        title: "Unified AI Composer",
        summary: "Lead designer"
      },
      journey: {
        title: "AI Canvas",
        summary: "Lead designer"
      },
      copilotLabs: {
        title: "Copilot Labs",
        summary: "I wrote real code to demo 3D in Copilot!"
      },
      copilotImage: {
        title: "Copilot Image Create",
        summary: "Generate stunning images with AI creativity"
      }
    },
    contact: {
      title: "Let's connect",
      email: "Email me",
      linkedin: "LinkedIn"
    },
    footer: {
      text: "Designed and developed by Menghui @"
    },
    // Project Detail Pages
    aiBrowserPage: {
      header: {
        title: "Microsoft Edge - a rethink of AI Browser",
        description: "As the Senior Design Leader, I led a team of five designers to shape the vision and experience of Edge AI Browser, transforming it into the world’s largest AI-powered browser, leading the industry with over 20 million weekly users using Edge AI mode."
      },
      whyAiBrowser: {
        title: "Why AI browser",
        p1: "As AI-first browsers emerged — Dia (Jun 2025), Comet (Jul 2025), Chrome AI Mode (Sep 2025), and ChatGPT Atlas (Oct 2025) — it became clear the future of browsing was intelligent. We built Edge AI Mode because the browser and OS are the two largest AI platforms — they access all information, connect to every app, and understand user context. To surpass Chrome, Edge needed a disruptive leap, redefining the browser as an intelligent companion that learns, anticipates, and empowers how people browse and create."
      },
      hmw: {
        title: "How might we?",
        p1: "Define a bold and uncompromising vision of the AI Browser—one that transforms how we think about relationship between you, your AI Companion, the browser and the web.",
        p2: "4 designers, 6 days of sprinting, So many HMWs, post its and feature ideas."
      },
      rethink: {
        title: "A complete rethink of browser and its architecture with AI",
        p1: "We realized this was the moment to rebuild the browser from the ground up. An AI Browser can't just add intelligence on top — it must redefine how people browse, organize and think.",
        p2: "1. AI belongs in the core browsing flow, not on the side.",
        p3: "2. AI transforms from reactive to proactive, from cold utility to a warm, human companion.",
        p4: "3. AI should act as the new OS layer for information, changing how users access, reason about, and navigate the web.",
        p5: "This required not just a product reinvention, but a design reinvention — rethinking interaction patterns, visual language, and how intelligence itself feels inside the browser."
      },
      unifiedComposer: {
        title: "Unified AI Composer: AI in the main flow",
        p1: "At the heart of this vision is the Unified AI Composer — the foundation of how AI becomes part of the main browsing journey. In a browser, the most essential actions all begin in one place: the address bar and search box. Unified AI Composer brings AI conversation, browsing, and search together into this single, continuous flow. Users can now talk to AI anywhere, without switching context — asking questions, refining searches, or letting AI help them explore and make sense of what they see. It turns everyday browsing into a natural dialogue between the user, the web, and intelligence itself."
      },
      journey: {
        title: "AI Canvas: AI way to browse",
        p1: "AI Canvas redefines how users browse and make sense of the web. It transforms AI from a passive tool into an active, empathetic companion. By understanding a user's browsing history and intent, AI can automatically summarize and organize related content into a visual, topic-based AI Canvas. Within each AI Canvas, users can seamlessly explore, revisit, and complete all tasks connected to a topic — turning scattered tabs and searches into a coherent, meaningful flow."
      },
      vision: {
        title: "Vision - AI see what you see",
        p1: "AI Vision transforms the browser into a multimodal interface that understands not just code, but visual context. By analyzing the rendered pixels of any webpage, AI can provide insights, answer questions, and assist with tasks based on what you're actually seeing—bridging the gap between visual information and digital intelligence."
      },
      contentRemix: {
        title: "Content remix: redefine how content is rendered",
        p1: "Content Remix reimagines how content is rendered inside the browser. With AI, a webpage is no longer static — it becomes fluid, adaptive, and deeply personal. Text, images, audio, or video can be remixed and presented in the most natural format for each user and context. Whether summarizing an article into visuals, turning a video into notes, or narrating content aloud, Content Remix lets AI reshape information to fit the user — not the other way around."
      },
      mobile: {
        title: "AI browser on mobile",
        p1: "We didn't just stop at desktop. We brought the full power of Edge AI to mobile, creating the world's first mainstream AI browser for iOS and Android. With a redesigned interface optimized for touch and on-the-go interactions, users can now access Copilot, summarize content, and generate ideas anywhere, seamlessly syncing their AI journey across devices."
      },
      userStory: {
        title: "User story behind the scene",
        p1: "To validate our design direction, we conducted in-depth user research with over 40 participants across different regions and browsing habits. The insights revealed clear themes — users resonated with a sleek, minimalist experience, seamless AI integration, and personalized, proactive assistance that saves time and feels intuitive. At the same time, they expressed concerns about control, transparency, privacy, and AI fatigue. These findings guided how we balanced intelligence and trust, ensuring AI feels both helpful and human."
      },
      impact: {
        title: "Impact of Copilot mode",
        p1: "Launched in 2025 under Microsoft AI CEO Mustafa Suleyman, Edge AI Mode became the most impactful AI innovation in Edge's history — transforming it into the largest AI browser in the market with over 20 million weekly active users. For the first time in 20 years, Edge re-imagined how people interact with the web — making AI a native, seamless part of browsing. The release received widespread media coverage and highly positive user feedback, establishing Edge as a leader in the new era of intelligent, human-centered browsing."
      }
    },
    copilotImagePage: {
      header: {
        title: "AI Image — 100% AI-Generated for Real Products",
        description: "In the Copilot Image Project, I explored how prompt engineering can redefine visual creation inside product design. Every image in this project was generated entirely by AI — no stock photos, no manual illustration. By designing precise, expressive prompts, I produced high-quality visuals that were directly used across Copilot’s AI experiences, from UI imagery to storytelling and brand moments. The project demonstrated how AI can become a creative collaborator, accelerating production while maintaining a strong, human-centered aesthetic."
      },
      promptEngineering: {
        title: "Prompt Engineering",
        p1: "All AI-generated images followed a consistent visual and emotional framework:",
        p2: "•\tCalm, minimalist aesthetic with matte off-white or neutral backgrounds.",
        p3: "•\tSoft, directional lighting that feels warm and natural.",
        p4: "•\tBalanced composition emphasizing depth, texture, and harmony.",
        p5: "•\tNeutral tones with gentle warmth, avoiding neon or artificial lighting.",
        p6: "•\tInspired by morning sunlight and subtle shadows for a serene, human feel.",
        p7: "This guidance ensured every image felt cohesive, calm, and authentically Copilot."
      },
      imageryPrinciples0: {
        title: "Imagery Principles",
        p1: "The imagery emphasizes harmony, natural light, high contrast, and dynamic compositions. It follows the 60/30/10 color rule to establish a balanced and engaging tone."
      },
      imageryPrinciples: {
        title: "Use case in real product",
        p1: "Imagery is never decorative and should always support the story being told. We avoid pictures that mirror people using technology, instead always focusing on imagery as a way to enhance real world scenarios and real world feelings."
      }
    },
    copilotLabsPage: {
      header: {
        title: "Copilot Labs — AI Design Experiments",
        description: "Copilot Labs is the experimental playground of Copilot — a space to prototype and test the newest AI-driven ideas before they reach millions of users. As the design lead for the 3D Modeling project, I pioneered a new way for designers and engineers to design directly within the codebase, enabling real-time creation and iteration rather than reviewing static mockups. This approach turned design from a spec-driven process into a hands-on, collaborative experience, allowing teams to build, test, and feel the product as they design it."
      },
      codeToPrototype: {
        title: "I code to prototype on Copilot",
        p1: "To bring this vision to life, I went beyond traditional design deliverables — I checked code directly into the Copilot Labs codebase, embedding design into the real product environment. This allowed the team to interact with live prototypes, experience 3D behaviors firsthand, and iterate instantly based on real usage rather than static visuals. It bridged the gap between design and engineering, letting everyone feel the design in action."
      },
      codingDemo: {
        title: "3D coding demo on real product",
        p1: "After checking in my code to the Copilot Labs codebase, I deployed it to our internal environment so the team could access the live prototype directly via an internal URL. This allowed designers, PMs, and engineers to experience the 3D model interaction firsthand — no setup required — and provide feedback based on real use."
      }
    },
    journeyPage: {
      header: {
        title: "AI Canvas",
        description: "AI Canvas redefines how users interact with the web. It transforms AI from a passive tool into an active, empathetic companion, capable of understanding user intent and context. Based on browsing history, AI can automatically summarize related content, mapping it into a visual, topic-based AI Canvas. Within each AI Canvas, users can efficiently explore, organize, and complete all tasks tied to a specific topic — turning fragmented tabs into a coherent story. The impact was remarkable: AI Canvas received widespread positive feedback from media and users alike, recognized as one of the most innovative ways to experience AI-native browsing and storytelling on the web."
      },
      vision: {
        title: "Vision - Passive AI to Proactive Intelligence",
        p1: "AI Canvas takes Edge AI Mode to a new level, where AI becomes truly proactive — not just responding to queries, but organizing, guiding, and completing tasks for the user. It redefines how people interact with the web, turning browsing into a continuous, intelligent dialogue. By analyzing a user's browsing history and context, AI Canvas can aggregate related pages into topics, surface insights, start conversations, and even help users finish tasks. It represents a shift from AI as a tool to AI as a thinking partner — one that understands what users are trying to achieve and helps them get there faster."
      },
      canvas: {
        title: "AI creates your new canvas to consume",
        p1: "AI Canvas introduces a new way to consume information. Instead of jumping between tabs, AI organizes relevant content into a single, interactive canvas. This allows users to see the big picture, compare options, and dive deep into details without losing context. It transforms the browser from a tool for viewing pages into a workspace for understanding topics."
      },
      flow: {
        title: "From Vision to Experience — Bringing AI Canvas to Life",
        p1: "In Edge, AI Canvas comes to life through AI-generated AI Canvas cards and direct Copilot conversations. As users browse, AI continuously understands their context — whether they're planning a business project or organizing a trip — and surfaces relevant AI Canvases with summarized insights, links, and next steps. Users can dive in instantly, chatting with Copilot to refine plans, explore options, or act on recommendations. Each AI Canvas evolves dynamically with user intent, delivering personalized, contextual guidance that feels natural and anticipatory — turning browsing into true collaboration with AI."
      },
      card: {
        title: "Card Design — Emotional, Intelligent, and Human",
        p1: "The AI Canvas Card was crafted to be more than just a functional surface — it's a bridge between intelligence and emotion. Each card blends clarity, warmth, and the subtle presence of AI, using visual rhythm, motion, and tone to make intelligence feel approachable and alive. The design conveys a sense of care and companionship — AI that not only helps users work more efficiently, but also connects with them emotionally. Through thoughtful composition, adaptive color, and gentle interaction cues, the AI Canvas Card turns productivity into a moment of calm, trust, and inspiration."
      },
      impact: {
        title: "Deeply Recognized, Resonant",
        p1: "AI Canvas quickly became one of the most talked-about innovations within Edge AI Mode. It received overwhelmingly positive responses from both users and the press, praised for making browsing feel more intelligent, intuitive, and human. The feature was highlighted in major media coverage as a breakthrough in proactive AI design, and celebrated internally by Microsoft executive leaders as a defining step toward the future of AI-native browsing. Beyond engagement metrics, AI Canvas's impact was emotional — it made people feel that AI in Edge wasn't just powerful, but genuinely thoughtful and personal."
      }
    },
    unifiedComposerPage: {
      header: {
        title: "Unified AI Composer",
        description: "Unified AI Composer is the foundation of how AI becomes part of the main browsing flow in Microsoft Edge. It integrates AI conversation, browsing, and search into a single, continuous experience — allowing users to talk to AI anywhere, browse with AI’s help, and search through natural dialogue without breaking context. From vision to product, Unified AI Composer transformed how users engage with AI in the browser, driving Edge AI Mode retention from under 40% to over 80% — a more than 100% increase. It redefined the address bar as the starting point for intelligence, making AI an effortless and integral part of everyday browsing."
      },
      sidepane: {
        title: "Sidepane — Browse with AI, Side by Side",
        p1: "The Sidepane makes AI a natural companion throughout the browsing journey. Users can open it at any moment, viewing web content and their AI assistant side by side. This allows seamless interaction — asking AI to summarize, explain, compare, or explore without leaving the page. The Sidepane turns AI from a separate destination into an always-available co-pilot, empowering users to browse smarter and stay in flow."
      },
      ntp: {
        title: "New Tab Page - The Entry to AI-Native Browsing",
        p1: "The New Tab Page is where AI, browsing, and search fully converge. It transforms the traditional start page into an intelligent entry point — where users can begin with a search, a question, or a conversation, all in the same unified flow. From this surface, users can talk to AI anywhere, letting it assist in browsing, refine searches, or discover new paths based on intent. It marks the moment AI becomes embedded in the core experience of how people start and navigate the web."
      },
      feeds: {
        title: "Feeds — Traditional and AI-Powered Discovery",
        p1: "The Feeds experience on the New Tab Page combines traditional news and content feeds with AI-generated recommendations, creating a more personalized and meaningful stream of information. AI understands user interests, browsing context, and current intent to surface relevant, timely, and useful content — turning passive scrolling into active discovery. This hybrid model not only makes feeds more engaging and useful for users but also unlocks new revenue opportunities through personalized content and ad experiences powered by AI insight."
      },
      background: {
        title: "Background — Emotion as a Driver of Retention",
        p1: "The New Tab Page background became one of the most effective ways to elevate user retention. Beyond functionality, it introduced a sense of emotion, calm, and beauty to each browsing moment. Through curated visuals, adaptive themes, and subtle motion, the background turned the NTP into a space users enjoy returning to. What began as a visual layer evolved into a powerful habit-forming touchpoint — proving that design aesthetics can meaningfully drive engagement and retention."
      },
      impact: {
        title: "Impact of Unified AI Composer",
        p1: "Following the launch of AI Mode, Unified AI Composer became one of the key drivers of Edge's growth — contributing to over 20 million weekly active users and powering a more than 100% increase in retention through continuous design and product iteration. By unifying conversation, search, and browsing into one seamless flow, Unified AI Composer proved that thoughtful AI integration can not only transform the browsing experience but also deliver tangible, lasting engagement at scale."
      }
    }
  },
  zh: {
    home: {
      greeting: "你好，我是孟辉",
      subtitle: "微软高级设计主管",
      description: "我在微软带领设计团队，利用 AI 重塑 Edge 浏览器的体验。作为拥有 10 年以上经验的资深设计负责人，我专注于 AI 领域。在加入微软之前，我曾在旧金山和上海负责字节跳动的设计团队。",
      creativeTitle: "Creative product design",
      creativeDescription: "我探索了 AI 如何从根本上改变设计流程。我率先使用提示工程生成 100% AI 生成的图像用于产品，并超越传统设计工具，直接在产品代码库上编写代码，让团队体验实时设计而不是静态模型。这些实验连接了创意和工程，加速了迭代，提高了质量，并重新定义了设计如何在 AI 产品中创造新的价值。",
      aboutTitle: "About Menghui",
      aboutP1: "我是微软的高级设计负责人，带领团队专注于重塑 AI 如何改变浏览器和人们的工作方式。Microsoft Edge 拥有超过 2.4 亿的日活跃用户，是世界上最大的消费产品之一 —— 我领导了 Edge AI 模式的创建，使 Edge 成为市场上第一个主流 AI 浏览器。",
      aboutP2: "此前，我曾在字节跳动和 SurveyMonkey 领导设计，在旧金山和上海推动产品创新和以 AI 为中心的设计。",
      aboutP3: "作为一名 AI 原生设计领导者，我连接技术、设计和产品战略 — 在它们之间流畅切换，创造既能带来人文影响又能创造商业价值的体验。我的工作重点是探索 AI 如何不仅提高生产力，还能重新定义创造力、表达和交互本身。",
    },
    projects: {
      aiBrowser: {
        title: "微软 AI 浏览器",
        summary: "设计主管愿景与设计"
      },
      unifiedComposer: {
        title: "统一 AI 创作器",
        summary: "首席设计师"
      },
      journey: {
        title: "AI Canvas",
        summary: "首席设计师"
      },
      copilotLabs: {
        title: "Copilot 实验室",
        summary: "我编写了真实代码来演示 Copilot 中的 3D！"
      },
      copilotImage: {
        title: "Copilot 图像创作",
        summary: "利用 AI 创造力生成惊艳图像"
      }
    },
    contact: {
      title: "保持联系",
      email: "给我发邮件",
      linkedin: "LinkedIn"
    },
    footer: {
      text: "Designed and developed by Menghui @"
    },
    // Project Detail Pages
    aiBrowserPage: {
      header: {
        title: "Microsoft Edge - AI 浏览器的再思考",
        description: "作为高级设计主管，我带领一个由五名设计师组成的团队，塑造了 Edge AI 浏览器的愿景和体验，将其转变为世界上最大的 AI 驱动浏览器，引领行业，每周有超过 2000 万用户使用 Edge AI 模式。"
      },
      whyAiBrowser: {
        title: "为什么需要 AI 浏览器",
        p1: "随着 AI 优先浏览器的出现 —— Dia (2025年6月), Comet (2025年7月), Chrome AI 模式 (2025年9月), 和 ChatGPT Atlas (2025年10月) —— 很明显，浏览的未来是智能化的。我们构建 Edge AI 模式是因为浏览器和操作系统是两个最大的 AI 平台 —— 它们访问所有信息，连接每个应用程序，并理解用户上下文。为了超越 Chrome，Edge 需要一个颠覆性的飞跃，将浏览器重新定义为一个智能伴侣，学习、预测并赋能人们浏览和创作的方式。"
      },
      hmw: {
        title: "我们如何可能？",
        p1: "定义一个大胆且不妥协的 AI 浏览器愿景 —— 一个改变我们对你、你的 AI 伴侣、浏览器和网络之间关系思考方式的愿景。",
        p2: "4 位设计师，6 天的冲刺，无数的 HMW，便利贴和功能点子。"
      },
      rethink: {
        title: "用 AI 彻底重新思考浏览器及其架构",
        p1: "我们意识到这是从头开始重建浏览器的时刻。AI 浏览器不能只是在顶部添加智能 —— 它必须重新定义人们浏览、组织和思考的方式。",
        p2: "1. AI 属于核心浏览流程，而不是在侧边。",
        p3: "2. AI 从被动转变为主动，从冷冰冰的工具转变为温暖、人性化的伴侣。",
        p4: "3. AI 应该充当信息的新操作系统层，改变用户访问、推理和导航网络的方式。",
        p5: "这不仅需要产品的重塑，还需要设计的重塑 —— 重新思考交互模式、视觉语言以及智能本身在浏览器中的感觉。"
      },
      unifiedComposer: {
        title: "统一 AI 创作器：主流程中的 AI",
        p1: "这一愿景的核心是统一 AI 创作器 —— AI 如何成为 Microsoft Edge 主要浏览旅程一部分的基础。在浏览器中，最基本的动作都始于一个地方：地址栏和搜索框。统一 AI 创作器将 AI 对话、浏览和搜索结合到这个单一、连续的流程中。用户现在可以在任何地方与 AI 交谈，而无需切换上下文 —— 提问、优化搜索，或让 AI 帮助他们探索和理解所看到的内容。它将日常浏览变成了用户、网络和智能本身之间的自然对话。"
      },
      journey: {
        title: "AI Canvas：AI 浏览方式",
        p1: "AI Canvas 重新定义了用户浏览和理解网络的方式。它将 AI 从被动工具转变为主动、富有同理心的伴侣。通过理解用户的浏览历史和意图，AI 可以自动总结和组织相关内容，将其映射到一个可视化的、基于主题的 AI Canvas 中。在每个 AI Canvas 中，用户可以无缝地探索、重温并完成与特定主题相关的所有任务 —— 将分散的标签页和搜索转化为连贯、有意义的流程。"
      },
      vision: {
        title: "Vision - AI 看你所看",
        p1: "AI Vision 将浏览器转变为一个多模态界面，不仅能理解代码，还能理解视觉上下文。通过分析任何网页的渲染像素，AI 可以根据你实际看到的内容提供见解、回答问题并协助完成任务 —— 弥合视觉信息与数字智能之间的鸿沟。"
      },
      contentRemix: {
        title: "内容重混：重新定义内容的呈现方式",
        p1: "内容重混重新构想了内容在浏览器中的呈现方式。有了 AI，网页不再是静态的 —— 它变得流畅、自适应且深度个性化。文本、图像、音频或视频可以被重混并以最适合每个用户和上下文的自然格式呈现。无论是将文章总结为视觉效果，将视频转化为笔记，还是朗读内容，内容重混让 AI 重塑信息以适应用户 —— 而不是相反。"
      },
      userStory: {
        title: "幕后的用户故事",
        p1: "为了验证我们的设计方向，我们对不同地区和浏览习惯的 40 多名参与者进行了深入的用户研究。洞察揭示了清晰的主题 —— 用户对时尚、极简的体验、无缝的 AI 集成以及节省时间且感觉直观的个性化、主动协助产生了共鸣。同时，他们表达了对控制、透明度、隐私和 AI 疲劳的担忧。这些发现指导了我们如何平衡智能和信任，确保 AI 既有帮助又有人情味。"
      },
      impact: {
        title: "Copilot 模式的影响",
        p1: "Edge AI 模式于 2025 年在微软 AI CEO Mustafa Suleyman 的领导下推出，成为 Edge 历史上最具影响力的 AI 创新 —— 将其转变为市场上最大的 AI 浏览器，每周活跃用户超过 2000 万。20 年来，Edge 首次重新构想了人们与网络互动的方式 —— 使 AI 成为浏览的原生、无缝部分。该版本获得了广泛的媒体报道和高度积极的用户反馈，确立了 Edge 在智能、以人为本的浏览新时代的领导地位。"
      }
    },
    copilotImagePage: {
      header: {
        title: "AI 图像 — 100% AI 生成，用于真实产品",
        description: "在 Copilot 图像项目中，我探索了提示工程如何重新定义产品设计中的视觉创作。该项目中的每张图像完全由 AI 生成 —— 没有库存照片，没有手动插图。通过设计精确、富有表现力的提示，我制作了高质量的视觉效果，直接用于 Copilot 的 AI 体验，从 UI 图像到讲故事和品牌时刻。该项目展示了 AI 如何成为创意合作者，在保持强烈、以人为本的审美观的同时加速生产。"
      },
      promptEngineering: {
        title: "提示工程",
        p1: "所有 AI 生成的图像都遵循一致的视觉和情感框架：",
        p2: "•\t平静、极简的美学，带有哑光灰白或中性背景。",
        p3: "•\t柔和、定向的灯光，感觉温暖自然。",
        p4: "•\t平衡的构图，强调深度、纹理和和谐。",
        p5: "•\t带有温和暖意的中性色调，避免霓虹灯或人造光。",
        p6: "•\t灵感来自晨光和微妙的阴影，营造宁静、人性化的感觉。",
        p7: "该指南确保每张图像都感觉连贯、平静且具有真正的 Copilot 风格。"
      },
      imageryPrinciples0: {
        title: "图像原则",
        p1: "图像强调和谐、自然光、高对比度和动态构图。它遵循 60/30/10 配色法则，以建立平衡且引人入胜的基调。"
      },
      imageryPrinciples: {
        title: "真实产品中的用例",
        p1: "图像绝不是装饰性的，应始终支持正在讲述的故事。我们避免使用反映人们使用技术的图片，而是始终专注于将图像作为增强现实世界场景和真实世界感受的一种方式。"
      }
    },
    copilotLabsPage: {
      header: {
        title: "Copilot 实验室 — AI 设计实验",
        description: "Copilot 实验室是 Copilot 的实验游乐场 —— 一个在最新的 AI 驱动想法触及数百万用户之前对其进行原型设计和测试的空间。作为 3D 建模项目的设计主管，我开创了一种让设计师和工程师直接在代码库中进行设计的新方法，实现了实时创建和迭代，而不是审查静态模型。这种方法将设计从规范驱动的流程转变为动手、协作的体验，让团队在设计产品时构建、测试并感受产品。"
      },
      codeToPrototype: {
        title: "我在 Copilot 上编写代码进行原型设计",
        p1: "为了实现这一愿景，我超越了传统的设计交付物 —— 我直接将代码签入 Copilot 实验室代码库，将设计嵌入到真实的产品环境中。这使得团队能够与实时原型互动，亲身体验 3D 行为，并根据实际使用情况而不是静态视觉效果即时迭代。它弥合了设计和工程之间的差距，让每个人都能感受到设计在行动。"
      },
      codingDemo: {
        title: "真实产品上的 3D 编码演示",
        p1: "将我的代码签入 Copilot 实验室代码库后，我将其部署到我们的内部环境，以便团队可以通过内部 URL 直接访问实时原型。这使得设计师、产品经理和工程师能够亲身体验 3D 模型交互 —— 无需设置 —— 并根据实际使用情况提供反馈。"
      }
    },
    journeyPage: {
      header: {
        title: "AI Canvas",
        description: "AI Canvas 重新定义了用户与网络互动的方式。它将 AI 从被动工具转变为主动、富有同理心的伴侣，能够理解用户的意图和上下文。基于浏览历史，AI 可以自动总结相关内容，将其映射到一个可视化的、基于主题的 AI Canvas 中。在每个 AI Canvas 中，用户可以高效地探索、组织并完成与特定主题相关的所有任务 —— 将分散的标签页转化为连贯的故事。影响是显著的：AI Canvas 获得了媒体和用户的一致好评，被认为是网络上体验 AI 原生浏览和讲故事的最具创新性的方式之一。"
      },
      vision: {
        title: "愿景 - 从被动 AI 到主动智能",
        p1: "AI Canvas 将 Edge AI 模式提升到了一个新的水平，在这里 AI 变得真正主动 —— 不仅仅是响应查询，而是为用户组织、指导和完成任务。它重新定义了人们与网络互动的方式，将浏览变成了连续、智能的对话。通过分析用户的浏览历史和上下文，AI Canvas 可以将相关页面聚合为主题，呈现见解，开始对话，甚至帮助用户完成任务。它代表了从 AI 作为工具到 AI 作为思维伙伴的转变 —— 一个理解用户想要实现什么并帮助他们更快实现目标的伙伴。"
      },
      canvas: {
        title: "AI 为你创造新的消费画布",
        p1: "AI Canvas 引入了一种新的信息消费方式。AI 不再需要在标签页之间跳转，而是将相关内容组织到一个单一的交互式画布中。这使用户能够看到大局，比较选项，并深入细节而不会丢失上下文。它将浏览器从查看页面的工具转变为理解主题的工作区。"
      },
      flow: {
        title: "从愿景到体验 — 将 AI Canvas 带入生活",
        p1: "在 Edge 中，AI Canvas 通过 AI 生成的 AI Canvas 卡片和直接的 Copilot 对话变为现实。当用户浏览时，AI 会持续理解他们的上下文 —— 无论是计划商业项目还是组织旅行 —— 并通过总结的见解、链接和后续步骤呈现相关的 AI Canvas。用户可以立即深入，与 Copilot 聊天以完善计划、探索选项或根据建议采取行动。每个 AI Canvas 都会随着用户的意图动态演变，提供感觉自然和预期的个性化、上下文指导 —— 将浏览转化为与 AI 的真正协作。"
      },
      card: {
        title: "卡片设计 — 情感、智能和人性化",
        p1: "AI Canvas 卡片不仅仅是一个功能表面 —— 它是智能和情感之间的桥梁。每张卡片融合了清晰度、温暖和 AI 的微妙存在，利用视觉节奏、动作和基调使智能感觉平易近人且充满活力。该设计传达了一种关怀和陪伴感 —— AI 不仅帮助用户更高效地工作，还在情感上与他们建立联系。通过深思熟虑的构图、自适应颜色和温和的交互提示，AI Canvas 卡片将生产力转化为平静、信任和灵感的时刻。"
      },
      impact: {
        title: "深受认可，引发共鸣",
        p1: "AI Canvas 迅速成为 Edge AI 模式中最受关注的创新之一。它收到了用户和媒体的压倒性积极回应，因让浏览感觉更智能、直观和人性化而受到称赞。该功能在主要媒体报道中被强调为主动 AI 设计的突破，并在内部受到微软高管的庆祝，被视为迈向 AI 原生浏览未来的决定性一步。除了参与度指标外，AI Canvas 的影响是情感上的 —— 它让人们觉得 Edge 中的 AI 不仅强大，而且真正体贴和个性化。"
      }
    },
    unifiedComposerPage: {
      header: {
        title: "统一 AI 创作器",
        description: "统一 AI 创作器是 AI 如何成为 Microsoft Edge 主要浏览流程一部分的基础。它将 AI 对话、浏览和搜索集成到一个单一、连续的体验中 —— 允许用户在任何地方与 AI 交谈，在 AI 的帮助下浏览，并通过自然对话进行搜索，而无需中断上下文。从愿景到产品，统一 AI 创作器改变了用户在浏览器中与 AI 互动的方式，推动 Edge AI 模式的留存率从不到 40% 提高到超过 80% —— 增长超过 100%。它重新定义了地址栏作为智能的起点，使 AI 成为日常浏览中轻松且不可或缺的一部分。"
      },
      sidepane: {
        title: "侧边栏 — 与 AI 并肩浏览",
        p1: "侧边栏使 AI 成为整个浏览旅程中的自然伴侣。用户可以随时打开它，并排查看网页内容和他们的 AI 助手。这允许无缝交互 —— 要求 AI 总结、解释、比较或探索，而无需离开页面。侧边栏将 AI 从一个单独的目的地转变为随时可用的副驾驶，使用户能够更智能地浏览并保持流畅。"
      },
      ntp: {
        title: "新标签页 - AI 原生浏览的入口",
        p1: "新标签页是 AI、浏览和搜索完全融合的地方。它将传统的起始页转变为一个智能入口点 —— 用户可以在同一个统一流程中从搜索、提问或对话开始。从这个表面，用户可以在任何地方与 AI 交谈，让它协助浏览、优化搜索或根据意图发现新路径。它标志着 AI 嵌入到人们开始和导航网络的核心体验中的时刻。"
      },
      feeds: {
        title: "Feeds — 传统与 AI 驱动的发现",
        p1: "新标签页上的 Feeds 体验结合了传统新闻和内容源与 AI 生成的推荐，创造了更加个性化和有意义的信息流。AI 理解用户的兴趣、浏览上下文和当前意图，以呈现相关、及时和有用的内容 —— 将被动滚动转变为主动发现。这种混合模式不仅使 Feeds 对用户更具吸引力和实用性，还通过 AI 洞察力驱动的个性化内容和广告体验释放了新的收入机会。"
      },
      background: {
        title: "背景 — 情感作为留存的驱动力",
        p1: "新标签页背景成为提高用户留存率的最有效方式之一。除了功能性之外，它还为每个浏览时刻引入了一种情感、平静和美感。通过精心策划的视觉效果、自适应主题和微妙的动作，背景将 NTP 变成了一个用户喜欢返回的空间。最初的视觉层演变成了一个强大的习惯形成接触点 —— 证明设计美学可以有意义地推动参与度和留存率。"
      },
      impact: {
        title: "统一 AI 创作器的影响",
        p1: "在 AI 模式推出后，统一 AI 创作器成为 Edge 增长的关键驱动力之一 —— 贡献了超过 2000 万的周活跃用户，并通过持续的设计和产品迭代推动留存率增长超过 100%。通过将对话、搜索和浏览统一到一个无缝流程中，统一 AI 创作器证明了深思熟虑的 AI 集成不仅可以改变浏览体验，还可以大规模提供切实、持久的参与度。"
      }
    }
  }
};
