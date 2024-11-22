## How to Calculate "Examine Your Water Consumption"
- I believe the logic for the water consumption calculation should be as follows:
    - if (dishWashUse > 9) {
        waterPoints = 3;
    } else if (dishWashUse > 4 && dishWashUse < 9) {
        waterPoints = 2;
    } else if (dishWashUse > 1 && dishWashUse < 3) {
        waterPoints = 1;
    } else if (dishWashUse === 0) {
        waterPoints = 0;
    }
    - if (washMachUse > 9) {
        waterPoints = waterPoints + 3;
    } else if (washMachUse > 4 && washMachUse < 9) {
        waterPoints = waterPoints + 2;
    } else if (washMachUse > 1 && washMachUse < 3) {
        waterPoints = waterPoints + 1;
    } else if (washMachUse === 0) {
        waterPoints = waterPoints + 0;
    }
- There may be a more concise way to write this logic; this is the way I thought about calculating it so far in order to guarantee accurate point values.

- After thinking about the calculation a bit more, maybe the above logic could be made more general and applied to the total calculations as a callback of sorts?
    - calWaterConsumptionPoints(machUse) {
        let waterPoints = 0;
        if (machUse > 9) {
            waterPoints = waterPoints + 3;
        } else if (machUse > 4 && machUse < 9) {
            waterPoints = waterPoints + 2;
        } else if (machUse > 1 && machUse < 3) {
            waterPoints = waterPoints + 1;
        } else if (machUse === 0) {
            waterPoints = waterPoints + 0;
        }}
    - function waterConsumptionPoints => {
        calWaterConsumptionPoints(dishWashUse)
        if (waterPoints !== 0) {
            calWaterConsumptionPoints(washMachUse)
        }
    }