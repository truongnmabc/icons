const IconU = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M6,9v12h2V9c0-2.21,1.79-4,4-4s4,1.79,4,4v4.17l-1.59-1.59L13,13l4,4l4-4l-1.41-1.41L18,13.17V9c0-3.31-2.69-6-6-6 S6,5.69,6,9z"/></g>
      </svg>
    </div>
  );
};

export { IconU };
