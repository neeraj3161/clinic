$(document).ready(function() {

    var elemet = document.querySelector(".m-txt");

    var pad = document.querySelectorAll(".pad");

    var about1 = document.querySelector(".about1");
    var about2 = document.querySelector(".about2");

    var abttxt = document.querySelector(".abt-txt");


    var crousel = document.querySelector(".carousel-inner");

    var list_items = document.querySelectorAll(".list-group");
    console.log(list_items);

    list_items.forEach((elem)=>{
        elem.addEventListener('click',(elems)=>{
            var clicked = elems.target.dataset.points;
            hideAllKnowMore();
            $("#"+clicked).show();
        })
    })
    
    hideAllKnowMore();

    //hide all the know more element

    function hideAllKnowMore()
    {
        $("#cupping").hide();
        $("#accupressure").hide();
        $("#sujok").hide();
        $("#accupunture").hide();
        $("#moxibustion").hide();
        $("#massage").hide();
        $("#tens").hide();

    }

    $("#cupping").show();



   
    
    // $(".dropdown-toggle").dropdown();

    // $(".m-txt").addClass('animate__animated animate__bounce animate__delay-2s');



    var headElement = $('.m-txt');

    window.addEventListener('scroll',()=>{
        // console.log(headElement.offset().top);  
        // formula getBoundingClientRect().top should be less than windows.innerheight;
        // console.log(elemet.getBoundingClientRect().top, window.innerHeight/5*4);
        if(elemet.getBoundingClientRect().top<window.innerHeight/5*4  ){
            elemet.classList.add('animate__animated', 'animate__backInLeft');
            
        }

        

        if(crousel.getBoundingClientRect().top<window.innerHeight/5*4)
        {
            //about.classList.add('animate__animated','animate__fadeInDown');

        }

        
            pad.forEach(element => {
                if(element.getBoundingClientRect().top<window.innerHeight/6*4){
                element.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });

        
               
                if(about1.getBoundingClientRect().top<window.innerHeight/5*4){
                    about1.classList.add('animate__animated', 'animate__backInLeft');
                }
                if(about2.getBoundingClientRect().top<window.innerHeight/5*4){
                    about2.classList.add('animate__animated', 'animate__backInLeft');
                }

                if(abttxt.getBoundingClientRect().top<window.innerHeight/5*4){
                    abttxt.classList.add('animate__animated', 'animate__backInLeft');
                }
               
         
        
    })



    
    
});





// //quote
// var text = ["Do not wait", "Start healing today!!", "There is a solution"];
// var counter = 0;
// var elem = document.getElementById("changeText");
// var clinicName = $("#clinic-name");
// var inst = setInterval(change, 1500);

// function change() {
//   $("#changeText").fadeIn(500);
//   elem.innerHTML = text[counter];
//   $("#changeText").fadeOut(500);
//     counter++;
//   if (counter >= text.length) {
//     //reset the counter to avoid array overflow
//     counter = 0;
//   }
// }



