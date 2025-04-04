const IconLightbulb = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,4C8.97,4,6.5,6.47,6.5,9.5c0,2.47,1.49,3.89,2.35,4.5h6.3 c0.86-0.61,2.35-2.03,2.35-4.5C17.5,6.47,15.03,4,12,4z" enable-background="new" opacity=".3"/><path d="M12,22c1.1,0,2-0.9,2-2h-4C10,21.1,10.9,22,12,22z"/><rect height="2" width="8" x="8" y="17"/><path d="M12,2C7.86,2,4.5,5.36,4.5,9.5c0,3.82,2.66,5.86,3.77,6.5h7.46c1.11-0.64,3.77-2.68,3.77-6.5C19.5,5.36,16.14,2,12,2z M15.15,14h-6.3C7.99,13.39,6.5,11.97,6.5,9.5C6.5,6.47,8.97,4,12,4s5.5,2.47,5.5,5.5C17.5,11.97,16.01,13.39,15.15,14z"/></g></g>
      </svg>
    </div>
  );
};

export { IconLightbulb };
