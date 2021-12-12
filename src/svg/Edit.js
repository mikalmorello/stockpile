import React from "react";

function Edit() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
      <defs>
        <path id="path-1" d="M4 16.414V20h3.586l12-12L16 4.414l-12 12zM16.707 2.293l5 5a1 1 0 010 1.414l-13 13A1 1 0 018 22H3a1 1 0 01-1-1v-5a1 1 0 01.293-.707l13-13a1 1 0 011.414 0z"></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-310 -255)">
          <g transform="translate(308 253)">
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

export default Edit;
