const IconTheater = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14.5,10.81C14.55,9.8,15.64,9,16.99,9c1.38,0,2.5,0.84,2.5,1.88H14.5v1.22c0.69,0.55,1.55,0.9,2.5,0.9 c2.21,0,4-1.79,4-4V4h-8v3.5h1.5V10.81z M19,5.5c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S18.45,5.5,19,5.5z M14,6.5 c0-0.55,0.45-1,1-1s1,0.45,1,1s-0.45,1-1,1S14,7.05,14,6.5z" opacity=".3"/><path d="M11,2v5.5h2V4h8v5c0,2.21-1.79,4-4,4c-0.95,0-1.81-0.35-2.5-0.9v2.35C15.26,14.8,16.11,15,17,15c3.31,0,6-2.69,6-6V2H11z"/><circle cx="19" cy="6.5" r="1"/><circle cx="15" cy="6.5" r="1"/><path d="M16.99,9c-1.35,0-2.44,0.8-2.49,1.81v0.07h4.99C19.49,9.84,18.37,9,16.99,9z"/><path d="M1,16c0,3.31,2.69,6,6,6s6-2.69,6-6V9H1V16z M3,11h8v5c0,2.21-1.79,4-4,4s-4-1.79-4-4V11z"/><path d="M7,20c2.21,0,4-1.79,4-4v-5H3v5C3,18.21,4.79,20,7,20z M7,17.88c-1.38,0-2.5-0.84-2.5-1.88h5 C9.5,17.04,8.38,17.88,7,17.88z M9,12.5c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S8.45,12.5,9,12.5z M5,12.5c0.55,0,1,0.45,1,1 s-0.45,1-1,1s-1-0.45-1-1S4.45,12.5,5,12.5z" opacity=".3"/><circle cx="5" cy="13.5" r="1"/><circle cx="9" cy="13.5" r="1"/><path d="M7,17.88c1.38,0,2.5-0.84,2.5-1.88h-5C4.5,17.04,5.62,17.88,7,17.88z"/></g></g>
      </svg>
    </div>
  );
};

export { IconTheater };
