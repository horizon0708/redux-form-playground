import { Model, fk, many, attr } from 'redux-orm';
import { ItemTask } from '../types/task';

class ItemTask2 extends Model {
	static modelName = 'Task';
	static fields = {
		id: attr(),
		name: attr(),
		subTasks: many('SubTask')
	};
}


