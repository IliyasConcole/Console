"use strict";
const seasons = {
    winter: {
        closeProjects: 10,
        income: 600000,
        hired: 10,
        dismissed: 10,
        newProjects: 10
    },
    spring: {
        closeProjects: 10,
        income: 750000,
        hired: 10,
        dismissed: 10,
        newProjects: 10
    },
    summer: {
        closeProjects: 10,
        income: 550000,
        hired: 10,
        dismissed: 10,
        newProjects: 10
    },
    autumn: {
        closeProjects: 10,
        income: 900000,
        hired: 10,
        dismissed: 10,
        newProjects: 10
    }
};
//импорт как обьект 
//import* as testObject from './src/scripts/test';
define("main", ["require", "exports", "./src/scripts/data"], function (require, exports, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(data_1.data);
});
