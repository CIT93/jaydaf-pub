class FP {
    constructor(first, last, houseMembers, houseSize, foodType, foodSource, waterConsum, isDishAndWash, houseHoldPurchase)  {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodType = foodType;
        this.foodSource = foodSource;
        this.waterPoints = waterConsum;
        this.isDishAndWash = isDishAndWash;
        this.houseHoldPurPoints = houseHoldPurchase;
        this.calHouseHoldPoints();
        this.calHouseSizePoints();
        this.calFoodPoints();
        this.calFoodSourcePoints();
        this.calTotalWaterPoints();
        this.calTotal();
    }
    calHouseHoldPoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
          } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
          } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
          } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
          } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
          } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
          } else if (this.houseMembers >= 7) {
            this.houseHoldPoints = 2;
        }
    }
    calHouseSizePoints() {
        if (this.houseSize === "large") {
            this.houseSizePoints = 10;
          } else if (this.houseSize === "medium") {
            this.houseSizePoints = 7;
          } else if (this.houseSize === "small") {
            this.houseSizePoints = 4;
          } else if (this.houseSize === "apt") {
            this.houseSizePoints = 2;
          }
    }
    calFoodPoints() {
      if (this.foodType === "dailyMeat") {
        this.foodPoints = 10;
      }  else if (this.foodType === "fewTimesMeat") {
        this.foodPoints = 8;
      } else if (this.foodType === "vegetarian") {
        this.foodPoints = 4;
      } else if (this.foodType === "veganOrWild") {
        this.foodPoints = 2;
      }
    }
    calFoodSourcePoints() {
      if (this.foodSource === "conFood") {
        this.foodSourcePoints = 12;
      } else if (this.foodSource === "balFood") {
        this.foodSourcePoints = 6;
      } else if (this.foodSource === "freshFood") {
        this.foodSourcePoints = 2;
      }
    }
    calTotalWaterPoints() {
      this.isDishAndWash ? this.totalWaterPoints = this.waterPoints * 2 : this.totalWaterPoints = this.waterPoints;
    }
    calTotal() {
        this.total =
          this.houseHoldPoints +
          this.houseSizePoints +
          this.foodPoints +
          this.foodSourcePoints +
          this.totalWaterPoints +
          this.houseHoldPurPoints;
    }
}

export {FP}