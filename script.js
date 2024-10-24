player1 = document.querySelector('#p1')
player2 = document.querySelector('#p2')
dealer = document.querySelector('.dealerCard')
won = false

numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

classes = ['♠', '♣', '♦', '♥']

document.querySelector('.w').style.display = 'none'
document.querySelector('#p3').style.display = 'none'
document.querySelector('.extraCard').style.display = 'none'

p1 = numbers[Math.floor(Math.random() * numbers.length)] + classes[Math.floor(Math.random() * classes.length)]

p2 = numbers[Math.floor(Math.random() * numbers.length)] + classes[Math.floor(Math.random() * classes.length)]

p3 = numbers[Math.floor(Math.random() * numbers.length)] + classes[Math.floor(Math.random() * classes.length)]

d = numbers[Math.floor(Math.random() * numbers.length)] + classes[Math.floor(Math.random() * classes.length)]

d2 = numbers[Math.floor(Math.random() * numbers.length)] + classes[Math.floor(Math.random() * classes.length)]

d3 = numbers[Math.floor(Math.random() * numbers.length)] + classes[Math.floor(Math.random() * classes.length)]

if (sum(p1.slice(0, -1), p2.slice(0, -1), '0') == 21) {
    win()
}

player1.innerHTML = p1
player2.innerHTML = p2
document.querySelector('#p3').innerHTML = p3

dealer.innerHTML = d
document.querySelector('.extraCard').innerHTML = d3

if (p1.includes('♥') || p1.includes('♦')) {
    player1.style.color = 'rgb(223, 71, 71)'
}
if (p2.includes('♥') || p2.includes('♦')) {
    player2.style.color = 'rgb(223, 71, 71)'
}

if (d.includes('♥') || d.includes('♦')) {
    dealer.style.color = 'rgb(223, 71, 71)'
}

function win() {
    document.querySelector('.w').style.display = 'flex'
    won = true
}

function sum(i1, i2, i3) {

    if (i1 == 'J' || i1 == 'Q' || i1 == 'K') {
        i1 = '10'
    }
    if (i2 == 'J' || i2 == 'Q' || i2 == 'K') {
        i2 = '10'
    }
    if (i3 == 'J' || i3 == 'Q' || i3 == 'K') {
        i3 = '10'
    }
    if (i1 == 'A') {
        i1 = '11'
    }
    if (i2 == 'A') {
        i2 = '11'
    }
    if (i3 == 'A') {
        i3 = '11'
    }

    if (parseInt(i1) + parseInt(i2) + parseInt(i3) > 21) {
        if (i1 == '11') {
            i1 = '1'
        }
        if (i2 == '11') {
            i2 = '1'
        }
        if (i3 == '11') {
            i3 = '1'
        }
    }

    return parseInt(i1) + parseInt(i2) + parseInt(i3)
}

function hit() {
    document.querySelector('.secretCard').innerHTML = d2
    dealerSum = sum(d.slice(0, -1), d2.slice(0, -1), '0')
    if (dealerSum > 21) {
        if (won == false) {
            new Audio('win.mp3').play()
            win()
        }
    } else if (dealerSum == 21) {
        if (won == false) {
            new Audio('lose.mp3').play()
            win()
            document.querySelector('.w').innerHTML = 'You Lost!'
        }
    } else if (dealerSum < 17) {
        document.querySelector('.extraCard').style.display = 'block'
        document.querySelector('.extraCard').style.textAlign = 'center'
        dealerSum = sum(d.slice(0, -1), d2.slice(0, -1), d3.slice(0, -1))
        if (dealerSum > 21) {
            if (won == false) {
                new Audio('win.mp3').play()
                win()
            }
        }
    }

    document.querySelector('#p3').style.display = 'block'
    playerSum = sum(p1.slice(0, -1), p2.slice(0, -1), p3.slice(0, -1))

    if (playerSum > 21) {
        if (won == false) {
            new Audio('lose.mp3').play()
            win()
            document.querySelector('.w').innerHTML = 'You Lost!'
        }
    }

    if (dealerSum > playerSum) {
        if (won == false) {
            new Audio('lose.mp3').play()
            win()
            document.querySelector('.w').innerHTML = 'You Lost!'
        }
    } else {
        if (won == false) {
            new Audio('win.mp3').play()
            win()
        }
    }
}

function stay() {
    document.querySelector('.secretCard').innerHTML = d2
    dealerSum = sum(d.slice(0, -1), d2.slice(0, -1), '0')
    if (dealerSum > 21) {
        if (won == false) {
            new Audio('win.mp3').play()
            win()
        }
    } else if (dealerSum == 21) {
        if (won == false) {
            new Audio('lose.mp3').play()
            win()
            document.querySelector('.w').innerHTML = 'You Lost!'
        }
    } else if (dealerSum < 17) {
        document.querySelector('.extraCard').style.display = 'block'
        document.querySelector('.extraCard').style.textAlign = 'center'
        dealerSum = sum(d.slice(0, -1), d2.slice(0, -1), d3.slice(0, -1))
        if (dealerSum > 21) {
            if (won == false) {
                new Audio('win.mp3').play()
                win()
            }
        }
    }

    playerSum = sum(p1.slice(0, -1), p2.slice(0, -1), '0')

    if (dealerSum > playerSum) {
        if (won == false) {
            new Audio('lose.mp3').play()
            win()
            document.querySelector('.w').innerHTML = 'You Lost!'
        }
    } else {
        if (won == false) {
            new Audio('win.mp3').play()
            win()
        }
    }
}