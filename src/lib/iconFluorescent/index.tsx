const IconFluorescent = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="2" opacity=".3" width="10" x="7" y="11"/><path d="M5,15h14V9H5V15z M7,11h10v2H7V11z"/><rect height="3" width="2" x="11" y="2"/><rect height="2" transform="matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)" width="2.54" x="17.62" y="5.2"/><rect height="3" width="2" x="11" y="19"/><polygon points="17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3"/><rect height="2.53" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)" width="1.99" x="4.1" y="4.93"/><rect height="2" transform="matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)" width="2.54" x="3.83" y="16.89"/></g></g>
      </svg>
    </div>
  );
};

export { IconFluorescent };
