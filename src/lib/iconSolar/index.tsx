const IconSolar = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="4.44,20 11,20 11,18 4.84,18"/><polygon opacity=".3" points="18.36,14 13,14 13,16 18.76,16"/><polygon opacity=".3" points="13,18 13,20 19.56,20 19.16,18"/><polygon opacity=".3" points="5.24,16 11,16 11,14 5.64,14"/><path d="M20,12H4L2,22h20L20,12z M13,14h5.36l0.4,2H13V14z M11,20H4.44l0.4-2H11V20z M11,16H5.24l0.4-2H11V16z M13,20v-2h6.16 l0.4,2H13z"/><rect height="3" width="2" x="11" y="8"/><rect height="3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.2089 14.6085)" width="2" x="16.53" y="6.06"/><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.448 6.7885)" width="3" x="4.97" y="6.56"/><rect height="2" width="3" x="3" y="2"/><rect height="2" width="3" x="18" y="2"/><path d="M12,7c2.76,0,5-2.24,5-5h-2c0,1.65-1.35,3-3,3S9,3.65,9,2H7C7,4.76,9.24,7,12,7z"/><path d="M15,2c0,1.66-1.34,3-3,3S9,3.66,9,2H15z" opacity=".3"/></g></g>
      </svg>
    </div>
  );
};

export { IconSolar };
