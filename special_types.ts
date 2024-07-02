// ANY

let v: any = true;

v  = "string";

Math.round(v);

console.log(v);


// UNKNOW

let w: unknown = true;

w = "string";

w = {
    runANonExistentMethod: () => console.log("I think there before I am.")
} as {runANonExistentMethod: () => void};


if(typeof w === "object" && w !== null){
    (w as {runANonExistentMethod: () => void}).runANonExistentMethod();
}



// NEVER

let x: never = true;


// undefined and null

let y: undefined = undefined;
let z: null = null;

