const IconSensor = ({
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
        <g><rect fill="none" height="24" width="24"/><path d="M18,4v7h-4v-1h-4v1H6V4H18z M6,20v-7h12v7H6z" opacity=".3"/><path d="M18,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,4v7h-4v-1h-4v1H6V4H18z M6,20 v-7h12v7H6z"/></g>
      </svg>
    </div>
  );
};

export { IconSensor };
