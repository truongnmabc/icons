const IconSip = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><rect enable-background="new" height="1" opacity=".3" width="2" x="15.5" y="10.5"/><path d="M4,18h16V6H4V18z M14,9h4c0.55,0,1,0.45,1,1v2c0,0.55-0.45,1-1,1h-2.5v2H14V9z M11,9h2v6h-2V9z M5,13.5h3.5v-0.75H6c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h4v1.5H6.5v0.75H9c0.55,0,1,0.45,1,1V14 c0,0.55-0.45,1-1,1H5V13.5z" enable-background="new" opacity=".3"/><path d="M10,14v-1.75c0-0.55-0.45-1-1-1H6.5V10.5H10V9H6c-0.55,0-1,0.45-1,1v1.75c0,0.55,0.45,1,1,1h2.5v0.75H5V15h4 C9.55,15,10,14.55,10,14z"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z"/><rect height="6" width="2" x="11" y="9"/><path d="M15.5,13H18c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-4v6h1.5V13z M15.5,10.5h2v1h-2V10.5z"/></g></g>
      </svg>
    </div>
  );
};

export { IconSip };
