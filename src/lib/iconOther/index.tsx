const IconOther = ({
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
        <rect fill="none" height="24" width="24"/><path d="M12,5.52L6,10.1V19h12v-8.9L12,5.52z M8,15c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C9,14.55,8.55,15,8,15z M12,15c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C13,14.55,12.55,15,12,15z M16,15 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C17,14.55,16.55,15,16,15z" opacity=".3"/><path d="M12,3L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19H6v-8.9l6-4.58l6,4.58V19z M9,14 c0,0.55-0.45,1-1,1s-1-0.45-1-1c0-0.55,0.45-1,1-1S9,13.45,9,14z M12,13c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1s-1-0.45-1-1 C11,13.45,11.45,13,12,13z M15,14c0-0.55,0.45-1,1-1s1,0.45,1,1c0,0.55-0.45,1-1,1S15,14.55,15,14z"/>
      </svg>
    </div>
  );
};

export { IconOther };
