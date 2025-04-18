const IconLandslide = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="8.57,12.09 7,10 4,10 4,12.28 6,12.95"/><polygon opacity=".3" points="12.53,14.77 9.95,13.74 6,15.05 4,14.39 4,16.28 6,16.95"/><polygon opacity=".3" points="15,4.65 15,2.64 12.42,2.12 11,3.07 11,4.93 12.23,5.75"/><polygon opacity=".3" points="6,19.05 4,18.39 4,20 18,20 15.03,16.04"/><polygon opacity=".3" points="18,9.96 18,11.04 18.8,11.68 21,10.7 21,9.6 19,9.16"/><path d="M11,12L8,8H2v14h20l-6-8L11,12z M4,10h3l1.57,2.09L6,12.95l-2-0.67V10z M4,14.39l2,0.67l3.95-1.32l2.58,1.03L6,16.95 l-2-0.67V14.39z M4,20v-1.61l2,0.67l9.03-3.01L18,20H4z"/><path d="M17,6V1l-5-1L9,2v4l3,2L17,6z M11,3.07l1.42-0.95L15,2.64v2.01l-2.77,1.11L11,4.93V3.07z"/><path d="M18.5,7L16,9v3l2.5,2l4.5-2V8L18.5,7z M21,10.7l-2.2,0.98L18,11.04V9.96l1-0.8l2,0.44V10.7z"/></g></g>
      </svg>
    </div>
  );
};

export { IconLandslide };
