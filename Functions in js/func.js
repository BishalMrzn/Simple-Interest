function Average(x,y){
    console.log("Done")
    return Math.round(1+(x+y)/2)
}
const sum=(p,q)=>{
    return p+q
}
const hello=()=>{
    console.log("hewjahjkhas")
    return "hi"
}

a=1
b=2
c=3

console.log("Average of one plus a and b is:"+Average(a,b))
console.log("Average of one plus c and b is:"+(1+(c+b)/2))
console.log("Average of one plus a and c is:"+Average(a,c))
console.log(sum(2,3))
let z=hello()
console.log(z)