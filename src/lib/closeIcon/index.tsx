const CloseIcon = ({
  color = '#212121',
  className,
  width,
  height,
  onClick,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M18.3 5.70996C18.1131 5.5227 17.8595 5.41747 17.595 5.41747C17.3305 5.41747 17.0768 5.5227 16.89 5.70996L12 10.59L7.10997 5.69996C6.92314 5.5127 6.66949 5.40747 6.40497 5.40747C6.14045 5.40747 5.8868 5.5127 5.69997 5.69996C5.30997 6.08996 5.30997 6.71996 5.69997 7.10996L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10996C18.68 6.72996 18.68 6.08996 18.3 5.70996Z"
            fill={color}
          />
        </g>
      </svg>
    </div>
  );
};

export { CloseIcon };
