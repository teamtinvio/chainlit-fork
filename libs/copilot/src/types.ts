export interface IWidgetConfig {
  chainlitServer: string;
  showCot?: boolean;
  accessToken?: string;
  theme?: 'light' | 'dark';
  fontFamily?: string;
  button?: {
    containerId?: string;
    imageUrl?: string;
    style?: {
      position?: string;
      left?: string;
      right?: string;
      top?: string;
      bottom?: string;
      size?: string;
      width?: string;
      height?: string;
      bgcolor?: string;
      color?: string;
      bgcolorHover?: string;
      borderColor?: string;
      borderWidth?: string;
      borderStyle?: string;
      borderRadius?: string;
      boxShadow?: string;
    };
  };
  chatPopover?: {
    style?: {
      inset?: string;
      width?: string;
      expandedWidth?: string;
      height?: string;
    };
  };
}

export interface CopilotHandle {
  setIsOpen: (value: ((prev: boolean) => boolean) | boolean) => void;
}
