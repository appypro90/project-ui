import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../models/project.model';
import { fetchProjectById } from '../thunks/fetch-project-by-id';

interface ProjectState {
    project?: Project;
    loading: boolean;
    error: string | null;
}

const initialState: ProjectState = {
    loading: false,
    error: null,
    project: undefined
};

const selectedProjectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProjectById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchProjectById.fulfilled, (state, action: PayloadAction<Project>) => {
                state.loading = false;
                state.project = action.payload;
            });
    }
});

export default selectedProjectSlice.reducer;