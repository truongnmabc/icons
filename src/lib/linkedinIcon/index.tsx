import { IconProps } from "../type";

const LinkedinIcon = ({
  width = 24,
  height = 25,
  className,
  style,
  onClick,
}: IconProps) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_6007_25861)">
          <path
            d="M24 12.0703C24 18.6978 18.6274 24.0703 12 24.0703C5.37258 24.0703 0 18.6978 0 12.0703C0 5.4429 5.37258 0.0703125 12 0.0703125C18.6274 0.0703125 24 5.4429 24 12.0703Z"
            fill="white"
          />
          <g clip-path="url(#clip1_6007_25861)">
            <path
              d="M7.02234 5.78125C6.05992 5.78125 5.43066 6.41323 5.43066 7.24387C5.43066 8.05618 6.04117 8.70618 6.98541 8.70618H7.00368C7.98493 8.70618 8.5956 8.05618 8.5956 7.24387C8.57725 6.41323 7.98493 5.78125 7.02234 5.78125Z"
              fill="#343F82"
            />
            <path
              d="M5.59717 9.86133H8.41074V18.3261H5.59717V9.86133Z"
              fill="#343F82"
            />
            <path
              d="M15.3165 9.66406C13.7987 9.66406 12.7809 11.0903 12.7809 11.0903V9.86273H9.96729V18.3275H12.7808V13.6004C12.7808 13.3474 12.7991 13.0947 12.8735 12.9137C13.0769 12.4084 13.5397 11.8849 14.317 11.8849C15.3351 11.8849 15.7423 12.6612 15.7423 13.7991V18.3275H18.5557V13.4739C18.5557 10.8739 17.1675 9.66406 15.3165 9.66406Z"
              fill="#343F82"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6007_25861">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.0703125)"
            />
          </clipPath>
          <clipPath id="clip1_6007_25861">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(5 5.07031)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { LinkedinIcon };
