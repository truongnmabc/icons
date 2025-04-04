const IconPlay = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,4v7L9.5,9.5L7,11V4H5v16h6.29C11.1,19.37,11,18.7,11,18c0-3.53,2.61-6.43,6-6.92V4H12z" opacity=".3"/><path d="M5,20V4h2v7l2.5-1.5L12,11V4h5v7.08c0.33-0.05,0.66-0.08,1-0.08s0.67,0.03,1,0.08V4c0-1.1-0.9-2-2-2H5C3.9,2,3,2.9,3,4v16 c0,1.1,0.9,2,2,2h7.26c-0.42-0.6-0.75-1.28-0.97-2H5z"/><path d="M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M16.75,20.5v-5l4,2.5L16.75,20.5z"/></g></g>
      </svg>
    </div>
  );
};

export { IconPlay };
