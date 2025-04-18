const IconHigh = ({
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
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6H5v12h14V6zm-8 9H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-3.5h2v3h-2z" opacity=".3"/><path d="M3 6v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm2 0h14v12H5V6zm4.5 5.5h-2V9H6v6h1.5v-2h2v2H11V9H9.5zM17 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h.75v1.5h1.5V15H17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5h-2v-3h2v3z"/>
      </svg>
    </div>
  );
};

export { IconHigh };
