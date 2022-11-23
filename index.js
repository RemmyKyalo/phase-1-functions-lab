// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue>42){
        const blocks=(someValue-42);
        return blocks;
    }
    else if(someValue<42){
        const blocks =(42-someValue);
        return blocks;
    }

}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(someValue){
    
    const feet =(distanceFromHqInBlocks(someValue)*264);
    return feet;
    
    
}
distanceFromHqInFeet(someValue);

function distanceTravelledInFeet(start ,destination){
    let distance;
    if(start>destination){
    distance =(start-destination)*264;
    
    }
    else if(destination>start){
        distance =(destination-start)*264;
        
    }
    return distance;
    
}
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);



function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start ,destination)<=400){
        return (distanceTravelledInFeet(start ,destination)*0)
    }
    else if(distanceTravelledInFeet(start ,destination)>400 && distanceTravelledInFeet(start ,destination)<2000){
        return ((distanceTravelledInFeet(start ,destination)-400)*0.02);
    }
    else if(distanceTravelledInFeet(start ,destination)<2500){
        return 25;
    }
    else if(distanceTravelledInFeet(start ,destination)>2500){
        return 'cannot travel that far';
    }

}
calculatesFarePrice(43,44);
calculatesFarePrice(34,32);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24);

