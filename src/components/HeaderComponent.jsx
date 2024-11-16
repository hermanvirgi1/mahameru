import React from "react";
import { useNavigate } from "react-router-dom"; // Pastikan Anda menggunakan react-router-dom v6
import '../dist/css/main.css';
import userAvatar from '../assets/img/User.png';

function HeaderComponent() {
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    navigate('/profiladmin'); // Ganti dengan rute ke halaman profil admin
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="welcome-message">
          <span>Hello, Refiani! Selamat datang di Verdant</span>
        </div>
        <div className="user-info" onClick={handleNavigateToProfile} style={{ cursor: 'pointer' }}>
          <img src={userAvatar} alt="User" className="user-avatar" />
          <span className="user-name">Refiani Julianti</span> {/* Menampilkan nama pengguna */}
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
