let phour = document.getElementById("hour");            //
let pmin = document.getElementById("minute");           //
let psec = document.getElementById("second");           //
let pper = document.getElementById("percent");          //
let loadin = document.getElementById("inner");          //
const day = 1000 * 3600 * 24;                           //
                                                        //
function calculateTime()                                //
{                                                       //
  let dnow = new Date();                                //
  let h = dnow.getHours();                              //
  let m = dnow.getMinutes();                            //
  let s = dnow.getSeconds();                            //
  let total_ms = h * 3600000 + m * 60000 + s * 1000;    //
  let percentage = total_ms / day * 100;                //
                                                        //
  phour.innerHTML = (h < 10) ? "0" + h : h;             //
  pmin.innerHTML = (m < 10) ? "0" + m : m;              //
  psec.innerHTML = (s < 10) ? "0" + s : s;              //
  let sper = "" + Math.round(percentage*1000)/1000;     //
  let leads = (percentage > 10) ? 6:5;                  //
  if (sper.length < leads)                              //
  {                                                     //
    sper+="0".repeat(leads-sper.length);                //
  }                                                     //
  pper.innerHTML = sper + "% of the day has passed";    //
  loadin.style.width = percentage + "%";                //
                                                        //
  setTimeout(calculateTime,0);                          //
};                                                      //
                                                        //
calculateTime();                                        //
