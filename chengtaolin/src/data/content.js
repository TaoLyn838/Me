// Bilingual (EN / ZH) content for the portfolio. Single source of truth.

import profileImage from '../assets/images/profile_image.jpeg'

export const profileImg = profileImage

export const copy = {
  en: {
    name: 'Chengtao Lin',
    roleShort: 'Software Engineer',
    roleLong: 'CS graduate student · iOS, Web & AI',
    nowLine:
      'Currently: MS @ UMass Amherst, mentoring with CodePath, building a neuro-symbolic NLP model for CoLA.',
    bio: 'I build mobile, web, and AI systems — with a bias toward careful craft. iOS work with Swift, full-stack with React & Node, and NLP research on connotation and linguistic acceptability.',
    bioLong:
      'I’m a Computer Science master’s student at UMass Amherst, and a 2024 graduate of UMass Boston. I work across iOS, the web, and applied ML — shipping production apps, teaching CodePath fellows, and researching a modular neuro-symbolic approach to language with Prof. Ping Chen.',
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
      title: 'Neuro-symbolic CoLA classifier',
      desc: 'Restructured regression model; lifted accuracy from 67% → 83% with TensorFlow + spaCy. UMass Boston AI Research Lab.',
    },
    writing: [
      { title: 'Why Swift feels different', date: 'Mar 2026', tag: 'Craft', read: '4 min' },
      { title: 'Teaching algorithms to 40 fellows', date: 'Feb 2026', tag: 'Mentorship', read: '6 min' },
      { title: 'Notes on neuro-symbolic NLP', date: 'Jan 2026', tag: 'Research', read: '8 min' },
      { title: 'Building Ree-See.it in a weekend', date: 'Nov 2023', tag: 'Ship log', read: '5 min' },
    ],
  },
  zh: {
    name: '林成涛',
    roleShort: '软件工程师',
    roleLong: '计算机科学硕士生 · iOS、Web 与 AI',
    nowLine: '现状：UMass Amherst 在读硕士；CodePath 技术导师；研究面向 CoLA 的神经符号 NLP 模型。',
    bio: '专注于移动端、Web 与 AI 系统的构建，追求严谨的工程细节。使用 Swift 开发 iOS，React 与 Node 做全栈，以及自然语言处理方向的研究工作。',
    bioLong:
      '我是 UMass Amherst 计算机科学硕士生，2024 年毕业于 UMass Boston。工作横跨 iOS、Web 与应用机器学习 —— 在产品开发、CodePath 教学与陈平教授的神经符号语言研究之间切换。',
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
      title: '神经符号 CoLA 分类器',
      desc: '重构回归模型；借助 TensorFlow 与 spaCy，准确率从 67% 提升至 83%。UMass Boston AI 实验室。',
    },
    writing: [
      { title: '为什么 Swift 的手感不一样', date: '2026 年 3 月', tag: '工艺', read: '4 分钟' },
      { title: '给 40 位 Fellow 讲算法', date: '2026 年 2 月', tag: '教学', read: '6 分钟' },
      { title: '神经符号 NLP 笔记', date: '2026 年 1 月', tag: '研究', read: '8 分钟' },
      { title: '一个周末做出 Ree-See.it', date: '2023 年 11 月', tag: '开发日志', read: '5 分钟' },
    ],
  },
}

export const experiences = [
  {
    company: 'CodePath',
    role: { en: 'Tech Fellow', zh: '技术 Fellow' },
    date: { en: 'Jul 2024 – Present', zh: '2024 年 7 月至今' },
    location: 'Remote',
    summary: {
      en: 'Mentoring students on data structures & algorithms; running workshops; on-call during class.',
      zh: '为学生讲解数据结构与算法；组织工作坊；课堂答疑。',
    },
    highlights: ['Workshops on DSA + software eng.', 'Slack-based coordination', 'In-class support'],
  },
  {
    company: 'UMass Boston · AI Research Lab',
    role: { en: 'Research Assistant', zh: '研究助理' },
    date: { en: 'Feb 2024 – Present', zh: '2024 年 2 月至今' },
    location: { en: 'Hybrid', zh: '混合办公' },
    summary: {
      en: 'Neuro-symbolic NLP with Prof. Ping Chen — connotation modeling and linguistic acceptability.',
      zh: '与陈平教授合作研究神经符号 NLP，方向包括语义褒贬建模与语言可接受性。',
    },
    highlights: ['67% → 83% acc. on CoLA', 'spaCy token pipeline', 'TensorFlow classifiers'],
  },
  {
    company: 'HackUMass',
    role: { en: 'iOS Developer', zh: 'iOS 开发者' },
    date: { en: 'Nov 2023', zh: '2023 年 11 月' },
    location: 'Amherst, MA',
    summary: {
      en: 'Ree-See.it — OCR receipt scanner. 🏆 Best Mobile Hack.',
      zh: 'Ree-See.it —— 基于 OCR 的票据扫描应用。🏆 最佳移动开发奖。',
    },
    highlights: ['Swift + SwiftUI', 'Docker + OpenAI API', 'Tesseract OCR'],
  },
  {
    company: 'Apple Inc.',
    role: { en: 'Swift Mentorship Mentor', zh: 'Swift 指导计划导师' },
    date: { en: 'Jul 2023 – Oct 2023', zh: '2023 年 7–10 月' },
    location: 'Remote',
    summary: {
      en: 'Guided a mentee through design + build of ShopHub (iOS).',
      zh: '指导学员从设计到开发完成 iOS 项目 ShopHub。',
    },
    highlights: ['Figma → Swift SDK', 'Weekly 1:1s', 'Git workflow'],
  },
]

export const education = [
  {
    school: { en: 'University of Massachusetts Amherst', zh: '麻省大学阿默斯特分校' },
    degree: { en: 'MS, Computer Science', zh: '计算机科学硕士' },
    date: '2025 — ',
  },
  {
    school: { en: 'University of Massachusetts Boston', zh: '麻省大学波士顿分校' },
    degree: { en: 'BS, Computer Science', zh: '计算机科学学士' },
    date: '2019 — 2024',
  },
]

export const projects = [
  { title: 'Ree-See.it', cat: 'Swift', tech: ['Swift', 'OpenAI', 'Docker', 'MongoDB'], desc: { en: 'iOS receipt scanner with OCR → structured data. 🏆 Best Mobile Hack, HackUMass.', zh: 'iOS 票据扫描应用，借助 OCR 将纸质票据结构化。🏆 HackUMass 最佳移动开发奖。' }, link: 'https://devpost.com/software/ree-see-it', featured: true, year: 2023 },
  { title: 'AI Customer Support', cat: 'ML', tech: ['Next.js', 'OpenAI', 'Vercel', 'AWS'], desc: { en: 'LLM-backed chatbot for customer support flows.', zh: '基于大模型的客服对话机器人。' }, link: 'https://github.com/TaoLyn838/AI-Customer-Support', featured: true, year: 2024 },
  { title: 'Unearthed', cat: 'Web', tech: ['React', 'Bun', 'Express', 'MongoDB'], desc: { en: 'Personalized music discovery from listening history.', zh: '根据听歌历史推荐新音乐。' }, link: 'https://github.com/TaoLyn838/WEB103/tree/main/Unit4/unearthed', featured: true, year: 2024 },
  { title: 'BookEZ', cat: 'Web', tech: ['React', 'Express', 'Railway'], desc: { en: 'Online booking platform for nail salons.', zh: '面向美甲沙龙的在线预约平台。' }, link: 'https://github.com/Web103-BookEZ/web103_finalproject', year: 2024 },
  { title: 'ShopHub', cat: 'Swift', tech: ['Swift'], desc: { en: 'iOS app connecting local businesses with customers.', zh: '连接本地商家与顾客的 iOS 应用。' }, link: 'https://github.com/algebra2boy/ShopHub', year: 2023 },
  { title: 'Bolt Bucket', cat: 'Web', tech: ['React', 'Bun', 'Docker'], desc: { en: 'Customize your ideal car, or remix an existing one.', zh: '定制你的理想车型，或在现有车款上进行改装。' }, link: 'https://github.com/TaoLyn838/WEB103/tree/main/Unit4/diy_delight', year: 2024 },
  { title: 'Virtual Community Space', cat: 'Web', tech: ['React', 'Express', 'Railway'], desc: { en: 'Browse community events by location and interest.', zh: '按地点与兴趣浏览社区活动。' }, link: 'https://github.com/TaoLyn838/WEB103/tree/main/Unit3/unitygrid_plaza', year: 2024 },
  { title: 'Listicle', cat: 'Web', tech: ['React', 'Tailwind', 'MongoDB'], desc: { en: 'Structured list of Genshin Impact characters.', zh: '整理了一份原神角色清单。' }, link: 'https://github.com/TaoLyn838/WEB103/tree/main/Unit2/listicle_part2', year: 2024 },
  { title: 'HobbyHub', cat: 'Web', tech: ['React', 'Supabase'], desc: { en: 'Social platform for hobbies and communities.', zh: '围绕兴趣爱好的社交平台。' }, link: 'https://github.com/TaoLyn838/Web102-spring/tree/main/Projects/HobbyHub', year: 2024 },
  { title: 'Crewmate', cat: 'Web', tech: ['React', 'Supabase'], desc: { en: 'Team builder with full CRUD.', zh: '具备完整增删改查的团队构建工具。' }, link: 'https://github.com/TaoLyn838/Web102-spring/tree/main/Projects/Crewmate', year: 2024 },
  { title: 'CatPath', cat: 'Web', tech: ['React', 'CSS'], desc: { en: 'Discover enchanting felines, one API at a time.', zh: '一次一张图地发现可爱猫咪。' }, link: 'https://github.com/TaoLyn838/Web102-spring/tree/main/Projects/veni-vici!', year: 2024 },
  { title: 'Flashcards!', cat: 'Web', tech: ['React'], desc: { en: 'Study app for ML concepts.', zh: '用于学习机器学习概念的抽认卡应用。' }, link: 'https://github.com/TaoLyn838/Web102-spring/tree/main/Projects/flashcards-part2', year: 2024 },
  { title: 'Community Board', cat: 'Web', tech: ['React'], desc: { en: 'Post-and-comment community board with persistence.', zh: '支持发帖与评论的社区看板。' }, link: 'https://github.com/TaoLyn838/Web102-spring/tree/main/Projects/communityboard', year: 2024 },
  { title: 'BeReal Clone', cat: 'Swift', tech: ['Swift', 'Back4App'], desc: { en: 'BeReal-like app with photo capture and persistent sessions.', zh: '仿 BeReal 的拍照分享应用。' }, link: 'https://github.com/TaoLyn838/IOS102/tree/main/BeRealClone', year: 2023 },
  { title: 'Photo Scavenger Hunt', cat: 'Swift', tech: ['Swift', 'MapKit'], desc: { en: 'Task tracker with photos and geolocation.', zh: '支持照片与定位的任务追踪应用。' }, link: 'https://github.com/TaoLyn838/IOS102/tree/main/PhotoScavengerHunt', year: 2023 },
  { title: 'Flixster', cat: 'Swift', tech: ['Swift', 'TMDB'], desc: { en: 'Movie database using the TMDB API.', zh: '基于 TMDB API 的电影数据库应用。' }, link: 'https://github.com/TaoLyn838/IOS102/tree/main/Flixster', year: 2023 },
  { title: 'MyStory', cat: 'Swift', tech: ['Swift'], desc: { en: 'Stories with photos and text — persisted.', zh: '支持图文与本地持久化的故事应用。' }, link: 'https://github.com/TaoLyn838/IOS102/tree/main/MyStory', year: 2023 },
  { title: 'Flashcards', cat: 'Swift', tech: ['Swift'], desc: { en: 'Create and review flashcards on iOS.', zh: 'iOS 抽认卡应用。' }, link: 'https://github.com/TaoLyn838/Flashcards', year: 2023 },
]

export const skills = {
  languages: ['Swift', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL'],
  frameworks: ['SwiftUI', 'React', 'Next.js', 'Node.js', 'Express', 'TensorFlow', 'PyTorch'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase', 'Supabase', 'MongoDB', 'PostgreSQL'],
}

export const links = {
  github: 'https://github.com/TaoLyn838',
  linkedin: 'https://www.linkedin.com/in/chengtao-lin/',
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
