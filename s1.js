function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


const name = getQueryParam('name');


document.getElementById('displayName').textContent = name;

function gpa() {
    var sum = 0;
    const grade = document.getElementById('grade');
    const credit = document.getElementById('credit');
    const grade1 = document.getElementById('grade1');
    const credit1 = document.getElementById('credit1');
    const grade2 = document.getElementById('grade2');
    const credit2 = document.getElementById('credit2');
    const grade3 = document.getElementById('grade3');
    const credit3 = document.getElementById('credit3');
    const grade4 = document.getElementById('grade4');
    const credit4 = document.getElementById('credit4');

    le sum = (credit * grade) + (credit1 * grade1) + (credit2 * grade2) + (credit3 * grade3) + (credit4 * grade4);
    let div = sum / 5;
    document.getElementById('demo').innerHTML = div + "gpa";
    console.log(div);

}