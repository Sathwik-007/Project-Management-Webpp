import { useParams } from "react-router-dom";
import styles from "./ViewSubmissionDetails.module.css";
/**
 * @dev
 * @react-bootsrap is used for styling.
 * works with cdn as well
 */
import "bootstrap/dist/css/bootstrap.min.css";

const ViewSubmissionDetails = () => {
  /**
   * @param props.projects
   * dummy data which will be later removed anyways
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
    {
      id: 4,
      title: "Online Dating App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 5,
      title: "Tasty Restraunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 6,
      title: "Student Database Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
  ];
  const params = useParams();
  const chosenProjectId = params.submissionId;
  const chosenProject = projects.find(
    (project) => project.id === parseInt(chosenProjectId, 10)
  );
  console.log(chosenProject);
  return (
    /**
     * @param params.submissionId
     */
    <div className="container">
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{chosenProject.title}</h1>
        <p className={styles.date}>
          {"Submission Date : "}
          {
            chosenProject.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }
        </p>
        <p className={styles.description}>{chosenProject.description}</p>
        <div className={styles.fileDisplayWindow}></div>
        <button className={styles.btnDelete}>Delete submission</button>
      </div>
    </div>
  );
};

export default ViewSubmissionDetails;
