const Icon23mp = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M18,13.5V16c0,0.55-0.45,1-1,1h-2v1.5h-1.5v-6H17C17.55,12.5,18,12.95,18,13.5z M13,10h3 V9h-2V8h2V7h-3V5.5h3.5c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H13V10z M6.5,9c0-0.55,0.45-1,1-1h2V7h-3V5.5H10c0.55,0,1,0.45,1,1 V8c0,0.55-0.45,1-1,1H8v1h3v1.5H6.5V9z M6,13.5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1v5H11V14h-1v3H8.5v-3h-1v4.5H6V13.5z" opacity=".3"/><rect height="1.5" opacity=".3" width="1.5" x="15" y="14"/><path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"/><path d="M13.5,12.5v6H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1H13.5z M16.5,15.5H15V14h1.5V15.5z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><path d="M11,10H8V9h2c0.55,0,1-0.45,1-1V6.5c0-0.55-0.45-1-1-1H6.5V7h3v1h-2c-0.55,0-1,0.45-1,1v2.5H11V10z"/><path d="M17.5,10.5v-4c0-0.55-0.45-1-1-1H13V7h3v1h-2v1h2v1h-3v1.5h3.5C17.05,11.5,17.5,11.05,17.5,10.5z"/></g></g>
      </svg>
    </div>
  );
};

export { Icon23mp };
