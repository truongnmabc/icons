import { IconProps } from '../type';

const GetPro = ({
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
          d="M16.7002 18.9794H7.3002C6.8802 18.9794 6.4102 18.6494 6.2702 18.2494L2.1302 6.66938C1.5402 5.00938 2.2302 4.49938 3.6502 5.51938L7.5502 8.30938C8.2002 8.75938 8.9402 8.52938 9.2202 7.79938L10.9802 3.10938C11.5402 1.60938 12.4702 1.60938 13.0302 3.10938L14.7902 7.79938C15.0702 8.52938 15.8102 8.75938 16.4502 8.30938L20.1102 5.69937C21.6702 4.57937 22.4202 5.14938 21.7802 6.95938L17.7402 18.2694C17.5902 18.6494 17.1202 18.9794 16.7002 18.9794Z"
          stroke="#343F82"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 22H17.5"
          stroke="#343F82"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 14H14.5"
          stroke="#343F82"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { GetPro };
