
# Best Block

App to find the best block on a simple street. the condition to find it is walking the smallest distance to another block where there is some place of interest, like a school, store or gym.  This idea was inspired by this [Youtube video](https://www.youtube.com/watch?v=rw4s4M3hFfs) .

A street is presented as a list of objects, and which object is a block. Which position in the list is the location of the block, and  positions after and before are its neighbors. which block contains 
keys representing a name of a place of interest and a boolean value indicating the existentence in that block. for exemple, the object bellow indicates there is a store, a gym, but no school:
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

If I want to, for example, find the best block where my places of interest are store, gym and school, I need to iterate the array and calculate the shortest path for every place. In this example,  this is the result for every block: 

* i0 = gym: 0un, school: 0un, store: 2un
* i1 = gym: 1un, school: 0un, store: 1un
* i2 = gym: 2un, school: 0un, store: 0un

Therefore, the best block is i1, because the maximum distance you need to walk to go to theses places of interest is 1un. The maximum distance of index i0 and i2 is 2un.



## Technical Overview

* Node JS 18.13.0
* DI concepts
* Unit tests

Obs: **blocks-generator.js** returns a fixed list of blocks and **index.js** uses a fixed list of places of interest. Feel free to change these values.
