export interface VisionItemData {
  title: string;
  body: string;
}

export interface VisionSectionProps {
  heading: string;
  decoratorSrc: string;
  items: VisionItemData[];
  isColumn?: boolean;
}
