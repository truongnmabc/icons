const IconSquare = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g opacity=".3"><rect height="14" width="14" x="5" y="5"/></g><g><path d="M3,3v18h18V3H3z M19,19H5V5h14V19z"/></g></g>
      </svg>
    </div>
  );
};

export { IconSquare };
