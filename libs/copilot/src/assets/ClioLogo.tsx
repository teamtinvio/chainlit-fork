interface Props {
  width?: string;
  height?: string;
  color?: string;
}

export const ClioLogo = ({
  width = '36px',
  height = '16px',
  color = 'white'
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 16"
      fill="none"
    >
      <path
        d="M26.3424 6.08334C27.4498 4.95478 28.7843 4.3905 30.346 4.3905C31.9006 4.3905 33.2315 4.95478 34.3389 6.08334C35.4463 7.21917 35.9999 8.588 35.9999 10.1898C35.9999 11.7916 35.4463 13.1605 34.3389 14.2963C33.2315 15.4321 31.9006 16.0001 30.346 16.0001C28.7843 16.0001 27.4498 15.4321 26.3424 14.2963C25.2351 13.1605 24.6814 11.7916 24.6814 10.1898C24.6814 8.588 25.2351 7.21917 26.3424 6.08334ZM27.8651 12.7345C28.5465 13.4335 29.3735 13.783 30.346 13.783C31.3114 13.783 32.1348 13.4335 32.8163 12.7345C33.5048 12.0283 33.8491 11.18 33.8491 10.1898C33.8491 9.1996 33.5048 8.35501 32.8163 7.65603C32.1348 6.94977 31.3114 6.59665 30.346 6.59665C29.3735 6.59665 28.5465 6.94977 27.8651 7.65603C27.1765 8.35501 26.8322 9.1996 26.8322 10.1898C26.8322 11.18 27.1765 12.0283 27.8651 12.7345Z"
        fill={color}
      />
      <path
        d="M20.848 4.70717C21.0539 4.49602 21.3059 4.39044 21.604 4.39044C21.9022 4.39044 22.1577 4.49602 22.3707 4.70717C22.5765 4.9256 22.6794 5.18771 22.6794 5.49352V14.886C22.6794 15.1918 22.5765 15.4539 22.3707 15.6724C22.1577 15.8908 21.9022 16 21.604 16C21.3059 16 21.0539 15.8908 20.848 15.6724C20.6351 15.4539 20.5286 15.1918 20.5286 14.886V5.49352C20.5286 5.18771 20.6351 4.9256 20.848 4.70717ZM20.7416 1.8785C20.5286 1.66735 20.4221 1.40887 20.4221 1.10307C20.4221 0.79727 20.5286 0.535154 20.7416 0.316724C20.9545 0.105575 21.2101 0 21.5082 0H21.6679C21.966 0 22.2216 0.105575 22.4345 0.316724C22.6475 0.535154 22.754 0.79727 22.754 1.10307C22.754 1.40887 22.6475 1.66735 22.4345 1.8785C22.2216 2.09693 21.966 2.20614 21.6679 2.20614H21.5082C21.2101 2.20614 20.9545 2.09693 20.7416 1.8785Z"
        fill={color}
      />
      <path
        d="M15.9291 0.327645C16.1349 0.109215 16.3869 0 16.685 0C16.9832 0 17.2387 0.109215 17.4517 0.327645C17.6575 0.538794 17.7605 0.79727 17.7605 1.10307V14.886C17.7605 15.1918 17.6575 15.4539 17.4517 15.6724C17.2387 15.8908 16.9832 16 16.685 16C16.3869 16 16.1349 15.8908 15.9291 15.6724C15.7161 15.4539 15.6096 15.1918 15.6096 14.886V1.10307C15.6096 0.79727 15.7161 0.538794 15.9291 0.327645Z"
        fill={color}
      />
      <path
        d="M11.8296 3.95358C10.7223 2.78862 9.37711 2.20614 7.79414 2.20614C6.23957 2.20614 4.91216 2.77406 3.81189 3.9099C2.70453 5.03845 2.15084 6.4 2.15084 7.99454C2.15084 9.58908 2.70453 10.9543 3.81189 12.0901C4.91216 13.2187 6.23957 13.7829 7.79414 13.7829C9.37711 13.7829 10.7223 13.2041 11.8296 12.0464C12.0355 11.828 12.2875 11.7188 12.5856 11.7188C12.8838 11.7115 13.1393 11.8171 13.3523 12.0355C13.5652 12.2466 13.6717 12.5051 13.6717 12.8109C13.6788 13.1167 13.5759 13.3788 13.3629 13.5973C11.8367 15.1991 9.98048 16 7.79414 16C5.6433 16 3.80834 15.2173 2.28926 13.6519C0.763088 12.0865 0 10.2007 0 7.99454C0 5.7884 0.763088 3.90626 2.28926 2.34812C3.80834 0.782708 5.6433 0 7.79414 0C9.98048 0 11.8403 0.80091 13.3736 2.40273C13.5794 2.62116 13.6823 2.88328 13.6823 3.18908C13.6752 3.49488 13.5652 3.75336 13.3523 3.9645C13.1393 4.17565 12.8838 4.28123 12.5856 4.28123C12.2875 4.28123 12.0355 4.17201 11.8296 3.95358Z"
        fill={color}
      />
    </svg>
  );
};
