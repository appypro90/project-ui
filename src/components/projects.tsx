import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Drawer,
  IconButton,
} from "@material-ui/core";
import { fetchProjects } from "../store/thunks/fetch-projects";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { selectProjects } from "../store/slices/project.selector";
import { fetchProjectById } from "../store/thunks/fetch-project-by-id";
import ProjectDetails from "./project-details";
import CloseIcon from '@mui/icons-material/Close';

const Projects: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(selectProjects);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleRowClick = (projectId: string) => {
    setDrawerOpen(true);
    dispatch(fetchProjectById(projectId));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Project Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index} onClick={() => handleRowClick(project.projectId)}>
                <TableCell>{project.projectName}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{project.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
    >
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon style={{ color: "red" }} />
            </IconButton>
        </div>
        <ProjectDetails></ProjectDetails>
    </Drawer>
    </>
  );
};

export default Projects;
