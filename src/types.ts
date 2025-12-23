export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ModuleItem {
  title: string;
  description: string;
  icon: React.ElementType;
  size: 'sm' | 'md' | 'lg';
}
