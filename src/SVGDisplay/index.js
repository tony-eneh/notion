import "./svgdisplay.css";

export function SVGDisplay({ d }) {
  console.log(d);
  return (
    <svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#232323" />
      <path d={d} fill="pink" stroke="lavenderblush" strokeWidth="10" />
    </svg>
  );
}
