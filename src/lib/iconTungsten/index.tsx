const IconTungsten = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M13,7.1V5h-2v2.1C11.32,7.04,11.66,7,12,7S12.68,7.04,13,7.1z" opacity=".3"/><rect height="3" width="2" x="11" y="19"/><rect height="2" width="3" x="2" y="11"/><rect height="2" width="3" x="19" y="11"/><rect height="3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.6665 17.8014)" width="1.99" x="16.66" y="16.66"/><rect height="1.99" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.9791 9.8041)" width="3" x="4.85" y="17.16"/><path d="M15,8.02V3H9v5.02C7.79,8.94,7,10.37,7,12c0,2.76,2.24,5,5,5s5-2.24,5-5C17,10.37,16.21,8.94,15,8.02z M11,5h2v2.1 C12.68,7.04,12.34,7,12,7s-0.68,0.04-1,0.1V5z M12,15c-1.65,0-3-1.35-3-3s1.35-3,3-3c1.65,0,3,1.35,3,3S13.65,15,12,15z"/></g></g>
      </svg>
    </div>
  );
};

export { IconTungsten };
