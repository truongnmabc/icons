const IconOil = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M7,11c0.55,0,1,0.45,1,1s-0.45,1-1,1v6h10v-6c-0.55,0-1-0.45-1-1s0.45-1,1-1V5H7V11z M12,8.5 c2.47,2.86,3,3.24,3,4.55c0,1.63-1.34,2.95-3,2.95s-3-1.32-3-2.95C9,11.75,9.52,11.38,12,8.5z" opacity=".3"/><path d="M12,16c1.66,0,3-1.32,3-2.95c0-1.31-0.53-1.69-3-4.55c-2.48,2.88-3,3.25-3,4.55C9,14.68,10.34,16,12,16z"/><path d="M20,13c0.55,0,1-0.45,1-1s-0.45-1-1-1h-1V5h1c0.55,0,1-0.45,1-1s-0.45-1-1-1H4C3.45,3,3,3.45,3,4s0.45,1,1,1h1v6H4 c-0.55,0-1,0.45-1,1s0.45,1,1,1h1v6H4c-0.55,0-1,0.45-1,1s0.45,1,1,1h16c0.55,0,1-0.45,1-1s-0.45-1-1-1h-1v-6H20z M17,11 c-0.55,0-1,0.45-1,1s0.45,1,1,1v6H7v-6c0.55,0,1-0.45,1-1s-0.45-1-1-1V5h10V11z"/></g></g>
      </svg>
    </div>
  );
};

export { IconOil };
