const IconParty = ({
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
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.95 6l-.59-.65L14.12 4H9.88L8.65 5.35l-.6.65H4v12h16V6h-4.05zM7 12c0-2.76 2.24-5 5-5 1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1zm10 0c0 2.76-2.24 5-5 5-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1z" opacity=".3"/><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l.59-.65L9.88 4h4.24l1.24 1.35.59.65H20v12zM9 12c0-1.66 1.34-3 3-3h3.98c-.92-1.21-2.35-2-3.98-2-2.76 0-5 2.24-5 5 0 .34.04.68.1 1h2.08c-.11-.31-.18-.65-.18-1zm6 0c0 1.66-1.34 3-3 3H8.02c.92 1.21 2.35 2 3.98 2 2.76 0 5-2.24 5-5 0-.34-.03-.68-.1-1h-2.08c.11.31.18.65.18 1z"/>
      </svg>
    </div>
  );
};

export { IconParty };
