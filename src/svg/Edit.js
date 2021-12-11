import React from "react";

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="22" viewBox="0 0 20 22">
      <defs>
        <path id="path-1" d="M14 3.414l-10 10V16h2.586l10-10L14 3.414zM21 21a1 1 0 010 2H3a1 1 0 010-2zM14.707 1.293l4 4a1 1 0 010 1.414l-11 11A1 1 0 017 18H3a1 1 0 01-1-1v-4a1 1 0 01.293-.707l11-11a1 1 0 011.414 0z"></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-390 -392)">
          <g transform="translate(388 391)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#path-1"></use>
            <g fill="#000" fillRule="evenodd" mask="url(#mask-2)">
              <path d="M0 0H24V24H0z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
