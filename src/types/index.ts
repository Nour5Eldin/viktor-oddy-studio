export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface MarqueeImage {
  id: string;
  url: string;
  alt: string;
}

export type ButtonVariant = "primary" | "secondary" | "tertiary";
