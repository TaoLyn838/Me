// Bilingual (EN / ZH) content for the portfolio. Single source of truth.

import profileImage from '../assets/images/profile_image.jpeg'

export const profileImg = profileImage

export const copy = {
  en: {
    name: 'Chengtao Lin',
    roleShort: 'Software Engineer & Researcher',
    roleLong: 'MS CS · AI tooling, agents, systems',
    nowLine:
      'Currently: MS @ UMass Amherst, building AI tooling and LM-judge evaluation workflows for healthcare and research use cases.',
    bio: 'I build AI tooling, backend systems, and apps, with interests in language models, agents, and game-related systems.',
    bioLong:
      'I’m a Computer Science master’s student at UMass Amherst, graduating in May 2026, after earning my BS from UMass Boston in 2024. I’m interested in AI, language models, agents, and game-related systems, and my recent work spans LLM evaluation, backend tooling, and research engineering.',
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
    featured: {
      kicker: 'Now building',
      path: '/research/patient-education',
      title: 'Patient education LM-judge pipeline',
      desc: 'Unified evaluation workflow for a radiology patient-education system, comparing GPT, Gemini, and MedGemma outputs across Personalization, Doctor, and Imaging judges.',
      stats: [
        { label: 'judges', value: '3' },
        { label: 'models', value: '3' },
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
    roleShort: 'AI 工具工程师',
    roleLong: '计算机科学硕士生 · AI 工具、Agent 与系统',
    nowLine: '现状：UMass Amherst 在读硕士；主要在做 AI 工具与 LM-judge 评测流程，聚焦医疗与研究场景。',
    bio: '主要做 AI 工具、后端系统和应用开发，关注语言模型、Agent 和游戏相关系统。',
    bioLong:
      '我是 UMass Amherst 计算机科学硕士生，将于 2026 年 5 月毕业，本科毕业于 UMass Boston。我对 AI、语言模型、Agent 和游戏相关系统感兴趣，近期主要在做 LLM 评测、后端工具和研究工程。',
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
    featured: {
      kicker: '正在开发',
      path: '/research/patient-education',
      title: '患者教育 LM-judge 评测管线',
      desc: '面向放射影像患者教育系统搭建统一评测流程，对 GPT、Gemini 与 MedGemma 在 Personalization、Doctor、Imaging 三类 judges 下的输出进行比较。',
      stats: [
        { label: '评测器', value: '3' },
        { label: '模型', value: '3' },
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
      en: 'Supported the Tech Interview Prep course with live algorithm Q&A, breakout-room guidance, and hands-on feedback during coding sessions.',
      zh: '在 Tech Interview Prep 课程中负责实时算法答疑、breakout room 指导，以及 coding 练习中的逐步反馈。',
    },
    highlights: ['Live Zoom Q&A', 'Guided 4–5 breakout rooms', 'Step-by-step feedback'],
  },
  {
    company: 'UMass Boston · Artificial Intelligence Lab',
    role: { en: 'Research Fellow', zh: '研究员' },
    date: { en: 'Jan 2024 – Present', zh: '2024 年 1 月至今' },
    location: { en: 'Boston, MA', zh: '波士顿，MA' },
    summary: {
      en: 'Built research prototypes and experiment pipelines for AI memory work, including dataset preparation, GNN experiments, and iterative result analysis.',
      zh: '围绕 AI memory 方向搭建研究原型与实验管线，负责数据整理、GNN 实验和多轮结果分析。',
    },
    highlights: ['PTB / WikiText datasets', 'GNN prototypes', 'Experiment pipelines'],
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
    date: { en: 'Expected May 2026', zh: '预计 2026 年 5 月毕业' },
  },
  {
    school: { en: 'University of Massachusetts Boston', zh: '麻省大学波士顿分校' },
    degree: { en: 'BS, Computer Science', zh: '计算机科学学士' },
    date: { en: '2019 — 2024', zh: '2019 年 — 2024 年' },
  },
]

export const projects = [
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
      en: 'Designed backend APIs for a Minecraft server overseer project, aligning database schema and player-state responses with frontend needs.',
      zh: '为 Minecraft server overseer 项目设计后端接口，对齐数据库 schema 与前端所需的玩家状态返回结构。',
    },
    link: 'https://tlarkusdmdikg68r.usttp.larksuite.com/file/F5uubQTJGoyxmbxrEGXuwoyttNg?from=from_copylink',
    year: 2025,
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
  languages: ['Python', 'Swift', 'JavaScript', 'SQL', 'Java', 'C'],
  frameworks: ['PyTorch', 'FastAPI', 'Node.js', 'Express', 'React', 'SwiftUI', 'UIKit'],
  tools: ['OpenAI API', 'Docker', 'PostgreSQL', 'Git', 'VLMs', 'GNN', 'Xcode'],
}

export const links = {
  github: 'https://github.com/TaoLyn838',
  linkedin: 'https://linkedin.com/in/ctlin001',
  email: 'chengtaolinctl@gmail.com',
  resume: { en: '/resume/resume_en.pdf', zh: '/resume/resume_zh.pdf' },
}

export const theme = {
  bg: '#ece5d5',
  bgAlt: '#e3dbc8',
  card: '#f7f1e3',
  ink: '#191510',
  inkSoft: '#5b5141',
  inkFaint: '#8f8470',
  rule: 'rgba(25,21,16,0.12)',
  ruleSolid: 'rgba(25,21,16,0.22)',
  accent: '#5e6b2b',
  accentSoft: '#b8c07e',
  dot: '#c26a38',
  sans: 'Inter, sans-serif',
  mono: "'JetBrains Mono', monospace",
  cjk: "'Noto Serif SC', serif",
}

export function t(val, lang) {
  if (val == null) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en ?? ''
}
