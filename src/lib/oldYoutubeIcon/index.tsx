const OldYoutubeIcon = ({
  color = '#212121',
  width = 24,
  height = 24,
  style,
  onClick,
  className,
}: {
  color?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64872 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64872 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
          stroke={color}
        />
        <path
          d="M19.601 10.0851C19.601 8.28958 18.1347 6.82324 16.3392 6.82324H7.90027C6.10476 6.82324 4.63843 8.28958 4.63843 10.0851V14.0352C4.63843 15.8307 6.10476 17.2971 7.90027 17.2971H16.3392C18.1347 17.2971 19.601 15.8307 19.601 14.0352V10.0851ZM14.2444 12.2696L10.8629 14.125C10.7132 14.2148 10.5935 14.0951 10.5935 13.9454V10.115C10.5935 9.93546 10.7432 9.84569 10.8629 9.93546L14.2444 11.8806C14.424 11.9704 14.394 12.1799 14.2444 12.2696Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export { OldYoutubeIcon };
