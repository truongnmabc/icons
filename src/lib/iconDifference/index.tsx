const IconDifference = ({
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
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M14.17,3H8v14h11V7.83L14.17,3z M16.5,15h-6v-2h6V15z M16.5,9h-2v2h-2V9h-2V7h2V5h2v2h2V9z" opacity=".3"/><path d="M18,23H4c-1.1,0-2-0.9-2-2V7h2v14h14V23z M14.5,7V5h-2v2h-2v2h2v2h2V9h2V7H14.5z M16.5,13h-6v2h6V13z M15,1H8 C6.9,1,6.01,1.9,6.01,3L6,17c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V7L15,1z M19,17H8V3h6.17L19,7.83V17z"/></g>
      </svg>
    </div>
  );
};

export { IconDifference };
