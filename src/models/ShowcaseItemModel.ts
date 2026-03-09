export interface ShowcaseItemModel {
  id: string;
  title: string;
  image: string;
  description: string;
  googlePlayUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  tags?: string[];
}
