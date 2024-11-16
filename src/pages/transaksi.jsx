import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../dist/css/main.css';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import { FaFilter,FaSearch } from 'react-icons/fa';  // Import filter icon from React Icons

function Transaksi() {
  const [transaksiData, setTransaksiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransaksiData = () => {
      const data = [
        { tanggal: '13 Oktober 2023', namaPengunjung: 'Ayumi Ningsih', jenisTiket: 'Tiket Masuk Anak', nominal: 'Rp 5.000', status: 'Berhasil' },
        { tanggal: '13 Oktober 2023', namaPengunjung: 'Michael Wicaksono', jenisTiket: 'Camping Biasa', nominal: 'Rp 200.000', status: 'Berhasil' },
        { tanggal: '13 Oktober 2023', namaPengunjung: 'Padlia Uvaira', jenisTiket: 'Tiket Masuk Dewasa', nominal: 'Rp 10.000', status: 'Berhasil' },
        { tanggal: '', namaPengunjung: '', jenisTiket: '', nominal: '', status: '' }, // Empty row 1
        { tanggal: '', namaPengunjung: '', jenisTiket: '', nominal: '', status: '' }, // Empty row 2
      ];
      setTransaksiData(data);
    };

    // Simulate data loading
    setTimeout(fetchTransaksiData, 1000); // Simulating a 1 second delay for fetching data
  }, []);

  return (
    <>
      <HeaderComponent /> 
      <SidebarComponent />
      <div className="transaksi-container">
        <h2>Transaksi</h2>
        <p>Ini adalah halaman untuk melihat detail transaksi pengunjung Agrowisata Tepas Papandayan yang masuk</p>
        
        <div className="transaksi-card">
          <div className="transaksi-header">
            <h3>Riwayat Transaksi</h3>
            </div>
            <p>Total transaksi saat ini: <strong>1,324</strong> transaksi</p>
          
            <div className="filter-search">
                <button className="filter-button"><FaFilter /> Filter</button>
                <div className="search-bar">
                    <input type="text" placeholder="Pencarian" />
                    <button><FaSearch /></button>
                </div>
            </div>

          <table className="transaksi-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Nama Pengunjung</th>
                <th>Jenis Tiket</th>
                <th>Nominal</th>
                <th>Status</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {transaksiData.map((data, index) => (
                <tr key={index}>
                  <td>{data.tanggal || '-'}</td>
                  <td>{data.namaPengunjung || '-'}</td>
                  <td className="jenis-tiket">{data.jenisTiket || '-'}</td>
                  <td>{data.nominal || '-'}</td>
                  <td>
                    {data.status ? (
                      <span className="status-button">{data.status}</span>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>{data.tanggal ? <button className="detail-button" onClick={() => navigate('/detailtransaksi')}>Detail</button> : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <p>Showing 1 to 5 of 1,324 entries</p>
            <div className="pagination-buttons">
              <button>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaksi;