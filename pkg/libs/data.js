"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 12:26:02
 * @LastEditors: ActingCute酱 rem486@qq.com
 * @LastEditTime: 2023-03-04 17:24:09
 * @FilePath: \bilibili-subscribe\src\libs\data.ts
 * @Description: 数据结构
 */
const formart_1 = require("./formart");
class Data extends formart_1.default {
    constructor() {
        super(...arguments);
        this.data = {
            cookie: "",
            ssid: "",
            page: 1,
            limit: 30,
            url: "https://api.bilibili.com/x/space/bangumi/follow/list?type=1&follow_status=0&",
            referer: "https://space.bilibili.com/24549449/bangumi",
            hostname: "api.bilibili.com",
        };
    }
}
exports.default = Data;
