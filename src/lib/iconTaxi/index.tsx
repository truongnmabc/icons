const IconTaxi = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,18h14v-5H4V18z M15.5,14c0.83,0,1.5,0.67,1.5,1.5S16.33,17,15.5,17 S14,16.33,14,15.5S14.67,14,15.5,14z M6.5,14C7.33,14,8,14.67,8,15.5S7.33,17,6.5,17S5,16.33,5,15.5S5.67,14,6.5,14z" enable-background="new" opacity=".3"/><circle cx="6.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/><path d="M18,18H4v-5h14c-1.91,0-3.63-0.76-4.89-2H4.81l1.04-3h5.44C11.1,7.37,11,6.7,11,6s0.1-1.37,0.29-2H8v2H5.5 C4.84,6,4.29,6.42,4.08,7.01L2,13v8c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-8 l-0.09-0.27C19.3,12.9,18.66,13,18,13V18z"/><g><path d="M18,1c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,1,18,1z M18.5,3v4h-1V3H18.5z M18.5,9h-1V8h1V9z"/></g></g></g>
      </svg>
    </div>
  );
};

export { IconTaxi };
