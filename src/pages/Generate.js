import React, { useRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useLocation, useNavigate } from "react-router-dom";
import Print from "../components/print/Print";
function Generate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const componentRef = useRef();

  return (
    <React.Fragment>
      <Print data={state.data} ref={componentRef} />
      <div className="box-generate">
        <button
          className="btn btn-light btn-cos"
          onClick={() =>
            exportComponentAsJPEG(componentRef, { fileName: "Laporan Kerja" })
          }
        >
          Download To Img
        </button>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="btn btn-light btn-cos"
        >
          Back
        </button>
      </div>
    </React.Fragment>
  );
}

export default Generate;
