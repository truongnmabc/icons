const IconDoor = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M13,19h5V5h-5V19z M14,11h2v2h-2V11z" opacity=".3"/><path d="M6,19h5V5H6V19z M8,11h2v2H8V11z" opacity=".3"/><path d="M20,19V5c0-1.1-0.9-2-2-2H6C4.9,3,4,3.9,4,5v14H3v2h18v-2H20z M11,19H6V5h5V19z M18,19h-5V5h5V19z"/><rect height="2" width="2" x="8" y="11"/><rect height="2" width="2" x="14" y="11"/></g></g>
      </svg>
    </div>
  );
};

export { IconDoor };
