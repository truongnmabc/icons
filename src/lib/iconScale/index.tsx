const IconScale = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M18.87,4C17.5,5.19,15,6.12,12,6.12C9,6.12,6.5,5.19,5.13,4H18.87z" opacity=".3"/><path d="M14,11V8c4.56-0.58,8-3.1,8-6H2c0,2.9,3.44,5.42,8,6l0,3c-3.68,0.73-8,3.61-8,11h6v-2H4.13c0.93-6.83,6.65-7.2,7.87-7.2 s6.94,0.37,7.87,7.2H16v2h6C22,14.61,17.68,11.73,14,11z M18.87,4C17.5,5.19,15,6.12,12,6.12C9,6.12,6.5,5.19,5.13,4H18.87z M12,22 c-1.1,0-2-0.9-2-2c0-0.55,0.22-1.05,0.59-1.41C11.39,17.79,16,16,16,16s-1.79,4.61-2.59,5.41C13.05,21.78,12.55,22,12,22z"/></g>
      </svg>
    </div>
  );
};

export { IconScale };
