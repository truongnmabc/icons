const IconPrivacy = ({
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
        <g><rect fill="none" height="24" width="24"/><path d="M12,3.19L5,6.3V11c0,4.52,2.98,8.69,7,9.93c4.02-1.23,7-5.41,7-9.93V6.3L12,3.19z M13,17h-2v-6h2V17z M13,9 h-2V7h2V9z" opacity=".3"/><path d="M12,3.19l7,3.11V11c0,4.52-2.98,8.69-7,9.93C7.98,19.69,5,15.52,5,11V6.3L12,3.19 M12,1L3,5v6c0,5.55,3.84,10.74,9,12 c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z"/></g>
      </svg>
    </div>
  );
};

export { IconPrivacy };
