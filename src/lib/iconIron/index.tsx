const IconIron = ({
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
        <rect fill="none" height="24" width="24"/><path d="M15,16H4v-1c0-1.1,0.9-2,2-2h9V16z" opacity=".3"/><path d="M21,6c-1.66,0-3,1.34-3,3v4c0,0.55-0.45,1-1,1v-4c0-1.66-1.34-3-3-3h-4c-1.66,0-3,1.34-3,3h2c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1H6c-2.21,0-4,1.79-4,4v3h15v-2c1.66,0,3-1.34,3-3V9c0-0.55,0.45-1,1-1h1V6H21z M15,16H4v-1c0-1.1,0.9-2,2-2h9 V16z"/>
      </svg>
    </div>
  );
};

export { IconIron };
