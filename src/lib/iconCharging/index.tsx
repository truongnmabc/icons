const IconCharging = ({
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
        <g><rect fill="none" height="24" width="24"/><path d="M17,3v1H7V3H17 M17,20H7v1h10V20" opacity=".3"/><path d="M14.5,11l-3,6v-4h-2l3-6v4H14.5z M17,3H7v1h10V3 M17,20H7v1h10V20 M17,1c1.1,0,2,0.9,2,2v18c0,1.1-0.9,2-2,2H7 c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H17L17,1z M7,18h10V6H7V18L7,18z"/></g>
      </svg>
    </div>
  );
};

export { IconCharging };
