const IconSynagogue = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,6C3.45,6,3,6.45,3,7v1h2V7C5,6.45,4.55,6,4,6z" opacity=".3"/><rect height="9" opacity=".3" width="2" x="3" y="10"/><path d="M7,9.92V19h2v-3c0-1.65,1.35-3,3-3c1.65,0,3,1.35,3,3v3h2V9.92l-5-4.29L7,9.92z M13.5,10 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5S13.5,9.17,13.5,10z" opacity=".3"/><path d="M20,6c-0.55,0-1,0.45-1,1v1h2V7C21,6.45,20.55,6,20,6z" opacity=".3"/><rect height="9" opacity=".3" width="2" x="19" y="10"/><path d="M20,4c-1.66,0-3,1.34-3,3v0.29L12,3L7,7.29V7c0-1.66-1.34-3-3-3S1,5.34,1,7v14h10v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h10V7 C23,5.34,21.66,4,20,4z M5,19H3v-9h2V19z M5,8H3V7c0-0.55,0.45-1,1-1s1,0.45,1,1V8z M17,19h-2v-3c0-1.65-1.35-3-3-3 c-1.65,0-3,1.35-3,3v3H7V9.92l5-4.29l5,4.29V19z M21,19h-2v-9h2V19z M21,8h-2V7c0-0.55,0.45-1,1-1s1,0.45,1,1V8z"/><circle cx="12" cy="10" r="1.5"/></g></g>
      </svg>
    </div>
  );
};

export { IconSynagogue };
