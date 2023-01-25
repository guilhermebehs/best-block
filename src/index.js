const awilix = require('awilix')

let container = awilix.createContainer()

function createDIContainer(){
  container = awilix.createContainer()
  container.loadModules(['src/injectable/**/*.js'], {
    formatName:'camelCase',
    resolverOptions:{
       injectionMode:'PROXY'
    }
  })
}

function run(){
  createDIContainer()
  const bestBlock = container.resolve('bestBlock')
  const placesOfInterest = ["gym", "store", "school"]
  const result = bestBlock.calculate(placesOfInterest)
  console.log(result)
}

run()

 


