import { taskReducer, taskActions } from './reducer';
import { GenericArrayState } from '../arraySlice';
import { ItemTask } from '../types/task';
import { createAction } from 'typesafe-actions';

describe('task reducer tests', () => {
	it('', () => {
		const state: GenericArrayState<ItemTask> = {
			data: [
				{
					id: 'a',
          title: 'hi',
          likes: 0
				}
			]
		};
    const res = taskReducer(state, taskActions.updateField("a", "title", "ho"))
    expect(res.data[0].title).toBe("ho")
    expect(res.data[0].likes).toBe(0)
	});
});


