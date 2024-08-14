type Stack = "js" | "ts" | "react" | "";

export interface CardItems {
  id: number;
  src: string;
  text: string;
  lang: string;
  href: string;
  stack: Stack;
  favorite?: string;
}
