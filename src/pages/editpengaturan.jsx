import React, { useState } from 'react';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';

function Editpengaturan() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission (you can add logic to send data to a server here)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Settings:', formData);
    // You can add logic to update account settings in your backend here
  };

  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      
      <div className="edit-settings">
        <h2>Edit Pengaturan Akun</h2>
        <p>Halaman untuk mengubah pengaturan akun Anda</p>
        
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group box">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Masukkan username"
            />
          </div>

          <div className="form-group box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan email baru"
            />
          </div>

          <div className="form-group box">
            <label>Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Masukkan nomor telepon"
            />
          </div>

          <div className="form-group box">
            <label>Password Saat Ini</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              placeholder="Masukkan password saat ini"
            />
          </div>

          <div className="form-group box">
            <label>Password Baru</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="Masukkan password baru"
            />
          </div>

          <div className="form-group box">
            <label>Konfirmasi Password Baru</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Konfirmasi password baru"
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="save-button" >Simpan Perubahan</button>
            <button type="button" className="cancel-button" onClick={() => window.history.back()}>Batal</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Editpengaturan;
