const IconVilla = ({
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
        <rect fill="none" height="24" width="24"/><path d="M5,9.37l9-3.46V12H9v7H5V9.37z M19,19h-3v-3h-2v3h-3v-5h8V19z" opacity=".3"/><path d="M19,10c-1.1,0-2,0.9-2,2h-1V3L3,8v13h18v-9C21,10.9,20.1,10,19,10z M5,9.37l9-3.46V12H9v7H5V9.37z M19,19h-3v-3h-2v3h-3v-5 h8V19z"/>
      </svg>
    </div>
  );
};

export { IconVilla };
