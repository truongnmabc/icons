const IconNewspaper = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M22,3l-1.67,1.67L18.67,3L17,4.67L15.33,3l-1.66,1.67L12,3l-1.67,1.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3v16 c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V3z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z"/></g>
      </svg>
    </div>
  );
};

export { IconNewspaper };
