const IconHouseboat = ({
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
        <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="13,13 13,11 11,11 11,13 9,13 9,8.18 12,5.98 15,8.18 15,13"/><path d="M12,16c-1.95,0-2.1,1-3.34,1c-1.19,0-1.42-1-3.33-1C3.38,16,3.24,17,2,17v2c1.9,0,2.17-1,3.35-1c1.19,0,1.42,1,3.33,1 c1.95,0,2.08-1,3.32-1s1.37,1,3.32,1c1.91,0,2.14-1,3.33-1c1.18,0,1.45,1,3.35,1v-2c-1.24,0-1.38-1-3.33-1c-1.91,0-2.14,1-3.33,1 C14.1,17,13.95,16,12,16z M20.34,11.34l-1.37,1.37C18.78,12.89,18.52,13,18.26,13H17V9.65l1.32,0.97L19.5,9L12,3.5L4.5,9l1.18,1.61 L7,9.65V13H5.74c-0.27,0-0.52-0.11-0.71-0.29l-1.37-1.37l-1.41,1.41l1.37,1.37C4.18,14.68,4.95,15,5.74,15h12.51 c0.8,0,1.56-0.32,2.12-0.88l1.37-1.37L20.34,11.34z M13,13v-2h-2v2H9V8.18l3-2.2l3,2.2V13H13z"/>
      </svg>
    </div>
  );
};

export { IconHouseboat };
