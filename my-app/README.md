## Name of App
To Treat or Not To Treat?

## Description of Purpose
This is an app to help decide whether or not I should buy a coffee or boba tea after work. This takes into accoount money spent during the week, whether lunch was bought on that day, what drink I am thinking of buying, and whether I am working a closing shift that day. By taking these factors into account, I hope to make a smarter, more educated decision about whether I should treat myself after work and hopefully save mooney in the process.

## Variables
- const isClosingShift = true/false <!-- Boolean -->
- const isLunchBought = true/false <!-- Boolean -->
- let moneyAlreadySpent = 0 + (user input) <!-- Number -->
- let lunchMoney = 0 <!-- Number -->
    - if isLunchBought === true, let lunchMoney = 0 + 15 <!-- Number -->
- const drinkChoice = "Coffee"/"Boba Tea" <!-- String -->
- let drinkMoney = 0 <!-- Number -->
    - if drinkChoice === "Coffee", let drinkMoney = 0 + 6 <!-- Number -->
    - if drinkChoice === "Boba Tea", let drinkMoney = 0 + 8 <!-- Number -->
- let totalMoneySpent = moneyAlreadySpent + lunchMoney + drinkMoney <!-- Number -->

## Decision Making Process
The app will first ask if I am working a closing shift at work. If yes, the app will autoomatically recommend that it is too late for caffeine. Therefore, I should not buy a treat. The app will then ask how much money I have spent previously during the week, if I have bought lunch already that day, and if I am considering buying a coffee or boba tea. The app will add together all of the values listed above, and if that value is less than $50, the app will output the total amount spent and recommend that I buy a drink to treat myself. If the total is $50 or more, the app will still output the total amount spent, but will instead recommend that I do not buy myself a drink and should save my money instead.

## Output
if (isClosingShift === true) {
    console.log(`It is too late for caffeine.`)
} else {
    console.log(`You have spent ${totalMoneySpent} this week.`)
}

if (isClosingShift === false && totalMoneySpent < 50) {
    console.log(`You should buy a drink after work. Treat yourself!`)
} else if (totalMoneySpent >= 50) {
    console.log(`You should not buy a drink after work. Save your money!`)
}

## NOTE
Sorry, I didn't realize there was a specific commit message for this week! Adding a new commit message with the correct text :D