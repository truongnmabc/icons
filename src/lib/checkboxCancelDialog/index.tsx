import { IconProps } from '../type';

function CheckboxCancelDialog({
  color = '#212121',
  width = 24,
  height = 24,
  className,
  style,
  onClick,
}: IconProps) {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.997 15.753C21.997 15.331 21.654 14.988 21.232 14.988C20.81 14.988 20.467 15.331 20.467 15.753C20.467 18.787 18.796 20.467 15.753 20.467L8.253 20.467C5.21 20.467 3.53 18.787 3.53 15.753L3.53 8.253C3.53 5.21 5.21 3.53 8.256 3.53L15.756 3.53C18.8 3.53 20.47 5.2 20.47 8.253V10.795V10.797C20.471 11.219 20.813 11.561 21.235 11.561V11.578H21.244C21.661 11.578 22 11.239 22 10.822V8.253C22 4.393 19.59 2 15.753 2L8.253 2C4.392 2 2 4.393 2 8.256L2 15.756C2 19.608 4.392 22 8.253 22L15.756 22C19.608 22 22 19.608 21.997 15.753Z"
          fill={color}
          fillOpacity="0.52"
        />
      </svg>
    </div>
  );
}

export { CheckboxCancelDialog };
