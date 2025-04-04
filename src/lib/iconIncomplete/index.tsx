const IconIncomplete = ({
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
        <rect fill="none" height="24" width="24"/><path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-2.76,1.12-5.26,2.93-7.07L12,12V2C17.52,2,22,6.48,22,12z"/>
      </svg>
    </div>
  );
};

export { IconIncomplete };
