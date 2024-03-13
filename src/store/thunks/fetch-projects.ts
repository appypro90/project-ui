import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../../api/api-service";
import { Project } from "../../models/project.model";

export const fetchProjects = createAsyncThunk('project/fetchProjects', async () => {
    const response = await ApiService.get('/Projects');
    return response as Project[];
});