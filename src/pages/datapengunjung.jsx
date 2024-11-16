import React from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';
import '../dist/css/main.css';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';

const Datapengunjung = () => {
    const visitors = [
        { no: 1, name: 'Ayumi Ningsih', typeId: 'Ktp', noId: '1902617748910003', ticketType: 'Tiket Masuk Dewasa' },
        { no: 2, name: 'Michael Wicaksono', typeId: 'Ktp', noId: '1908617948910001', ticketType: 'Tiket Masuk Anak' },
        { no: 3, name: 'Padila Uvaira', typeId: 'Ktp', noId: '1808945764670002', ticketType: 'Camping Biasa' },
        { no: 4, name: 'Caca', typeId: 'Ktp', noId: '1692574226740004', ticketType: 'Sewa Tenda Biasa' },
    ];

    return (
        <>
            <HeaderComponent />
            <SidebarComponent />

            <div className="visitor-container">
                <h2>Data Pengunjung Agrowisata Tepas Papandayan</h2>
                <p>Ini adalah halaman berisi jumlah data pengunjung Agrowisata Tepas Papandayan</p>


                <div className="visitor-card-box">
                <div className="filter-search">
                        <button className="filter-button"><FaFilter /> Filter</button>
                        <div className="search-bar">
                            <input type="text" placeholder="Pencarian" />
                            <button><FaSearch /></button>
                        </div>
                    </div>

                    <table className="visitor-table">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>NAMA PENGUNJUNG</th>
                                <th>TIPE ID</th>
                                <th>NO ID</th>
                                <th>JENIS TIKET</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitors.map((visitor) => (
                                <tr key={visitor.no}>
                                    <td>{visitor.no}</td>
                                    <td>{visitor.name}</td>
                                    <td>{visitor.typeId}</td>
                                    <td>{visitor.noId}</td>
                                    <td>{visitor.ticketType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <button>Previous</button>
                        <button className="page-number active">1</button>
                        <button className="page-number">2</button>
                        <button className="page-number">3</button>
                        <button>Next</button>
                    </div>
                    </div>
                </div>
        </>
    );
}

export default Datapengunjung;
