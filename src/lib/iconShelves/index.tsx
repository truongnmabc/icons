const IconShelves = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M19 1v2H5V1H3v22h2v-2h14v2h2V1h-2zm0 4v6h-6V7H7v4H5V5h14zm-2 14v-4h-6v4H5v-6h14v6h-2z"/></g>
      </svg>
    </div>
  );
};

export { IconShelves };
