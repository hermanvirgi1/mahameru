import React from 'react';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';

function Kelolainven() {
  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      <div className="inventory-manager">
        <h1>Kelola Inventaris</h1>
        <p>Ini adalah halaman untuk mengelola data inventaris Agrowisata Tepas Papandayan</p>
        
        <div className="entry-form">
          <h2>ENTRI DATA</h2>
          <div className="form-row">
            <div className="form-group">
              <label>KODE BARANG</label>
              <input type="text" placeholder="Ketik Kode Barang" />
            </div>
            <div className="form-group">
              <label>NAMA BARANG</label>
              <input type="text" placeholder="Ketik Nama Barang" />
            </div>
            <div className="form-group">
              <label>STOK</label>
              <input type="number" placeholder="Ketik Stok" />
            </div>
          </div>
          <div className="form-group">
            <label>HARGA SEWA</label>
            <input type="text" placeholder="Ketik Harga Sewa" />
          </div>
          <button className="add-button"> Simpan </button>
        </div>
      </div>
    </>
  );
}

export default Kelolainven;
