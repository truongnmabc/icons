const IconPunch = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="3" opacity=".3" width="8" x="8" y="3"/><path d="M5,20h14V8H5V20z M12,9c2.76,0,5,2.24,5,5s-2.24,5-5,5c-2.76,0-5-2.24-5-5S9.24,9,12,9z" opacity=".3"/><path d="M19,6h-1V1H6v5H5C3.9,6,3,6.9,3,8v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M8,3h8v3H8V3z M19,20H5V8 h14V20z"/><path d="M12,19c2.76,0,5-2.24,5-5s-2.24-5-5-5c-2.76,0-5,2.24-5,5S9.24,19,12,19z M12,10.5c1.93,0,3.5,1.57,3.5,3.5 s-1.57,3.5-3.5,3.5S8.5,15.93,8.5,14S10.07,10.5,12,10.5z"/><polygon points="13.85,15.14 12.5,13.79 12.5,11.5 11.5,11.5 11.5,14.21 13.14,15.85"/></g></g>
      </svg>
    </div>
  );
};

export { IconPunch };
