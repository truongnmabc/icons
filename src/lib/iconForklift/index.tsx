const IconForklift = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M23 17v2h-5V3h2v14h3zm-6.27-1.85c.17.42.27.87.27 1.35 0 1.93-1.57 3.5-3.5 3.5-1.4 0-2.6-.82-3.16-2H6.83A2.99 2.99 0 014 20c-1.66 0-3-1.34-3-3 0-.89.39-1.69 1-2.24V10h2V4h8l4.73 11.15zM5 17c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm8.65-4-2.97-7H6v4l2.92 3h4.73zM15 16.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"/></g>
      </svg>
    </div>
  );
};

export { IconForklift };
