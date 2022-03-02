let userInput = document.getElementById("alarmTime");
let submit = document.getElementById("submit");
let now = new Date();
now = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
userInput.value = now;
let audio;



const setAlarm = () => {
    userTime = new Date(userInput.value);
    now = new Date();
    let timeout = userTime - now;
    console.log(timeout);


    if (timeout < 0) {
        userInput.classList.add('is-invalid');
        userInput.classList.remove('is-valid');

    }
    else {
        userInput.classList.add('is-valid');
        userInput.classList.remove('is-invalid');
        audio = new Audio('clock.mp4');

        setTimeout(() => {
            audio.play();
            document.getElementById("stopAlarm").disabled = false;

        }, timeout);
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
            document.getElementById("stopAlarm").disabled = true;
        }, timeout+60000);
    }

}

const stopAlarm = () => {
    audio.pause();
    document.getElementById("stopAlarm").disabled = true;
    audio.currentTime = 0;
}

var today = new Date();
