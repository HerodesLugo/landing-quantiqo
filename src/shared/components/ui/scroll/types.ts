

export interface ScrollableSectionHandle {
  onScroll: (_direction: "next" | "prev") => boolean;
  jumpToCheckpoint?: (_checkpointIndex: number) => void;
  id?: string;
}

export interface SectionScrollerProps {
  children: React.ReactNode;
}