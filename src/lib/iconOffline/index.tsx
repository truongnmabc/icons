const IconOffline = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M6,5H4v16c0,1.1,0.9,2,2,2h10v-2H6V5z"/></g><g><path d="M18,1h-8C8.9,1,8,1.9,8,3v14c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V3C20,1.9,19.1,1,18,1z M18,17h-8v-1h8V17z M18,14h-8V6h8 V14z M18,4h-8V3h8V4z"/></g><g><path d="M12.5,10.25h2V12L17,9.5L14.5,7v1.75H12c-0.55,0-1,0.45-1,1V12h1.5V10.25z"/></g></g></g>
      </svg>
    </div>
  );
};

export { IconOffline };
