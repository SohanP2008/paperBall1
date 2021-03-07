/*class Dustbin {
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.height=height
        this.width = width
        this.bottomBody = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.bottomBody);
        this.leftBody = Bodies.rectangle(this.x - 100, this.y - 50, 20, 100, options);
        World.add(world,this.leftBody)
        this.rightBody = Bodies.rectangle(this.x + 100, this.y + 50, 20, 100, options);
        World.add(world, this.rightBody);
    }
    display(){
        var posBottom = this.bottomBody.position
        var posLeft = this.leftBody.position
        var posRight = this.rightBody.position
        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        fill(255)
        stroke(255)
        fill("white");
        strokeWeight(3);
        rect(0, 0, 20, 100)

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        fill(255)
        stroke(255)
        fill("white");
        strokeWeight(3);
        rect(0, 0, 20, 100)

        push()
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        fill(255)
        stroke(255)
        fill("white");
        strokeWeight(3);
        rect(this.x, this.y, this.width, this.height)
    }
}
*/