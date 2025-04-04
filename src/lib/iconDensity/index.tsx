const IconDensity = ({
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
      <svg width={width ?? '100%'} height={height ?? '100%'} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
        <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="18" x="3" y="2"/><rect height="2" width="18" x="3" y="20"/><rect height="2" width="18" x="3" y="14"/><rect height="2" width="18" x="3" y="8"/></g></g>
      </svg>
    </div>
  );
};

export { IconDensity };
