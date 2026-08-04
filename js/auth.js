import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const auth = window.firebaseAuth;

document.getElementById("registerBtn").onclick = async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Đăng ký thành công!");
    }catch(e){
        alert(e.message);
    }

};

document.getElementById("loginBtn").onclick = async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   try{

    await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

    await cloudLoad();

    alert("Đăng nhập thành công!");

}catch(e){
        alert(e.message);
    }

};

document.getElementById("logoutBtn").onclick = async () => {

    await signOut(auth);
    alert("Đã đăng xuất");

};
