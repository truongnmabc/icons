const IconReset = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,10h-7.01V7L9,11l3.99,4v-3H20v5H4V5h16v3h2l0-3c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v12c0,1.1,0.9,2,2,2h4v2h8v-2h4 c1.1,0,1.99-0.9,1.99-2l0-5H22C22,10.9,21.1,10,20,10z"/></g>
      </svg>
    </div>
  );
};

export { IconReset };
