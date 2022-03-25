alert("Welcome to 'Twenty'. In this game, you will draw numbers against a computer and see who gets closer to 20 without going over it. The computer will stop drawing once it passes 16.")

var compwin = 0 

var humwin = 0

do {
    var compnum = 0

    var humnum = 0
    do {
        var compran = Math.floor(Math.random() * 10) + 1

        compnum = compnum + compran

        alert(`The computer's total is now ${compnum}`)
    } while (compnum < 16)

    do {
        if (compnum > 20) {
            break
        }
        var humran = Math.floor(Math.random() * 10) + 1

        humnum = humnum + humran

        alert(`Your total is now ${humnum}`)

        if(humnum < 20) {
            var humcont = prompt ("Go again? Answer with 'y' or 'n'.") 
        }
    } while ((humcont == "y") && (humnum < 20) && (compnum <= 20))

    if (compnum > 20) {
        alert(`The computer landed on ${compnum}, which is greater than 20, so you win.`)
        
        humwin++
    } else if (humnum > 20) {
        alert(`You landed on ${humnum}, which is greater than 20, so the computer wins.`)

        compwin++
    } else if ((compnum > humnum) && (compnum <=20)) {
        alert(`The computer got ${compnum}, and you got ${humnum}. The computer wins.`)

        compwin++
    } else if ((compnum < humnum) && (humnum <= 20)) {
        alert(`The computer got ${compnum}, and you got ${humnum}. You win.`)

        humwin++
    } else if (compnum == humnum) {
        alert(`You both got ${humnum}, so it's a tie.`)
    }

    cont = prompt(`The score is now ${compwin} to ${humwin}, the first one being computer wins, and the second one being your wins. Play again? Press 'y' or 'n'`)
} while (cont == "y")

if (cont == "n") {
    alert(`The final standings are Human: ${humwin} Computer: ${compwin}`)
}