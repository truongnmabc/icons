const IconBalance = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><circle cx="12" cy="5" opacity=".3" r="1"/><path d="M13,7.83c0.85-0.3,1.53-0.98,1.83-1.83H18l-3,7c0,1.66,1.57,3,3.5,3s3.5-1.34,3.5-3l-3-7h2V4h-6.17 C14.42,2.83,13.31,2,12,2S9.58,2.83,9.17,4L3,4v2h2l-3,7c0,1.66,1.57,3,3.5,3S9,14.66,9,13L6,6h3.17c0.3,0.85,0.98,1.53,1.83,1.83 V19H2v2h20v-2h-9V7.83z M20.37,13h-3.74l1.87-4.36L20.37,13z M7.37,13H3.63L5.5,8.64L7.37,13z M12,6c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,5.55,12.55,6,12,6z"/></g>
      </svg>
    </div>
  );
};

export { IconBalance };
