class slingshot{
    constructor(bodyA,pointB){

        var slingshot1={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        this.slingshot=Constraint.create(slingshot1);
        World.add(world,this.slingshot);

    }
    fly(){
        this.slingshot.bodyA=null;
    }
    display(){
        if(this.slingshot.bodyA){
            
        
 var pointA=this.slingshot.bodyA.position;
 var pointB=this.pointB;
strokeWeight(4)
 line(pointA.x,pointA.y,pointB.x,pointB.y);
}
    }
}