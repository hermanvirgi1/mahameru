package com.example.myapplication
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.core.LinearOutSlowInEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

class OnBoardingActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MainScreen()
        }
    }
}

@Composable
fun MainScreen() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "welcome") {
        composable("welcome") { WelcomeScreen(navController) }
        composable("next") { NextScreen(navController) }
        composable("nextlagi") { NextLagiScreen(navController) }
    }
}

@Composable
fun WelcomeScreen(navController: NavHostController) {
    Box(
        modifier = Modifier
            .fillMaxSize()
    ) {
        Image(
            painter = painterResource(id = R.drawable.bg_terang),
            contentDescription = null,
            modifier = Modifier.fillMaxSize()
        )

        Box(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 400.dp)
        ) {
            DotsAnimation()
        }

        Box(
            modifier = Modifier
                .align(Alignment.TopStart)
        ) {

            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = "Selamat Datang\ndi Tepas Papandayan",
                fontSize = 40.sp,
                fontFamily = FontFamily(Font(R.font.poppins_bold)),
                fontWeight = FontWeight.Bold,
                color = Color.White,
                modifier = Modifier.offset(x = 38.dp, y = 550.dp)
            )
        }

        Box(
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(32.dp)
        ) {
            Button(
                onClick = {
                    navController.navigate("next")
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF007B4F))
            ) {
                Text(text = "Jelajah", color = Color.White, fontSize = 16.sp)
            }
        }
    }
}

@Composable
fun DotsAnimation() {
    val dotCount = 3
    val dotSize = 8.dp
    val dotSpacing = 8.dp
    val infiniteTransition = rememberInfiniteTransition(label = "Pertama")
    val dotAnimations = List(dotCount) { index ->
        infiniteTransition.animateFloat(
            initialValue = 0.3f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                animation = tween(
                    durationMillis = 500,
                    delayMillis = index * 150,
                    easing = LinearOutSlowInEasing
                ),
                repeatMode = RepeatMode.Reverse
            ), label = ""
        )
    }

    Row(
        modifier = Modifier
            .wrapContentWidth()
            .padding(vertical = 16.dp),
        horizontalArrangement = Arrangement.spacedBy(dotSpacing)
    ) {
        for (animation in dotAnimations) {
            Box(
                modifier = Modifier
                    .size(dotSize)
                    .clip(CircleShape)
                    .background(Color.Black.copy(alpha = animation.value))
            )
        }
    }
}

@Composable
fun NextScreen(navController: NavHostController) {
    Box(
        modifier = Modifier
            .fillMaxSize()
    ) {
        Image(
            painter = painterResource(id = R.drawable.bg_terang),
            contentDescription = null,
            modifier = Modifier.fillMaxSize()
        )

        Box(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 400.dp)
        ) {
            DotsAnimation()
        }

        Box(
            modifier = Modifier
                .align(Alignment.TopStart)
        ) {

            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = "Objek Wisata yang\nMenawarkan tempat\nPemandian Air  Panas\ndengan Pemandangan\nMenghadap Gunung\nCikuray ",
                fontSize = 25.sp,
                fontFamily = FontFamily(Font(R.font.poppins_bold)),
                fontWeight = FontWeight.Bold,
                color = Color.White,
                modifier = Modifier.offset(x = 38.dp, y = 550.dp)
            )
        }
        Box(
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(32.dp)
        ) {
            Button(
                onClick = {
                    navController.navigate("next")
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF007B4F))
            ) {
                Text(text = "Selanjutnya", color = Color.White, fontSize = 16.sp)
            }
        }
    }
}

@Composable
fun NextLagiScreen(navController: NavHostController) {
    Box(
        modifier = Modifier
            .fillMaxSize()
    ) {
        Image(
            painter = painterResource(id = R.drawable.bg_terang),
            contentDescription = null,
            modifier = Modifier.fillMaxSize()
        )

        Box(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 400.dp)
        ) {
            DotsAnimation()
        }

        Box(
            modifier = Modifier
                .align(Alignment.TopStart)
        ) {

            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = "Tersedia Camping Ground\nuntuk Anda Bermalam,\nserta Kebun Buah untuk\nPengalaman berkebun Anda",
                fontSize = 25.sp,
                fontFamily = FontFamily(Font(R.font.poppins_bold)),
                fontWeight = FontWeight.Bold,
                color = Color.White,
                modifier = Modifier.offset(x = 38.dp, y = 425.dp)
            )
        }

        Box(
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(32.dp)
        ) {
            Button(
                onClick = {
                    navController.navigate("next")
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF007B4F))
            ) {
                Text(text = "Selanjutnya", color = Color.White, fontSize = 16.sp)
            }
        }
    }
}

@Preview(showBackground = true, widthDp = 412, heightDp = 917)
@Composable
fun PreviewWelcomeScreen() {
    WelcomeScreen(navController = rememberNavController())
}

@Preview(showBackground = true, widthDp = 412, heightDp = 917)
@Composable
fun PreviewNextScreen() {
    NextScreen(navController = rememberNavController())
}
