const IconSnowing = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M6 12.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM4.75 6a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm12 8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm-9 12a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm3 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm3 12a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"/></g>
      </svg>
    </div>
  );
};

export { IconSnowing };
