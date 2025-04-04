const IconDinner = ({
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
        <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M17.08,15.14C16.41,14.4,15.49,14,14.5,14c-1.35,0-2.58,0.79-3.16,2h6.32 C17.52,15.69,17.32,15.4,17.08,15.14z" enable-background="new" opacity=".3"/><polygon points="2,19 4,21 20,21 22,19"/><path d="M3,18h16.97c0,0,0,0,0,0c0.29-3.26-2.28-6-5.48-6c-2.35,0-4.35,1.48-5.14,3.55C8.94,15.32,8.48,15.17,8,15.08V9h1.75 C10.99,9,12,7.99,12,6.75h9v-1.5h-9C12,4.01,10.99,3,9.75,3H3v1.5h1v0.75H3v1.5h1V7.5H3V9h1v7.39C3.56,16.85,3.22,17.39,3,18z M14.5,14c0.99,0,1.91,0.4,2.58,1.14c0.24,0.26,0.44,0.55,0.58,0.86h-6.32C11.92,14.79,13.15,14,14.5,14z M8,4.5h2v0.75H8V4.5z M8,6.75h2V7.5H8V6.75z M5.5,4.5h1v0.75h-1V4.5z M5.5,6.75h1V7.5h-1V6.75z M5.5,9h1v6.06c-0.35,0.06-0.68,0.17-1,0.3V9z"/></g></g>
      </svg>
    </div>
  );
};

export { IconDinner };
