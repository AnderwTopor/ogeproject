const rightAnswer1 = document.getElementById("answer-right-1")
const wrongAnswer1 = document.getElementById("answer-wrong-1")
const rightAnswer2 = document.getElementById("answer-right-2")
const wrongAnswer2 = document.getElementById("answer-wrong-2")
const rightAnswer3 = document.getElementById("answer-right-3")
const wrongAnswer3 = document.getElementById("answer-wrong-3")
const rightAnswer4 = document.getElementById("answer-right-4")
const wrongAnswer4 = document.getElementById("answer-wrong-4")
const rightAnswer5 = document.getElementById("answer-right-5")
const wrongAnswer5 = document.getElementById("answer-wrong-5")
const rightAnswer6 = document.getElementById("answer-right-6")
const wrongAnswer6 = document.getElementById("answer-wrong-6")
const rightAnswer7 = document.getElementById("answer-right-7")
const wrongAnswer7 = document.getElementById("answer-wrong-7")
const rightAnswer8 = document.getElementById("answer-right-8")
const wrongAnswer8 = document.getElementById("answer-wrong-8")
const rightAnswer9 = document.getElementById("answer-right-9")
const wrongAnswer9 = document.getElementById("answer-wrong-9")
const rightAnswer10 = document.getElementById("answer-right-10")
const wrongAnswer10 = document.getElementById("answer-wrong-10")
const rightAnswersTag = document.getElementById("right-answers")

let rightAnswers = 0

let firstAnswer
let secondAnswer
let thirdAnswer
let fourthAnswer
let fifthAnswer
let sixthAnswer
let seventhAnswer
let eighthAnswer
let ninthAnswer
let tenthAnswer

rightAnswersTag.textContent = rightAnswers

if (localStorage.getItem("answer-right-1") === data[0].answer) {
    document.getElementById("answer-1").value = data[0].answer
    document.getElementById("answer-1").disabled = true
    document.getElementById("check-1").disabled = true
    rightAnswer1.classList.add("answer-right-1")
}

function onChangeHandler11(event) {
    firstAnswer = event.value
}

function onClickHandler11() {
    if (data[0].answer === firstAnswer) {
        rightAnswer1.classList.add("answer-right-1")
        wrongAnswer1.classList.remove("answer-wrong-1")
        localStorage.setItem("answer-right-1", firstAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer1.classList.add("answer-wrong-1")
        rightAnswer1.classList.remove("answer-right-1")
    }

    document.getElementById("answer-1").disabled = true
    document.getElementById("check-1").disabled = true
}

if (localStorage.getItem("answer-right-2") === data[1].answer) {
    document.getElementById("answer-2").value = data[1].answer
    document.getElementById("answer-2").disabled = true
    document.getElementById("check-2").disabled = true
    rightAnswer2.classList.add("answer-right-2")
}

function onChangeHandler22(event) {
    secondAnswer = event.value
}

function onClickHandler22() {
    if (data[1].answer === secondAnswer) {
        rightAnswer2.classList.add("answer-right-2")
        wrongAnswer2.classList.remove("answer-wrong-2")
        localStorage.setItem("answer-right-2", secondAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer2.classList.add("answer-wrong-2")
        rightAnswer2.classList.remove("answer-right-2")
    }

    document.getElementById("answer-2").disabled = true
    document.getElementById("check-2").disabled = true
}

if (localStorage.getItem("answer-right-3") === data[2].answer) {
    document.getElementById("answer-3").value = data[2].answer
    document.getElementById("answer-3").disabled = true
    document.getElementById("check-3").disabled = true
    rightAnswer3.classList.add("answer-right-3")
}

function onChangeHandler33(event) {
    thirdAnswer = event.value
}

function onClickHandler33() {
    if (data[2].answer === thirdAnswer) {
        rightAnswer3.classList.add("answer-right-3")
        wrongAnswer3.classList.remove("answer-wrong-3")
        localStorage.setItem("answer-right-3", thirdAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer3.classList.add("answer-wrong-3")
        rightAnswer3.classList.remove("answer-right-3")
    }

    document.getElementById("answer-3").disabled = true
    document.getElementById("check-3").disabled = true
}

if (localStorage.getItem("answer-right-4") === data[3].answer) {
    document.getElementById("answer-4").value = data[3].answer
    document.getElementById("answer-4").disabled = true
    document.getElementById("check-4").disabled = true
    rightAnswer4.classList.add("answer-right-4")
}

function onChangeHandler44(event) {
    fourthAnswer = event.value
}

function onClickHandler44() {
    if (data[3].answer === fourthAnswer) {
        rightAnswer4.classList.add("answer-right-4")
        wrongAnswer4.classList.remove("answer-wrong-4")
        localStorage.setItem("answer-right-4", fourthAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer4.classList.add("answer-wrong-4")
        rightAnswer4.classList.remove("answer-right-4")
    }

    document.getElementById("answer-4").disabled = true
    document.getElementById("check-4").disabled = true
}

if (localStorage.getItem("answer-right-5") === data[4].answer) {
    document.getElementById("answer-5").value = data[4].answer
    document.getElementById("answer-5").disabled = true
    document.getElementById("check-5").disabled = true
    rightAnswer5.classList.add("answer-right-5")
}

function onChangeHandler55(event) {
    fifthAnswer = event.value
}

function onClickHandler55() {
    if (data[4].answer === fifthAnswer) {
        rightAnswer5.classList.add("answer-right-5")
        wrongAnswer5.classList.remove("answer-wrong-5")
        localStorage.setItem("answer-right-5", fifthAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer5.classList.add("answer-wrong-5")
        rightAnswer5.classList.remove("answer-right-5")
    }
    document.getElementById("answer-5").disabled = true
    document.getElementById("check-5").disabled = true
}

if (localStorage.getItem("answer-right-6") === data[5].answer) {
    document.getElementById("answer-6").value = data[5].answer
    document.getElementById("answer-6").disabled = true
    document.getElementById("check-6").disabled = true
    rightAnswer6.classList.add("answer-right-6")
}

function onChangeHandler66(event) {
    sixthAnswer = event.value
}

function onClickHandler66() {
    if (data[5].answer === sixthAnswer) {
        rightAnswer6.classList.add("answer-right-6")
        wrongAnswer6.classList.remove("answer-wrong-6")
        localStorage.setItem("answer-right-6", sixthAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer6.classList.add("answer-wrong-6")
        rightAnswer6.classList.remove("answer-right-6")
    }
    document.getElementById("answer-6").disabled = true
    document.getElementById("check-6").disabled = true
}

if (localStorage.getItem("answer-right-7") === data[6].answer) {
    document.getElementById("answer-7").value = data[6].answer
    document.getElementById("answer-7").disabled = true
    document.getElementById("check-7").disabled = true
    rightAnswer7.classList.add("answer-right-7")
}

function onChangeHandler77(event) {
    seventhAnswer = event.value
}

function onClickHandler77() {
    if (data[6].answer === seventhAnswer) {
        rightAnswer7.classList.add("answer-right-7")
        wrongAnswer7.classList.remove("answer-wrong-7")
        localStorage.setItem("answer-right-7", seventhAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer7.classList.add("answer-wrong-7")
        rightAnswer7.classList.remove("answer-right-7")
    }

    document.getElementById("answer-7").disabled = true
    document.getElementById("check-7").disabled = true
}

if (localStorage.getItem("answer-right-8") === data[7].answer) {
    document.getElementById("answer-8").value = data[7].answer
    document.getElementById("answer-8").disabled = true
    document.getElementById("check-8").disabled = true
    rightAnswer8.classList.add("answer-right-8")
}

function onChangeHandler88(event) {
    eighthAnswer = event.value
}

function onClickHandler88() {
    if (data[7].answer === eighthAnswer) {
        rightAnswer8.classList.add("answer-right-8")
        wrongAnswer8.classList.remove("answer-wrong-8")
        localStorage.setItem("answer-right-8", eighthAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer8.classList.add("answer-wrong-8")
        rightAnswer8.classList.remove("answer-right-8")
    }

    document.getElementById("answer-8").disabled = true
    document.getElementById("check-8").disabled = true
}

if (localStorage.getItem("answer-right-9") === data[8].answer) {
    document.getElementById("answer-9").value = data[8].answer
    document.getElementById("answer-9").disabled = true
    document.getElementById("check-9").disabled = true
    rightAnswer9.classList.add("answer-right-9")
}

function onChangeHandler99(event) {
    ninthAnswer = event.value
}

function onClickHandler99() {
    if (data[8].answer === ninthAnswer) {
        rightAnswer9.classList.add("answer-right-9")
        wrongAnswer9.classList.remove("answer-wrong-9")
        localStorage.setItem("answer-right-9", ninthAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer9.classList.add("answer-wrong-9")
        rightAnswer9.classList.remove("answer-right-9")
    }

    document.getElementById("answer-9").disabled = true
    document.getElementById("check-9").disabled = true
}

if (localStorage.getItem("answer-right-10") === data[9].answer) {
    document.getElementById("answer-10").value = data[9].answer
    document.getElementById("answer-10").disabled = true
    document.getElementById("check-10").disabled = true
    rightAnswer10.classList.add("answer-right-10")
}

function onChangeHandler1010(event) {
    tenthAnswer = event.value
}

function onClickHandler1010() {
    if (data[9].answer === tenthAnswer) {
        rightAnswer10.classList.add("answer-right-10")
        wrongAnswer10.classList.remove("answer-wrong-10")
        localStorage.setItem("answer-right-10", tenthAnswer)
        rightAnswers++
        rightAnswersTag.textContent = rightAnswers
    } else {
        wrongAnswer10.classList.add("answer-wrong-10")
        rightAnswer10.classList.remove("answer-right-10")
    }

    document.getElementById("answer-10").disabled = true
    document.getElementById("check-10").disabled = true
}