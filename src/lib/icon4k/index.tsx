const Icon4k = ({
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
      <svg width={width ?? '100%'} height={height ?? '100%'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5v14h14V5zm-7 8.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1v1.51zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3 2 3z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2zM5 5h14v14H5V5zm6 4H9.5v3H8V9H6.5v4.5h3V15H11v-1.49h1V12h-1zm5.5 0l-2 3 2 3h1.7l-2-3 2-3zM13 9v6h1.5V9z"/>
      </svg>
    </div>
  );
};

export { Icon4k };
