class Rocket{
    constructor(
    fuleType,
    weight,
    power,
    ){  //sustaniate states
        this.fuleType = fuleType;
        this.weight = weight;
        this.power = power;

    }
    launch(){
        console.log("launch sequence started");
        alert("launch sequence started");
        return true;
    }
    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
        return true;
    }
    detachThruster(thrusterID){
        console.log("detachThruster sequence started");
        alert("Thruster" + thrusterID + "has been detached");
        return true;
    }
}

class Mission{
    constructor(
        objective,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
    ){
        this.objective = objective;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
    }
    displayMissionParameters(){
        alert("the spacecraft " + this.spaceCraft + " will launch on " + this.launchDateDay + ", "
        + th)
    }
}