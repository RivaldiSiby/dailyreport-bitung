import React, { useEffect, useRef, useState } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useLocation, useNavigate } from "react-router-dom";
import Print from "../components/print/Print";
function Generate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const componentRef = useRef();
  const [timer, setTimer] = useState(5);
  const [hide, SetHide] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      SetHide(false);
    }, 5000);
  }, [timer]);

  return (
    <React.Fragment>
      <div className="mx-auto">
        <Print data={state.data} ref={componentRef} />
      </div>
      <div className="box-generate">
        {hide ? (
          <p>Silahkan tunggu {timer}</p>
        ) : (
          <>
            <button
              className="btn btn-light btn-cos"
              onClick={() => {
                exportComponentAsJPEG(componentRef, {
                  fileName: "Laporan Kerja",
                });
                navigate("/", { replace: true });
              }}
            >
              Download
            </button>
            <button
              onClick={() => navigate("/", { replace: true })}
              className="btn btn-light btn-cos"
            >
              Back
            </button>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default Generate;
