const IconDo = ({
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
        <g><rect fill="none" height="24" width="24"/><path d="M18,15.17V13h-2.17L18,15.17z M9,11.83l8.14,8.14C17.09,19.98,17.05,20,17,20h-6 c-0.39,0-0.64-0.23-0.75-0.36L6.87,16H9L9,11.83z" opacity=".3"/><path d="M2.81,2.81L1.39,4.22L7,9.83l0,4.3l-2.6-1.48c-0.17-0.09-0.34-0.14-0.54-0.14c-0.26,0-0.5,0.09-0.7,0.26L2,13.88l6.8,7.18 c0.57,0.6,1.35,0.94,2.18,0.94H17c0.62,0,1.18-0.19,1.66-0.52l1.12,1.12l1.41-1.41L2.81,2.81z M17,20h-6 c-0.39,0-0.64-0.23-0.75-0.36L6.87,16H9l0-4.17l8.14,8.14C17.09,19.98,17.05,20,17,20z M13.83,11H14V3.25C14,2.56,14.56,2,15.25,2 s1.25,0.56,1.25,1.25V11h1V5.25C17.5,4.56,18.06,4,18.75,4S20,4.56,20,5.25v11.92l-2-2V13h-2.17L13.83,11z M13,10.17V2.25 C13,1.56,12.44,1,11.75,1S10.5,1.56,10.5,2.25v5.42L13,10.17z M9.5,6.67V4.25C9.5,3.56,8.94,3,8.25,3c-0.67,0-1.2,0.53-1.24,1.18v0 L9.5,6.67z"/></g>
      </svg>
    </div>
  );
};

export { IconDo };
