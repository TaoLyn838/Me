// Bilingual (EN / ZH) content for the portfolio. Single source of truth.

import profileImage from '../assets/images/profile_image.jpeg'

export const profileImg = profileImage

export const copy = {
  en: {
    name: 'Chengtao Lin',
    roleShort: 'Software Engineer & Researcher',
    roleLong: 'MS CS · AI tooling, agents, systems',
    nowLine:
      'MS in CS from UMass Amherst (2026). Now building conversation data for AI characters that stay in character, after benchmarking how fast LLMs answer under load. Open to AI and new-grad software roles.',
    bio: 'I build AI tooling, backend systems, and apps, with interests in language models, agents, and game-related systems.',
    bioLong:
      'I’m interested in AI, language models, agents, and game-related systems, and my recent work spans LLM evaluation, backend tooling, and research engineering.',
    sections: {
      work: 'Selected work',
      experience: 'Experience',
      education: 'Education',
      writing: 'Writing',
      contact: 'Get in touch',
      now: 'Now',
      about: 'About',
      skills: 'Tools',
    },
    ctaResume: 'Download résumé',
    ctaContact: 'Email me',
    ctaWork: 'See work',
    langToggle: '中文',
    // Masthead title-page block: italic role line + letterspaced meta row.
    mastheadRole: 'Software Engineer & Researcher',
    mastheadMeta: ['Boston, MA', 'MS CS · UMass Amherst', 'Open to new-grad roles'],
    featured: {
      kicker: 'Now building',
      path: '/projects/roleplay-synth',
      title: 'Conversation data for AI characters',
      desc: 'Fifty original characters, each with a voice, limits and topics they refuse. An AI writes conversations with them, a hand-graded checklist decides which replies stay in character, and held-out characters test the result. Generation and grading are done; the training comparison is in progress.',
      stats: [
        { label: 'characters', value: '50' },
        { label: 'conversations', value: '11,959' },
      ],
    },
    writing: [
      { title: 'Patient education system paper', date: 'Apr 2026', tag: 'Paper', read: 'arXiv', href: 'https://arxiv.org/abs/2604.14656' },
      { title: 'Block by Block backend notes', date: 'Fall 2025', tag: 'Systems', read: 'brief', href: 'https://tlarkusdmdikg68r.usttp.larksuite.com/file/F5uubQTJGoyxmbxrEGXuwoyttNg?from=from_copylink' },
      { title: 'Retrieval robustness study notes', date: 'Fall 2025', tag: 'Research', read: 'brief', href: 'https://tlarkusdmdikg68r.usttp.larksuite.com/file/VLdybFrzQo1k95xbUGduTV32t0d?from=from_copylink' },
      // { title: 'UMass Boston AI lab profile', date: '2024–Now', tag: 'Lab', read: 'profile', href: 'https://www.umb.edu/directory/chengtaolin001/' },
    ],
  },
  zh: {
    name: '林程涛',
    roleShort: '软件工程师 · 研究员',
    roleLong: '计算机科学硕士 · AI 工具、Agent 与系统',
    nowLine: '现状：2026 年从 UMass Amherst 获得计算机科学硕士学位。刚完成一个大模型推理速度的压测项目，现在在做让 AI 角色「不出戏」的对话数据。正在寻找 AI 与软件工程岗位。',
    bio: '主要做 AI 工具、后端系统和应用开发，关注语言模型、Agent 和游戏相关系统。',
    bioLong:
      '我对 AI、语言模型、Agent 和游戏相关系统感兴趣，近期主要在做 LLM 评测、后端工具和研究工程。',
    sections: {
      work: '精选作品',
      experience: '工作经历',
      education: '教育背景',
      writing: '文字',
      contact: '联系我',
      now: '近期',
      about: '关于',
      skills: '技术栈',
    },
    ctaResume: '下载简历',
    ctaContact: '发邮件',
    ctaWork: '查看作品',
    langToggle: 'EN',
    // 刊头区块：斜体职位行 + 字距展开的信息行
    mastheadRole: '软件工程师 · 研究员',
    mastheadMeta: ['波士顿，MA', '计算机科学硕士 · UMass Amherst', '寻找应届生岗位'],
    featured: {
      kicker: '正在开发',
      path: '/projects/roleplay-synth',
      title: 'AI 角色的对话数据',
      desc: '50 个原创角色，各有说话方式、边界和会拒绝的话题。用 AI 生成与他们的对话，再用人工打过分的检查清单判断哪些回复没有出戏，并留出一部分角色专门做测试。生成与评分已完成，训练对比实验进行中。',
      stats: [
        { label: '角色', value: '50' },
        { label: '段对话', value: '11,959' },
      ],
    },
    writing: [
      { title: '患者教育系统论文', date: '2026 年 4 月', tag: '论文', read: 'arXiv', href: 'https://arxiv.org/abs/2604.14656' },
      { title: 'Block by Block 后端笔记', date: '2025 年秋季', tag: '系统', read: '材料', href: 'https://tlarkusdmdikg68r.usttp.larksuite.com/file/F5uubQTJGoyxmbxrEGXuwoyttNg?from=from_copylink' },
      { title: '检索鲁棒性研究笔记', date: '2025 年秋季', tag: '研究', read: '材料', href: 'https://tlarkusdmdikg68r.usttp.larksuite.com/file/VLdybFrzQo1k95xbUGduTV32t0d?from=from_copylink' },
      // { title: 'UMass Boston AI 实验室主页', date: '2024 年至今', tag: '实验室', read: '主页', href: 'https://www.umb.edu/directory/chengtaolin001/' },
    ],
  },
}

export const experiences = [
  {
    company: 'CodePath',
    role: { en: 'Tech Fellow', zh: '技术助教' },
    date: { en: 'Jul 2024 – Aug 2025', zh: '2024 年 7 月 – 2025 年 8 月' },
    location: 'Remote',
    summary: {
      en: 'Supported live online classes of 150+ students with real-time Q&A, led 5–6 breakout groups through lab work, and reviewed code toward independent debugging.',
      zh: '在 150+ 人的线上课中实时解答学生问题，实验环节平均带 5–6 个小组完成练习，并通过代码审查引导学生独立排查问题。',
    },
    highlights: ['150+ students', 'Led 5–6 breakout groups', 'Nominated “Best Tech Fellow”'],
  },
  {
    company: 'UMass Boston · Artificial Intelligence Lab',
    role: { en: 'Research Fellow', zh: '研究员' },
    date: { en: 'Jan 2024 – Sep 2026', zh: '2024 年 1 月 – 2026 年 9 月' },
    location: { en: 'Boston, MA', zh: '波士顿，MA' },
    summary: {
      en: 'Worked with the advisor on research direction and experiment design; owned literature review, data analysis and preprocessing, and reusable Python experiment pipelines. Final project: a pre-registered study of whether sentence structure helps a frozen hallucination detector.',
      zh: '与导师共同探讨研究方向与实验设计，负责文献调研、研究数据的分析与预处理，以及可复用的 Python 实验管线。收尾项目：一项预注册研究，检验句法结构能否帮助一个冻结的幻觉检测模型。',
    },
    highlights: ['Pre-registered experiments', 'Hallucination detection', 'Experiment pipelines'],
  },
  // {
  //   company: 'HackUMass',
  //   role: { en: 'iOS Developer', zh: 'iOS 开发者' },
  //   date: { en: 'Nov 2023', zh: '2023 年 11 月' },
  //   location: 'Amherst, MA',
  //   summary: {
  //     en: 'Built the full iOS UI for Ree-See.it and integrated the app with OCR and backend services. 🏆 Best Mobile Hack.',
  //     zh: '负责 Ree-See.it 的完整 iOS 界面开发，并完成 OCR 与后端服务联调。🏆 最佳移动端项目奖。',
  //   },
  //   highlights: ['Swift + SwiftUI', 'OCR pipeline', 'Docker + OpenAI API'],
  // },
]

export const education = [
  {
    school: { en: 'University of Massachusetts Amherst', zh: '麻省大学阿默斯特分校' },
    degree: { en: 'MS, Computer Science', zh: '计算机科学硕士' },
    date: { en: '2025 — 2026', zh: '2025 年 — 2026 年' },
  },
  {
    school: { en: 'University of Massachusetts Boston', zh: '麻省大学波士顿分校' },
    degree: { en: 'BS, Computer Science', zh: '计算机科学学士' },
    date: { en: '2019 — 2024', zh: '2019 年 — 2024 年' },
  },
]

export const projects = [
  {
    title: 'AI Character Dialogue Data',
    cat: 'ML',
    tech: ['vLLM', 'Ray Data', 'Llama 3.1', 'Qwen3', 'Python'],
    desc: {
      en: 'In progress. Fifty original characters with their own voices, limits and refusals; 11,959 AI-written conversations generated on one GPU; a seven-point checklist and 250 hand-graded replies used to test which AI grader can tell an in-character reply from a broken one.',
      zh: '进行中。50 个原创角色，各有说话方式、边界和拒绝规则；在一张 GPU 上生成 11,959 段对话；用七条检查清单和 250 条人工评分，测试哪个 AI 评分器能分辨「在戏里」和「出戏」的回复。',
    },
    year: 2026,
  },
  {
    title: 'LLM Inference Benchmark',
    cat: 'ML',
    tech: ['vLLM', 'Llama 3.1', 'A100', 'Python'],
    desc: {
      en: 'Measured how fast an open LLM answers as more users arrive, against a declared speed target. Sending each conversation back to the server that already holds it made first replies 1.77× faster; reusing processed text made them up to 4.6× faster.',
      zh: '在事先定好的速度标准下，测量开源大模型在用户增多时的响应速度。把每段对话送回已经缓存它的服务器，首个回复快 1.77 倍；复用已处理过的文本，最多快 4.6 倍。',
    },
    featured: true,
    year: 2026,
  },
  {
    title: 'Patient Education System',
    cat: 'ML',
    tech: ['Python', 'OpenAI API', 'MedGemma', 'LLM Judges'],
    desc: {
      en: 'Built and evaluated a dual-agent patient-education workflow for radiology use cases, with unified LM-judge analysis across multiple model outputs.',
      zh: '围绕放射影像患者教育场景构建并评测双 Agent workflow，使用统一 LM-judge 流程比较多种模型输出。',
    },
    link: 'https://arxiv.org/abs/2604.14656',
    featured: true,
    year: 2026,
  },
  {
    title: 'Block by Block',
    cat: 'Web',
    tech: ['FastAPI', 'PostgreSQL', 'Python', 'REST APIs'],
    desc: {
      en: 'Owned the server-side API layer for a Minecraft plugin tool, modelling player runtime state into responses and queries the frontend and analytics could consume directly.',
      zh: '负责 Minecraft 插件工具的服务端 API 层，把玩家运行时状态整理成前端与分析流程可直接消费的接口结构与查询方式。',
    },
    link: 'https://tlarkusdmdikg68r.usttp.larksuite.com/file/F5uubQTJGoyxmbxrEGXuwoyttNg?from=from_copylink',
    year: 2025,
  },
  {
    title: 'Snapback',
    cat: 'Web',
    tech: ['React', 'Chart.js', 'Tailwind', 'Auth0', 'Netlify'],
    desc: {
      en: 'YHack 2026 relative-value terminal for prediction markets: infers market structure from unstructured titles, ranks pricing dislocations, and plots them against no-arbitrage envelopes.',
      zh: 'YHack 2026 参赛作品，面向预测市场的相对价值终端：从不规整的标题中推断市场结构，计算并排序定价偏离，并把无套利约束画成曲线与边界图。',
    },
    link: 'https://devpost.com/software/snapback',
    featured: true,
    year: 2026,
  },
  {
    title: 'Robustness of Retrieval Models',
    cat: 'ML',
    tech: ['Python', 'Retrieval', 'R2MED', 'Experiment Design'],
    desc: {
      en: 'Supported biomedical retrieval robustness experiments through dataset selection, PMC-Treatment sampling, and hard-negative construction.',
      zh: '围绕生物医学检索鲁棒性实验，负责数据集筛选、PMC-Treatment 采样与 hard negative 构造。',
    },
    link: 'https://tlarkusdmdikg68r.usttp.larksuite.com/file/VLdybFrzQo1k95xbUGduTV32t0d?from=from_copylink',
    year: 2025,
  },
  {
    title: 'Ree-See.it',
    cat: 'Swift',
    tech: ['Swift', 'SwiftUI', 'OCR', 'OpenAI API', 'Docker'],
    desc: {
      en: 'HackUMass XI award-winning iOS app for receipt scanning and structured extraction, with full mobile UI ownership and backend integration.',
      zh: 'HackUMass XI 获奖 iOS 应用，完成票据扫描与结构化提取，负责完整移动端界面与后端联调。',
    },
    link: 'https://devpost.com/software/ree-see-it',
    featured: true,
    year: 2023,
  },
  {
    title: 'BookEZ',
    cat: 'Web',
    tech: ['React', 'Material UI', 'Express', 'PostgreSQL', 'Railway'],
    desc: {
      en: 'Full-stack nail salon booking platform with authentication, salon and technician selection, appointment booking, and profile-based booking management.',
      zh: '面向美甲沙龙的全栈预约平台，包含登录鉴权、门店与技师选择、预约下单和个人预约管理。',
    },
    link: 'https://github.com/Web103-BookEZ/web103_finalproject',
    year: 2024,
  },
  {
    title: 'HobbyHub',
    cat: 'Web',
    tech: ['React', 'Supabase', 'Tailwind', 'Vite'],
    desc: {
      en: 'Community posting app with a home feed, sorting, search, comments, upvotes, and post editing or deletion.',
      zh: '社区发帖应用，支持首页 feed、排序、搜索、评论、点赞，以及帖子编辑和删除。',
    },
    link: 'https://github.com/TaoLyn838/Web102-spring/tree/main/Projects/HobbyHub',
    year: 2024,
  },
  {
    title: 'Bolt Bucket',
    cat: 'Web',
    tech: ['React', 'PostgreSQL', 'React Router', 'Vite'],
    desc: {
      en: 'Car customization app with live configuration updates, saved builds, pricing, validation, and edit or delete flows.',
      zh: '汽车定制应用，支持实时配置更新、价格计算、保存方案，以及编辑和删除流程。',
    },
    link: 'https://github.com/TaoLyn838/WEB103/tree/main/Unit4/diy_delight',
    year: 2024,
  },
  {
    title: 'Virtual Community Space',
    cat: 'Web',
    tech: ['React', 'Express', 'PostgreSQL', 'React Router'],
    desc: {
      en: 'Database-backed event explorer that lets users browse community events by location through dedicated route pages.',
      zh: '基于数据库的社区活动浏览应用，用户可以按地点查看活动，并进入对应的独立页面。',
    },
    link: 'https://github.com/TaoLyn838/WEB103/tree/main/Unit3/unitygrid_plaza',
    year: 2024,
  },
  {
    title: 'Crewmate',
    cat: 'Web',
    tech: ['React', 'Supabase', 'Tailwind', 'Vite'],
    desc: {
      en: 'Create, update, and manage custom Among Us crewmates with constrained attributes, summary stats, and detail pages.',
      zh: '自定义并管理 Among Us crewmate，包含属性约束、统计信息和详情页。',
    },
    link: 'https://github.com/TaoLyn838/Web102-spring/tree/main/Projects/Crewmate',
    year: 2024,
  },
  {
    title: 'BeReal Clone',
    cat: 'Swift',
    tech: ['Swift', 'UIKit', 'ParseSwift', 'CoreLocation'],
    desc: {
      en: 'BeReal-style iOS app with auth, persistent sessions, photo posting, feed refresh, camera capture, and post-gated viewing.',
      zh: '仿 BeReal 的 iOS 应用，包含登录鉴权、会话持久化、拍照发帖、feed 刷新和发帖后可见机制。',
    },
    link: 'https://github.com/TaoLyn838/IOS102/tree/main/BeRealClone',
    year: 2023,
  },
  {
    title: 'Flixster',
    cat: 'Swift',
    tech: ['Swift', 'UIKit', 'TMDB API', 'URLSession'],
    desc: {
      en: 'Movie browsing app with TMDB-backed networking, table and collection views, tab navigation, and detail screens.',
      zh: '基于 TMDB API 的电影浏览应用，包含网络请求、列表与网格视图、Tab 导航和详情页。',
    },
    link: 'https://github.com/TaoLyn838/IOS102/tree/main/Flixster',
    year: 2023,
  },
  {
    title: 'Photo Scavenger Hunt',
    cat: 'Swift',
    tech: ['Swift', 'UIKit', 'MapKit'],
    desc: {
      en: 'Task-based photo scavenger app that tracks completion state and shows where captured photos were taken on a map.',
      zh: '任务式拍照 scavenger 应用，记录完成状态，并在地图上展示照片拍摄位置。',
    },
    link: 'https://github.com/TaoLyn838/IOS102/tree/main/PhotoScavengerHunt',
    year: 2023,
  },
  {
    title: 'Flashcards',
    cat: 'Swift',
    tech: ['Swift', 'UIKit'],
    desc: {
      en: 'Flashcard study app with card flipping, multiple-choice review, create and edit flows, persistence, and simple animations.',
      zh: '抽认卡学习应用，支持翻卡、多项选择、自定义创建和编辑、数据持久化以及基础动画。',
    },
    link: 'https://github.com/TaoLyn838/Flashcards',
    year: 2023,
  },
]

export const skills = {
  languages: ['Python', 'Swift', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C'],
  frameworks: ['PyTorch', 'FastAPI', 'Node.js', 'Express', 'React', 'SwiftUI', 'UIKit'],
  tools: ['OpenAI API', 'Docker', 'PostgreSQL', 'Git', 'VLMs', 'GNN', 'Xcode'],
}

export const links = {
  github: 'https://github.com/TaoLyn838',
  linkedin: 'https://linkedin.com/in/ctlin001',
  email: 'chengtaolinctl@gmail.com',
  resume: {
    en: `${import.meta.env.BASE_URL}resume/resume_en.pdf`,
    zh: `${import.meta.env.BASE_URL}resume/resume_zh.pdf`,
  },
}

export const theme = {
  bg: '#fbfaf7',
  bgAlt: '#f4f2ec',
  card: '#ffffff',
  ink: '#1c1c1a',
  inkSoft: '#5f5a50',
  inkFaint: '#8f887b',
  rule: 'rgba(28,28,26,0.10)',
  ruleSolid: 'rgba(28,28,26,0.22)',
  accent: '#9a3412',
  accentSoft: '#e8d5c4',
  dot: '#9a3412',
  sans: 'Inter, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
  serif: "'Source Serif 4', Georgia, 'Times New Roman', 'Noto Serif SC', 'Songti SC', serif",
  mono: "'JetBrains Mono', monospace",
  cjk: "'Noto Serif SC', 'Songti SC', serif",
}

export function t(val, lang) {
  if (val == null) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en ?? ''
}
