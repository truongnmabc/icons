const ArrowLeft = ({
  color = '#212121',
  className,
  width,
  height,
  onClick,
  style,
}: {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.9048 13.0286L5.76511 8.8889C5.27622 8.40001 5.27622 7.60001 5.76511 7.11112L9.9048 2.97144"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { ArrowLeft };
