import React from 'react'
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';

function Kelolatiket() {
  return (
    <>
    <HeaderComponent /> 
    <SidebarComponent />
    <div className="ticket-manager">
      <h1>Kelola Tiket</h1>
      <p>Ini adalah halaman untuk mengelola tiket pengunjung Agrowisata Tepas Papandayan</p>
      
      <div className="entry-form">
        <h2>ENTRI DATA</h2>
        <div className="form-row">
          <div className="form-group">
            <label>JENIS TIKET</label>
            <input type="text" placeholder="Ketik Jenis Tiket" />
          </div>
          <div className="form-group">
            <label>HARGA</label>
            <input type="text" placeholder="Ketik Harga" />
          </div>
          <div className="form-group">
            <label>STOK</label>
            <input type="text" placeholder="Ketik Stok" />
          </div>
        </div>
        <div className="form-group">
          <label>DETAIL</label>
          <input type="text" placeholder="Ketik Detail" />
        </div>
        <button className="add-button"> Simpan </button>
      </div>
    </div>
    </>
  );
}

export default Kelolatiket