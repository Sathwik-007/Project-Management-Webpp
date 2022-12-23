import { Route } from "react-router-dom";
import ViewSubmissionDetails from "../ViewSubmissions/ViewSubmissionDetails";
import styles from "./ListProjects.module.css";
import { Link } from "react-router-dom";
import AddSubmission from "../AddSubmission/AddSubmission";

const ListProjects = (props) => {
  const projects = props.projects;
  const onProjectClick = (event) => {
    // console.log(chosenProjectId);
    /**
     * @param chosenProjectId;
     * @dev
     * creating a route to @ViewSubmissionDetails
     *
     * @dev
     * Renders a page with brief details about selected
     * project.
     */
    const chosenProjectId = event.target.getAttribute("data-unique-id");
    <Route path={`/submissions/${chosenProjectId}`}>
      <ViewSubmissionDetails projects={projects} />
    </Route>;
  };

  // const handleCreateSubmission = () => {
  //   <Route path="/create-submission">
  //     <AddSubmission />
  //   </Route>;
  // };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftDiv}>
        <div className={styles.viewProjectsDiv}>
          {projects.map((project) => (
            <Link
              to={`/submissions/${project.id}`}
              key={project.id}
              onClick={onProjectClick}
              className={styles.projectTile}
              data-unique-id={project.id}
            >
              <div className={styles.project_title}>{project.title}</div>
              <div
                data-unique-id={project.id}
                className={styles.project_status}
              >
                {project.status}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.rightDiv}>
        <Link to="/create-submission" className={styles.createSubmission}>
          Create Submission
        </Link>
      </div>
    </div>
  );
};

export default ListProjects;
