import 'package:flutter/material.dart';
import 'package:video_and_chat_app/homepage.dart';
import 'package:video_and_chat_app/register.dart';

class LogIn extends StatefulWidget {
  const LogIn({Key? key}) : super(key: key);

  @override
  State<LogIn> createState() => _LogInState();
}

class _LogInState extends State<LogIn> {
  final TextEditingController _email = TextEditingController();
  final TextEditingController _password = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Log-In'),
        centerTitle: true,
      ),
      body: Container(
        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
        margin: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
        child: ListView(
          children: [
            TextFormField(
              controller: _email,
              decoration: InputDecoration(
                icon: Icon(Icons.email_outlined),
                labelText: 'Email',
              ),
            ),
            TextFormField(
              controller: _password,
              decoration: InputDecoration(
                icon: Icon(Icons.password),
                labelText: 'Password',
              ),
            ),
            SizedBox(
              height: 30,
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => HomePage(),
                  ),
                );
              },
              child: Text('Login'),
            ),
            TextButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => SignUp(),
                  ),
                );
              },
              child: Text("Don't have an account?\nSign Up"),
            ),
          ],
        ),
      ),
    );
  }
}
