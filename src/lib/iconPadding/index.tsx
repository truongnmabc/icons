const IconPadding = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M15,7h2v2h-2V7z M11,7h2v2h-2V7z M7,7h2v2H7V7z" enable-background="new" opacity=".3"/><path d="M3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5z M19,19H5V5h14V19z"/><rect height="2" width="2" x="15" y="7"/><rect height="2" width="2" x="7" y="7"/><rect height="2" width="2" x="11" y="7"/></g></g>
      </svg>
    </div>
  );
};

export { IconPadding };
