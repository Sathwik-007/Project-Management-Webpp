import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login.js";
import Welcome from "./pages/Welcome/Welcome";
import ViewSubmissionDetails from "./pages/ViewSubmissions/ViewSubmissionDetails";
import NotFound from "./pages/NotFoundPage/NotFound";
import AddSubmission from "./pages/AddSubmission/AddSubmission";

function App() {
  const [displayWelcomePage, setDisplayWelcomePage] = useState(false);
  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setDisplayWelcomePage(true);
    }
  }, []);

  

  /**
   * @param msg returns true or false for valid authentication
   * This is just partial implementation of authentication
   */
  const handlePage = (msg) => {
    setDisplayWelcomePage(msg);
    /**
     * @dev
     * Stores a local cookie to keep the user logged in
     * even when he leaves the website and return back
     * Gets deleted when user exits the browser.
     *
     * The delete localStorage.removeItem is not implemented yet.
     */
    if (msg) {
      localStorage.setItem("isLoggedIn", true);
      history.push("/submissions");
    }
  };
  // return (
  //   <div className="container">
  //     {displayWelcomePage === false && isLoggedIn === null ? (
  //       <Login onSuccessfulLogin={handlePage} />
  //     ) : (
  //       <Welcome />
  //     )}
  //   </div>
  // );
  return (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login onSuccessfulLogin={handlePage} />
        </Route>
        <Route path="/submissions" exact>
          <Welcome />
        </Route>
        <Route path="/submissions/:submissionId">
          <ViewSubmissionDetails />
        </Route>
        <Route path="/create-submission">
          <AddSubmission />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;
