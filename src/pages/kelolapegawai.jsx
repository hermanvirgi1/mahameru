import React from 'react'
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';


function Kelolapegawai() {
  return (
    <>
    <HeaderComponent />
    <SidebarComponent />
    <div className="form-container">
      <h2>Staff</h2>
      <p>Ini adalah halaman untuk mengedit data pegawai</p>
      <div className="form-group">
        <label htmlFor="nip">NIP</label>
        <input type="text" id="nip" placeholder="Masukkan NIP" />
      </div>
      <div className="form-group">
        <label htmlFor="nama">Nama</label>
        <input type="text" id="nama" placeholder="Masukkan Nama" />
      </div>
      <div className="form-group">
        <label htmlFor="posisi">Posisi</label>
        <input type="text" id="posisi" placeholder="Masukkan Posisi" />
      </div>
      <div className="form-group">
        <label htmlFor="nohp">No HP</label>
        <input type="text" id="nohp" placeholder="Masukkan No HP" />
      </div>
      <div className="form-buttons">
        <button type="submit" className="add-button">Tambah</button>
      </div>
    </div>
    </>
  )
}

export default Kelolapegawai