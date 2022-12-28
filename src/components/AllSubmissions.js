import { Link, Route } from "react-router-dom";
import ReviewSubmission from "../pages/ReviewSubmission/ReviewSubmission";
import styles from "./AllSubmissions.module.css";
import CarouselCards from "./Carousel/CarouselCards";

const AllSubmissions = (props) => {
  const projects = props.projects;

  // const viewReviewSubmissionPage = (event) => {
  //   const projectId = event.target.getAttribute("data-unique-id");
  //   console.log(projects);
  //   <Route path={`/review-submission/${projectId}`}>
  //     <ReviewSubmission projects={projects} />
  //   </Route>;
  // };

  return (
    <>
    <h3 className={styles.message}>All Submissions</h3>
      <CarouselCards projects={projects}/>
    </>
  );
};

export default AllSubmissions;
