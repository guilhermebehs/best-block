
class BestBlock{

    constructor({blocksGenerator, distanceCalculator}){
         this.blocks = blocksGenerator.generate()
         this.distanceCalculator = distanceCalculator
    }

    calculate(places){
        let smallestDistance = null;
        
        this.blocks.forEach((_, i)=>{
                let largestDistance = 0;
                places.forEach((place)=>{
                    const distance = this.distanceCalculator.calculateShortestDistance(place, i)
                    if(distance > largestDistance)
                        largestDistance = distance
                })

                if(smallestDistance === null || smallestDistance.distance > largestDistance)
                    smallestDistance = {i, distance: largestDistance}                
        })

        return smallestDistance.i
    }
}

module.exports = BestBlock;