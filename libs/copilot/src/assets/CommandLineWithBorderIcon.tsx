interface Props {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  paddingColor?: string;
  paddingOpacity?: number;
}

export const CommandLineWithBorderIcon = ({
  width = '44px',
  height = '44px',
  color = '#4D617A',
  backgroundColor = '#12181F',
  paddingColor = '#12181F',
  paddingOpacity = 0.4
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
    >
      <rect x="6" y="6" width="32" height="32" rx="6" fill={backgroundColor} />
      <rect
        x="3"
        y="3"
        width="38"
        height="38"
        rx="9"
        stroke={paddingColor}
        stroke-opacity={paddingOpacity}
        stroke-width="6"
      />
      <path
        d="M15.5996 17.2L20.8362 22L15.5996 26.7999"
        stroke={color}
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 26.8L28.4 26.8001"
        stroke={color}
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
