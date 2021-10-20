import Vehicle from "./vehicle.js";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage);    
    this.maxPassengers = 6;
    this.passengers =0;
    this.numberOfWheels = 4;
    this.maxSpeed = 200;
    this.fuel =100;
    this.scheduleService = false;
    }

    start (){
        if (this.fuel > 0){
            console.log("Started")
        } else {
            // return this.started = false;
            console.log ("Out of fuel.")
        }

    }

    loadPassenger (num){
        if (this.passengers < this.maxPassengers){
            if ((num + this.passengers) <= this.maxPassengers){
            this.passengers = num;
            return this.passengers;
            } else {
                console.log(this.model + " " + this.make + " " + "is full and has no more available seats.")
            }
        }
    }

    scheduleService(mileage){
        if (this.mileage > 30000){
            this.scheduleService = true;
            return this.scheduleService;
            // console.log("Time for maintance");
        }
    }
}