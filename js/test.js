
// Vechicle クラスの定義
class Vechicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  spec() {
    console.log("この乗り物の名前は" + this.name + "です。車輪の数は" + this.wheels + "個です。");
  }
}

// Vechicle クラスを継承した Car クラスを定義
class Car extends Vechicle {
  constructor(name, maker) {
    // 親クラスのコンストラクタを呼び出す
    super(name, 4);
    this.maker = maker;
  }
  specChild() {
    // 親クラスのメソッドを呼び出す
    super.spec();
    console.log(this.maker + "で製造されています。");
  }
}

// Vechicle クラスを継承した Bike クラスを定義
class Bike extends Vechicle {
  constructor(name) {
    // 親クラスのコンストラクタを呼び出す
    super(name, 2);
  }
}

// Carクラスのインスタンスを作成し、メソッドを実行
let car = new Car("消防車", "トヨタ");

// Bikeクラスのインスタンスを作成し、メソッドを実行
let bike = new Bike("白バイ");

// // Arrayのprototype： Function型のオブジェクト
// // 出力：ƒ () { [native code] }
console.log(Object.getPrototypeOf(Array) + "")
console.log(Object.getPrototypeOf(Vechicle) + "")
console.log(Object.getPrototypeOf(car) + "")
console.log(Object.getPrototypeOf(bike) + "")

// // Function型のオブジェクトのprototype：Object型のオブジェクト
// // 出力：{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Array)) + "")
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Vechicle)) + "")
console.log(Object.getPrototypeOf(Object.getPrototypeOf(car)) + "")
console.log(Object.getPrototypeOf(Object.getPrototypeOf(bike)) + "")


// // Object型のオブジェクトのprototype：null
// // 出力：null
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Vechicle))))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(car))))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(bike))))

//console↓
// function () { [native code] }
// function () { [native code] }
// [object Object]
// [object Object]
// [object Object]
// [object Object]
// [object Object]
// [object Object]
// null
// null
// [Object: null prototype] {}
// [Object: null prototype] {}



//------------------------------------------------------------------------------------------

// console.log("-------------------------------------------------------------------------")
// // オブジェクト作成
// var obj1 = {type: "human"}
// var obj2 = {name: "sato"}

// // オブジェクト作成時点のprototype：Object型のオブジェクト
// // 出力：{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log(Object.getPrototypeOf(obj1)) 
// console.log(Object.getPrototypeOf(obj2)) // obj1と同様の出力

// // prototype書き換え（obj2のprototypeをobj1に設定）
// Object.setPrototypeOf(obj2, obj1)

// // prototype書き換え後のobj2のprototype：obj1
// // 出力： {type: "human"}
// console.log(Object.getPrototypeOf(obj2))

// // obj2自身のプロパティ（name）
// // 出力： sato
// console.log(obj2.name)

// // obj2のprototypeのプロパティ（type）
// // 出力： human
// console.log(obj2.type)
// console.log(obj2)
// console.log(obj1)


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
