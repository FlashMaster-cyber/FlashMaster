/* =====================================
   FlashMaster v1.0.0
   app.js

   Application Controller
===================================== */


// Khi trang web tải xong

document.addEventListener(
    "DOMContentLoaded",
    function(){

        console.log(
            "FlashMaster loaded!"
        );


        initApp();

        setupButtons();

    }
);



// Khởi tạo ứng dụng

function initApp(){

    loadStats();

    generateCard();
   
    renderLibrary();


    const nextButton =
    document.getElementById(
        "nextBtn"
    );


    if(nextButton){

        nextButton.onclick =
        function(){

            generateCard();

        };

    }


}



// Xử lý trả lời

function submitAnswer(){

    const input =
    document.getElementById(
        "answer"
    );


    if(!input){

        return;

    }


    const result =
    checkAnswer(
        input.value
    );


    const message =
    document.getElementById(
        "message"
    );


    if(result){

        message.innerText =
        "✅ Chính xác!";

    }

    else{

        message.innerText =
        "❌ Sai rồi!";

    }

setTimeout(() => {

    generateCard();
    input.value = "";
    message.innerText = "";

}, 1000);
    input.value="";

}
// =============================
// Button Events
// =============================


document.addEventListener(
    "DOMContentLoaded",
    function(){


        const checkButton =
            document.getElementById(
                "checkBtn"
            );


        if(checkButton){

            checkButton.onclick =
            submitAnswer;

        }



        const addButton =
        document.getElementById(
            "addWord"
        );


        if(addButton){

            addButton.onclick =
            function(){

                const english =
                document.getElementById(
                    "english"
                ).value;


                const vietnamese =
                document.getElementById(
                    "vietnamese"
                ).value;


                if(
                    english &&
                    vietnamese
                ){

                   addWord(
    english,
    vietnamese
);

renderLibrary();

alert(
    "Thêm vào cuộc đời rẻ rách của m 1 thiên phú giao tiếp mới!"
);

generateCard();
                   document.getElementById("english").value = "";

document.getElementById("vietnamese").value = "";
                }

            };

        }


    }
);



// =============================
// Navigation
// =============================

function setupButtons(){

    const learnBtn =
        document.getElementById("learnBtn");

    const libraryBtn =
        document.getElementById("libraryBtn");

    const statsBtn =
        document.getElementById("statsBtn");

    const learnPage =
        document.getElementById("learnPage");

    const libraryPage =
        document.getElementById("libraryPage");

    const statsPage =
        document.getElementById("statsPage");

    function hideAll(){

        learnPage.classList.add("hidden");
        libraryPage.classList.add("hidden");
        statsPage.classList.add("hidden");

    }

    if(learnBtn){

        learnBtn.onclick = function(){

            hideAll();
            learnPage.classList.remove("hidden");

        };

    }

    if(libraryBtn){

        libraryBtn.onclick = function(){

            hideAll();
            libraryPage.classList.remove("hidden");

        };

    }

    if(statsBtn){

        statsBtn.onclick = function(){

            hideAll();
            statsPage.classList.remove("hidden");

        };

    }

}
function renderLibrary(){

    const wordList =
        document.getElementById("wordList");

    if(!wordList) return;

    const data = getData();

    wordList.innerHTML = "";

    data.words.forEach((word,index)=>{

        wordList.innerHTML += `
            <div class="wordItem">

                <span>
                    ${word.english}
                    -
                    ${word.vietnamese}
                </span>
                
                <button onclick="editWord(${index})">
                    ✏️
                </button>
                <button onclick="deleteWord(${index})">
    🗑️
</button>

            </div>
        `;

    });

}
function deleteWord(index){

    removeWord(index);

    renderLibrary();

    generateCard();

}
function editWord(index){

    const data = getData();

    const word = data.words[index];

    const newEnglish = prompt(
        "English:",
        word.english
    );

    if(newEnglish === null) return;

    const newVietnamese = prompt(
        "Tiếng Việt:",
        word.vietnamese
    );

    if(newVietnamese === null) return;

    data.words[index] = {

        ...word,

        english: newEnglish,

        vietnamese: newVietnamese

    };

    saveData(data);

    cloudSave();

    renderLibrary();

    generateCard();

}
function editWord(index){

    const data = getData();

    const word = data.words[index];

    const english = prompt(
        "English:",
        word.english
    );

    if(english === null) return;

    const vietnamese = prompt(
        "Tiếng Việt:",
        word.vietnamese
    );

    if(vietnamese === null) return;

    data.words[index].english = english;

    data.words[index].vietnamese = vietnamese;

    saveData(data);

    cloudSave();

    renderLibrary();

    generateCard();

    alert("sữa từ thành công kkk!");

}
