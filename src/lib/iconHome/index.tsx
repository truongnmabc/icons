const IconHome = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17,11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5,3.57V11z M17,7h2v2h-2V7z" opacity=".3"/><polygon points="10,3 10,4.97 10.96,5.66 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3"/><polygon opacity=".3" points="3,12 3,19 5,19 5,14 11,14 11,19 13,19 13,12 8,8.5"/><rect height="2" width="2" x="17" y="7"/><rect height="2" width="2" x="17" y="11"/><rect height="2" width="2" x="17" y="15"/><path d="M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z"/></g></g>
      </svg>
    </div>
  );
};

export { IconHome };
