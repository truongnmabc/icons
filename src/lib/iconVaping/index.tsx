const IconVaping = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><circle cx="10.5" cy="17.5" opacity=".3" r=".5"/><path d="M2,16.5h1c1.33,0,2.71-0.18,4-0.5v3c-1.29-0.32-2.67-0.5-4-0.5H2V16.5z M22,16v3H8v-3H22z M11,17.5 c0-0.28-0.22-0.5-0.5-0.5S10,17.22,10,17.5c0,0.28,0.22,0.5,0.5,0.5S11,17.78,11,17.5z M22,12.76V15h-1.5v-2.23 c0-2.24-1.76-4.07-4-4.07V7.2c1.02,0,1.85-0.83,1.85-1.85S17.52,3.5,16.5,3.5V2c1.85,0,3.35,1.5,3.35,3.35c0,0.93-0.38,1.77-1,2.38 C20.72,8.62,22,10.54,22,12.76z M19.5,13.36V15H18v-1.3c0-1.31-0.92-2.05-1.97-2.05H14.5c-1.85,0-3.35-1.5-3.35-3.35 s1.5-3.35,3.35-3.35v1.5c-1.02,0-1.85,0.73-1.85,1.75s0.83,2,1.85,2h1.53C17.9,10.2,19.5,11.55,19.5,13.36z"/></g>
      </svg>
    </div>
  );
};

export { IconVaping };
