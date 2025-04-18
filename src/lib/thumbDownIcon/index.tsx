const ThumbDownIcon = ({
  onClick,
  width = 26,
  height = 26,
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  width?: number;
  height?: number;
}) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.52 5.65002L13.42 3.25002C13.02 2.85002 12.12 2.65002 11.52 2.65002H7.71998C6.51998 2.65002 5.21998 3.55002 4.91998 4.75002L2.51998 12.05C2.01998 13.45 2.91998 14.65 4.41998 14.65H8.41998C9.01998 14.65 9.51998 15.15 9.41998 15.85L8.91998 19.05C8.71998 19.95 9.31998 20.95 10.22 21.25C11.02 21.55 12.02 21.15 12.42 20.55L16.52 14.45"
          fill={onClick ? '#7C6F5B' : '#F5F4EE'}
          stroke={onClick ? '#7C6F5B' : '#7C6F5B'}
        />
        <path
          d="M21.6199 5.65V15.45C21.6199 16.85 21.0199 17.35 19.6199 17.35H18.6199C17.2199 17.35 16.6199 16.85 16.6199 15.45V5.65C16.6199 4.25 17.2199 3.75 18.6199 3.75H19.6199C21.0199 3.75 21.6199 4.25 21.6199 5.65Z"
          stroke="#7C6F5B"
          fill={onClick ? '#7C6F5B' : '#7C6F5B'}
        />
      </svg>
    </div>
  );
};
export { ThumbDownIcon };
