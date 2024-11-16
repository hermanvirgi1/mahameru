package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.ConfirmationNumber
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Receipt
import androidx.compose.material3.Card
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class HomeActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            HomeScreen()
        }
    }
}

@Composable
fun HomeScreen() {
    Scaffold(
        bottomBar = { BottomNavigationBar() }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp)
        ) {
            TopSection()
            Spacer(modifier = Modifier.height(16.dp))
            PromoSection()
            Spacer(modifier = Modifier.height(16.dp))
            FacilitySection()
        }
    }
}

@Composable
fun TopSection() {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(120.dp)
            .background(color = Color(0xFF00796B), shape = RoundedCornerShape(8.dp))
            .padding(16.dp)
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Column {
                Text(
                    text = "Hi Emely Boston!",
                    fontSize = 16.sp,
                    color = Color.White,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "Selamat Datang\nDi Tepas Papandayan",
                    fontSize = 14.sp,
                    color = Color.White
                )
                Text(
                    text = "Garut, Jawa Barat",
                    fontSize = 12.sp,
                    color = Color.White
                )
            }
            Spacer(modifier = Modifier.weight(1f))
            Icon(
                imageVector = Icons.Default.AccountCircle,
                contentDescription = "Profile Icon",
                tint = Color.White,
                modifier = Modifier.size(48.dp)
            )
        }
    }
}

@Composable
fun PromoSection() {
    Card(
        shape = RoundedCornerShape(8.dp),
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier
                .background(Color(0xFFD1421D))
                .padding(20.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "Mulai dari\n5.000 aja!",
                    fontSize = 12.sp,
                    color = Color.Yellow,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Pesan Tiket Jadi Lebih Mudah",
                    fontSize = 16.sp,
                    color = Color.White,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "Dapatkan harga menarik\ndengan pesan tiket online",
                    fontSize = 12.sp,
                    color = Color.White
                )
            }
            Spacer(modifier = Modifier.weight(1f))
            Icon(
                painter = painterResource(id = R.drawable.megaphone),
                contentDescription = "Ticket Icon",
                tint = Color.Unspecified,
                modifier = Modifier.size(48.dp)
            )
        }
    }
}

@Composable
fun FacilitySection() {
    Column {
        Text(
            text = "Daftar Fasilitas Wisata",
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold,
            color = Color.Black
        )
        Spacer(modifier = Modifier.height(8.dp))
        Row(
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            FacilityItem("Kolam Rendam Air Panas", R.drawable.kolam_air_panas)
            FacilityItem("Camping Ground", R.drawable.kemah)
            FacilityItem("Kebun Strawberry", R.drawable.kebun_buah)
            FacilityItem("Gazebo", R.drawable.gazebo)
        }
    }
}

@Composable
fun FacilityItem(title: String, imageRes: Int) {
    Card(
        shape = RoundedCornerShape(8.dp),
        modifier = Modifier
            .width(160.dp)
            .height(200.dp)
    ) {
        Column(
            modifier = Modifier.padding(8.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Image(
                painter = painterResource(id = imageRes),
                contentDescription = title,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(120.dp)
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = title,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold,
                color = Color.Black,
                textAlign = TextAlign.Center
            )
        }
    }
}

@Composable
fun BottomNavigationBar() {
    NavigationBar {
        NavigationBarItem(
            icon = { Icon(Icons.Default.Home, contentDescription = "Beranda") },
            label = { Text("Beranda") },
            selected = true,
            onClick = { /*TODO*/ }
        )
        NavigationBarItem(
            icon = { Icon(Icons.Default.ConfirmationNumber, contentDescription = "Tiket") },
            label = { Text("Tiket") },
            selected = false,
            onClick = { /*TODO*/ }
        )
        NavigationBarItem(
            icon = { Icon(Icons.Default.Receipt, contentDescription = "Transaksi") },
            label = { Text("Transaksi") },
            selected = false,
            onClick = { /*TODO*/ }
        )
        NavigationBarItem(
            icon = { Icon(Icons.Default.AccountCircle, contentDescription = "Profil") },
            label = { Text("Profil") },
            selected = false,
            onClick = { /*TODO*/ }
        )
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewHomeScreen() {
    HomeScreen()
}

