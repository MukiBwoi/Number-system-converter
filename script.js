const input = document.querySelector('#decimal_number');
const BinaryAnswer = document.querySelector('#binary-answer');
const OctalAnswer = document.querySelector('#octal-answer');
const HexaAnswer = document.querySelector('#hexa-answer');
const Calculate = document.querySelector('#calculate');



Calculate.addEventListener('click', function getanswer() {
    binary();
    octal();
    hexa();
});




function binary() {
    let x = input.value;
    if (x > 0) {
        let bin = 0;
        let rem, i = 1,
            step = 1;
        while (x != 0) {
            rem = x % 2;
            console.log(
                `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
            );
            x = parseInt(x / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        BinaryAnswer.innerHTML = bin;
    } else {
        BinaryAnswer.innerHTML = "Try to slove using 2's complement";
    }

}



function octal() {
    let x = input.value;
    if (x > 0) {
        let oct = 0;
        let rem, i = 1,
            step = 1;
        while (x != 0) {
            rem = x % 8;
            console.log(
                `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/8)}`
            );
            x = parseInt(x / 8);
            oct = oct + rem * i;
            i = i * 10;
        }
        OctalAnswer.innerHTML = oct;
    } else {
        OctalAnswer.innerHTML = "please enter a positive number";
    }

}


function hexa() {
    let x = input.value;
    if (x > 0) {

        let hex = 0;
        let rem, i = 1,
            step = 1;
        while (x != 0) {
            rem = x % 16;
            console.log(
                `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/16)}`
            );
            x = parseInt(x / 16);
            hex = hex + rem * i;
            i = i * 10;
        }
        HexaAnswer.innerHTML = hex;
    } else {
        HexaAnswer.innerHTML = "please enter a positive number";
    }

}