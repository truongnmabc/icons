const IconStroller = ({
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
        <g><rect fill="none" height="24" width="24"/><path d="M10,5c0.29,0,0.58,0.02,0.86,0.05L9.49,6.66l-1.4-1.4C8.71,5.09,9.35,5,10,5 M15,8.66V15H9.6L15,8.66" opacity=".3"/><path d="M10,5c0.29,0,0.58,0.02,0.86,0.05L9.49,6.66l-1.4-1.4C8.71,5.09,9.35,5,10,5 M15,8.66V15H9.6L15,8.66 M18.65,3 c-1.66,0-2.54,1.27-3.18,2.03l-8.8,10.32C6.12,16,6.58,17,7.43,17H15c1.1,0,2-0.9,2-2V6.27C17.58,5.59,17.97,5,18.65,5 C19.42,5,20,5.66,20,6.48V7h2V6.48C22,4.56,20.52,3,18.65,3L18.65,3z M10,3C8.03,3,6.21,3.64,4.72,4.72l4.89,4.89l4.7-5.51 C13.03,3.4,11.56,3,10,3L10,3z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18L16,18z M6,18c-1.1,0-2,0.9-2,2 s0.9,2,2,2s2-0.9,2-2S7.1,18,6,18L6,18z"/></g>
      </svg>
    </div>
  );
};

export { IconStroller };
