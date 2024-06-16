/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

export function Logo(props: JSX.IntrinsicElements['svg']) {
  return (
    <div className="relative flex justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="0" cy="0" r="2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5" />
          <ellipse rx="10" ry="4.5" transform="rotate(60)" />
          <ellipse rx="10" ry="4.5" transform="rotate(120)" />
        </g>
      </svg>
      <span className="absolute bottom-0 text-rose-700 font-extrabold bg-[#fffa]">
        비공식
      </span>
    </div>
  );
}
