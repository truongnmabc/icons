const IconVideo = ({
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
            <rect
              height="8.86"
              opacity=".3"
              transform="matrix(0.2589 -0.9659 0.9659 0.2589 -2.6958 20.4865)"
              width="5.1"
              x="9.45"
              y="7.57"
            />
            <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,18V6h2.95l-2.33,8.73L16.82,18 H4z M15.62,15.61l-8.55-2.29l1.31-4.92l8.56,2.29L15.62,15.61z M20,18h-2.95l2.34-8.73L7.18,6H20V18z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export { IconVideo };
