export interface NavLinkTypes {
  name: string;
  href: string;
  LinkIcon: any;
  tag?: {
    type: "text" | "num";
    content: string | number;
  };
}

export interface NavLinkItemProps {
  link: NavLinkTypes;
  pathName: string;
}

export interface SocialIconProps {
  type: string;
  href: string;
  Icon: any;
}
