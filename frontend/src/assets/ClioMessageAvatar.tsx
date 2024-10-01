interface Props {
  width?: string;
  height?: string;
  color?: string;
}

export const ClioMessageAvatar = ({
  width = '16px',
  height = '12px',
  color = 'white',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.59961 1.2002L6.83615 6.00019L1.59961 10.8002" stroke={color} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 10.7998L14.4 10.7999" stroke={color} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
