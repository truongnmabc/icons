const IconBlind = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="11.5" cy="3.5" r="2"/><path d="M12.13,7.12c-0.17-0.35-0.44-0.65-0.8-0.85C10.72,5.91,9.99,5.93,9.4,6.24l0-0.01L4,9.3V14h2v-3.54l1.5-0.85 C7.18,10.71,7,11.85,7,13v5.33L4.4,21.8L6,23l3-4l0.22-3.54L11,18v5h2v-6.5l-1.97-2.81c-0.04-0.52-0.14-1.76,0.45-3.4 c0.75,1.14,1.88,1.98,3.2,2.41L20.63,23l0.87-0.5L16.02,13H17v-2c-0.49,0-2.88,0.17-4.08-2.21"/></g></g>
      </svg>
    </div>
  );
};

export { IconBlind };
