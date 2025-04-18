import { IconProps } from "../type";

const YoutubeIcon = ({
  color = "#7B705C",
  width = 24,
  height = 24,
  className,
  style,
  onClick,
}: IconProps) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        width={width ?? "100%"}
        height={height ?? "100%"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2793_1292)">
          <path
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37259 5.37258 0 12 0C18.6274 0 24 5.37259 24 12Z"
            fill="#fff"
          />
          <path
            d="M19.6013 10.0841C19.6013 8.2886 18.1349 6.82227 16.3394 6.82227H7.90052C6.105 6.82227 4.63867 8.2886 4.63867 10.0841V14.0343C4.63867 15.8298 6.105 17.2961 7.90052 17.2961H16.3394C18.1349 17.2961 19.6013 15.8298 19.6013 14.0343V10.0841ZM14.2447 12.2687L10.8631 14.124C10.7135 14.2138 10.5938 14.0941 10.5938 13.9445V10.1141C10.5938 9.93449 10.7434 9.84471 10.8631 9.93449L14.2447 11.8797C14.4242 11.9694 14.3943 12.1789 14.2447 12.2687Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_2793_1292">
            <rect width="24" height="24" fill={color} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { YoutubeIcon };
