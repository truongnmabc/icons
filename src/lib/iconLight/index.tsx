const IconLight = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M10,17c0,1.1,0.9,2,2,2s2-0.9,2-2h-2H10z" opacity=".3"/><path d="M13,6.06V3h-2v3.06c-4.5,0.5-8,4.31-8,8.93C3,16.1,3.9,17,5.01,17H8c0,2.21,1.79,4,4,4s4-1.79,4-4h2.99 C20.1,17,21,16.1,21,14.99C21,10.37,17.5,6.56,13,6.06z M12,19c-1.1,0-2-0.9-2-2h2h2C14,18.1,13.1,19,12,19z M12,15H5 c0-3.86,3.14-7,7-7s7,3.14,7,7H12z"/></g></g>
      </svg>
    </div>
  );
};

export { IconLight };
