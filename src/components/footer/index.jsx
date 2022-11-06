import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div
      style={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid #0fc94b ",
        width: "100%",
      }}
    >
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".875rem"
        }}
      >
        {" "}
        &#169;
        {year} <span></span>Ifeoluwa Adepeju
      </p>
    </div>
  );
}
