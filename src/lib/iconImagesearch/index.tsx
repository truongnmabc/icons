const IconImagesearch = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><rect enable-background="new" height="2" opacity=".3" width="10" x="8" y="4"/><rect enable-background="new" height="4" opacity=".3" width="2" x="12" y="17"/><path d="M20,7V3c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v1H4C2.9,4,2,4.9,2,6v4c0,1.1,0.9,2,2,2h8v3h-1c-0.55,0-1,0.45-1,1v6 c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1h-1v-3c0-1.1-0.9-2-2-2H4V6h2v1c0,0.55,0.45,1,1,1h12 C19.55,8,20,7.55,20,7z M8,4h10v2H8V4z M14,21h-2v-4h2V21z"/></g></g>
      </svg>
    </div>
  );
};

export { IconImagesearch };
