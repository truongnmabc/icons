const IconSwipe = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M21.49,17.34L15.5,20l-4.92-1.96l4.18-0.88l-4.3-9.7c-0.11-0.25,0-0.55,0.25-0.66 c0.25-0.11,0.55,0,0.66,0.25l2.5,5.65l1.61-0.71L20.13,12L21.49,17.34z" opacity=".3"/><path d="M1,2h3.5H6v1.5V7H4.5V4.09c-1.86,2.11-3,4.88-3,7.91s1.14,5.79,3,7.91V17H6v3.5V22H4.5H1v-1.5h2.02 C1.13,18.18,0,15.22,0,12s1.13-6.18,3.02-8.5H1V2z M20.22,10l-4.15,0.01c-0.16-0.01-0.31,0.02-0.45,0.08l-0.59,0.26L13.2,6.25 c-0.56-1.26-2.04-1.83-3.3-1.27s-1.83,2.04-1.27,3.3l3.3,7.45l-1.87,0.39c-0.19,0.05-0.99,0.27-1.36,1.21L8,19.19l6.78,2.67 c0.49,0.19,1.05,0.18,1.53-0.04l5.99-2.65c0.89-0.4,1.37-1.38,1.13-2.32l-1.36-5.34C21.85,10.65,21.1,10.04,20.22,10z M21.49,17.34 L15.5,20l-4.92-1.96l4.18-0.88l-4.3-9.7c-0.11-0.25,0-0.55,0.25-0.66c0.25-0.11,0.55,0,0.66,0.25l2.5,5.65l1.61-0.71L20.13,12 L21.49,17.34z"/></g>
      </svg>
    </div>
  );
};

export { IconSwipe };
