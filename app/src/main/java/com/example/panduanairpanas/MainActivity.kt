package com.example.panduanairpanas

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.panduanairpanas.ui.theme.PanduanairpanasTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            PanduanairpanasTheme {
                Scaffold(modifier = Modifier.fillMaxSize(),
                    topBar = { TopAppBar() }
                ) { innerPadding ->

                MainScreen(modifier = Modifier.padding(innerPadding))
                    }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopAppBar() {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFF00796B))
            .padding(30.dp)
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Spacer(modifier = Modifier.height(50.dp))
            Text(
                text = "Panduan Tempat Wisata",
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )
        }
    }
}

@Composable
fun MainScreen(modifier: Modifier = Modifier) {
    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        // Image Card
        Card(
            shape = RoundedCornerShape(22.dp),
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp)
        ) {
            Box {
                Image(
                    painter = painterResource(id = R.drawable.airpanas),
                    contentDescription = "Kolam Rendam Air Panas",
                    contentScale = ContentScale.Crop,
                    modifier = Modifier.fillMaxSize()
                )
                Text(
                    text = "Rekomendasi\nKolam Rendam Air Panas",
                    color = Color.White,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier
                        .align(Alignment.BottomStart)
                        .padding(8.dp)
                )
            }
        }

        Spacer(modifier = Modifier.height(20.dp))

        // Operational Hours
        SectionTitle(text = "Jam Operasional Pengunjung")
        Text(
            text = "08.00 - 18.00",
            fontSize = 14.sp,
            color = Color(0xFFE64A19),
            modifier = Modifier.padding(start = 8.dp)
        )

        Spacer(modifier = Modifier.height(8.dp))

        SectionTitle(text = "Jam Operasional Pengunjung Bermalam")
        Text(
            text = "24 Jam",
            fontSize = 14.sp,
            color = Color(0xFFE64A19),
            modifier = Modifier.padding(start = 8.dp)
        )

        Spacer(modifier = Modifier.height(12.dp))

        // Description
        SectionTitle(text = "Deskripsi Tempat Wisata")
        Text(
            text = "Hal yang menarik dari Agrowisata Tepas Papandayan ini adalah kolam rendam utamanya yang bergaya infinity pool, asap dari kolam menjadikannya panorama yang eksotis, ditambah dengan udara dingin di daerah pegunungan yang menyegarkan. Sebuah gazebo juga tersedia untuk wisatawan bersantai.\n" +
                    "\n" +
                    "Selain itu, kolam air panas di sana berasal dari sumber alami yang mengandung belerang, dipercaya bermanfaat bagi kesehatan kulit, dan dikelilingi pemandangan Gunung Cikuray.",
            fontSize = 14.sp,
            textAlign = TextAlign.Justify,
            modifier = Modifier.padding(start = 8.dp)
        )

        Spacer(modifier = Modifier.height(12.dp))

        // Policy
        SectionTitle(text = "Kebijakan")
        Text(
            text = "Tiket masuk Tepas Papandayan sudah termasuk dengan fasilitas kolam rendam air panas sesuai jam operasional pengunjung.",
            fontSize = 14.sp,
            textAlign = TextAlign.Justify,
            modifier = Modifier.padding(start = 8.dp)
        )
        Text(
            text = "Tiket masuk belum termasuk dengan tiket parkir.",
            fontSize = 14.sp,
            textAlign = TextAlign.Justify,
            modifier = Modifier.padding(start = 8.dp, top = 4.dp)
        )
    }
}

@Composable
fun SectionTitle(text: String) {
    Text(
        text = text,
        fontSize = 16.sp,
        fontWeight = FontWeight.Bold,
        modifier = Modifier.padding(bottom = 4.dp)
    )
}

@Preview(showBackground = true)
@Composable
fun PreviewMainContent() {
    PanduanairpanasTheme {
        MainScreen()
    }
}



