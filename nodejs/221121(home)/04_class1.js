class car {
    constructor(color) {
        this.color = color;
        this.isDoor = true;
    }
    //기능(메소드)
    move() {
        console.log("움직이다.");
    }
    stop() {
        console.log("멈추다.");
    }
    returnColor() {
        return this.color;
    }
}

module.exports = car;