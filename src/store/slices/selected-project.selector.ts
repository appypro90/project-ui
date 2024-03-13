import { RootState } from '../store';
export const selectedProject = (state: RootState) => state.selectedProject.project;
export const selectedProductLoading = (state: RootState) => state.selectedProject.loading;
export const selectError = (state: RootState) => state.selectedProject.error;
