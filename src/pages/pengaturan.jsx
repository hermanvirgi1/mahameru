import React, { useState } from 'react';
import '../dist/css/main.css';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import { useNavigate } from "react-router-dom"

const Pengaturan = () => {
    const navigate = useNavigate();
    const [isNotificationOn, setIsNotificationOn] = useState(true);
    const [language, setLanguage] = useState('Bahasa Indonesia');
  
    return (
        <>
        <HeaderComponent /> 
        <SidebarComponent />
        <div className="settings-container">
        <h1>Pengaturan</h1>
        <p>Ini adalah halaman yang berisi pengaturan website.</p>
  
        <div className="section-account">
          <h2>Akun dan Keamanan</h2>
          <div className="input-group">
            <label>Username</label>
            <input type="text" value="Refiani Julianti" readOnly />
          </div>
          <div className="input-group">
            <label>No. Handphone</label>
            <input type="text" value="0812-1985-3387" readOnly />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value="refianijuliantin@gmail.com" readOnly />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value="************" readOnly />
          </div>
          <button className="edit-button" onClick={() => navigate('/editpengaturan')}>Edit</button>
        </div>
  
        <div className="section-notif">
          <h2>Pengaturan Notifikasi</h2>
          <div className="input-group">
            <label>Notifikasi di Website</label>
            <div className="checkbox-toggle">
              <input 
                type="checkbox" 
                checked={isNotificationOn} 
                onChange={() => setIsNotificationOn(!isNotificationOn)}
                id="notif-checkbox"
              />
              <label htmlFor="notif-checkbox" className={`toggle-label ${isNotificationOn ? 'on' : 'off'}`}>
                {isNotificationOn ? (
                  <><i className="fas fa-bell"></i>Aktifkan Notifikasi</>
                ) : (
                  <><i className="fas fa-bell-slash"></i>Matikan Notifikasi</>
                )}
              </label>
            </div>
          </div>
          <div className="input-group">
            <label>Bunyi Notifikasi</label>
            <select defaultValue="Default">
              <option value="Default">Default</option>
              <option value="Tone1">Tone 1</option>
              <option value="Tone2">Tone 2</option>
            </select>
          </div>
        </div>
  
        <div className="section-lang">
          <h2>Pengaturan Bahasa</h2>
          <div className="input-group">
            <label>Bahasa Indonesia</label>
            <input 
              type="radio" 
              name="language" 
              checked={language === 'Bahasa Indonesia'} 
              onChange={() => setLanguage('Bahasa Indonesia')}
            />
          </div>
          <div className="input-group">
            <label>English (American)</label>
            <input 
              type="radio" 
              name="language" 
              checked={language === 'English'} 
              onChange={() => setLanguage('English')}
            />
          </div>
          <div className="input-group">
            <label>English (British)</label>
            <input 
              type="radio" 
              name="language" 
              checked={language === 'English'} 
              onChange={() => setLanguage('English')}
            />
          </div>
        </div>
      </div>
        </>
    );
  };

export default Pengaturan