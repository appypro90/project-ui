import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
export const selectProjects = (state: RootState) => state.projects.projects;
export const selectLoading = (state: RootState) => state.projects.loading;
export const selectError = (state: RootState) => state.projects.error;

// If you want to create more complex selectors, you can use `createSelector`
export const selectProjectCount = createSelector(
    selectProjects,
    (projects) => projects.length
);