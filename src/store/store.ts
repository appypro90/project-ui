import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/project.slice';
import selectedProjectReducer from './slices/selected-project.slice';

const store = configureStore({
    reducer: {
      projects: projectReducer,
      selectedProject: selectedProjectReducer,
    },
  });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;