const IconClean = ({
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
        <rect fill="none" height="24" width="24"/><path d="M9.24 9.5H7.42C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9L9.24 9.5zM5 20v-7H3v7h2zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93 5.93-1.84z" opacity=".3"/><path d="m16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63.63-1.37M20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2zm-9-7.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43C15.15 2.39 14.13 2 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h2.16C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9l2.01.75V11c0-2.42-1.72-4.44-4-4.9zM22 19v1l-8 2.5-7-1.94V22H1V11h7.97l6.16 2.3c1.12.42 1.87 1.5 1.87 2.7h2c1.66 0 3 1.34 3 3zM5 20v-7H3v7h2zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93 5.93-1.84z"/>
      </svg>
    </div>
  );
};

export { IconClean };
