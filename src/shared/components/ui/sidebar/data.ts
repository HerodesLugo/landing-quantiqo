export type DropdownCol = {
  title: string;
  items: { label: string; href: string }[];
};

export type SidebarRoute = {
  label: string;
  href: string;
  isSelected?: boolean;
  dropdown?: [DropdownCol, DropdownCol];
};

export const SIDEBAR_ROUTES: SidebarRoute[] = [
  { label: "work", href: "/", isSelected: true },
  {
    label: "industries",
    href: "/",
    isSelected: false,
    dropdown: [
      {
        title: "MAIN INDUSTRIES",
        items: [
          { label: "CRYPTO AND WEB3", href: "/" },
          { label: "FINTECH", href: "/" },
          { label: "B2B AND ENT.", href: "/" },
          { label: "TECHNOLOGY", href: "/" },
          { label: "STARTUPS AND VC", href: "/" },
        ],
      },
      {
        title: "OTHER INDUSTRIES",
        items: [
          { label: "BANKING", href: "/" },
          { label: "REAL STATE", href: "/" },
          { label: "HEALTH", href: "/" },
          { label: "AI", href: "/" },
          { label: "SUSTAINABILITY", href: "/" },
          { label: "SECURITY", href: "/" },
        ],
      },
    ],
  },
  {
    label: "solutions",
    href: "/",
    isSelected: false,
    dropdown: [
      {
        title: "MAIN SERVICES",
        items: [
          { label: "STRATEGY", href: "/" },
          { label: "BRANDING", href: "/" },
          { label: "PRODUCT DESIGN", href: "/" },
          { label: "MOTION AND 3D", href: "/" },
          { label: "DEVELOPMENT", href: "/" },
        ],
      },
      {
        title: "OTHER SERVICES",
        items: [
          { label: "NAMING", href: "/" },
          { label: "CONSULTING", href: "/" },
          { label: "FULL-SERV. DESIGN", href: "/" },
          { label: "UI/ UX AND PROT.", href: "/" },
          { label: "0 TO 1 LAUNCHS", href: "/" },
          { label: "01 TO 1 MVPS", href: "/" },
          { label: "OUTSOURCING", href: "/" },
        ],
      },
    ],
  },
  { label: "services", href: "/", isSelected: false },
  { label: "clients", href: "/", isSelected: false },
  { label: "about", href: "/", isSelected: false },
  { label: "careers", href: "/", isSelected: false },
];

export const SOCIAL_LINKS = [
  { label: "X", href: "/discord" },
  { label: "Linkedin", href: "/Linkedin" },
  { label: "Behance", href: "/Behance" },
];
