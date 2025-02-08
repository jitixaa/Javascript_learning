const endDate = "21 Feb 2025 08:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");



function clock(){
    const end = new Date(endDate);
    // console.log(end);
    
    const now = new Date();
    // console.log(now);
    
    const diff = (end - now)/1000;

    if(diff < 0) return;
   
    const days = Math.floor(diff / 3600 / 24);
    inputs[0].value = days;

    const Hrs = Math.floor((diff/ 3600) % 24);
    inputs[1].value = Hrs;

    const Mints = Math.floor((diff / 60) % 60);
    inputs[2].value = Mints;


    const Seconds = Math.floor((diff) % 60);
    inputs[3].value = Seconds;
}
clock();

setInterval(
    () => {
        clock();
    },
    1000
)


// 1 day = 24 hrs
// 1 hr = 60 mins
// 60 min = 3600 sec