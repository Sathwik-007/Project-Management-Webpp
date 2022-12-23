import { Link, Route } from "react-router-dom";
import ReviewSubmission from "../pages/ReviewSubmission/ReviewSubmission";
import styles from "./AllSubmissions.module.css";

const AllSubmissions = (props) => {
  const projects = props.projects;

  const viewReviewSubmissionPage = (event) => {
    const projectId = event.target.getAttribute("data-unique-id");
    console.log(projects);
    <Route path={`/review-submission/${projectId}`}>
      <ReviewSubmission projects={projects}/>
    </Route>
  };

  return (
    <div className={styles.carousel}>
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/review-submission/${project.id}`}
          data-unique-id={project.id}
          onClick={viewReviewSubmissionPage}
          className={styles.submissions}
        >
          <p>{project.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default AllSubmissions;
