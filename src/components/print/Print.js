import React from "react";
import imgsrc from "../../assets/main.jpeg";
import imgside from "../../assets/side.png";
import "./Print.css";
const Print = React.forwardRef((props, ref) => {
  const data = props.data;
  return (
    <>
      <div className="print-wrap" ref={ref}>
        <div className="wrap-name">
          <h2 className="text-name-f">{data.laporan}</h2>
          <h2 className="text-name-f">{data.nama}</h2>
        </div>
        <div className="wrap-date">
          <h1>{data.date}</h1>
        </div>
        <div className="wrap-list ">
          {data.kegiatan.map((v, i) => (
            <h2 key={i} className="text-font-list">{`${i + 1}. ${v}`}</h2>
          ))}
        </div>
        <div className="wrap-img">
          {data.imgList.map((v, i) =>
            v !== "" ? (
              <img key={i} src={v} className="img-list" alt="img" />
            ) : (
              ""
            )
          )}
        </div>
        <img className="side-img" src={imgside} alt="img" />
        <div className="triangle-left"></div>
        <img src={imgsrc} alt="img" />
      </div>
    </>
  );
});

export default Print;
