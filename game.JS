let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



    let p1sum = 0
    let p2sum = 0


    function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 38) {
            p1sum = 1
            alert("chutiya hai kya")
        }
        if (p1sum == 14) {
            p1sum = 4
            alert("chutiya hai kya")
        }
        if (p1sum == 30) {
            p1sum = 8
            alert("chutiya hai kya")
        }
        if (p1sum == 42) {
            p1sum = 21
            alert("chutiya hai kya")
        }
        if (p1sum == 76) {
            p1sum = 28
            alert("chutiya hai kya")
        }
        if (p1sum == 10) {
            p1sum = 32
            alert("chutiya hai kya")
        }
        if (p1sum == 6) {
            p1sum = 36
            alert("chutiya hai kya")
        }
        if (p1sum == 26) {
            p1sum = 48
            alert("chutiya hai kya")
        }
        if (p1sum == 67) {
            p1sum = 50
            alert("chutiya hai kya")
        }
        if (p1sum == 18) {
            p1sum = 62
            alert("chutiya hai kya")
        }
        if (p1sum == 92) {
            p1sum = 71
            alert("chutiya hai kya")
        }
        if (p1sum == 99) {
            p1sum = 80
            alert("chutiya hai kya")
        }
        if (p1sum == 24) {
            p1sum = 88
            alert("chutiya hai kya")
        }
        if (p1sum == 56) {
            p1sum = 95
            alert("chutiya hai kya")
        }
        if (p1sum == 78) {
            p1sum = 97
            alert("chutiya hai kya")
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        

        if (p2sum == 38) {
            p2sum = 1
            alert("chutiya hai kya")
        }
        if (p2sum == 14) {
            p2sum = 4
            alert("chutiya hai kya")
        }
        if (p2sum == 30) {
            p2sum = 8
            alert("chutiya hai kya")
        }
        if (p2sum == 42) {
            p2sum = 21
            alert("chutiya hai kya")
        }
        if (p2sum == 76) {
            p2sum = 28
            alert("chutiya hai kya")
        }
        if (p2sum == 10) {
            p2sum = 32
            alert("chutiya hai kya")
        }
        if (p2sum == 6) {
            p2sum = 36
            alert("chutiya hai kya")
        }
        if (p2sum == 26) {
            p2sum = 48
            alert("chutiya hai kya")
        }
        if (p2sum == 67) {
            p2sum = 50
            alert("chutiya hai kya")
        }
        if (p2sum == 18) {
            p2sum = 62
            alert("chutiya hai kya")
        }
        if (p2sum == 92) {
            p2sum = 71
            alert("chutiya hai kya")
        }
        if (p2sum == 99) {
            p2sum = 80
            alert("chutiya hai kya")
        }
        if (p2sum == 24) {
            p2sum = 88
            alert("chutiya hai kya")
        }
        if (p2sum == 56) {
            p2sum = 95
            alert("chutiya hai kya")
        }
        if (p2sum == 78) {
            p2sum = 97
            alert("chutiya hai kya")
        }

        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dice = document.getElementById('dice');
    const diceBtn = document.getElementById('diceBtn');

    diceBtn.addEventListener('click', rollDice);
});

function rollDice() {
    const dice = document.getElementById('dice');
    const roll = Math.floor(Math.random() * 6) + 1;
    dice.textContent = roll;
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})