
export interface BlogPostBodyItem {
  type: 'text' | 'image';
  content: string;
  alt?: string;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  body: BlogPostBodyItem[];
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  introduction: string[];
  avatar: string;
}

export type View = 'profile' | 'gallery' | 'blog';
