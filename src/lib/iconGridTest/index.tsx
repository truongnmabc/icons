import { IconProps } from '../type';

const IconGridTest = ({
  width = 24,
  height = 24,
  className,
  style,
  onClick,
}: IconProps) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        width={width ?? '100%'}
        height={height ?? '100%'}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.25 12.25H13M9.25 15.25H13M9.25 18.25H13M16 19H18.25C18.8467 19 19.419 18.7629 19.841 18.341C20.2629 17.919 20.5 17.3467 20.5 16.75V6.358C20.5 5.223 19.655 4.26 18.524 4.166C18.15 4.13498 17.7756 4.10831 17.401 4.086M17.401 4.086C17.4674 4.30109 17.5001 4.52491 17.5 4.75C17.5 4.94891 17.421 5.13968 17.2803 5.28033C17.1397 5.42098 16.9489 5.5 16.75 5.5H12.25C11.836 5.5 11.5 5.164 11.5 4.75C11.5 4.519 11.535 4.296 11.6 4.086M17.401 4.086C17.118 3.168 16.262 2.5 15.25 2.5H13.75C13.2692 2.50011 12.8011 2.65414 12.4143 2.93954C12.0274 3.22493 11.742 3.6267 11.6 4.086M11.6 4.086C11.224 4.109 10.85 4.136 10.476 4.166C9.345 4.26 8.5 5.223 8.5 6.358V8.5M8.5 8.5H5.125C4.504 8.5 4 9.004 4 9.625V20.875C4 21.496 4.504 22 5.125 22H14.875C15.496 22 16 21.496 16 20.875V9.625C16 9.004 15.496 8.5 14.875 8.5H8.5ZM7 12.25H7.008V12.258H7V12.25ZM7 15.25H7.008V15.258H7V15.25ZM7 18.25H7.008V18.258H7V18.25Z"
          stroke="var(--text-color-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.25 12.25H13M9.25 15.25H13M9.25 18.25H13M7 12.25H7.008V12.258H7V12.25ZM7 15.25H7.008V15.258H7V15.25ZM7 18.25H7.008V18.258H7V18.25Z"
          stroke="var(--text-color-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { IconGridTest };
