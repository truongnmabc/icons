const ThumbUpIcon = ({
  onClick,
  width = 26,
  height = 26,
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  width?: number;
  height?: number;
}) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997"
          fill={onClick ? '#FF746D' : '#fff'}
          stroke={onClick ? '#FF746D' : 'var(--font-color-052)'}
        />
        <path
          d="M2.37988 18.35V8.55002C2.37988 7.15002 2.97988 6.65002 4.37988 6.65002H5.37988C6.77988 6.65002 7.37988 7.15002 7.37988 8.55002V18.35C7.37988 19.75 6.77988 20.25 5.37988 20.25H4.37988C2.97988 20.25 2.37988 19.75 2.37988 18.35Z"
          stroke="var(--font-color)"
          fill={'var(--font-color-052)'}
        />
      </svg>
    </div>
  );
};
export { ThumbUpIcon };
