import styles from "./AddSubmission.module.css";

const AddSubmission = () => {
    /**
     * @dev
     * Should render a form that takes in details 
     * about the project being uploaded.
     */
    return (
        <div className={styles.mainDiv}>
            <div>
                {/*Title and description */}
                <input className={styles.title} type="text" placeholder="Title" />
                <textarea className={styles.description} type="text" placeholder="Add description of your project here" />
            </div>
            <div className={styles.filesUploadAndSubmitDiv}>
                {/*file upload and submit */}
                <div className={styles.filesUploadDiv}>
                    Uploaded file will be displayed here
                </div>
                <button className={styles.submitButton}>Submit</button>
            </div>
        </div>
    );
}

export default AddSubmission;