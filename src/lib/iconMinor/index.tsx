const IconMinor = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M5,15v5h14v-5H5z M7.5,19C6.67,19,6,18.33,6,17.5S6.67,16,7.5,16S9,16.67,9,17.5S8.33,19,7.5,19z M16.5,19 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,19,16.5,19z" opacity=".3"/><path d="M9.41,5L8,6.41l-3-3L6.41,2L9.41,5z M19,3.41L17.59,2l-3,3L16,6.41L19,3.41z M13,0h-2v5h2V0z M21,15v8c0,0.55-0.45,1-1,1 h-1c-0.55,0-1-0.45-1-1v-1H6v1c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-8l2.08-5.99C5.29,8.42,5.84,8,6.5,8h11 c0.66,0,1.22,0.42,1.42,1.01L21,15z M5.81,13h12.38l-1.04-3H6.85L5.81,13z M19,15H5v5h14V15z M7.5,19C8.33,19,9,18.33,9,17.5 S8.33,16,7.5,16S6,16.67,6,17.5S6.67,19,7.5,19z M16.5,19c0.83,0,1.5-0.67,1.5-1.5S17.33,16,16.5,16S15,16.67,15,17.5 S15.67,19,16.5,19z"/></g>
      </svg>
    </div>
  );
};

export { IconMinor };
