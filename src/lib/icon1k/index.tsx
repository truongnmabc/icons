const Icon1k = ({
  width = '100%',
  height = '100%',
  style,
  onClick,
  className,
}: {
  color?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path
              d="M5,19h14V5H5V19z M12,9h1.5v2.25L15.25,9H17l-2.25,3L17,15h-1.75l-1.75-2.25V15H12V9z M7,9h3v6H8.5v-4.5H7 V9z"
              opacity=".3"
            />
            <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
            <polygon points="8.5,15 10,15 10,9 7,9 7,10.5 8.5,10.5" />
            <polygon points="13.5,12.75 15.25,15 17,15 14.75,12 17,9 15.25,9 13.5,11.25 13.5,9 12,9 12,15 13.5,15" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export { Icon1k };
