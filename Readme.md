
# Best Block

App to find the best block on a simple street. The condition for finding the right location is walking the smallest distance to another block where there is some place of interest, like a school, store or gym. The inspiration for this project came from [Youtube video](https://www.youtube.com/watch?v=rw4s4M3hFfs) .

A street is presented as a list of objects. Each object is a block. Every position in the list is the block's location, and  positions after and before the block are its neighbors. Each block contains 
keys representing a name of a place of interest and a boolean value indicating the existence inside that block. for example, the object bellow shows there is a store and a gym,  but no school:
```json
{
      "gym": true,
      "school": false,
      "store": true 
}
```

## Problem Explanation

Let's assume we have the following street and its blocks:
```json
[
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
             }
]
```

For instance, if I want to find the best block where my places of interest are a store, a gym and a school, I need to iterate the array and calculate the shortest path for every place. In this example, this is the result for every block: 

* i0 = gym: 0un, school: 0un, store: 2un
* i1 = gym: 1un, school: 0un, store: 1un
* i2 = gym: 2un, school: 0un, store: 0un

Therefore, the best block is i1 because the maximum distance you have to walk to theses places of interest is 1un. For i0 is 2un and for i2 is 2un.



## Technical Overview

* Node JS 18.13.0
* DI concepts
* Unit tests

Obs: **blocks-generator.js** returns a fixed list of blocks and **index.js** uses a set list of places of interest. Feel free to change these values.
