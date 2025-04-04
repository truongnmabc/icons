const IconMp = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1.5" opacity=".3" width="1.5" x="15" y="10.5"/><path d="M5,5l0,14l14,0l0-14H5z M12.5,15H11v-4.5h-1v3H8.5v-3h-1V15H6v-5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1 V15z M18,12.5c0,0.55-0.45,1-1,1h-2V15h-1.5V9H17c0.55,0,1,0.45,1,1V12.5z" opacity=".3"/><path d="M17,9h-3.5v6H15v-1.5h2c0.55,0,1-0.45,1-1V10C18,9.45,17.55,9,17,9z M16.5,12H15v-1.5h1.5V12z"/><path d="M11.5,9H7c-0.55,0-1,0.45-1,1v5h1.5v-4.5h1v3H10v-3h1V15h1.5v-5C12.5,9.45,12.05,9,11.5,9z"/><path d="M19,3H5C3.9,3,3,3.9,3,5V19c0,1.1,0.9,2,2,2H19c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M5,19L5,5h14l0,14L5,19z"/></g></g>
      </svg>
    </div>
  );
};

export { IconMp };
