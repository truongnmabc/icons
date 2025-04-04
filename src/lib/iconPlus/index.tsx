import { IconProps } from '../type';

const IconPlus = ({
  color = '#212121',
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
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0003 10.8334H10.8337V15C10.8337 15.4584 10.4587 15.8334 10.0003 15.8334C9.54199 15.8334 9.16699 15.4584 9.16699 15V10.8334H5.00033C4.54199 10.8334 4.16699 10.4584 4.16699 10C4.16699 9.54169 4.54199 9.16669 5.00033 9.16669H9.16699V5.00002C9.16699 4.54169 9.54199 4.16669 10.0003 4.16669C10.4587 4.16669 10.8337 4.54169 10.8337 5.00002V9.16669H15.0003C15.4587 9.16669 15.8337 9.54169 15.8337 10C15.8337 10.4584 15.4587 10.8334 15.0003 10.8334Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export { IconPlus };
