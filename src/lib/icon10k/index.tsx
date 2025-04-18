const Icon10k = ({
  width = '100%',
  height = '100%',
  color = '#212121',
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
            <rect height="3" opacity=".3" width="1.5" x="10" y="10.5" />
            <polygon opacity=".3" points="19,15 19,9 16.75,12" />
            <path
              d="M5,9h2.5v6H6v-4.5H5V19h14v-4h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25,9H19V5H5V9z M8.5,10 c0-0.55,0.45-1,1-1H12c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H9.5c-0.55,0-1-0.45-1-1V10z"
              opacity=".3"
            />
            <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,9v6v4H5v-8.5h1V15h1.5V9H5V5 h14V9z" />
            <polygon points="15.5,11.25 15.5,9 14,9 14,15 15.5,15 15.5,12.75 17.25,15 19,15 16.75,12 19,9 17.25,9" />
            <path d="M9.5,15H12c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H9.5c-0.55,0-1,0.45-1,1v4C8.5,14.55,8.95,15,9.5,15z M10,10.5h1.5v3 H10V10.5z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export { Icon10k };
