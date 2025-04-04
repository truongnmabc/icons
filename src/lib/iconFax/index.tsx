const IconFax = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,10c-0.55,0-1,0.45-1,1v7c0,0.55,0.45,1,1,1s1-0.45,1-1v-7C6,10.45,5.55,10,5,10z" opacity=".3"/><rect height="3" opacity=".3" width="6" x="10" y="6"/><path d="M19,11H8v7h12v-6C20,11.45,19.55,11,19,11z M13,17H9v-5h4V17z M15,17c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S15.55,17,15,17z M15,14c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,14,15,14z M18,17c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S18.55,17,18,17z M18,14c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S18.55,14,18,14z" opacity=".3"/><path d="M19,9h-1V4H8v5H7.22C6.67,8.39,5.89,8,5,8c-1.66,0-3,1.34-3,3v7c0,1.66,1.34,3,3,3c0.89,0,1.67-0.39,2.22-1H22v-8 C22,10.34,20.66,9,19,9z M6,18c0,0.55-0.45,1-1,1s-1-0.45-1-1v-7c0-0.55,0.45-1,1-1s1,0.45,1,1V18z M10,6h6v3h-6V6z M20,18H8v-7 h11c0.55,0,1,0.45,1,1V18z"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="13" r="1"/><circle cx="15" cy="16" r="1"/><circle cx="18" cy="16" r="1"/><g><rect height="5" width="4" x="9" y="12"/></g></g></g>
      </svg>
    </div>
  );
};

export { IconFax };
