import { battery } from './data-exsamples.mjs'
import { camera  } from './data-exsamples.mjs'
import { brand   } from './data-exsamples.mjs'

//=================================================
//DBクラス (DB Class)
//=================================================
class DB {
    static table = {};
    static idCounter = 1;

    constructor(id) {
        this.id = id;
    }

    static initializeTable(key) {
        this.table[key] = {};
    }
    static add(obj) {

        let i = this.idCounter++;
        let className = this.name;

        if (!this.table[className]) this.initializeTable(className);

        obj.id = i;
        this.table[className][i] = obj;

    }
    static find(id) {

        let className = this.name;
        return this.table[className][id]

    }
    static all() {
        let className = this.name;
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

let z = {
    1:{"v_id":1,},
    2:{"v_id":1,},
    3:{"v_id":2,},
    4:{"v_id":1,},
}

let v = {
    "id":1,
    "zs":test
}

let vStr = "v"
function test(string){
    let newObj = {}

    Object.keys(z).forEach(record=> {

        if(z[record][`${string}_id`] == v.id){
            newObj[record] = z[record]
        }

    })

    return newObj;
}

console.log(v.zs(vStr))

z[5] = { "v_id":1}
z[6] = { "v_id":2}

console.log(v.zs(vStr))