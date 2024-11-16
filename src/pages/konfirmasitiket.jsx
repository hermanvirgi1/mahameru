import React from 'react';
import '../dist/css/main.css';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import { FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Konfirmasitiket = () => {
    const navigate = useNavigate();
    const tickets = [
        { id: 'ATP-2024-001', type: 'Tiket Masuk Anak', price: 'Rp.5.000', stock: 250, details: 'Usia 1-5 Tahun' },
        { id: 'ATP-2024-002', type: 'Tiket Masuk Dewasa', price: 'Rp.10.000', stock: 250, details: 'Usia 6 Tahun Keatas' },
        { id: 'ATP-2024-003', type: 'Sewa Tenda Biasa', price: 'Rp.135.000', stock: 150, details: 'Kapasitas 3-4 Orang' },
        { id: 'ATP-2024-004', type: 'Camping Biasa', price: 'Rp.200.000', stock: 100, details: 'Kapasitas 3-4 Orang, Matras, Sleeping Bag' },
    ];

    const handleEdit = (id) => {
        console.log('Edit tiket ID:', id);
    };

    const handleDelete = (id) => {
        console.log('Delete tiket ID:', id);
    };

    return (
        <>
            <HeaderComponent />
            <SidebarComponent />

            <div className="ticket-container">
                <h2>Konfirmasi Tiket</h2>
                <p>Ini adalah halaman untuk melihat data serta menambah detail tiket pengunjung Agrowisata Tepas Papandayan.</p>

                <div className="ticket-confirmation">
                    <div className="filter-search">
                        <button className="filter-button"><FaFilter /> Filter</button>
                        <div className="search-bar">
                            <input type="text" placeholder="Pencarian" />
                            <button><FaSearch /></button>
                        </div>
                    </div>

                    <table className="ticket-table">
                        <thead>
                            <tr>
                                <th>ID TIKET</th>
                                <th>JENIS TIKET</th>
                                <th>HARGA</th>
                                <th>STOK</th>
                                <th>DETAIL</th>
                                <th>AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map(ticket => (
                                <tr key={ticket.id}>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.type}</td>
                                    <td>{ticket.price}</td>
                                    <td>{ticket.stock}</td>
                                    <td>{ticket.details}</td>
                                    <td>
                                        <button className="action-button edit" onClick={() => handleEdit(ticket.id)}><FaEdit /> Edit</button>
                                        <button className="action-button delete" onClick={() => handleDelete(ticket.id)}><FaTrash /> Delete</button>
                                    </td>
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
                    <button className="manage-ticket-button" onClick={() => navigate('/kelolatiket')}>Kelola Tiket</button>
                </div>
            </div>
        </>
    );
};

export default Konfirmasitiket;
