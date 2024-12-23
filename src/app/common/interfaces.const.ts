export interface ITopbar {
    logo?: ITopbarLogo,
    buttons?: IButton []
  }
  
  export interface ITopbarLogo {
    src?: string,
    text?: string,
    height?: number,
    wight?: number
  }
  
  export interface IButton {
    type?: IButtonType,
    icon?: string,
    label?: string,
    routerLink?: string;
    click?: () => {}
  }

  export enum IButtonType {
    ICON = 'ICON',
    TEXT = 'TEXT',
    BUTTON = 'BUTTON'
  }