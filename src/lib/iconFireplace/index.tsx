const IconFireplace = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,20h2v-2h2.23c-0.75-0.93-1.2-2.04-1.23-3c-0.02-0.53-0.73-4.43,6-8c0,0-0.8,2.61,2.15,4.63 C15.91,12.15,17,13.11,17,15c0,1.13-0.39,2.16-1.02,3H18v2h2V4H4V20z" opacity=".3"/><path d="M12.01,12.46c-0.15,0.42-0.15,0.82-0.08,1.28c0.1,0.55,0.33,1.04,0.2,1.6c-0.13,0.59-0.77,1.38-1.53,1.63 c1.28,1.05,3.2,0.37,3.39-1.32C14.16,14.11,12.55,13.67,12.01,12.46z"/><path d="M2,2v20h20V2H2z M12,18c-1.58,0-2.97-1.88-3-3.06c0-0.05-0.01-0.13-0.01-0.22c-0.13-1.73,1-3.2,2.47-4.37 c0.47,1.01,1.27,2.03,2.57,2.92C14.61,13.69,15,14.13,15,15C15,16.65,13.65,18,12,18z M20,20h-2v-2h-2.02 c0.63-0.84,1.02-1.87,1.02-3c0-1.89-1.09-2.85-1.85-3.37C12.2,9.61,13,7,13,7c-6.73,3.57-6.02,7.47-6,8 c0.03,0.96,0.49,2.07,1.23,3H6v2H4V4h16V20z"/></g></g>
      </svg>
    </div>
  );
};

export { IconFireplace };
