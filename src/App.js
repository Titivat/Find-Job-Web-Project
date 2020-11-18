import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AfterSignUp from './pages/afterSignUp/AfterSignUpPage.jsx';
import CompanyProfile from './pages/companyProfile/CompanyProfilePage.jsx';
import FindJobPage from './pages/FindJobPage/FindJobPage.jsx'
import ForgotPasswordPage from './pages/forgotPassword/ForgotPasswordPage.jsx';
import ForumPage from './pages/ForumPage/ForumPage.jsx';
import Login from './pages/logIn/LogInPage.jsx';
import MainPage from './pages/mainPage/MainPage.jsx';
import SignUp from './pages/signUp/SignUpPage.jsx';
import UserProfilePage from './pages/userProfilePage/UserProfilePage.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/afterSignUp" component={AfterSignUp} />
                <Route exact path="/companyProfile" component={CompanyProfile} />
                <Route exact path="/findJobPage" component={FindJobPage} />
                <Route exact path="/forgotPasswordPage" component={ForgotPasswordPage} />
                <Route exact path="/forumPage" component={ForumPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/userProfilePage" component={UserProfilePage} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}


export default App;