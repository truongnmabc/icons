const IconShower = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,7c-2.76,0-5,2.24-5,5h10C17,9.24,14.76,7,12,7z" opacity=".3"/><circle cx="8" cy="20" r="1"/><circle cx="16" cy="17" r="1"/><path d="M13,5.08V3h-2v2.08C7.61,5.57,5,8.47,5,12v2h14v-2C19,8.47,16.39,5.57,13,5.08z M7,12c0-2.76,2.24-5,5-5s5,2.24,5,5H7z"/><circle cx="16" cy="20" r="1"/><circle cx="12" cy="17" r="1"/><circle cx="8" cy="17" r="1"/><circle cx="12" cy="20" r="1"/></g></g>
      </svg>
    </div>
  );
};

export { IconShower };
