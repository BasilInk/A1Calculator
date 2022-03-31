const tvbaz = document.getElementById(`tvbaz`);
const tvras = document.getElementById(`tvras`);
const tvras2 = document.getElementById(`tvras2`);
const bit = document.getElementById(`bit`);
const hit = document.getElementById(`hit`);
const max = document.getElementById(`max`);
const btn = document.getElementById(`btn`);
const btn2 = document.getElementById(`btn2`);
const btn3 = document.getElementById(`btn3`);
const cash = document.getElementById(`cash`);

function calculate () {    
    
    let tvbazVal = Number(tvbaz.value);
    let tvrasVal = Number(tvras.value);
    let tvras2Val = Number(tvras2.value);
    let bitVal = Number(bit.value);
    let hitVal = Number(hit.value);
    let maxVal = Number(max.value);
    let allNumber = Number(bitVal + hitVal + maxVal + tvbazVal + tvrasVal + tvras2Val);

    let tvbazCash = Number(tvbazVal * 6);
    let tvrasCash = Number (tvrasVal * 7);
    let tvras2Cash = Number(tvras2Val * 9);
    let bitCash = Number(bitVal * 30);
    let hitCash = Number(hitVal * 30);
    let maxCash = Number(maxVal * 45);
    let finishCash = Number(((bitCash + hitCash + maxCash + tvbazCash + tvrasCash + tvras2Cash) * 0.86 * 12 / 13));


    if (allNumber > 0 && allNumber < 40) {
        finishCash = (finishCash + 238.15).toFixed(2);
    } else if (allNumber >= 40 && allNumber < 60) {
        finishCash = (finishCash + 476.31).toFixed(2);
    } else if (allNumber >= 60) {
        finishCash = (finishCash + 714.46).toFixed(2);
    } else if (allNumber < 0) {
        finishCash = 0;
    };

    return cash.textContent = `Чистыми: ${finishCash} руб.`;

};

function calculate2 () {

    let tvbazVal = Number(tvbaz.value);
    let tvrasVal = Number(tvras.value);
    let tvras2Val = Number(tvras2.value);
    let bitVal = Number(bit.value);
    let hitVal = Number(hit.value);
    let maxVal = Number(max.value);
    let allNumber = Number(bitVal + hitVal + maxVal + tvbazVal + tvrasVal + tvras2Val);

    let tvbazCash = Number(tvbazVal * 6);
    let tvrasCash = Number (tvrasVal * 7);
    let tvras2Cash = Number(tvras2Val * 9);
    let bitCash = Number(bitVal * 30);
    let hitCash = Number(hitVal * 30);
    let maxCash = Number(maxVal * 45);
    let finishCash = Number(((bitCash + hitCash + maxCash + tvbazCash + tvrasCash + tvras2Cash) * 0.86));


    if (allNumber > 0 && allNumber < 40) {
        finishCash = (finishCash + 258).toFixed(2);
    } else if (allNumber >= 40 && allNumber < 60) {
        finishCash = (finishCash + 516).toFixed(2);
    } else if (allNumber >= 60) {
        finishCash = (finishCash + 774).toFixed(2);
    } else if (allNumber < 0) {
        finishCash = 0;
    };

    return cash.textContent = `Чистыми: ${finishCash} руб.`;

};

function reset () {
    location.reload();
};

btn.addEventListener(`click`, calculate);
btn2.addEventListener(`click`, calculate2);
btn3.addEventListener(`click`, reset);
