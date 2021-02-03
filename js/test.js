

// オブジェクト作成
var obj1 = {type: "human"}
var obj2 = {name: "sato"}

// オブジェクト作成時点のprototype：Object型のオブジェクト
// 出力：{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.getPrototypeOf(obj1)) 
console.log(Object.getPrototypeOf(obj2)) // obj1と同様の出力

// prototype書き換え（obj2のprototypeをobj1に設定）
Object.setPrototypeOf(obj2, obj1)

// prototype書き換え後のobj2のprototype：obj1
// 出力： {type: "human"}
console.log(Object.getPrototypeOf(obj2))

// obj2自身のプロパティ（name）
// 出力： sato
console.log(obj2.name)

// obj2のprototypeのプロパティ（type）
// 出力： human
console.log(obj2.type)
console.log(obj2)
console.log(obj1)

//console↓
// [Object: null prototype] {}
// [Object: null prototype] {}
// { type: 'human' }
// sato
// human
// { name: 'sato' }
// { type: 'human' }
// (base) leandromcnl


// console.log("-------------------------------------------------------------------------")

// var animal = function(type) { this.type = type }
// var human = function(name) { this.name = name }

// // コンストラクタはFunction型のオブジェクト
// // 出力：ƒ () { [native code] }
// console.log(Object.getPrototypeOf(animal))
// console.log(Object.getPrototypeOf(human))

// // Function型のオブジェクトには『prototype』とは別に『prototypeプロパティ』が用意されている
// // 出力：{constructor: ƒ}
// console.log(animal.prototype)
// console.log(human.prototype)

// // humanの『prototypeプロパティ』を『animalコンストラクタで作成したオブジェクト（{type: "human"}）』に書き換える
// // 出力：animal {type: "human"}
// human.prototype = new animal("human")
// console.log(human.prototype)

// // humanコンストラクタでオブジェクトを作成する
// var obj = new human("sato")

// // オブジェクト自身のプロパティ
// // 出力：sato
// console.log(obj.name)

// // オブジェクトのprototype
// // 出力：animal {type: "human"}
// console.log(Object.getPrototypeOf(obj))

// // オブジェクトのprototypeのプロパティ
// // 出力：human
// console.log(obj.type)

// console.log("-------------------------------------------------------------------------")
