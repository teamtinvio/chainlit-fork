interface Props {
  width?: string;
  height?: string;
  color?: string;
}

export const MinimizeIcon = ({
  width = '14px',
  height = '14px',
  color = 'white'
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 2"
      fill="none"
    >
      <path
        d="M1 1H13"
        stroke={color}
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
