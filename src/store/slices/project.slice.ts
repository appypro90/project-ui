import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../models/project.model';
import { fetchProjects } from '../thunks/fetch-projects';

interface ProjectState {
    projects: Project[];
    loading: boolean;
    error: string | null;
}

const initialState: ProjectState = {
    projects: [],
    loading: false,
    error: null,
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        fetchProjectsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProjectsSuccess(state, action: PayloadAction<Project[]>) {
            state.projects = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchProjectsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
                state.projects = action.payload;
                state.loading = false;
                state.error = null;
            });
    }
});

export const {
    fetchProjectsStart,
    fetchProjectsSuccess,
    fetchProjectsFailure,
} = projectSlice.actions;

export default projectSlice.reducer;