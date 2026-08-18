import HashMap from "./script.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.entries());
console.log(test.length());

test.set("apple", "green");
test.set("hat", "red");
test.set("lion", "yellow");

console.log(test.entries());
console.log(test.length());
console.log(test.capacity);

test.set("moon", "silver");

console.log(test.entries());
console.log(test.length());
console.log(test.capacity);
console.log(test.bucket);

test.set("ice cream", "migga");
test.set("jacket", "zoey");
test.set("kite", "idk");

console.log(test.entries());
console.log(test.length());
console.log(test.capacity);
console.log(test.bucket);
console.log(test.get("moon"));
console.log(test.has("moon"));
console.log(test.remove("moon"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.length());
