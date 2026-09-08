function hideAll(ids) {
    ids.forEach(function(id) {
        document.getElementById(id).style.display = "none"
    })
}

function showAll(ids) {
    ids.forEach(function(id) {
        document.getElementById(id).style.display = ""
    })
}
function changeState(hideIds, showIds) {
    hideAll(hideIds)
    showAll(showIds)
}

const buttonMail = document.getElementById("buttonMail");
buttonMail.addEventListener("click", () => changeState(["container-initial"], ["modal-overlay","container-payment","container-final"]));

const buttonFakePayment = document.getElementById("buttonFakePay");
buttonFakePayment.addEventListener("click", () => {
    changeState(["checkout-summary"], ["container-pix"]);

    const timerSpan = document.getElementById("timer");
    let secondsLeft = 30;
    const intervalId = setInterval(() => {
        secondsLeft = secondsLeft - 1;
        timerSpan.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(intervalId);
            changeState(["modal-overlay"], ["container-final"]);
            document.getElementById("container-final").style.filter = "";

            document.getElementById("hinoAudio").play();
        }
    }, 1000);
});
