

var animal = function(type) { this.type = type }
var human = function(name) { this.name = name }

// コンストラクタはFunction型のオブジェクト
// 出力：ƒ () { [native code] }
console.log(Object.getPrototypeOf(animal))
console.log(Object.getPrototypeOf(human))

// Function型のオブジェクトには『prototype』とは別に『prototypeプロパティ』が用意されている
// 出力：{constructor: ƒ}
console.log(animal.prototype)
console.log(human.prototype)

// humanの『prototypeプロパティ』を『animalコンストラクタで作成したオブジェクト（{type: "human"}）』に書き換える
// 出力：animal {type: "human"}
human.prototype = new animal("human")
console.log(human.prototype)

// humanコンストラクタでオブジェクトを作成する
var obj = new human("sato")

// オブジェクト自身のプロパティ
// 出力：sato
console.log(obj.name)

// オブジェクトのprototype
// 出力：animal {type: "human"}
console.log(Object.getPrototypeOf(obj))

// オブジェクトのprototypeのプロパティ
// 出力：human
console.log(obj.type)

// console ↓
// {}
// {}
// {}
// {}
// animal { type: 'human' }
// sato
// animal { type: 'human' }
// human