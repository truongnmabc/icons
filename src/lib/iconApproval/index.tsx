const IconApproval = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="12" x="6" y="16"/><path d="M12,4c-1.66,0-3,1.34-3,3l3,4l3-4C15,5.34,13.66,4,12,4z" opacity=".3"/><path d="M12,2C9.24,2,7,4.24,7,7l5,7l5-7C17,4.24,14.76,2,12,2z M12,11L9,7c0-1.66,1.34-3,3-3s3,1.34,3,3L12,11z"/><path d="M18,14h-6H6c-1.1,0-2,0.9-2,2v6h16v-6C20,14.9,19.1,14,18,14z M18,18H6v-2h12V18z"/></g></g>
      </svg>
    </div>
  );
};

export { IconApproval };
