import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Transaksi from './pages/transaksi'
import Konfirmasitiket from './pages/konfirmasitiket'
import Kelolatiket from './pages/kelolatiket'
import Detailtransaksi from './pages/detailtransaksi'
import Profiladmin from './pages/profiladmin'
import Datapengunjung from './pages/datapengunjung'
import Pengaturan from './pages/pengaturan'
import Editprofil from './pages/editprofil'
import Editpengaturan from './pages/editpengaturan'
import Datapegawai from './pages/datapegawai'
import Kelolapegawai from './pages/kelolapegawai'
import Inven from './pages/inven'
import Kelolainven from './pages/kelolainven'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/dist/css/main.css'


function App() {

  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/transaksi' element={<Transaksi />} />
          <Route path='/konfirmasitiket' element={<Konfirmasitiket />} />
          <Route path='/kelolatiket' element={<Kelolatiket />} />
          <Route path='/detailtransaksi' element={<Detailtransaksi />} />
          <Route path='/profiladmin' element={<Profiladmin />} />
          <Route path='/datapengunjung' element={<Datapengunjung/>} />
          <Route path='/pengaturan' element={<Pengaturan/>} />
          <Route path='/editprofil' element={<Editprofil/>} />
          <Route path='/editpengaturan' element={<Editpengaturan/>} />
          <Route path='/datapegawai' element={<Datapegawai/>} />
          <Route path='/kelolapegawai' element={<Kelolapegawai/>} />
          <Route path='/inven' element={<Inven/>} />
          <Route path='/kelolainven' element={<Kelolainven/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App



