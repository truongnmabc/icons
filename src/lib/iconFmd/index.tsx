const IconFmd = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,4c-3.35,0-6,2.57-6,6.2c0,2.34,1.95,5.44,6,9.14c4.05-3.7,6-6.79,6-9.14 C18,6.57,15.35,4,12,4z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" enable-background="new" opacity=".3"/><path d="M12,8c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C14,8.9,13.1,8,12,8z M12,2c-4.2,0-8,3.22-8,8.2 c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,19.33c-4.05-3.7-6-6.79-6-9.14C6,6.57,8.65,4,12,4 s6,2.57,6,6.2C18,12.54,16.05,15.64,12,19.33z"/></g></g>
      </svg>
    </div>
  );
};

export { IconFmd };
