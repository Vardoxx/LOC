type Stack = "js" | "ts" | "react" | "";

interface Lang {
  lgIcon: string;
  lg: string;
}

export interface CardItemsLibrary {
  id: number;
  src: string;
  text: string;
  lang: Lang;
  href: string;
  stack: Stack;
  favorite?: string;
}

export interface CardItemsHome {
  id: number;
  src: string;
  text: string;
  href: string;
}
