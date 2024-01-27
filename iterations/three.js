
//SOME SPEACIAL TYPE OF LOOPS
//["","",""]  //[{},{},{}]=>Array of objects
//for of loops
const greetings="Hello World"
for(const greet of greetings){
    console.log(`each char is ${greet}`);
}

//MAPS => The map object holds key-value pairs and remembers the original insertion order of the keys.Any value (both objects and primitive values) may be used as either a key or a value.key value pair should be unique.

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")                     //this pair not inserted again because it is already present in the map and map contains unique key value pairs
console.log(map)

//accessing key value pairs of map
for(const [key] of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(key ,':-', value);
}

