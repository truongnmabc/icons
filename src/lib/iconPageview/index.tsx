const IconPageview = ({
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
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16V6H4v12zm7.5-11c2.49 0 4.5 2.01 4.5 4.5 0 .88-.26 1.69-.7 2.39l2.44 2.43-1.42 1.42-2.44-2.44c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7z" opacity=".3"/><path d="M11.49 16c.88 0 1.7-.26 2.39-.7l2.44 2.44 1.42-1.42-2.44-2.43c.44-.7.7-1.51.7-2.39C16 9.01 13.99 7 11.5 7S7 9.01 7 11.5 9.01 16 11.49 16zm.01-7c1.38 0 2.5 1.12 2.5 2.5S12.88 14 11.5 14 9 12.88 9 11.5 10.12 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
      </svg>
    </div>
  );
};

export { IconPageview };
