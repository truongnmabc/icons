const OldFacebookIcon = ({
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
          d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64872 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64872 23.5 12Z"
          stroke={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99509 12.0596V19.4212C9.99509 19.5409 10.0849 19.6008 10.1746 19.6008H12.8978C13.0175 19.6008 13.0774 19.511 13.0774 19.4212V11.9399H15.0524C15.1422 11.9399 15.232 11.8502 15.232 11.7604L15.4116 9.516C15.4116 9.39629 15.3218 9.30652 15.232 9.30652H13.0774V7.72048C13.0774 7.33145 13.3766 7.0322 13.7657 7.0322H15.2919C15.4116 7.0322 15.4714 6.94243 15.4714 6.85265V4.60826C15.4714 4.48856 15.3816 4.42871 15.2919 4.42871H12.7183C11.1921 4.42871 9.96517 5.65565 9.96517 7.18183V9.36637H8.58861C8.46891 9.36637 8.40906 9.45614 8.40906 9.54592V11.7903C8.40906 11.91 8.49883 11.9699 8.58861 11.9699H9.96517V12.0596H9.99509Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export { OldFacebookIcon };
