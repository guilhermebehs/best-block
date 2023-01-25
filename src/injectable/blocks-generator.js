
class BlocksGenerator{

    generate(){
      return [
                {
                    "gym": false,
                    "school": true,
                    "store": false
                },
                {
                    "gym": true,
                    "school": false,
                    "store": false
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
  }

}

module.exports = BlocksGenerator


