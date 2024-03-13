import React from "react";
import { TextField } from "@material-ui/core";
import { selectedProductLoading, selectedProject } from "../store/slices/selected-project.selector";
import { useSelector } from "react-redux";

const ProjectDetails: React.FC = () => {
  const project = { ...useSelector(selectedProject) };
  const selectedLoading = useSelector(selectedProductLoading);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // setProject((prevProject) => ({
    //     ...prevProject,
    //     [name]: value,
    // }));
  };


  return selectedLoading ? (<div>Loading...</div>) :(
    <form style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "0 0 50%", padding: "8px" }}>
          <TextField
            name="projectName"
            label="Project Name"
            value={project?.projectName}
            onChange={handleChange}
            variant="standard"
          />
        </div>
        <div style={{ flex: "0 0 50%", padding: "8px" }}>
          <TextField
            name="description"
            label="Description"
            value={project?.description}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: "0 0 50%", padding: "8px" }}>
          <TextField
            name="startDate"
            label="Start Date"
            value={project?.startDate}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: "0 0 50%", padding: "8px" }}>
          <TextField
            name="endDate"
            label="End Date"
            value={project?.endDate}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: "0 0 50%", padding: "8px" }}>
          <TextField
            name="priority"
            label="Priority"
            type="number"
            value={project?.priority}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: "0 0 50%", padding: "8px" }}>
          <TextField
            name="budget"
            label="Budget"
            type="number"
            value={project?.budget}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default ProjectDetails;
