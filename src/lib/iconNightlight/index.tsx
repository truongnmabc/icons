const IconNightlight = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><g><path d="M6,12c0-4.41,3.59-8,8-8c0.34,0,0.68,0.02,1.01,0.07 C13.1,6.23,12,9.05,12,12s1.1,5.77,3.01,7.93C14.68,19.98,14.34,20,14,20C9.59,20,6,16.41,6,12z" enable-background="new" opacity=".3"/><path d="M14,12c0-3.7,2.01-6.92,5-8.65C17.53,2.5,15.82,2,14,2C8.48,2,4,6.48,4,12s4.48,10,10,10c1.82,0,3.53-0.5,5-1.35 C16.01,18.92,14,15.7,14,12z M15.01,19.93C14.68,19.98,14.34,20,14,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c0.34,0,0.68,0.02,1.01,0.07C13.1,6.23,12,9.05,12,12S13.1,17.77,15.01,19.93z"/></g></g></g></g>
      </svg>
    </div>
  );
};

export { IconNightlight };
