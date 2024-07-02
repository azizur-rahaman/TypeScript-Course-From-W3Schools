// ANY
let v = true;
v = "string";
Math.round(v);
console.log(v);
// UNKNOW
let w = true;
w = "string";
w = {
    runANonExistentMethod: () => console.log("I think there before I am.")
};
if (typeof w === "object" && w !== null) {
    w.runANonExistentMethod();
}
//# sourceMappingURL=special_types.js.map