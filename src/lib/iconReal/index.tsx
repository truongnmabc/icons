const IconReal = ({
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
        <rect fill="none" height="24" width="24"/><path d="M10.5,9.44l5.32,1.99c1.24,0.46,2.21,1.41,2.74,2.57L19,14V7.5L14,4L9,7.5V9h0.33L10.5,9.44z M14.5,7h1v1h-1 V7z M14.5,9h1v1h-1V9z M12.5,7h1v1h-1V7z M12.5,9h1v1h-1V9z M3,13h2v7H3V13z M19.9,18.57l-5.93,1.84L7,18.48V13h1.61l5.82,2.17 C14.77,15.3,15,15.63,15,16c0,0-1.99-0.05-2.3-0.15l-2.38-0.79l-0.63,1.9l2.38,0.79c0.51,0.17,1.04,0.26,1.58,0.26H19 C19.39,18.01,19.74,18.24,19.9,18.57z" opacity=".3"/><path d="M15.5,7h-1v1h1V7z M13.5,7h-1v1h1V7z M15.5,9h-1v1h1V9z M13.5,9h-1v1h1V9z M21,6.5V14h-2V7.5L14,4L9,7.5V9H7V6.5l7-5L21,6.5 z M19,16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97,11H1v11h6v-1.44l7,1.94l8-2.5v-1C22,17.34,20.66,16,19,16z M3,20v-7h2v7H3z M13.97,20.41 L7,18.48V13h1.61l5.82,2.17C14.77,15.3,15,15.63,15,16c0,0-1.99-0.05-2.3-0.15l-2.38-0.79l-0.63,1.9l2.38,0.79 c0.51,0.17,1.04,0.26,1.58,0.26H19c0.39,0,0.74,0.23,0.9,0.56L13.97,20.41z"/>
      </svg>
    </div>
  );
};

export { IconReal };
