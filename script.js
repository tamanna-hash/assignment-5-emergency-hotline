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
            alert('at least 20 coin required');
            return
        }
        // show alert
        let parent = e.target.closest('.card');
        let title = parent.querySelector('.card-title').innerText;
        let hotlineNum = parent.querySelector('.hotline-number').innerText;
        alert("calling "+ title +" "+ hotlineNum +"....");
        // adding new div with service name, number and time in the history section
        const historySection = getElement('history-sec');
        const newHistory = document.createElement('div')
        newHistory.innerHTML = ` <div id='call-history' class=" mx-1 mt-4 p-2 bg-[#fafafa] rounded-md flex justify-between g">
                    <div class="">
                        <p class="font-semibold">${title}</p>
                        <p>${hotlineNum}</p>
                    </div>
                    <p>${new Date().toLocaleTimeString()}</p>
                </div>`
        historySection.append(newHistory)
        let newCoinCount = parseInt(coinCountNum.innerText);
        coinCountNum.innerText = newCoinCount - 20;
        return coinCountNum;
    }
});
// clear the history section------------
document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('clear-btn')) {
        getElement('history-sec').innerHTML = "";
    }
})
// copy count and copy text------------
let copyCountNum = getElement('copy-count')
document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('copy-btn')) {
        const parent = e.target.closest('.card');
        const hotlineNumber = parent.querySelector('.hotline-number')
        if(hotlineNumber){
            navigator.clipboard.writeText(hotlineNumber.innerText);
        }
        alert('copied successfully')
        const newCopyCount = parseInt(copyCountNum.innerText);
        copyCountNum.innerText = newCopyCount + 1;
        return copyCountNum;
    }
})
