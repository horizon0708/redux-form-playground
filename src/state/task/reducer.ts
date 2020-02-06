import { buildTestArraySlice, GenericArrayState } from '../arraySlice';
import { ItemTask } from '../types/task';
import { SliceCaseReducers } from '@reduxjs/toolkit';

const slice = buildTestArraySlice({
	name: 'tasks',
	initialState: {
		data: []
	} as GenericArrayState<ItemTask>,
	reducers: {}
});

export const taskActions = {
	...slice.actions,
	updateField: <K extends keyof ItemTask>(id: string, key: K, value: ItemTask[K]) =>
		slice.actions.update({
			id,
			value: {
				[key]: value
			}
		})
};
export const taskReducer = slice.reducer;

