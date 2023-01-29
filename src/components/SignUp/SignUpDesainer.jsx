// import React, { useState, useRef, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";

// function SignUpDesainer() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [nama, setNama] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [alamat, setAlamat] = useState("");
//   const [foto_ktp, setFoto_ktp] = useState("");
//   const [nama_desainer, setNama_desainer] = useState("");
//   const [npwp, setNpwp] = useState("");
//   const [foto_logo, setFoto_logo] = useState("");
//   const [link_portofolio, setLink_portofolio] = useState("");

//   async function addPost() {
//     console.warn(nama, email, password, alamat, foto_ktp, nama_desainer, npwp, foto_logo, link_portofolio);
//     const formData = new FormData();
//     formData.append("nama", nama);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("alamat", alamat);
//     formData.append("foto_ktp", foto_ktp);
//     formData.append("nama_desainer", nama_desainer);
//     formData.append("npwp", npwp);
//     formData.append("foto_logo", foto_logo);
//     formData.append("link_portofolio", link_portofolio);
//     let result = await fetch("http://api.yufagency.com/signup_desainer", {
//       method: "POST",
//       body: formData,
//     });
//     // alert("Post Terkirim")
//     toast.success("Berhasil dikirim!", {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//     setShow(false);
//   }

//   return (
//     <>
//           <Form>
//             <Form.Group
//               className="mb-3"
//               onChange={(e) => setNama(e.target.value)}
//               controlId="exampleForm.ControlInput1"
//             >
//               <Form.Label>Nama Pengepost</Form.Label>
//               <Form.Control type="text" placeholder="" />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               onChange={(e) => setEmail(e.target.value)}
//               controlId="exampleForm.Input1"
//             >
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="" />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               onChange={(e) => setPassword(e.target.value)}
//               controlId="exampleForm.ControlInput2"
//             >
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="" />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               onChange={(e) => setAlamat(e.target.value)}
//               controlId="exampleForm.ControlTextarea3"
//             >
//               <Form.Label>Alamat</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
            
//             <Form.Group
//               controlId="formFile"
//               onChange={(e) => setFoto_ktp(e.target.files[0])}
//               className="mb-3"
//             >
//               <Form.Label>Foto Ktp</Form.Label>
//               <Form.Control type="file" />
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               onChange={(e) => setNama_desainer(e.target.value)}
//               controlId="exampleForm.ControlInput4"
//             >
//               <Form.Label>Nama Desainer</Form.Label>
//               <Form.Control type="text" placeholder="" />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               onChange={(e) => setNpwp(e.target.value)}
//               controlId="exampleForm.ControlTextarea5"
//             >
//               <Form.Label>Npwp</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
            
//             <Form.Group
//               controlId="formFile2"
//               onChange={(e) => setFoto_logo(e.target.files[0])}
//               className="mb-3"
//             >
//               <Form.Label>Foto Logo</Form.Label>
//               <Form.Control type="file" />
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               onChange={(e) => setLink_portofolio(e.target.value)}
//               controlId="exampleForm.ControlTextarea6"
//             >
//               <Form.Label>Link Portofolio</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
//           </Form>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Link to={"/"}>
//             <Button variant="primary" onClick={addPost}>
//               Save Changes
//             </Button>
//           </Link>
//     </>
//   );
// }

// export default SignUpDesainer;

import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUpDesainer() {

  const url = "http://api.yufagency.com/signup_desainer";
  const [data, setData] = useState({
    nama: "",
    email: "",
    password: "",
    alamat: "",
    foto_ktp: "",
    nama_desainer: "",
    npwp: "",
    foto_logo: "",
    link_portofolio: "",
  });

  const formData = new FormData();
  formData.append("nama", data.nama);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("alamat", data.alamat);
  formData.append("foto_ktp", data.foto_ktp);
  formData.append("nama_desainer", data.nama_desainer);
  formData.append("npwp", data.npwp);
  formData.append("foto_logo", data.foto_logo);
  formData.append("link_portofolio", data.link_portofolio);

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handlefile(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.files[0];
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        nama: data.nama,
        email: data.email,
        password: data.password,
        alamat: data.alamat,
        foto_ktp: data.foto_ktp,
        nama_desainer: data.nama_desainer,
        npwp: data.npwp,
        foto_logo: data.foto_logo,
        link_portofolio: data.link_portofolio,
      })
      .then((res) => {
        console.log(res);
      });
  }

    return (
      <form onSubmit={(e) => submit(e)}>
        <div class="image_signup">
          <img src="././images/sandangs/sandangsbiru.png" alt=""></img>
        </div>
        <h3>Sign Up Desainer</h3>
        <div className="mb-3">
          <label>Nama</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nama anda"
            name="nama"
            key={data.nama}
            id="nama"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            key={data.email}
            id="email"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            key={data.password}
            id="password"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Alamat</label>
          <input
            type="text"
            className="form-control"
            placeholder="Alamat anda"
            name="alamat"
            key={data.alamat}
            id="alamat"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Foto KTP</label>
          <input type="file" className="form-control" placeholder="Foto KTP"
          name="foto_ktp"
          key={data.foto_ktp}
          id="foto_ktp"
          onChange={(e) => handlefile(e)}
          />
        </div>
        <div className="mb-3">
          <label>Nama Desainer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nama Desainer"
            name="nama_desainer"
            key={data.nama_desainer}
            id="nama_desainer"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Nomor Pokok Wajib Pajak (NPWP)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nomor Pokok Wajib Pajak (NPWP)"
            name="npwp"
            key={data.npwp}
            id="npwp"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Logo / Banner Identitas</label>
          <input
            type="file"
            className="form-control"
            placeholder="Logo / "
            name="logo_banner"
            key={data.logo_banner}
            id="logo_banner"
            onChange={(e) => handlefile(e)}
          />
        </div>
        <div className="mb-3">
          <label>Link Portofolio</label>
          <input
            type="url"
            className="form-control"
            placeholder="Link Portofolio"
            name="link_portofolio"
            key={data.link_portofolio}
            id="link_portofolio"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="d-grid">
          <Link to="/">
            <button type="submit" className="btn btn-primary" onSubmit={(e) => submit(e)}>
              Submit
            </button>
          </Link>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
    );
}

export default SignUpDesainer;


//Post axios 
