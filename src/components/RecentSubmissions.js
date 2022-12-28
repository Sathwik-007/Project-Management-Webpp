import { Link, Route } from "react-router-dom";
import ReviewSubmission from "../pages/ReviewSubmission/ReviewSubmission";
import styles from "./RecentSubmissions.module.css";

const RecentSubmissions = () => {
  /**
   * @dev dummy data, however will be removed
   * later. Contains only fewer no. of projects
   */
   const projects = [
    {
      id: 1,
      title: "Now suddenly the title is too huge",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2022-12-21"),
      status: "In progress",
    },
    {
      id: 2,
      title: "Library Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2021-6-18"),
      status: "Approved",
    },
    {
      id: 3,
      title: "Food Delivery App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-10-03"),
      status: "Review Changes",
    },
  ];

  const viewReviewSubmissionPage = (event) => {
    const projectId = event.target.getAttribute("data-unique-id");
    <Route path={`/review-submission/${projectId}`}>
      <ReviewSubmission projects={projects} />
    </Route>;
  };

  return (
    <div className={styles.mainContainer}>
      {projects.map((project) => (
        <Link
          data-unique-id={project.id}
          key={project.id}
          to={`/review-submission/${project.id}`}
          onClick={viewReviewSubmissionPage}
          className={styles.recent_submissions}
        >
          <p>{project.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default RecentSubmissions;
