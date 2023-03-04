import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "../components/Modal";

function Home() {
  const [laporan, setLaporan] = useState("");
  const [nama, setNama] = useState("");
  const [date, setDate] = useState("");
  const [kegiatan, setKegiatan] = useState([]);
  const navigate = useNavigate();
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    setImgList([img1, img2, img3, img4]);
  }, [img1, img2, img3, img4]);
  const addKegiatan = (item) => {
    setKegiatan(item);
  };

  const checkday = (day) => {
    let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    return days[day - 1];
  };
  const checkmonth = (mont) => {
    let months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return months[mont];
  };
  const generateHandler = () => {
    if (date === "" || nama === "" || laporan === "" || kegiatan.length === 0) {
      Swal.fire({
        title: "Pemberitahuan!",
        text: "Ada Field yang belum diisi",
        icon: "error",
        confirmButtonText: "Periksa Kembali",
      });
      return;
    }
    let newdate = new Date(date);
    let datefix = `${checkday(
      newdate.getDay()
    )}, ${newdate.getDate()} ${checkmonth(
      newdate.getMonth()
    )} ${newdate.getFullYear()}`;
    let item = {
      laporan: laporan,
      nama: nama,
      date: datefix,
      kegiatan: kegiatan,
      imgList: imgList,
    };
    navigate("generate", { state: { data: item } });
  };
  //   handler img
  const onImageChange = (event, key) => {
    let img = event.target.files[0];
    // let url = URL.createObjectURL(img);
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      if (key === 1) {
        setImg1(fileReader.result);
      }
      if (key === 2) {
        setImg2(fileReader.result);
      }
      if (key === 3) {
        setImg3(fileReader.result);
      }
      if (key === 4) {
        setImg4(fileReader.result);
      }
    });
    fileReader.readAsDataURL(img);
  };
  return (
    <>
      <Modal handler={addKegiatan} data={kegiatan} />
      <section className="bg-danger p-3">
        <h1 className="text-white container">Simple Generate Daily Report</h1>
      </section>

      <div className="container mt-4 mb-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Jenis Laporan
          </label>
          <input
            value={laporan}
            onChange={(e) => setLaporan(e.target.value)}
            type="text"
            className="form-control"
            id="jenis_laporan"
            placeholder="Masukan Jenis laporan"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nama
          </label>
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            type="text"
            className="form-control"
            id="jenis_laporan"
            placeholder="Masukan Nama"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Tanggal Laporan
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="form-control"
            id="jenis_laporan"
            placeholder="Tanggal Laporan"
          />
        </div>
        <div className="mb-3 mt-5 ">
          <section className="d-flex justify-content-between">
            <h4>Kegiatan Hari ini</h4>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + Tambah
            </button>
          </section>
          <section style={{ overflowY: "auto" }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="no-w" scope="col">
                    No
                  </th>
                  <th scope="col">Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                {kegiatan.length > 0 ? (
                  <>
                    {kegiatan.map((v, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <td></td>
                    <td>Belum ada kegiatan</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
        <div className="mb-3 mt-3">
          <p>Masukan Foto dalam laporan, foto yang dimasukan maksimal 4 foto</p>

          {imgList.length > 0 ? (
            <>
              <div
                style={{ flexWrap: "wrap" }}
                className="d-flex flex-wrap justify-content-start"
              >
                {imgList.map((v) =>
                  v !== "" ? (
                    <img className="img-size-view " src={v} alt="img" />
                  ) : (
                    ""
                  )
                )}
              </div>
            </>
          ) : (
            ""
          )}
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Foto 1
            </label>
            <input
              onChange={(e) => onImageChange(e, 1)}
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Foto 2
            </label>
            <input
              onChange={(e) => onImageChange(e, 2)}
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Foto 3
            </label>
            <input
              onChange={(e) => onImageChange(e, 3)}
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Foto 4
            </label>
            <input
              onChange={(e) => onImageChange(e, 4)}
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
        </div>
        <button
          onClick={() => generateHandler()}
          className="btn btn-danger mt-2 mb-4"
        >
          Buat Laporan Kegiatan
        </button>
      </div>
      <section className="bg-dark p-3 d-flex justify-content-between align-items-center">
        <p className="text-light">&copy; 2023 </p>
        <p className="text-light">Created By @Tuama_Digital</p>
      </section>
    </>
  );
}

export default Home;
