import { IconProps } from '../type';

const IconDelete = ({
  width = 24,
  height = 24,
  className,
  style,
  onClick,
}: IconProps) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 4.48665C11.78 4.26665 9.54667 4.15332 7.32 4.15332C6 4.15332 4.68 4.21999 3.36 4.35332L2 4.48665"
          stroke="#F14A4A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.66699 3.81331L5.81366 2.93998C5.92033 2.30665 6.00033 1.83331 7.12699 1.83331H8.87366C10.0003 1.83331 10.087 2.33331 10.187 2.94665L10.3337 3.81331"
          stroke="#F14A4A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5669 6.59332L12.1336 13.3067C12.0603 14.3533 12.0003 15.1667 10.1403 15.1667H5.86026C4.00026 15.1667 3.94026 14.3533 3.86693 13.3067L3.43359 6.59332"
          stroke="#F14A4A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.88672 11.5H9.10672"
          stroke="#F14A4A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.33301 8.83331H9.66634"
          stroke="#F14A4A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { IconDelete };
