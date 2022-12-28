import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Redirect } from "react-router-dom";
import ReviewSubmission from "./pages/ReviewSubmission/ReviewSubmission.js";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/review-submission/:submissionId">
        <ReviewSubmission />
      </Route>
    </>
  );
}

export default App;
