type UnderlineProps = {
  color: string;
  cxValue?: number;
  rxValue?: number;
  cyValue?: number;
  ryValue?: number;
};

function Underline({
  color,
  cyValue = 2.42,
  ryValue = 2.42,
  cxValue = 149.56,
  rxValue = 149.56,
}: UnderlineProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 299.12 4.85"
      width="80%"
    >
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <ellipse
            fill={color}
            cx={cxValue}
            cy={cyValue}
            rx={rxValue}
            ry={ryValue}
          />
        </g>
      </g>
    </svg>
  );
}

export default Underline;
