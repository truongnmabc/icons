const IconStadium = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M5,10.04C6.38,10.53,8.77,11,12,11s5.62-0.47,7-0.96C19,9.86,16.22,9,12,9S5,9.86,5,10.04z M20,11.8 c-1.82,0.73-4.73,1.2-8,1.2s-6.18-0.47-8-1.2v6.78c0.61,0.41,2.36,1.01,5,1.28V16h6v3.86c2.64-0.27,4.39-0.87,5-1.28V11.8z" opacity=".3"/><path d="M7,5L3,7V3L7,5z M18,3v4l4-2L18,3z M11,2v4l4-2L11,2z M13,18h-2l0,4c-5.05-0.15-9-1.44-9-3v-9c0-1.66,4.48-3,10-3 s10,1.34,10,3v9c0,1.56-3.95,2.85-9,3L13,18z M5,10.04C6.38,10.53,8.77,11,12,11s5.62-0.47,7-0.96C19,9.86,16.22,9,12,9 S5,9.86,5,10.04z M20,11.8c-1.82,0.73-4.73,1.2-8,1.2s-6.18-0.47-8-1.2v6.78c0.61,0.41,2.36,1.01,5,1.28V16h6v3.86 c2.64-0.27,4.39-0.87,5-1.28V11.8z"/></g>
      </svg>
    </div>
  );
};

export { IconStadium };
