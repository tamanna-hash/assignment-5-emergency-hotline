function getElement(id) {
    const element = document.getElementById(id)
    return element;
}
function getInnerText(id) {
    const element = document.getElementById(id);
    const innerText = element.innerText;
    return innerText;
}
function getElements(Class) {
    const elements = document.getElementsByClassName(Class);
    return elements;
}
// increasing the heartCount number by clicking heart
let heartCountNum = (getElement('heart-count'));

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-heart")) {
        let newHeartCount = parseInt(heartCountNum.innerText);
        heartCountNum.innerText = newHeartCount + 1;
        return heartCountNum;
    }
});
// call button coin count-------
let coinCountNum = getElement('coin-count');

document.body.addEventListener("click", function (e) {

    if (e.target.classList.contains("call-btn")) {
        if (coinCountNum.innerText < 20) {
            alert('coin required');
            return
        }
        // show alert
        let parent = e.target.closest('.card');
        let title = parent.querySelector('.card-title').innerText;
        let hotlineNum = parent.querySelector('.hotline-number').innerText;
        alert(title + "\n" + hotlineNum);
        // decrease coin number
        let newCoinCount = parseInt(coinCountNum.innerText);
        coinCountNum.innerText = newCoinCount - 20;

        return coinCountNum;
    }
});

// console.log(getElements('fa-heart'))