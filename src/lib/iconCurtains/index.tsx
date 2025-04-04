const IconCurtains = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6,13.14V19h3.94C9.64,16.07,8.05,13.73,6,13.14z" opacity=".3"/><path d="M9.94,5H6v5.86C8.05,10.27,9.64,7.93,9.94,5z" opacity=".3"/><path d="M14.06,19H18v-5.86C15.95,13.73,14.36,16.07,14.06,19z" opacity=".3"/><path d="M18,10.86V5h-3.94C14.36,7.93,15.95,10.27,18,10.86z" opacity=".3"/><path d="M20,19V3H4v16H2v2h20v-2H20z M6,5h3.94C9.64,7.93,8.05,10.27,6,10.86V5z M6,19v-5.86c2.05,0.58,3.64,2.93,3.94,5.86H6z M11.95,19c-0.26-3.06-1.72-5.65-3.76-7c2.04-1.35,3.5-3.94,3.76-7h0.09c0.26,3.06,1.72,5.65,3.76,7c-2.04,1.35-3.5,3.94-3.76,7 H11.95z M18,19h-3.94c0.3-2.93,1.89-5.27,3.94-5.86V19z M18,10.86c-2.05-0.58-3.64-2.93-3.94-5.86H18V10.86z"/></g></g>
      </svg>
    </div>
  );
};

export { IconCurtains };
