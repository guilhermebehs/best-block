
class DistanceCalculator{

    constructor({blocksGenerator}){
        this.blocks = blocksGenerator.generate()
   }

    calculateShortestDistance(place, blockIndex){
        let foundForward = false;
        let foundBackward = false;
        let forwardIndex = blockIndex+1;
        let backwardIndex = blockIndex-1;
    
        const currentBlock = this.blocks[blockIndex]
        
        if(currentBlock[place] === true) return 0
       
        while(true){
    
            if(backwardIndex >= 0){
              const nextBlock = this.blocks[backwardIndex]  
              if(!foundBackward && nextBlock[place] === true)
                 foundBackward = true
              else
                 backwardIndex--  
            }
            
            if(forwardIndex < this.blocks.length){
              const nextBlock = this.blocks[forwardIndex]  
              if(!foundForward && nextBlock[place] === true)
                 foundForward = true
              else
                 forwardIndex++  
            }
            
             if(foundForward === true)
                return forwardIndex - blockIndex;
             else if(foundBackward === true)   
                return blockIndex - backwardIndex
             if(forwardIndex === this.blocks.length && backwardIndex === -1)
                return this.blocks.length
    
        }
    
    }

}
 

module.exports = DistanceCalculator;