const LevelIcon = ({
  color = 'gray',
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
        viewBox="0 0 23 26"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="review"
            transform="translate(-302.000000, -337.000000)"
            fill={color}
            fillRule="nonzero"
          >
            <g id="level-2" transform="translate(302.000000, 337.000000)">
              <path
                d="M1.11290323,20.8 C0.498224516,20.8 0,21.3420883 0,22.0104508 L0,24.7895492 C0,25.4579117 0.498224516,26 1.11290323,26 C1.7274929,26 2.22580645,25.4579117 2.22580645,24.7895492 L2.22580645,22.0104508 C2.22580645,21.3420883 1.72740387,20.8 1.11290323,20.8 Z"
                id="Path"
                fill={color}
              />
              <path
                d="M6.30645161,15.6 C5.69186194,15.6 5.19354839,16.1120467 5.19354839,16.7433698 L5.19354839,24.8566302 C5.19354839,25.4879533 5.69186194,26 6.30645161,26 C6.92104129,26 7.41935484,25.4879533 7.41935484,24.8566302 L7.41935484,16.7433698 C7.41935484,16.1120467 6.92095226,15.6 6.30645161,15.6 Z"
                id="Path"
                opacity={1}
                fill={color}
              />
              <path
                d="M11.5,10.4 C10.8854103,10.4 10.3870968,10.9026696 10.3870968,11.5226317 L10.3870968,24.8774581 C10.3870968,25.4974202 10.8854103,26 11.5,26 C12.1145006,26 12.6129032,25.4974202 12.6129032,24.8774581 L12.6129032,11.5226317 C12.6129032,10.9026696 12.1145006,10.4 11.5,10.4 Z"
                id="Path"
                opacity={1}
                fill={color}
              />
              <path
                d="M16.6935484,5.2 C16.0789587,5.2 15.5806452,5.6981519 15.5806452,6.3125422 L15.5806452,24.8875468 C15.5806452,25.5019371 16.0789587,26 16.6935484,26 C17.3081381,26 17.8064516,25.5019371 17.8064516,24.8875468 L17.8064516,6.3125422 C17.8064516,5.6981519 17.3081381,5.2 16.6935484,5.2 Z"
                id="Path"
                opacity={1}
                fill={color}
              />
              <path
                d="M21.8870968,0 C21.2725071,0 20.7741935,0.495480066 20.7741935,1.1065751 L20.7741935,24.8935134 C20.7741935,25.5046085 21.2725071,26 21.8870968,26 C22.5016865,26 23,25.5046085 23,24.8935134 L23,1.1065751 C23,0.495480066 22.5016865,0 21.8870968,0 Z"
                id="Path"
                opacity={1}
                fill={color}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export { LevelIcon };
