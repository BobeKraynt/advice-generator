const button = document.getElementById('btn');
const cards = document.getElementsByClassName('advice');

button.addEventListener('click', function myFunction() {
    let randomNumbers = Array.from({length: 3}, _ => Math.floor(Math.random()*224)+ 1);
    let advices = [];
    let slip_id = randomNumbers;
    const urls = [`https://api.adviceslip.com/advice/${slip_id[0]}`, `https://api.adviceslip.com/advice/${slip_id[1]}`, `https://api.adviceslip.com/advice/${slip_id[2]}`];
    
    while (slip_id.length !== new Set(slip_id).size || slip_id.includes(67) || slip_id.includes(22) || slip_id.includes(48)) {
    slip_id = randomNumbers
    }

    const requests = urls.map(url => fetch(url));
    Promise.all(requests)
        .then(responses => {
            return Promise.all(responses.map(res => res.json()))
        })
        .then(data => {
            data.forEach(advice => {
                advices.push(advice.slip.advice);
                for (let i = 0; i < advices.length; i++) {
                    cards[i].innerHTML = advices[i];
                }
            });
        })
        .catch(error => console.log(error));
});
