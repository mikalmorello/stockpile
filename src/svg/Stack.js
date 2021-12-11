import React from "react";

function Stack() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <defs>
        <path
          id="path-1"
          d="M21.553 16.106a1 1 0 01.894 1.788l-10 5a1 1 0 01-.894 0l-10-5a1 1 0 01.894-1.788L12 20.882zm0-5a1 1 0 01.894 1.788l-10 5a1 1 0 01-.894 0l-10-5a1 1 0 01.894-1.788L12 15.882zm-9.106-10l10 5a1 1 0 010 1.788l-10 5a1 1 0 01-.894 0l-10-5a1 1 0 010-1.788l10-5a1 1 0 01.894 0zM12 3.118L4.236 7 12 10.882 19.764 7 12 3.118z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-995 -195)">
          <g transform="translate(994 194)">
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

export default Stack;