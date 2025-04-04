const IconRice = ({
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
        <rect fill="none" height="24" width="24"/><path d="M19.66,14c-0.66,1.92-2.24,3.54-4.4,4.39L14,18.88V20h-4v-1.12l-1.27-0.5c-2.16-0.85-3.74-2.47-4.4-4.39 H19.66" opacity=".3"/><path d="M19.66,14c-0.66,1.92-2.24,3.54-4.4,4.39L14,18.88V20h-4v-1.12l-1.27-0.5c-2.16-0.85-3.74-2.47-4.4-4.39H19.66 M12,2 C6.48,2,2,6.48,2,12c0,3.69,2.47,6.86,6,8.25V22h8v-1.75c3.53-1.39,6-4.56,6-8.25h0C22,6.48,17.52,2,12,2L12,2z M10,12V4.26 C10.64,4.1,11.31,4,12,4s1.36,0.1,2,0.26V12H10L10,12z M16,12V5.08c2.39,1.39,4,3.96,4,6.92H16L16,12z M4,12 c0-2.95,1.61-5.53,4-6.92V12H4L4,12z"/>
      </svg>
    </div>
  );
};

export { IconRice };
