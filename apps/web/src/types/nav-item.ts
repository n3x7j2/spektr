export type NavItem = {
  path: string;
  text: string;
  module: string;
  disabled?: boolean;
  icon?: string | React.ReactElement;
  children?: (data?: any) => NavItem[];
} & (
  | {
      exact?: true;
      startsWith?: never;
    }
  | {
      exact: false;
      startsWith: string;
    }
);
