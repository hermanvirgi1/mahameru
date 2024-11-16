import React from 'react';
import '../dist/css/main.css';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import { Line} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const data = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'], // Label bulanan
    datasets: [
      {
        label: 'Pemasukan',
        data: [10000000, 12000000, 11000000, 13000000, 12500000, 14000000], // Data pemasukan
        borderColor: 'rgba(75, 192, 192, 1)', // Warna garis pemasukan
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Warna latar belakang garis pemasukan
        tension: 0.1,
      },
      {
        label: 'Pengeluaran',
        data: [5000000, 6000000, 5500000, 7000000, 6500000, 7500000], // Data pengeluaran
        borderColor: 'rgba(255, 99, 132, 1)', // Warna garis pengeluaran
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Warna latar belakang garis pengeluaran
        tension: 0.1,
      },
      {
        label: 'Laba Bersih',
        data: [5000000, 6000000, 5500000, 6000000, 6000000, 6500000], // Data laba bersih
        borderColor: 'rgba(153, 102, 255, 1)', // Warna garis laba bersih
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Warna latar belakang garis laba bersih
        tension: 0.1,
      },
    ],
  };

const visitorData = {
  labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'], // Label bulanan
    datasets: [
      {
        label: 'Pengunjung Dewasa',
        data: [200, 250, 220, 280, 300, 320], // Jumlah pengunjung dewasa per bulan
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Pengunjung Anak-Anak',
        data: [80, 100, 90, 120, 110, 130], // Jumlah pengunjung anak-anak per bulan
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const ticketData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'], // Label bulanan
    datasets: [
      {
        label: 'Tiket Dewas',
        data: [85, 150, 90, 155, 110, 160], // Jumlah pengunjung dewasa per bulan
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Tiket Anak-Anak',
        data: [80, 100, 90, 120, 110, 130], // Jumlah pengunjung anak-anak per bulan
        borderColor: 'rgba(153, 102, 255, 1)', // Warna garis laba bersih
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Warna latar belakang garis laba bersih
        tension: 0.1,
      },
      {
        label: 'Pembelian Paket',
        data: [350, 250, 220, 280, 300, 320], // Jumlah pengunjung anak-anak per bulan
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const crowdData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'], // Label bulanan
    datasets: [
      {
        label: 'Hari Biasa',
        data: [85, 150, 90, 155, 110, 160], // Jumlah pengunjung dewasa per bulan
        borderColor: 'rgba(255, 99, 132, 1)', // Warna garis pengeluaran
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Warna latar belakang garis pengeluaran
        tension: 0.1,
      },
      {
        label: 'Akhir Pekan',
        data: [280, 100, 150, 120, 130, 195], // Jumlah pengunjung anak-anak per bulan
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Tanggal Merah',
        data: [350, 250, 220, 280, 300, 320], // Jumlah pengunjung anak-anak per bulan
        borderColor: 'rgba(75, 192, 192, 1)', // Warna garis pemasukan
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Warna latar belakang garis pemasukan
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Ini adalah halaman untuk menyajikan data secara visual di Agrowisata Tepas Papandayan</p>

        <div className="info-cards">
          <div className="card income">Jumlah Pemasukan<br />Rp 10.000.000</div>
          <div className="card expense">Jumlah Pengeluaran<br />Rp 5.000.000</div>
          <div className="card cash">Jumlah Uang Tunai<br />Rp 12.000.000</div>
          <div className="card profit">Laba Bersih<br />Rp 8.000.000</div>
        </div>
      
        <div className="Line-charts">
          <div className="data-chart">
            <h3>Grafik Pemasukan, Pengeluaran, dan Laba Bersih</h3>
            <Line data={data} />
          </div>
          <div className="pengunjung-chart">
            <h3>Grafik Pengunjung Dewasa dan Anak-Anak</h3>
            <Line data={visitorData} />
          </div>
        </div>

        <div className="Line-charts">
          <div className="tic-chart">
            <h3> Grafik Pembelian Tiket</h3>
            <Line data={ticketData} />
          </div>
          <div className="ramai-chart">
            <h3>Grafik Keramaian Pengunjung</h3>
            <Line data={crowdData} />
          </div>
        </div>
        </div>
    </>
  );
};

export default Dashboard;
