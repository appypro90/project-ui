import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../../api/api-service";
import { Project } from "../../models/project.model";

export const fetchProjectById = createAsyncThunk('project/fetchProjectById', async (projectId: string) => {
    const response = await ApiService.get(`/Projects/${projectId}`);
    return response as Project;
});