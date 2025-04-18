import { IconProps } from "../type";

const FacebookIcon = ({
  color = "#212121",
  width = 24,
  height = 24,
  className,
  style,
  onClick,
}: IconProps) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2793_1286)">
          <path
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37259 24 0 18.6274 0 12C0 5.37258 5.37259 0 12 0C18.6274 0 24 5.37258 24 12Z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0613 12.6703V21.2589C10.0613 21.3985 10.1661 21.4683 10.2708 21.4683H13.4479C13.5875 21.4683 13.6573 21.3635 13.6573 21.2589V12.5307H15.9616C16.0662 12.5307 16.171 12.4259 16.171 12.3212L16.3805 9.70274C16.3805 9.56309 16.2758 9.45834 16.171 9.45834H13.6573V7.60798C13.6573 7.15411 14.0065 6.80498 14.4603 6.80498H16.2409C16.3805 6.80498 16.4503 6.70024 16.4503 6.5955V3.97705C16.4503 3.83739 16.3455 3.76758 16.2409 3.76758H13.2384C11.4578 3.76758 10.0264 5.199 10.0264 6.97954V9.52817H8.42041C8.28076 9.52817 8.21094 9.63291 8.21094 9.73765V12.3562C8.21094 12.4958 8.31567 12.5656 8.42041 12.5656H10.0264V12.6703H10.0613Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_2793_1286">
            <rect width={24} height={24} fill={color} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { FacebookIcon };
