const IconTty = ({
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
        <g><rect fill="none" height="24" width="24" x="0"/><path d="M4.13,5C4.3,6.37,4.66,7.71,5.18,8.99l1.65-1.65L6.36,5H4.13z M15.66,16.17l-1.65,1.65 c1.28,0.52,2.63,0.87,3.99,1.05v-2.23L15.66,16.17z" opacity=".3"/><path d="M19.2,14.84l-3.67-0.73c-0.33-0.07-0.67,0.04-0.9,0.27L12.1,16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52 C8.86,8.14,8.96,7.8,8.9,7.48L8.16,3.8C8.07,3.34,7.66,3,7.18,3H3.03C2.47,3,2,3.47,2.03,4.03C2.2,6.92,3.05,9.63,4.43,12 c1.58,2.73,3.85,4.99,6.57,6.57c2.37,1.37,5.08,2.23,7.97,2.4c0.56,0.03,1.03-0.44,1.03-1v-4.15C20,15.34,19.66,14.93,19.2,14.84z M4.13,5h2.23l0.47,2.34L5.18,8.99C4.66,7.71,4.3,6.37,4.13,5z M18,18.87c-1.37-0.17-2.71-0.53-3.99-1.05l1.65-1.65L18,16.64V18.87 z M14,4h2v2h-2V4z M13,7h2v2h-2V7z M11,4h2v2h-2V4z M18,9h-2V7h2V9z M19,6h-2V4h2V6z M21,9h-2V7h2V9z M22,6h-2V4h2V6z M14,10h2v2 h-2V10z M11,10h2v2h-2V10z M19,12h-2v-2h2V12z M22,12h-2v-2h2V12z"/></g>
      </svg>
    </div>
  );
};

export { IconTty };
