import { IconProps } from '../type';

const IconBack = ({
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12H5"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19L5 12L12 5"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { IconBack };
