document.getElementById('drawButton').addEventListener('click', () => {
    fetch('/draw')
        .then(response => response.json())
        .then(data => {
            if (data.done) {
                alert(data.message);
            } else {
                const numberDisplay = document.getElementById('numberDisplay');
                numberDisplay.innerHTML = `Número sorteado: <br><span class="highlight">${data.column}${data.number}</span>`;
                updateDrawnNumbers(data.column + data.number);
            }
        });
});

function updateDrawnNumbers(recent) {
    fetch('/numbers')
        .then(response => response.json())
        .then(numbers => {
            const drawnNumbersDiv = document.getElementById('drawnNumbers');
            drawnNumbersDiv.innerHTML = '';
            numbers.forEach(number => {
                const numberDiv = document.createElement('div');
                numberDiv.textContent = number;
                if (number === recent) {
                    numberDiv.classList.add('recent');
                } else {
                    numberDiv.classList.add('previous');
                }
                drawnNumbersDiv.appendChild(numberDiv);
            });
        });
}

updateDrawnNumbers();
