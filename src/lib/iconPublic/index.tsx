const IconPublic = ({
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
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.99 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1h-2v2h6c.55 0 1 .45 1 1v3h1c.89 0 1.64.59 1.9 1.4C19.19 15.98 20 14.08 20 12c0-3.35-2.08-6.23-5.01-7.41zM8.99 16v-1l-4.78-4.78C4.08 10.79 4 11.39 4 12c0 4.07 3.06 7.43 6.99 7.93V18c-1.1 0-2-.9-2-2z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.01 17.93C7.06 19.43 4 16.07 4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"/>
      </svg>
    </div>
  );
};

export { IconPublic };
