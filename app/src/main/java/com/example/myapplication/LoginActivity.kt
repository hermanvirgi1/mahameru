package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class LoginActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LoginScreen()
        }
    }
}

@Composable
fun LoginScreen() {
    Box(
        modifier = Modifier
            .width(412.dp)
            .height(917.dp)
            .background(Color(0xFFFFFFFF))
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Spacer(modifier = Modifier.height(40.dp))

            Box(
                modifier = Modifier
                    .shadow(elevation = 4.dp, spotColor = Color(0x40000000), ambientColor = Color(0x40000000))
                    .width(412.dp)
                    .height(350.dp)
                    .background(color = Color(0xFF00796B), shape = RoundedCornerShape(size = 50.dp))
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center,
                    modifier = Modifier.fillMaxSize()
                ) {
                    Image(
                        painter = painterResource(id = R.drawable.animasi_login),
                        contentDescription = null,
                        modifier = Modifier
                            .shadow(elevation = 4.dp, spotColor = Color(0x40000000), ambientColor = Color(0x40000000))
                            .width(324.dp)
                            .height(229.dp)
                    )
                    Text(
                        text = "Selamat Datang",
                        fontSize = 30.sp,
                        fontWeight = FontWeight.Bold,
                        color = Color.White
                    )
                }
            }

            Spacer(modifier = Modifier.height(40.dp))

            var username by remember { mutableStateOf("") }
            var password by remember { mutableStateOf("") }
            var passwordVisible by remember { mutableStateOf(false) }

            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = "Masuk",
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.Black,
                    modifier = Modifier.fillMaxWidth(),
                    textAlign = TextAlign.Start
                )

                Spacer(modifier = Modifier.height(20.dp))

                BasicTextField(
                    value = username,
                    onValueChange = { username = it },
                    modifier = Modifier
                        .fillMaxWidth()
                        .border(1.dp, color = Color(0xFF00796B), shape = RoundedCornerShape(8.dp))
                        .padding(16.dp),
                    decorationBox = { innerTextField ->
                        if (username.isEmpty()) {
                            Text("Nama Pengguna", color = Color.Gray)
                        }
                        innerTextField()
                    }
                )

                Spacer(modifier = Modifier.height(16.dp))

                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .border(1.dp, color = Color(0xFF00796B), shape = RoundedCornerShape(8.dp))
                        .padding(horizontal = 8.dp, vertical = 4.dp), // Mengatur padding
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    BasicTextField(
                        value = password,
                        onValueChange = { password = it },
                        modifier = Modifier
                            .weight(1f)
                            .padding(8.dp),
                        visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                        decorationBox = { innerTextField ->
                            if (password.isEmpty()) {
                                Text("Kata Sandi", color = Color.Gray)
                            }
                            innerTextField()
                        },
                        keyboardOptions = KeyboardOptions.Default.copy(imeAction = ImeAction.Done),
                        keyboardActions = KeyboardActions(onDone = { })
                    )

                    IconButton(onClick = { passwordVisible = !passwordVisible }) {
                        Icon(
                            imageVector = if (passwordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                            contentDescription = null,
                            tint = Color.Gray
                        )
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))

                Row(
                    horizontalArrangement = Arrangement.SpaceBetween,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(
                        text = "Simpan Kata Sandi",
                        color = Color.Black,
                        modifier = Modifier.align(Alignment.CenterVertically)
                    )
                    TextButton(onClick = {}) {
                        Text("Lupa Kata Sandi?", color = Color.Black)
                    }
                }

                Spacer(modifier = Modifier.height(20.dp))

                // Tombol Masuk
                Button(
                    onClick = {},
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(48.dp),
                    colors = ButtonDefaults.buttonColors(Color(0xFFFF7043))
                ) {
                    Text("Masuk")
                }

                Spacer(modifier = Modifier.height(20.dp))

                Row(
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically, // Untuk memastikan elemen sejajar secara vertikal
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text("Belum punya akun? ")
                    TextButton(onClick = {}) {
                        Text("Daftar", color = Color(0xFFFF7043))
                    }
                }
            }
            }
        }
    }


@Preview(showBackground = true, widthDp = 412, heightDp = 917)
@Composable
fun PreviewLoginScreen() {
    LoginScreen()
}
