title_obj = document.getElementById("start");
inner_obj = document.getElementById("innertitle");
sub_obj = document.getElementById("subtitle");
title_text = title_obj.innerHTML;

function start_title()
{
    for (let i = 0; i < title_text.length + 1; i++) {
        setTimeout(()=>{
            console.log(i)
            title_obj.innerHTML = title_text.slice(-title_text.length + i,-1);
            inner_obj.innerHTML = title_text.slice(0,i)
        },50*i)
        setTimeout(()=>{sub_obj.style.display = "block";},500);
    }
}

setTimeout(start_title,1500)