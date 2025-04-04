const IconGenerating = ({
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
        <rect fill="none" height="24" width="24"/><path d="M9,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S12.31,6,9,6z M12,10.5h-2v5H8v-5H6V9h6V10.5z" opacity=".3"/><path d="M9,4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8C17,7.58,13.42,4,9,4z M9,18c-3.31,0-6-2.69-6-6s2.69-6,6-6 s6,2.69,6,6S12.31,18,9,18z M12,10.5h-2v5H8v-5H6V9h6V10.5z M20.25,3.75L23,5l-2.75,1.25L19,9l-1.25-2.75L15,5l2.75-1.25L19,1 L20.25,3.75z M20.25,17.75L23,19l-2.75,1.25L19,23l-1.25-2.75L15,19l2.75-1.25L19,15L20.25,17.75z"/>
      </svg>
    </div>
  );
};

export { IconGenerating };
