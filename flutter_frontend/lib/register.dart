import 'package:flutter/material.dart';
import 'package:video_and_chat_app/homepage.dart';

class SignUp extends StatefulWidget {
  const SignUp({Key? key}) : super(key: key);

  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  final TextEditingController _name = TextEditingController();
  final TextEditingController _email = TextEditingController();
  final TextEditingController _mobileno = TextEditingController();
  final TextEditingController _password = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Register'),
        centerTitle: true,
      ),
      body: Container(
        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
        margin: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
        child: ListView(
          children: [
            TextFormField(
              controller: _name,
              decoration: InputDecoration(
                icon: Icon(Icons.person),
                labelText: 'Name',
              ),
            ),
            TextFormField(
              controller: _mobileno,
              decoration: InputDecoration(
                icon: Icon(Icons.phone),
                labelText: 'Mobile Number',
              ),
            ),
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
            SizedBox(height: 25),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => HomePage(),
                  ),
                );
              },
              child: Text('Sign-up'),
            )
          ],
        ),
      ),
    );
  }
}
