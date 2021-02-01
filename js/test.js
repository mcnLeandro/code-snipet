//battery = [{},{},{},{}];
//camera  = [{},{},{},{}];
//brand   = [{},{},{},{}];
const battery =
  [{
    "batteryName": "WKL-78",
    "capacityAh": 2.3,
    "voltage": 14.4,
    "maxDraw": 3.2,
    "endVoltage": 10,
  },
  {
    "batteryName": "WKL-140",
    "capacityAh": 4.5,
    "voltage": 14.4,
    "maxDraw": 9.2,
    "endVoltage": 5,
  },
  {
    "batteryName": "Wmacro-78",
    "capacityAh": 2.5,
    "voltage": 14.5,
    "maxDraw": 10,
    "endVoltage": 5,
  },
  {
    "batteryName": "Wmacro-140",
    "capacityAh": 3.6,
    "voltage": 14.4,
    "maxDraw": 14,
    "endVoltage": 5,
  },
  {
    "batteryName": "IOP-E78",
    "capacityAh": 6.6,
    "voltage": 14.4,
    "maxDraw": 10.5,
    "endVoltage": 8,
  },
  {
    "batteryName": "IOP-E140",
    "capacityAh": 9.9,
    "voltage": 14.4,
    "maxDraw": 14,
    "endVoltage": 10,
  },
  {
    "batteryName": "IOP-E188",
    "capacityAh": 13.2,
    "voltage": 14.4,
    "maxDraw": 14,
    "endVoltage": 11,
  },
  {
    "batteryName": "RYN-C65",
    "capacityAh": 4.9,
    "voltage": 14.8,
    "maxDraw": 4.9,
    "endVoltage": 11,
  },
  {
    "batteryName": "RYN-C85",
    "capacityAh": 6.3,
    "voltage": 14.4,
    "maxDraw": 6.3,
    "endVoltage": 12,
  },
  {
    "batteryName": "RYN-C140",
    "capacityAh": 9.8,
    "voltage": 14.8,
    "maxDraw": 10,
    "endVoltage": 12,
  },
  {
    "batteryName": "RYN-C290",
    "capacityAh": 19.8,
    "voltage": 14.4,
    "maxDraw": 14,
    "endVoltage": 12,
  }]
  ;
const camera =
  [{
    "brand_id": 1,
    "model": "ABC 3000M",
    "powerConsumptionWh": 35.5,
  },
  {
    "brand_id": 1,
    "model": "ABC 5000M",
    "powerConsumptionWh": 37.2,
  },
  {
    "brand_id": 1,
    "model": "ABC 7000M",
    "powerConsumptionWh": 39.7,
  },
  {
    "brand_id": 1,
    "model": "ABC 9000M",
    "powerConsumptionWh": 10.9,
  },
  {
    "brand_id": 1,
    "model": "ABC 9900M",
    "powerConsumptionWh": 15.7,
  },
  {
    "brand_id": 2,
    "model": "UIK 110C",
    "powerConsumptionWh": 62.3,
  },
  {
    "brand_id": 2,
    "model": "UIK 210C",
    "powerConsumptionWh": 64.3,
  },
  {
    "brand_id": 2,
    "model": "UIK 230C",
    "powerConsumptionWh": 26.3,
  },
  {
    "brand_id": 2,
    "model": "UIK 250C",
    "powerConsumptionWh": 15.3,
  },
  {
    "brand_id": 2,
    "model": "UIK 270C",
    "powerConsumptionWh": 20.3,
  },
  {
    "brand_id": 3,
    "model": "CEV 1100P",
    "powerConsumptionWh": 22,
  },
  {
    "brand_id": 3,
    "model": "CEV 1300P",
    "powerConsumptionWh": 23,
  },
  {
    "brand_id": 3,
    "model": "CEV 1500P",
    "powerConsumptionWh": 24,
  },
  {
    "brand_id": 3,
    "model": "CEV 1700P",
    "powerConsumptionWh": 25,
  },
  {
    "brand_id": 3,
    "model": "CEV 1900P",
    "powerConsumptionWh": 26,
  }]
  ;
// const brand = [
//     {
//         "camera_ids":[1,2,3,4,5],
//         "name":"Cakon",
//     },
//     {
//         "camera_ids":[6,7,8,9,10],
//         "name":"Go MN",
//     },
//     {
//         "camera_ids":[11,12,13,14,15],
//         "name":"VANY",
//     }]
// ;
const brand = [
  {
    "camera_ids": { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
    "name": "Cakon",
  },
  {
    "camera_ids": { 6: 6, 7: 6, 8: 6, 9: 6, 10: 10 },
    "name": "Go MN",
  },
  {
    "camera_ids": { 11: 11, 12: 12, 13: 13, 14: 14, 15: 15 },
    "name": "VANY",
  }]
  ;




// class Model{
//   static table = {};
//   static idCounter = 1;

//   constructor(id){
//     this.id = id;
//   }

//   static getClassName(){
//     return this.name;
//   }
//   static initializeTable(key){
//     this.table[key] = {};
//   }
//   static add(obj){

//     let i = this.idCounter++;
//     let className = this.getClassName();

//     if(!this.table[className])this.initializeTable(className);

//     obj.id = i;
//     this.table[className][i] = obj;

//   }
//   static find(id){

//     let className = this.getClassName();
//     return this.table[className][id] 

//   }
//   static all(){
//     let className = this.getClassName();
//     return this.table[className]
//   }

//   static belongs_to(model){
//     //~_idをもとに新しく~でオブジェクトを作る
//     Object.keys(this.all()).map(function(key){
//       console.log(key)
//     })
//   }
// }
class DB {
  static db = {};
  static idCounter = 1;

  constructor(id) {
    this.id = id;
  }

  static getClassName() {
    return this.name;
  }
  static initializeTable(key) {
    this.db[key] = {};
  }
  static add(obj) {

    let i = this.idCounter++;
    let className = this.getClassName();

    if (!this.db[className]) this.initializeTable(className);

    obj.id = i;
    this.db[className][i] = obj;

  }
  static find(id) {

    let className = this.getClassName();
    return this.db[className][id]

  }
  static all() {
    let className = this.getClassName();
    return this.db[className]
  }

  static belongs_to(model) {
    //~_idをもとに新しく~でオブジェクトを作る
    Object.keys(this.all()).map(function (key) {
      console.log(key)
    })
  }

  static showDB() {
  }
}


class Battery extends Model {
  //          (名前,   容量,      電圧,    最大放電電流(A), 終始電圧)
  constructor(id, name, capacityAh, voltage, maxDraw, endVoltage) {
    super(id);
    this.name = name;
    this.capacityA = capacityAh * 3600;
    this.voltage = voltage;
    this.maxDraw = maxDraw;
    this.endVoltage = endVoltage;
  }
}
class Camera extends Model {
  //         ( ブランドid、モデル,消費電力(wh))
  constructor(id, brand_id, model, powerConsumptionWh) {
    super(id);
    this.brand_id = brand_id;
    this.model = model;
    this.powerConsumptionW = powerConsumptionWh * 3600;
  }
}
class Brand extends Model {
  constructor(id, camera_ids, name) {
    super(id);
    this.camera_ids = camera_ids;
    this.name = name;

  }
}



//battery初期化
for (let i = 0; i < battery.length; i++) {
  let currObj = battery[i];

  let batteryName = currObj["batteryName"];
  let capacityAh = currObj["capacityAh"];
  let voltage = currObj["voltage"];
  let maxDraw = currObj["maxDraw"];
  let endVoltage = currObj["endVoltage"];

  let newBttery = new Battery(null, batteryName, capacityAh, voltage, maxDraw, endVoltage);

  Battery.add(newBttery);

}
//camera初期化
for (let i = 0; i < camera.length; i++) {
  let currObj = camera[i];

  let brand_id = currObj["brand_id"];
  let model = currObj["model"];
  let powerConsumptionWh = currObj["powerConsumptionWh"];

  let newCamera = new Camera(null, brand_id, model, powerConsumptionWh);

  Camera.add(newCamera);

}
//brand初期化
for (let i = 0; i < brand.length; i++) {
  let currObj = brand[i];

  let camera_ids = currObj["camera_ids"];
  let name = currObj["name"];

  let newBrand = new Brand(null, camera_ids, name);

  Brand.add(newBrand);

}
class Target {
  static target = {
    "body": 1,
    "mainSection": 1
  }

  static refreshTarget() {
    Object.keys(this.target).forEach(key => {
      this.target[key] = 3
    })
  }
  static add(id) {
    if (!this.target[id]) {
      this.target[id] = id;
    }
  }
  static get(id) {
    return this.target[id]
  }
}

let hash = {};
Object.keys(Brand.find(3).camera_ids).forEach(key => {
  hash[key] = Camera.find(key)
});
// console.log(Model.table)
// console.log(Brand.find(3).camera_ids)
// console.log(Target.target)
// console.log(hash)


///-------------------------------------------------------------------------------------------------------
// // Vechicle クラスの定義
// class Vechicle {
//   constructor(name, wheels) {
//     this.name = name;
//     this.wheels = wheels;
//   }
//   spec() {
//     console.log("この乗り物の名前は" + this.name + "です。車輪の数は" + this.wheels + "個です。");
//   }
// }

// // Vechicle クラスを継承した Car クラスを定義
// class Car extends Vechicle {
//   constructor(name, maker) {
//     // 親クラスのコンストラクタを呼び出す
//     super(name, 4);
//     this.maker = maker;
//   }
//   spec() {
//     // 親クラスのメソッドを呼び出す
//     super.spec();
//     console.log(this.maker + "で製造されています。");
//   }
// }

// // Vechicle クラスを継承した Bike クラスを定義
// class Bike extends Vechicle {
//   constructor(name) {
//     // 親クラスのコンストラクタを呼び出す
//     super(name, 2);
//   }
// }

// console.log("-------------------------------------------------------------------------")

// // Carクラスのインスタンスを作成し、メソッドを実行
// let car = new Car("消防車", "トヨタ");
// car.spec();

// // Bikeクラスのインスタンスを作成し、メソッドを実行
// let bike = new Bike("白バイ");
// bike.spec();

// console.log("-------------------------------------------------------------------------")
// // Arrayのprototype： Function型のオブジェクト
// // 出力：ƒ () { [native code] }
// console.log(Object.getPrototypeOf(Array) + "")
// console.log(Object.getPrototypeOf(Vechicle) + "")
// console.log(Object.getPrototypeOf(car) + "")
// console.log(Object.getPrototypeOf(bike) + "")

// // Function型のオブジェクトのprototype：Object型のオブジェクト
// // 出力：{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Array))+ "")
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Vechicle)) + "")
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(car)) + "")
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(bike)) + "")


// // Object型のオブジェクトのprototype：null
// // 出力：null
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))))
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Vechicle))))
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(car))))
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(bike))))

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
