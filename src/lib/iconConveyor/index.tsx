const IconConveyor = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M19 15H5c-1.66 0-3 1.34-3 3s1.34 3 3 3h14c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1zM9 4v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1zm7 4h-4V6.02h4V8zM2 9.02h4.94v1.91H2V9.02zm2.01-3h2.93v1.96H4.01V6.02z"/></g>
      </svg>
    </div>
  );
};

export { IconConveyor };
