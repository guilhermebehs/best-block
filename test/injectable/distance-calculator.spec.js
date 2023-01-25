const DistanceCalculator = require("../../src/injectable/distance-calculator")


describe('DistanceCalculator', ()=>{

    let distanceCalculator;

    const blocksGenerator = {generate:()=>{
        return [
            {
                "gym": false,
                "school": true,
                "store": true 
            },
            {
                 "gym": true,
                 "school": true,
                 "store": false 
             },
             {
                 "gym": false,
                 "school": true,
                 "store": false
             },
             {
                 "gym": false,
                 "school": true,
                 "store": true
             },
     ]

    }}

    
    beforeAll(()=>{
        distanceCalculator = new DistanceCalculator({blocksGenerator});  

    })
    test('should calculate the shortest distance between a block and some place of interest', ()=>{
           expect(distanceCalculator.calculateShortestDistance("gym", 2)).toEqual(1)
    })  
})