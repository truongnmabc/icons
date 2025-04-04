const IconFire = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M3,16h1.78c0.55-0.61,1.34-1,2.22-1s1.67,0.39,2.22,1H12v-3H3V16z" opacity=".3"/><path d="M14,16h0.78c0.55-0.61,1.34-1,2.22-1s1.67,0.39,2.22,1H21v-3h-7V16z" opacity=".3"/><path d="M22.9,10.69l-1.44-4.32C21.18,5.55,20.42,5,19.56,5H19V4c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v1h-2c-1.1,0-2,0.9-2,2 v4H1v5c0,1.1,0.9,2,2,2h1c0,1.66,1.34,3,3,3s3-1.34,3-3h4c0,1.66,1.34,3,3,3s3-1.34,3-3h3v-6.68C23,11.11,22.97,10.9,22.9,10.69z M7,19c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S7.55,19,7,19z M12,16H9.22C8.67,15.39,7.89,15,7,15s-1.67,0.39-2.22,1H3v-3h9V16 z M14,7h5.56l1.33,4H14V7z M17,19c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S17.55,19,17,19z M21,16h-1.78 c-0.55-0.61-1.34-1-2.22-1s-1.67,0.39-2.22,1H14v-3h7V16z"/><path d="M11,8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5z M5.25,8.5H3.5v-2h1.75V8.5z M8.5,8.5H6.75v-2H8.5V8.5z"/></g></g>
      </svg>
    </div>
  );
};

export { IconFire };
