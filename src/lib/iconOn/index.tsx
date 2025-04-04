const IconOn = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1" opacity=".3" width="12" x="6" y="20"/><rect height="1" opacity=".3" width="12" x="6" y="3"/><rect height="1" width="2" x="11" y="16"/><path d="M12,11c-1.1,0-2,0.9-2,2c0,0.74,0.4,1.38,1,1.72v0.78h2v-0.78c0.6-0.35,1-0.98,1-1.72C14,11.9,13.1,11,12,11z"/><path d="M18,1.01L6,1C4.9,1,4,1.9,4,3v18c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V3C20,1.9,19.1,1.01,18,1.01z M18,21H6v-1h12V21z M18,18H6V6h12V18z M18,4H6V3h12V4z"/><path d="M16.01,15.95C16.63,15.12,17,14.11,17,13s-0.37-2.12-0.99-2.95l-1.07,1.07c0.35,0.54,0.56,1.19,0.56,1.88 s-0.21,1.34-0.56,1.88L16.01,15.95z"/><path d="M9.06,14.88C8.71,14.34,8.5,13.69,8.5,13c0-1.93,1.57-3.5,3.5-3.5v1.25l2.25-2l-2.25-2V8c-2.76,0-5,2.24-5,5 c0,1.11,0.37,2.12,0.99,2.95L9.06,14.88z"/></g></g>
      </svg>
    </div>
  );
};

export { IconOn };
