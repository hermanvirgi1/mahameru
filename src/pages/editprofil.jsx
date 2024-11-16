import React, { useState } from 'react';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';

function Editprofil() {
  // State to manage form inputs and profile picture
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    avatar: null // To store the selected avatar image
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input change (for avatar)
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          avatar: reader.result // Store the image as base64 data URL
        });
      };
      reader.readAsDataURL(file); // Convert the image to base64
    }
  };

  // Handle form submission (you can add logic to send data to a server or save it locally)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data directly, here we are using localStorage as an example
    localStorage.setItem('adminProfile', JSON.stringify(formData));
    console.log('Updated Profile:', formData);
    // You can also add logic to update profile information in your backend here
  };

  return (
    <>
      <HeaderComponent />
      <SidebarComponent />

      <div className="edit-profile">
        <h2>Edit Profil Admin</h2>
        <p>Ini adalah halaman untuk mengedit profil admin</p>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group box">
            <div className="avatar-preview">
              {formData.avatar ? (
                <img src={formData.avatar} alt="Avatar Preview" className="avatar-img" />
              ) : (
                <p>Belum ada foto</p>
              )}
            </div>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group box">
            <label>Nama Depan</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group box">
            <label>Nama Belakang</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group box">
            <label>Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group box">
            <label>Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-buttons">
            <button type="submit" className="save-button">Simpan</button>
            <button type="button" className="cancel-button" onClick={() => window.history.back()}>Batal</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Editprofil;
