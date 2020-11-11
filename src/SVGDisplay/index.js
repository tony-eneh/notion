import "./svgdisplay.css";

export function SVGDisplay({ d }) {
  console.log(d);
  return (
    <svg viewBox="0 0 150 150">
      <rect width="150" height="150" fill="#232323" />
      <path d={d} fill="pink" stroke="lavenderblush" strokeWidth="3" />
    </svg>
  );
}
