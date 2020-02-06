import {
	createSlice,
	PayloadAction,
	SliceCaseReducers,
	ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';

export interface GenericArrayState<T extends { id: string }> {
	data: T[];
}

interface UpdateFieldPayload<T extends { id: string }> {
	id: string;
	value: Partial<T>;
}

export const buildTestArraySlice = <
	T extends { id: string },
	Reducers extends SliceCaseReducers<GenericArrayState<T>>
>({
	name,
	initialState,
	reducers
}: {
	name: string;
	initialState: GenericArrayState<T>;
	reducers: ValidateSliceCaseReducers<GenericArrayState<T>, Reducers>;
}) => {
	const slice = createSlice({
		name,
		initialState,
		reducers: {
			insert(state: GenericArrayState<T>, action: PayloadAction<T>) {
				state.data.push(action.payload);
      },
      upsert(state:GenericArrayState<T>, action: PayloadAction<T>) {
        const { payload } = action
        let ind = state.data.findIndex(x => x.id === payload.id);
        if(ind > -1) {
					state.data[ind] = {
						...state.data[ind],
						...payload
					};
        } else {
          state.data.push(action.payload)
        }
      },
			update(state: GenericArrayState<T>, action: PayloadAction<UpdateFieldPayload<T>>) {
				const { id, value } = action.payload;
				let ind = state.data.findIndex(x => x.id === id);

				if (ind > -1) {
					state.data[ind] = {
						...state.data[ind],
						...value
					};
				}
			},
			...reducers
		}
	});

	return slice;
};
