import React, { useState } from 'react';
import { FaTachometerAlt, FaClipboardList, FaTicketAlt, FaCogs, FaUserTie, FaUsers, FaTools, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from "react-router-dom";
import '../dist/css/main.css';

const SidebarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Menentukan apakah halaman saat ini sesuai dengan item yang dipilih
  const getActiveClass = (path) => location.pathname === path ? 'active' : '';

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className={`logo ${getActiveClass('/')}`} style={{ pointerEvents: 'none' }}>
      Verdant
      </div>

      <h3>Menu</h3>
      <ul className="menu">
        <li className={getActiveClass('/dashboard')} onClick={() => navigate('/dashboard')}>
          <FaTachometerAlt className="sidebar-icon" />
          Dashboard
        </li>
        <li className={getActiveClass('/transaksi')} onClick={() => navigate('/transaksi')}>
          <FaClipboardList className="sidebar-icon" />
          Transaksi
        </li>
        <li className={getActiveClass('/konfirmasitiket')} onClick={() => navigate('/konfirmasitiket')}>
          <FaTicketAlt className="sidebar-icon" />
          Konfirmasi Tiket
        </li>
      </ul>
      <h3>Data</h3>
      <ul className="menu">
        <li className={getActiveClass('/inven')} onClick={() => navigate('/inven')}>
          <FaTools className="sidebar-icon" />
          Inventaris
        </li>
        <li className={getActiveClass('/datapegawai')} onClick={() => navigate('/datapegawai')}>
          <FaUserTie className="sidebar-icon" />
          Pegawai
        </li>
        <li className={getActiveClass('/datapengunjung')} onClick={() => navigate('/datapengunjung')}>
          <FaUsers className="sidebar-icon" />
          Pengunjung
        </li>
        <li className={getActiveClass('/pengaturan')} onClick={() => navigate('/pengaturan')}>
          <FaCogs className="sidebar-icon" />
          Pengaturan
        </li>
      </ul>
      <div className="logout">
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt className="sidebar-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarComponent;
