const IconHourglass = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="8,7.5 12,11.5 16,7.5 16,4 8,4"/><polygon opacity=".3" points="8,7.5 12,11.5 16,7.5 16,4 8,4"/><path d="M18,2H6v6l4,4l-3.99,4.01L6,22h12l-0.01-5.99L14,12l4-3.99V2z M16,16.5V20H8v-3.5l4-4L16,16.5z M16,7.5l-4,4l-4-4V4h8V7.5 z"/></g></g>
      </svg>
    </div>
  );
};

export { IconHourglass };
