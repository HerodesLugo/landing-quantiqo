export interface StatItemData {
  value: string;
  label: string;
}

export interface TagGroupData {
  title: string;
  tags: string[];
  columns?: number;
}

export interface ProjectInfoCardData {
  industry: string;
  stats: StatItemData[];
  websiteUrl: string;
  websiteLabel: string;
  logoSrc?: string;
  logoClassName?: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

export interface PortfolioOverviewProps {
  title: string;
  description: string;
  infoCard: ProjectInfoCardData;
  buttonLabel?: string;
  buttonUrl?: string;
  tagGroups?: TagGroupData[];
}
