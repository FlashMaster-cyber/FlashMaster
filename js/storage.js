/* =====================================
   FlashMaster v1.0.0
   storage.js

   Quản lý lưu dữ liệu
===================================== */


const STORAGE_KEY = "flashmaster_data";


// Dữ liệu mặc định

const defaultData = {

    words: [],

    stats: {

        correct:0,

        wrong:0,

        combo:0

    }

};



// Lấy dữ liệu

function getData(){

    const data =
    localStorage.getItem(STORAGE_KEY);


    if(data){

        return JSON.parse(data);

    }


    return defaultData;

}



// Lưu dữ liệu

function saveData(data){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(data)

    );

}



// Thêm từ mới

function addWord(english,vietnamese){

    const data = getData();


    data.words.push({

        english:english,

        vietnamese:vietnamese,

        level:1

    });


    saveData(data);

    cloudSave();

}



// Xóa từ

function removeWord(index){

    const data = getData();


    data.words.splice(index,1);


    saveData(data);

    cloudSave();

}



// Cập nhật thống kê

function updateStats(type){

    const data = getData();


    if(type==="correct"){

        data.stats.correct++;

        data.stats.combo++;

    }


    if(type==="wrong"){

        data.stats.wrong++;

        data.stats.combo=0;

    }


    saveData(data);

    cloudSave();

   loadStats();

}
// Hiển thị thống kê

function loadStats(){

    const data = getData();

    const correct =
        document.getElementById("correct");

    const wrong =
        document.getElementById("wrong");

    const combo =
        document.getElementById("combo");

    if(correct){

        correct.innerText =
            data.stats.correct;

    }

    if(wrong){

        wrong.innerText =
            data.stats.wrong;

    }

    if(combo){

        combo.innerText =
            data.stats.combo;

    }

}
// Lưu dữ liệu lên Firebase

async function cloudSave(){

    const user = window.auth.currentUser;

    if(!user){

        return;

    }

    await setDoc(

        doc(
            db,
            "users",
            user.uid
        ),

        getData()

    );

}
