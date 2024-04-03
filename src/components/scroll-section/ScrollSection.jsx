import React, { useRef } from "react";

function ScrollSection() {
  const ref = useRef();
  const data = [
    {
      lable: "First Section 1",
      style: {
        width: "100%",
        height: "100vh",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      lable: "First Section 2",
      style: {
        width: "100%",
        height: "100vh",
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      lable: "First Section 3",
      style: {
        width: "100%",
        height: "100vh",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      lable: "First Section 4",
      style: {
        width: "100%",
        height: "100vh",
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  ];

  function handleClick() {
    // let pos = ref.current.getBoundingClientRect().top;

    // console.log(ref.current);
    // console.log(pos);

    // window.scrollTo({
    //   top: pos,
    //   behavior: "smooth",
    // });

    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>Scroll To particular section</h1>
      <button
        style={{ width: "60px", height: "40px", marginBottom: "5px" }}
        onClick={() => handleClick()}
      >
        Scroll To
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {data.map((value, index) => {
          return (
            <div ref={index === 2 ? ref : null} style={value.style} key={index}>
              <h2>{value.lable}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollSection;
