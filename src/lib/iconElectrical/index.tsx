const IconElectrical = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M20,15h-2v-2h2c0.55,0,1,0.45,1,1v0C21,14.55,20.55,15,20,15z"/><path d="M20,19h-2v-2h2c0.55,0,1,0.45,1,1v0C21,18.55,20.55,19,20,19z"/><path d="M14,12L14,12L14,12c-1.1,0-2,0.9-2,2v0h-2v4h2v0c0,1.1,0.9,2,2,2h0h3l0,0v-8H14z"/><path d="M4,5L4,5c0,0.55,0.45,1,1,1h3.5C9.33,6,10,6.67,10,7.5v0C10,8.33,9.33,9,8.5,9H7c-2.21,0-4,1.79-4,4v0c0,2.21,1.79,4,4,4h2 v-2H7c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h1.5c1.93,0,3.5-1.57,3.5-3.5v0C12,5.57,10.43,4,8.5,4H5C4.45,4,4,4.45,4,5z"/></g>
      </svg>
    </div>
  );
};

export { IconElectrical };
