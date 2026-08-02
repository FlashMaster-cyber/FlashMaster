/* =====================================
   FlashMaster v1.0.0
   flashcard.js

   Flashcard Engine
===================================== */


let currentCard = null;


// Tạo thẻ học mới

function generateCard(){

    const data = getData();


    if(data.words.length === 0){

        currentCard = null;


        document.getElementById("question").innerText =
        "Chưa có từ nào";


        return;

    }


    const randomIndex =
    Math.floor(
        Math.random() * data.words.length
    );


    currentCard =
    data.words[randomIndex];


    document.getElementById("question").innerText =
    currentCard.english;

}



// Kiểm tra câu trả lời

function checkAnswer(answer){

    if(!currentCard){

        return false;

    }


    const correctAnswer =
    currentCard.vietnamese
    .toLowerCase();


    if(
        answer.toLowerCase()
        === correctAnswer
    ){

        updateStats("correct");

        return true;

    }


    updateStats("wrong");

    return false;

}

