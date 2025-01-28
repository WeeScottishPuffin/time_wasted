title_obj = document.getElementById("start");
inner_obj = document.getElementById("innertitle");
sub_obj = document.getElementById("subtitle");
title_text = title_obj.innerHTML;

function start_title()
{
    for (let i = 1; i < title_text.length + 1; i++) {
        setTimeout(()=>{
            console.log(i)
            title_obj.innerHTML = (i == title_text.length) ? "" : title_text.slice(-title_text.length + i);  //2nd span "start"
            inner_obj.innerHTML = title_text.slice(0,i)                         //1st span
        },50*i)
        setTimeout(()=>{sub_obj.style.display = "block";},50*(title_text.length+5));
    }
}

setTimeout(start_title,1500)