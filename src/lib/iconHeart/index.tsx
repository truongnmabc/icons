const IconHeart = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M9.23,5.42C8.69,5.15,8.09,5,7.5,5C5.54,5,4,6.54,4,8.5c0,2.5,2.45,4.84,6.24,8.23L10.77,12H7.35L9.23,5.42 z" opacity=".3"/><path d="M16.5,5c-0.37,0-0.75,0.06-1.12,0.18L14.77,7h2.91l-2.56,8.53C17.98,12.93,20,10.71,20,8.5 C20,6.54,18.46,5,16.5,5z" opacity=".3"/><path d="M16.5,3c-0.96,0-1.9,0.25-2.73,0.69L12,9h3l-3,10l1-9h-3l1.54-5.39C10.47,3.61,9.01,3,7.5,3C4.42,3,2,5.42,2,8.5 c0,4.13,4.16,7.18,10,12.5c5.47-4.94,10-8.26,10-12.5C22,5.42,19.58,3,16.5,3z M10.24,16.73C6.45,13.34,4,11,4,8.5 C4,6.54,5.54,5,7.5,5c0.59,0,1.19,0.15,1.73,0.42L7.35,12h3.42L10.24,16.73z M15.13,15.53L17.69,7h-2.91l0.61-1.82 C15.75,5.06,16.13,5,16.5,5C18.46,5,20,6.54,20,8.5C20,10.71,17.98,12.93,15.13,15.53z"/></g></g>
      </svg>
    </div>
  );
};

export { IconHeart };
