

export interface ScrollableSectionHandle {
  onScroll: (_direction: "next" | "prev") => boolean;
  id?: string;
}

export interface SectionScrollerProps {
  children: React.ReactNode;
}