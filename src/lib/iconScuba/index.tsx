const IconScuba = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M1,13c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S1,14.1,1,13z M8.89,10.11l4.53-1.21L12.64,6L8.11,7.21 c-0.8,0.21-1.28,1.04-1.06,1.84l0,0C7.27,9.85,8.09,10.33,8.89,10.11z M20.5,5.9L23,3l-1-1l-3,3l-2,4l-9.48,2.87 c-0.82,0.2-1.39,0.89-1.5,1.68L5.24,18L2.4,21.8L4,23l3-4l1.14-3.14L14,14l5-3.5L20.5,5.9z"/></g>
      </svg>
    </div>
  );
};

export { IconScuba };
