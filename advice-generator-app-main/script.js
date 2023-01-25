
const button = document.getElementById('btn');
const advice = document.getElementsByClassName('advice');

button.addEventListener('click', function myFunction() {
    let numbers = [];
    for (let element of advice){
        let slip_id = getRandomId();

        while (numbers.includes(slip_id)) {
            slip_id = getRandomId();
        }

        numbers.push(slip_id);

    fetch(`https://api.adviceslip.com/advice/${slip_id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        element.innerHTML = data.slip.advice;
        })
        .catch(error => console.error(error));
}});

function getRandomId() {
    return (Math.floor(Math.random() * 175) + 1);
}
