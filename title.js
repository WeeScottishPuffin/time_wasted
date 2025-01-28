                                                                                                                //Get title DOM elements
title_obj = document.getElementById("start");                                                                   //2nd span "start"
inner_obj = document.getElementById("innertitle");                                                              //1st span "innertitle"
sub_obj = document.getElementById("subtitle");                                                                  //The subtitle below main title
title_text = title_obj.innerHTML;                                                                               //The text to stripethrough, contained in "start"
                                                                                                                //
                                                                                                                //FUNCTION
                                                                                                                //Gradually stipe-through a title using 2 spans
function start_title()                                                                                          //
{                                                                                                               //
    delay = 50;                                                                                                 //Delay, in ms between letters
    for (let i = 1; i < title_text.length + 1; i++) {                                                           //
        setTimeout(()=>{                                                                                        //
            title_obj.innerHTML = (i == title_text.length) ? "" : title_text.slice(-title_text.length + i);     //2nd span "start"
            inner_obj.innerHTML = title_text.slice(0,i);                                                        //1st span "innertitle"
        },50*i)                                                                                                 //
        setTimeout(()=>{sub_obj.style.display = "block";},50*(title_text.length+5));                            //
    }                                                                                                           //
}                                                                                                               //
                                                                                                                //
setTimeout(start_title,1500);                                                                                   //