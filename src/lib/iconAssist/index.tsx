const IconAssist = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="12.5" cy="4.5" r="2"/><path d="M19.77,17.72l-0.64-6.37C19.06,10.58,18.41,10,17.64,10H16c-1.5-0.02-2.86-0.54-3.76-1.44l-2-1.98 C10.08,6.42,9.62,6,8.83,6C8.32,6,7.81,6.2,7.42,6.59L4.08,9.91c-0.53,0.68-0.51,1.57-0.21,2.13l1.43,2.8l-3.15,4.05l1.57,1.24 l3.68-4.73l-0.17-1.36L8,14.75V20h2v-6.12l-2.12-2.12l2.36-2.36c0.94,0.94,1.72,1.82,3.59,2.32L13,20h1.5l0.41-3.5h3.18l0.14,1.22 c-0.44,0.26-0.73,0.74-0.73,1.28c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5C20.5,18.46,20.21,17.98,19.77,17.72z M15.09,15 l0.41-3.5h2l0.41,3.5H15.09z"/></g></g>
      </svg>
    </div>
  );
};

export { IconAssist };
