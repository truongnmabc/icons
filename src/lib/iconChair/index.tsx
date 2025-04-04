const IconChair = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M7,13h10v-2c0-0.88,0.39-1.67,1-2.22V6c0-0.55-0.45-1-1-1H7C6.45,5,6,5.45,6,6 v2.78C6.61,9.33,7,10.12,7,11V13z" enable-background="new" opacity=".3"/><path d="M20,10c-0.55,0-1,0.45-1,1v4H5v-4c0-0.55-0.45-1-1-1s-1,0.45-1,1v5 c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v-5C21,10.45,20.55,10,20,10z" enable-background="new" opacity=".3"/><path d="M20,8V6c0-1.65-1.35-3-3-3H7C5.35,3,4,4.35,4,6v2c-1.65,0-3,1.35-3,3v5c0,1.65,1.35,3,3,3v1c0,0.55,0.45,1,1,1 c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1c1.65,0,3-1.35,3-3v-5C23,9.35,21.65,8,20,8z M6,6 c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1v2.78c-0.61,0.55-1,1.34-1,2.22v2H7v-2c0-0.88-0.39-1.67-1-2.22V6z M21,16 c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v4h14v-4c0-0.55,0.45-1,1-1s1,0.45,1,1V16z"/></g></g>
      </svg>
    </div>
  );
};

export { IconChair };
