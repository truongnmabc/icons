const IconTranscribe = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="9" cy="9" opacity=".3" r="2"/><path d="M14.48,17.34C13.29,16.73,11.37,16,9,16c-2.37,0-4.29,0.73-5.48,1.34C3.2,17.5,3,17.84,3,18.22V19h12v-0.78 C15,17.84,14.8,17.5,14.48,17.34z" opacity=".3"/><path d="M17.93,2c-3.9,3.89-3.91,9.95,0,14l1.63-1.63c-2.77-3.02-2.77-7.56,0-10.74L17.93,2z"/><path d="M9,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,6.79,5,9C5,11.21,6.79,13,9,13z M9,7c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 s-2-0.9-2-2C7,7.9,7.9,7,9,7z"/><path d="M15.39,15.56C13.71,14.7,11.53,14,9,14c-2.53,0-4.71,0.7-6.39,1.56C1.61,16.07,1,17.1,1,18.22V21h16v-2.78 C17,17.1,16.39,16.07,15.39,15.56z M15,19H3v-0.78c0-0.38,0.2-0.72,0.52-0.88C4.71,16.73,6.63,16,9,16c2.37,0,4.29,0.73,5.48,1.34 C14.8,17.5,15,17.84,15,18.22V19z"/><path d="M22.92,7.06l-1.68-1.69c-2.02,2.02-2.02,5.07,0,7.27l1.68-1.69C22.08,9.77,22.08,8.24,22.92,7.06z"/></g></g>
      </svg>
    </div>
  );
};

export { IconTranscribe };
