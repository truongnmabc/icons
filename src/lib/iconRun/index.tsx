const IconRun = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-4.42,0-8,3.58-8,8s3.58,8,8,8s8-3.58,8-8S16.42,4,12,4z M13.5,6c0.55,0,1,0.45,1,1 c0,0.55-0.45,1-1,1s-1-0.45-1-1C12.5,6.45,12.95,6,13.5,6z M16,12c-0.7,0-2.01-0.54-2.91-1.76l-0.41,2.35L14,14.03V18h-1v-3.58 l-1.11-1.21l-0.52,2.64L7.6,15.08l0.2-0.98l2.78,0.57l0.96-4.89L10,10.35V12H9V9.65l3.28-1.21c0.49-0.18,1.03,0.06,1.26,0.53 C14.37,10.67,15.59,11,16,11V12z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z"/><path d="M13.54,8.97c-0.23-0.47-0.76-0.71-1.26-0.53L9,9.65V12h1v-1.65l1.54-0.57l-0.96,4.89L7.8,14.1l-0.2,0.98l3.76,0.77 l0.52-2.64L13,14.42V18h1v-3.97l-1.32-1.44l0.41-2.35C13.99,11.46,15.3,12,16,12v-1C15.59,11,14.37,10.67,13.54,8.97z"/><circle cx="13.5" cy="7" r="1"/></g></g>
      </svg>
    </div>
  );
};

export { IconRun };
