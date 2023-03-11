var friends = ["Rudhvik", 10, 6];

function setup() {
  console.log("This is the Original Array, Index 0: " + friends[0]);
  console.log("This is the Original Array, Index 1: " + friends[1]);
  console.log("This is the Original Array, Index 2: " + friends[2]);

  console.log("");

  friends.pop();
  console.log("Pop is used here, removes the last value, so no 6 is displayed: " + friends);

  friends.push(7);
  console.log("Push is used here, adds value at last index, so 7 will be displayed: " + friends);

  friends.shift();
  console.log("Shift is used here, removes the first value, so no Rudhvik will be displayed: " + friends);

  friends.unshift("Aryan");
  console.log("Unshift is used here, adds value at first index, so Aryan will be displayed: " + friends);

  friends.splice(1, 0, "Mohammed");
  console.log("Splice is used here, adds value any where in between, so Mohammed will be displayed: " + friends);

  console.log("");

  console.log("Pop: " + friends.pop());
  console.log("Push: " + friends.push(7));

  console.log("");

  console.log("Shift: " + friends.shift());
  console.log("Unshift: " + friends.unshift("Aryan"));

  console.log("");

  console.log("Splice: " + friends.splice(1, 1, "Mohammed"));
}