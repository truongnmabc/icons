import { IconProps } from '../type';

const IconEdit = ({
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
          d="M7.33301 1.83331H5.99967C2.66634 1.83331 1.33301 3.16665 1.33301 6.49998V10.5C1.33301 13.8333 2.66634 15.1666 5.99967 15.1666H9.99967C13.333 15.1666 14.6663 13.8333 14.6663 10.5V9.16665"
          stroke="#5497FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6933 2.51332L5.43992 7.76665C5.23992 7.96665 5.03992 8.35999 4.99992 8.64665L4.71325 10.6533C4.60659 11.38 5.11992 11.8867 5.84659 11.7867L7.85325 11.5C8.13325 11.46 8.52659 11.26 8.73325 11.06L13.9866 5.80665C14.8933 4.89999 15.3199 3.84665 13.9866 2.51332C12.6533 1.17999 11.5999 1.60665 10.6933 2.51332Z"
          stroke="#5497FF"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.94043 3.26666C10.3871 4.86 11.6338 6.10666 13.2338 6.56"
          stroke="#5497FF"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { IconEdit };
