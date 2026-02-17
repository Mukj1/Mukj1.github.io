import React from 'react';

export type View = 'about' | 'research' | 'log';

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  tags: string[];
  link?: string;
  image?: string;
  // Detail view fields
  pdfUrl?: string;
  // Publisher landing page / official published version
  publisherUrl?: string;
  // Backward-compatible field name kept for older data
  codeUrl?: string;
  doi?: string;
  // Optional custom BibTeX entry for this paper
  bibtex?: string;
  // Changed: Now points to a .md file instead of holding raw text
  fileUrl?: string; 
}

export interface LogEntry {
  id: string;
  date: string;
  title: string;
  // Summary/Snippet for the card view
  summary: string; 
  // Changed: Now points to a .md file
  fileUrl?: string;
  category: 'Dev' | 'Life' | 'Reading';
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
