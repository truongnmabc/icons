const IconSync = ({
  width = '100%',
  height = '100%',
  color = '#212121',
  style,
  onClick,
  className,
}:{
  color?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      <svg width={width ?? '100%'} height={height ?? '100%'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M.01 0h24v24h-24V0z" fill="none"/><path d="M12.01 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46c.78-1.23 1.24-2.69 1.24-4.26 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.25 7.74C4.47 8.97 4.01 10.43 4.01 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
      </svg>
    </div>
  );
};

export { IconSync };
