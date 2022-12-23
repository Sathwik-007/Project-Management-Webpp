import AllSubmissions from "../../components/AllSubmissions";
import RecentSubmissions from "../../components/RecentSubmissions";
import styles from "./HomePage.module.css";

const HomePage = () => {
  /**
   * @dev dummy data, however will be removed
   * later.
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
    {
      id: 7,
      title: "Weather Prediction App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 8,
      title: "Online Pet store",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
    {
      id: 9,
      title: "Pharmaceuticals App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nisi a arcu dignissim, vel imperdiet velit auctor. Proin cursus urna quis mauris ultricies, in tempus quam tristique. Vivamus viverra scelerisque ultricies. Proin eu dui ornare, feugiat ipsum id, vehicula nulla. Ut sollicitudin eleifend elit, ac pellentesque dolor suscipit eu. Vestibulum eu dui in dui suscipit facilisis. Maecenas sed lectus ipsum.",
      list_files: [],
      date: new Date("2020-09-12"),
      status: "Rejected",
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.upperDiv}></div>
        <div className={styles.lowerDiv}>
          <RecentSubmissions />
          <AllSubmissions projects={projects} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
