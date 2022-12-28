import { useParams } from "react-router-dom";
import DropdownButton from "../../components/DropdownButton";
import styles from "./ReviewSubmission.module.css";

const ReviewSubmission = (props) => {
  /**
   * @dev dummy data, however will be removed
   * later.
   */
  const projects = [
    {
      id: 1,
      title: "Now suddenly the title is too huge",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2022-12-21"),
      status: "In progress",
    },
    {
      id: 2,
      title: "Library Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2021-6-18"),
      status: "Approved",
    },
    {
      id: 3,
      title: "Food Delivery App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-10-03"),
      status: "Review Changes",
    },
    {
      id: 4,
      title: "Online Dating App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 5,
      title: "Tasty Restaurant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 6,
      title: "Student Database Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 7,
      title: "Weather Prediction App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 8,
      title: "Online Pet store",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 9,
      title: "Pharmaceuticals App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
  ];
  const params = useParams();
  const projectId = params.submissionId;
  const project = projects.find(
    (project) => project.id === parseInt(projectId)
  );
  /**
   * @dev
   * Some sample date is shown as date reviewed.
   */
  const reviewingDate = new Date("2022-12-24").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperDiv}>
        <div class={styles.titleStatusDateContainer}>
          <h1 class={styles.title}>{project.title}</h1>
          <div class={styles.statusDateContainer}>
            <DropdownButton />
            <p>{reviewingDate}</p>
          </div>
        </div>
      </div>
      <div className={styles.lowerDiv}>
        <div className={styles.description}>
          <h5 class="display-4 ">Description</h5>
          <div>{project.description}</div>
        </div>
        <div className={styles.uploadFileSubmitReview}>
          <div className={styles.uploadFilesDiv}>
            <p class="text-white p-2">Show uploaded Files Here</p>
            <button>Download</button>
          </div>
          <div className={styles.commentsAndReviewDiv}>
            <textarea placeholder="Mention any feedback or changes"></textarea>
            <div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmission;
