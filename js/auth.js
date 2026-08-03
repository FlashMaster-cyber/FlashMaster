import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const auth = window.firebaseAuth;

// Đăng ký
window.register = async function(email, password){

    try{

        await createUserWithEmailAndPassword(auth, email, password);

        alert("Đăng ký thành công!");

    }

    catch(error){

        alert(error.message);

    }

};

// Đăng nhập
window.login = async function(email, password){

    try{

        await signInWithEmailAndPassword(auth, email, password);

        alert("Đăng nhập thành công!");

    }

    catch(error){

        alert(error.message);

    }

};

// Đăng xuất
window.logout = async function(){

    await signOut(auth);

    alert("Đã đăng xuất");

};
