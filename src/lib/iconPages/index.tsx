const IconPages = ({
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
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 7l4 1V5H5v6h3zm1 6H5v6h6v-3l-4 1zm9 4l-4-1v3h6v-6h-3zm-4-9l4-1-1 4h3V5h-6z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 5h6v3L7 7l1 4H5V5zm6 14H5v-6h3l-1 4 4-1v3zm-1.63-4.37l.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63-2.63-.91-2.63.91zM19 19h-6v-3l4 1-1-4h3v6zm0-8h-3l1-4-4 1V5h6v6z"/>
      </svg>
    </div>
  );
};

export { IconPages };
