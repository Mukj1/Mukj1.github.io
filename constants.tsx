import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { ResearchPaper, LogEntry, SocialLink } from './types';

/**
 * ==============================================================================
 * 馃搶 鍐呭绠＄悊鎸囧崡 (CONTENT GUIDE)
 * ==============================================================================
 * 
 * 1. 鍝噷鏀炬枃绔狅紵 (Where to put articles?)
 *    鍦?'public' 鏂囦欢澶逛笅鍒涘缓 'content' 鏂囦欢澶广€? *    (Create a 'content' folder inside 'public')
 * 
 * 2. 鎬庝箞鍏宠仈锛?(How to link?)
 *    灏?fileUrl 璁剧疆涓?"/content/filename.md"
 *    (Set fileUrl to "/content/filename.md")
 * ==============================================================================
 */

export const PROFILE = {
  name: "Ruichen Yang",
  chineseName: "杨睿辰",
  title: "Researcher",
  affiliation: "TBD",
  bio: "Exploring the intersection of computational methods and social dynamics. I utilize data-driven approaches to uncover patterns in complex human behaviors.",
  email: "ruichen.yang@example.edu",
  location: "Jiaozuo, Henan, China",
  avatar: "/images/profile/avatar.png", 
  cvLink: "/Ruichen_CV.pdf" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Email", url: "mailto:jrcyang08@outlook.com", icon: <Mail size={20} strokeWidth={1.5} /> },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ruichen-yang-3094562b3", icon: <Linkedin size={20} strokeWidth={1.5} /> },
  { platform: "Scholar", url: "https://scholar.google.com/citations?user=i4R9ZRsAAAAJ&hl=en", icon: <BookOpen size={20} strokeWidth={1.5} /> },
  { platform: "GitHub", url: "https://github.com/Mukj1", icon: <Github size={20} strokeWidth={1.5} /> },
];

export const RESEARCH_DATA: ResearchPaper[] = [
  {
    id: "p1",
    title: "The influence of immersion on revisit intention: Empirical evidence from tourists at the Beijing Winter Olympic venue \"Snow Ruyi\"",
    authors: ["Song, H., Gao, J., Fan, S., Yang, R., and Liu, Z."],
    conference: "International Journal of Sports Marketing and Sponsorship",
    year: 2025,
    abstract: "This study explores how immersion at the \"Snow Ruyi\" venue, a Winter Olympic legacy site, influences place attachment and revisit intention.",
    tags: ["Immersion", "Place attachment", "Revisit intention", "Winter Olympic legacy"],
    link: "#",
    image: "/images/research/research-1.png",
    pdfUrl: "#",
    codeUrl: "https://doi.org/10.1108/IJSMS-07-2025-0344",
    doi: "10.1145/12345678",
    bibtex: `@article{10.1108/IJSMS-07-2025-0344,
    author = {Song, Hemin and Gao, Jiaxu and Fan, Songmei and Yang, Ruichen and Liu, Zi},
    title = {The influence of immersion on revisit intention: empirical evidence from tourists at the Beijing Winter Olympic venue Snow Ruyi},
    journal = {International Journal of Sports Marketing and Sponsorship},
    pages = {1-20},
    year = {2025},
    month = {12},
    issn = {1464-6668},
    doi = {10.1108/IJSMS-07-2025-0344},
    url = {https://doi.org/10.1108/IJSMS-07-2025-0344},
    eprint = {https://www.emerald.com/ijsms/article-pdf/doi/10.1108/IJSMS-07-2025-0344/11107310/ijsms-07-2025-0344en.pdf}
}`,
    
    // 鎸囧悜澶栭儴 Markdown 鏂囦欢
    fileUrl: "/content/research/snowruyi.md"
  },
  {
    id: "p2",
    title: "The spillover effect of Chinese sportswear brands' relationship quality: a perspective of Confucian yuanfen culture",
    authors: ["Yang, R. and Song, H."],
    conference: "International Journal of Sports Marketing and Sponsorship",
    year: 2024,
    abstract: "This study explores the psychological mechanisms behind Chinese consumers' shift in preference towards domestic sportswear brands.",
    tags: ["Confucian yuanfen relationship", "Product origin image", "Consumer xenocentrism", "Spillover effect",],
    link: "#",
    image: "/images/research/research-2.jpg",
    pdfUrl: "#",
    codeUrl: "https://doi.org/10.1108/IJSMS-02-2024-0049",
    bibtex: `@article{10.1108/IJSMS-02-2024-0049,
    author = {Yang, Ruichen and Song, Hemin},
    title = {The spillover effect of Chinese sportswear brands' relationship quality: a perspective of Confucian yuanfen culture},
    journal = {International Journal of Sports Marketing and Sponsorship},
    volume = {25},
    number = {5},
    pages = {1105-1125},
    year = {2024},
    month = {07},
    issn = {1464-6668},
    doi = {10.1108/IJSMS-02-2024-0049},
    url = {https://doi.org/10.1108/IJSMS-02-2024-0049},
    eprint = {https://www.emerald.com/ijsms/article-pdf/25/5/1105/9548001/ijsms-02-2024-0049.pdf}
}`,
    // 濡傛灉娌℃湁璇︾粏鏂囦欢锛岃鎯呴〉浼氭樉绀哄崰浣嶇
    fileUrl: "/content/research/spillover.md" 
  }
];

export const CONFERENCE_DATA: ResearchPaper[] = [
  {
    id: "c2",
    title: "Human-AI collaboration in sport marketing research: Harnessing practical AI tools and applications",
    authors: ["Qian, T. Y., Chen, S., Yang, R., & Li, W."],
    conference: "2025 Sport Marketing Association (SMA) Conference",
    year: 2025,
    abstract: "This is a presentation on human-AI collaboration in sports marketing research.",
    tags: ["Human-AI collaboration", "Sports Marketing", "Practical AI tools"],
    image: "/images/research/HAISMA.png",
    pdfUrl: "https://www.canva.com/design/DAG2iWU0pSo/5dZTOShYCtkAThw8aId_bw/view?utm_content=DAG2iWU0pSo&utm_campaign=designshare&utm_medium=link&utm_source=viewer",
    fileUrl: "/content/research/hai-sma-symposium.md",
  }
  
];

export const LOG_DATA: LogEntry[] = [
  {
    id: "l1",
    date: "2026-01-29",
    title: "FOMO in this AI era",
    summary: "I have been struggling with feelings of FOMO, but I'm trying to work through them.",
    category: "Dev",
    image: "/images/logs/fomo.png",
    fileUrl: "/content/logs/FOMO.md"
  },
  {
    id: "l2",
    date: "2025-08-31",
    title: "Why Mukj1?",
    summary: "This explains why my online username is mukj1.",
    category: "Life",
    image: "/images/logs/mukj1.png",
    fileUrl: "/content/logs/why-mukj1.md"
  }
];

export const GALLERY_IMAGES = [
  { src: "/images/moments/moment-1.jpg", alt: "Moment 1" },
  { src: "/images/moments/moment-2.jpg", alt: "Moment 2" },
  { src: "/images/moments/moment-3.jpg", alt: "Moment 3" },
  { src: "/images/moments/moment-4.jpg", alt: "Moment 4" },
  { src: "/images/moments/moment-5.jpg", alt: "Moment 5" },
  { src: "/images/moments/moment-6.jpg", alt: "Moment 6" },
  { src: "/images/moments/moment-7.jpg", alt: "Moment 7" },
  { src: "/images/moments/moment-8.jpg", alt: "Moment 8" },
];

export const FOCUS_AREAS = [
  "Sports Marketing",
  "Outdoor Sports",
  "Sportswear",
  "Multimodal Analysis"
];

export const RESEARCH_SKILLS = [
  "Python",
  "R",
];
