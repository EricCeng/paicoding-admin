import qs from "qs";

import http from "@/api";
import { PORT1 } from "@/api/config/servicePort";
import { Login } from "@/api/interface/index";
import { IFormType } from "@/views/config";

/**
 * @name 分类模块
 */

// 获取列表
export const getPvApi = (day: number) => {
	return http.get(`${PORT1}/statistics/pvDayList?day=${day}`);
};

// 删除操作
export const getUvApi = (day: number) => {
	return http.get<Login.ResAuthButtons>(`${PORT1}/statistics/uvDayList?day=${day}`);
};