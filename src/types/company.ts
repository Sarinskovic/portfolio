// src/types/elleDecor.ts
export interface Article {
  title: string;
  url: string;
}

export interface CompanyProps {
  order: number;
  title: string;
  logo: string;
  path: string;
  service: string;
  description: string;
  articles: Article[];
}
