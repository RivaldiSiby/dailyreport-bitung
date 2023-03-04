import React, { useState } from "react";

function Modal({ handler, data }) {
  const [kegiatanItem, setKegiatanItem] = useState("");
  const handlerAdd = () => {
    handler([...data, kegiatanItem]);
    setKegiatanItem("");
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Tambah Kegiatan
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Kegiatan
              </label>
              <textarea
                onChange={(e) => setKegiatanItem(e.target.value)}
                className="form-control"
                value={kegiatanItem}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Keluar
            </button>
            <button
              data-bs-dismiss="modal"
              onClick={(e) => handlerAdd()}
              type="button"
              className="btn btn-primary"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
