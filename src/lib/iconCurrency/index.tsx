const IconCurrency = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><polygon points="13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3"/></g>
      </svg>
    </div>
  );
};

export { IconCurrency };
