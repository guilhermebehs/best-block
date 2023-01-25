const BestBlock = require("../../src/injectable/best-block");

describe('BestBlock', ()=>{

    let bestBlock, distanceCalculator, distance  = 0 ;

    //it could be any random values, because I will test the validation of the returned distances, and not the distance algorithn
    const blocksGenerator = {generate:()=>{
        return [
            {
                "gym": false,
                "school": true
            },
            {
                 "gym": true,
                 "school": true,
             },
             {
                 "gym": false,
                 "school": true
             }
     ]

    }}

    distanceCalculator = {
        calculateShortestDistance: ()=>{
            distance++
            return distance;
        }
    }

    
    beforeAll(()=>{
        bestBlock = new BestBlock({blocksGenerator, distanceCalculator});  

    })
    test('should return the best block', ()=>{
           expect(bestBlock.calculate(["gym"])).toEqual(0)
    })  
})