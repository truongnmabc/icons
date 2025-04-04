const IconFork = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M14.59,15.59L16,17l4-4l-4-4l-1.41,1.41L16.17,12c-1.51-0.33-3.73,0.08-5.17,1.36l0-6.53l1.59,1.59L14,7l-4-4L6,7 l1.41,1.41L9,6.83V21l2,0v-4c0.73-2.58,3.07-3.47,5.17-3L14.59,15.59z"/></g>
      </svg>
    </div>
  );
};

export { IconFork };
