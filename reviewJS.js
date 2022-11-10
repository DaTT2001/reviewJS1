//bai 1
function bai1(arr, inputNum) {
    let i = 0
    let temp = arr[0]
    const result = []
    while(i < arr.length) {
        if(temp + arr[i] === inputNum) {
            result.push(temp)
            result.push(arr[i])
            return result
        }
        else {
            temp = arr[i]
        }
        i++
    }
    return result
}
console.log(bai1([1,2,3,4,5],16))
//bai 2
function bai2(inputString) {
    const arr = inputString.split(" ")
    return arr[arr.length - 1 ].length
}
console.log(bai2("ngu vua thois sass"))
//bai 3
function bai3() {
    const date = new Date(2022,0,1)
    return (Date.now() - date.getTime())/86400000
}
console.log(bai3())
//bai 4
function bai4() {
    const present = new Date()
    const date = new Date(present.getFullYear(),present.getMonth())
    const result = new Date(date.getTime() - 86400000)
    return result
}
console.log(bai4())
//bai 5
function bai5([name, age, hobbies]) {
    const result = {
        fullName : name,
        age : age,
        hobbies : hobbies
    }
    return result
}
console.log(bai5(["dat",18,["đá bóng", "đá cầu"]]))
//bai 6
const arr = [
    ["Tom", 26, ["soccer", "basketball"]],
    ["Ann", 20, ["badmintion", "hiking"]],
    ["Ben", 32, ["cooking", "hiking"]],
]
const bai6 = [bai5(arr[0]),bai5(arr[1]),bai5(arr[2])]
console.log(bai6)
//bai 7
function bai7(arr) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].age < 30) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(bai7(bai6))
//bai 8
function bai8(arr) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].hobbies.length; j++) {
            if(arr[i].hobbies[j] === "hiking") {
                result.push(arr[i])
            }
        }
    }
    return result
}
console.log(bai8(bai6))
