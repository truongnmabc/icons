const IconBus = ({
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
        <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M4,16c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-3H4V16z M13.5,14c0.83,0,1.5,0.67,1.5,1.5S14.33,17,13.5,17 S12,16.33,12,15.5S12.67,14,13.5,14z M6.5,14C7.33,14,8,14.67,8,15.5S7.33,17,6.5,17S5,16.33,5,15.5S5.67,14,6.5,14z" opacity=".3"/><path d="M4.43,6H11c0-0.33,0.03-0.66,0.08-0.98C7.4,4.91,5.25,5.29,4.43,6z" opacity=".3"/><path d="M4,11V8h7.29C11.1,7.37,11,6.7,11,6H4.43c0.83-0.71,2.98-1.09,6.65-0.98c0.1-0.7,0.3-1.37,0.59-1.99C2.97,2.67,2,5.02,2,7 v9.5c0,0.95,0.38,1.81,1,2.44V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h8v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-2.06 c0.62-0.63,1-1.49,1-2.44V13c-1.91,0-3.63-0.76-4.89-2H4z M16,16c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-3h12V16z"/><circle cx="6.5" cy="15.5" r="1.5"/><circle cx="13.5" cy="15.5" r="1.5"/><path d="M18,1c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,1,18,1z M18.5,9h-1V8h1V9z M18.5,7h-1V3h1V7z"/></g></g>
      </svg>
    </div>
  );
};

export { IconBus };
