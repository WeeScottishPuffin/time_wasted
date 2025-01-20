phour = document.getElementById("hour");
pmin = document.getElementById("minute");
psec = document.getElementById("second");
pper = document.getElementById("percent");
loadin = document.getElementById("inner");
const day = 1000 * 3600 * 24;

function calculateTime()
{
  let dnow = new Date();

  h = dnow.getHours();
  m = dnow.getMinutes();
  s = dnow.getSeconds();
  total_ms = h * 3600000 + m * 60000 + s * 1000;
  percentage = total_ms / day * 100;
  
  phour.innerHTML = (h < 10) ? "0" + h : h;
  pmin.innerHTML = (m < 10) ? "0" + m : m;
  psec.innerHTML = (s < 10) ? "0" + s : s;
  sper = "" + Math.round(percentage*1000)/1000;
  leads = (percentage > 10) ? 6:5;
  if (sper.length < leads)
  {
    sper+="0".repeat(leads-sper.length);
  }
  pper.innerHTML = sper + "% of the day has passed";
  loadin.style.width = percentage + "%";
  
  setTimeout(calculateTime,0);
};

calculateTime();
