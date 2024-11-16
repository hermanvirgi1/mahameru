import React from 'react';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';

function DetailTransaksi() {
    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            <div className="f-container">
                <h2>Detail Transaksi</h2>
                <p>Ini adalah halaman untuk melihat detail transaksi pengunjung Agrowisata Tepas Papandayan yang masuk</p>

                <div className="form-box">
                    <div className="form-group">
                        <label>No Transaksi</label>
                        <input type="text" value="NPM15YT" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Nama</label>
                        <input type="text" value="Michael Wicaksono" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Kategori</label>
                        <input type="text" value="Tiket Masuk" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Tanggal Transaksi</label>
                        <input type="text" value="7 November 2024 - 12.39 WIB" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Metode Pembayaran</label>
                        <input type="text" value="Transfer Bank" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Total Bayar</label>
                        <input type="text" value="Rp15.000" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <input type="text" value="Berhasil" className="status-success" readOnly />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailTransaksi;
