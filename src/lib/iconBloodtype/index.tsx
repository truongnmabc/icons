const IconBloodtype = ({
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
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,4.67c-4.05,3.7-6,6.79-6,9.14c0,3.63,2.65,6.2,6,6.2s6-2.57,6-6.2C18,11.46,16.05,8.36,12,4.67z M15,18 H9v-2h6V18z M15,13h-2v2h-2v-2H9v-2h2V9h2v2h2V13z" opacity=".3"/><rect height="2" width="6" x="9" y="16"/><polygon points="13,9 11,9 11,11 9,11 9,13 11,13 11,15 13,15 13,13 15,13 15,11 13,11"/><path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20 c-3.35,0-6-2.57-6-6.2c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z"/></g></g>
      </svg>
    </div>
  );
};

export { IconBloodtype };
