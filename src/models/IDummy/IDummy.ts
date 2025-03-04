import {ITodo} from "../ITodo/ITodo.ts";

export interface IDummy {
	todos: ITodo[];
	total: number;
	skip: number;
	limit: number;
}
