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


                    alert(
                        "Đã thêm từ mới!"
                    );


                    generateCard();

                }

            };

        }


    }
);
