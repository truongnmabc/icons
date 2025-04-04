const IconArea = ({
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
        <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="19,16.95 12,11.5 8,17 5,14.6 5,11 7.44,12.83 12.4,5.88 16.3,9 19,9"/><path d="M17,7l-5-4l-5,7L3,7v13h18V7H17z M19,16.95l-7-5.45L8,17l-3-2.4V11l2.44,1.83l4.96-6.95L16.3,9H19V16.95z"/>
      </svg>
    </div>
  );
};

export { IconArea };
