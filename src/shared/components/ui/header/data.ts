import { SubMenuData } from "@/shared/components/ui/header/SubMenu";

export interface NavMenuItem {
  id: number;
  label: string;
  subMenu?: SubMenuData;
}

export const NAV_MENU: NavMenuItem[] = [
  {
    id: 1,
    label: "work",
  },
  {
    id: 2,
    label: "industries",
    subMenu: {
      leftColumn: {
        title: "MAIN INDUSTRIES",
        items: [
          { label: "CRYPTO AND WEB3", href: "/industries/fintech" },
          { label: "FINTECH", href: "/industries/healthcare" },
          { label: "B2B AND ENT.", href: "/industries/ecommerce" },
          { label: "TECHNOLOGY", href: "/industries/real-estate" },
          { label: "STARTUPS AND VC", href: "/industries/logistics" },
        ],
      },
      rightColumn: {
        title: "OTHER INDUSTRIES",
        items: [
          { label: "BANKING", href: "/industries/web3" },
          { label: "REAL STATE", href: "/industries/ai" },
          { label: "HEALTH", href: "/industries/iot" },
          { label: "AI", href: "/industries/ar" },
          { label: "SUSTAINABILITY", href: "/industries/security" },
          { label: "SECURITY", href: "/industries/security" },
        ],
      },
    },
  },
  {
    id: 3,
    label: "solutions",
    subMenu: {
      leftColumn: {
        title: "MAIN SERVICES",
        items: [
          { label: "STRATEGY", href: "/solutions/custom-dev" },
          { label: "BRANDING", href: "/solutions/cloud" },
          { label: "PRODUCT DESIGNs", href: "/solutions/design" },
          { label: "MOTION AND 3D", href: "/solutions/qa" },
          { label: "DEVELOPMENT", href: "/solutions/devops" },
        ],
      },
      rightColumn: {
        title: "OTHER SERVICES",
        items: [
          { label: "NAMING", href: "/solutions/erp" },
          { label: "CONSULTING", href: "/solutions/crm" },
          { label: "FULL-SERV. DESIGN", href: "/solutions/analytics" },
          { label: "UI / UX AND PROT.", href: "/solutions/payments" },
          { label: "0 TO 1 LAUNCHS", href: "/solutions/chatbot" },
          { label: "01 TO 1 MVPS", href: "/solutions/chatbot" },
          { label: "OUTSOURCING", href: "/solutions/chatbot" },
        ],
      },
    },
  },
  {
    id: 4,
    label: "clients",
  },
  {
    id: 5,
    label: "about",
  },
];
