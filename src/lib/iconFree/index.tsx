const IconFree = ({
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
        <rect fill="none" height="24" width="24"/><rect height="2" opacity=".3" width="14" x="5" y="6"/><path d="M11.21,20H5V10h14v4.38l2-2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h8.21 L11.21,20z M5,6h14v2H5V6z M16.54,22.5L13,18.96l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L16.54,22.5z M10.41,14L12,15.59L10.59,17 L9,15.41L7.41,17L6,15.59L7.59,14L6,12.41L7.41,11L9,12.59L10.59,11L12,12.41L10.41,14z"/>
      </svg>
    </div>
  );
};

export { IconFree };
