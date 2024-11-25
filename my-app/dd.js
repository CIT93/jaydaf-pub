class DD {
    constructor (moneySpent, lunchChoice, drinkChoice, closingShift, drinkFlavor) {
        this.moneySpent = moneySpent,
        this.closingShift = closingShift,
        this.lunchChoice = lunchChoice,
        this.drinkChoice = drinkChoice,
        this.drinkMoney = drinkFlavor,
        this.lunchPurchase(),
        this.calculateTotal(),
        this.finalDrinkDecision()
    }
    lunchPurchase () {
        if (this.lunchChoice === "burrito") {
            this.lunchMoney = 15;
        } else if (this.lunchChoice === "pizza") {
            this.lunchMoney = 5;
        } else if (this.lunchChoice === "soupSalad") {
            this.lunchMoney = 18;
        } else if (this.lunchChoice === "burger") {
            this.lunchMoney = 8;
        } else if (this.lunchChoice === "none") {
            this.lunchMoney = 0;
        }
    }
    calculateTotal () {
        this.total = this.moneySpent + this.lunchMoney + this.drinkMoney
    }
    finalDrinkDecision () {
        if (this.closingShift === "false" && this.total < 50) {
            this.finalDecision = "Yes, buy a drink";
          } else if (this.closingShift === "true" || this.total >= 50) {
            this.finalDecision = "No, do not buy a drink";
          }
    }
}

export {DD}