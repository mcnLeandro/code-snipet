//=================================================
//DBクラス (DB Class)
//=================================================
class DB {
    static table = {};
    static idCounter = 1;

    constructor(id) {
        this.id = id;
    }

    static getClassName() {
        return this.name;
    }
    static initializeTable(key) {
        this.table[key] = {};
    }
    static add(obj) {

        let i = this.idCounter++;
        let className = this.getClassName();

        if (!this.table[className]) this.initializeTable(className);

        obj.id = i;
        this.table[className][i] = obj;

    }
    static find(id) {

        let className = this.getClassName();
        return this.table[className][id]

    }
    static all() {
        let className = this.getClassName();
        return this.table[className]
    }

    //=========================================================
    // DBの表示関数 (functions to show DB)
    //=========================================================

    //データがひとつもない場合はエラーになるので修正が必要
    static getMaxColumnLengthArr(obj) {
        let arr = []

        Object.keys(obj["1"]).forEach(key => {

            let len = String(key).length

            Object.keys(obj).forEach(id => {

                let data = obj[id][key];
                let dataLen;

                if (typeof (data) == "string") dataLen = data.length
                if (typeof (data) == "number") dataLen = String(data).length;
                if (typeof (data) == "object") dataLen = String(Object.keys(data)).length

                len = dataLen > len ? dataLen : len;
            })

            arr.push(len + 2)

        })

        return arr
    }
    static addCharNTime(n, char) {
        let string = "";
        for (let i = 0; i < n; i++) string += char;
        return string;
    }
    static getColumnString(data, len) {
        if (typeof (data) == "string") data = data
        if (typeof (data) == "number") data = String(data);
        if (typeof (data) == "object") data = String(Object.keys(data))

        let string = " " + data + " "

        string += this.addCharNTime(len - string.length, " ")

        return string;
    }
    static getRecordString(obj, lenArr) {
        let i = 0;
        let string = "|";

        Object.keys(obj).forEach(col => {

            let len = lenArr[i++]
            let data = DB.getColumnString(obj[col], len);

            string += data + DB.addCharNTime(len - data.length," ") +"|"

        })
        string += "\n"

        string += "|"
        lenArr.forEach(len => string += DB.addCharNTime(len,"-") + "|" ) 
        string += "\n"

        return string + ""


    }
    //これも一つもデータがない状態だとエラーになる
    static getColumnRecordString(model,lenArr){
        let string = "";
        let line = "|";

        lenArr.forEach(len => line += DB.addCharNTime(len,"=") + "|" ) 
        line += "\n"


        string += line

        let i = 0;
        string += "|"
        Object.keys(model[1]).forEach(column => {
            let len = lenArr[i++]
            string += " " + column + DB.addCharNTime(len - (column.length+1)," ") + "|"
        })

        string += "\n"

        string += line

        return string;
    }
    static getModelString(model) {
        let lenArr = this.getMaxColumnLengthArr(this.table[model])
        let totalLen = lenArr.reduce((total, x) => total + x) + lenArr.length + 1;

        let table = ""

        //モデル
        table += this.addCharNTime(totalLen, "_") + "\n"
        table += "|" + this.addCharNTime(totalLen - 2, " ") + "|" + "\n"
        table += "| " + model + this.addCharNTime(totalLen - (model.length + 3), " ") + "|" + "\n"

        //カラム一覧
        table += this.getColumnRecordString(this.table[model],lenArr)

        //レコード
        Object.keys(this.table[model]).forEach(id => {
            let record = DB.table[model][id]
            table += this.getRecordString(record,lenArr)
        })


        table += "|" + this.addCharNTime(totalLen - 2, "_") + "|" + "\n"


        return table;

    }
    static showDB() {
        let string = ""
        Object.keys(this.table).forEach(model => {
            let table =  DB.getModelString(model)

            string += "\n"
            string += table
            string += "\n"
            string += "\n"
        })
        return string;
    }
}


class Battery extends DB {
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
class Camera extends DB {
    //         ( ブランドid、モデル,消費電力(wh))
    constructor(id, brand_id, model, powerConsumptionWh) {
        super(id);
        this.brand_id = brand_id;
        this.model = model;
        this.powerConsumptionW = powerConsumptionWh * 3600;
    }
}
class Brand extends DB {
    constructor(id, camera_ids, name) {
        super(id);
        this.camera_ids = camera_ids;
        this.name = name;
        // this.cameras = 1;

    }
}

//=================================================
// テスト用のデータ(test data)
//=================================================
const battery =[
    {
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
    }
];
const camera =[
    {
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
    }
];
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
    }
];
//==============================================
//DBの初期化 (initilize DB by test data)
//==============================================

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


console.log(DB.showDB())
// console.log(DB.table)

//=================================================
// DB構造 (DB structure)
//===============================================
//- table
//   - model
//      - recode
//          - colmun
//              -#integer
//              -#string
//              -#Object

// console.log(DB.table)                    -table
// console.log(DB.table["Camera"])          -model
// console.log(DB.table["Camera"][1])       -record
// console.log(DB.table["Camera"][1]["id"]) -column
//===================================================

// let z = {
//     1:{"v_id":1,},
//     2:{"v_id":1,},
//     3:{"v_id":2,},
//     4:{"v_id":1,},
// }

// let v = {
//     "id":1,
//     "zs":test
// }

// let vStr = "v"
// function test(string){
//     let newObj = {}

//     Object.keys(z).forEach(record=> {

//         if(z[record][`${string}_id`] == v.id){
//             newObj[record] = z[record]
//         }

//     })

//     return newObj;
// }

// console.log(v.zs(vStr))

// z[5] = { "v_id":1}
// console.log(v.zs(vStr))