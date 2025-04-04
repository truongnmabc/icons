const IconChange = ({
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
      <svg width={width ?? '100%'} height={height ?? '100%'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7.77L5.61 18h12.78z" opacity=".3"/><path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"/>
      </svg>
    </div>
  );
};

export { IconChange };
