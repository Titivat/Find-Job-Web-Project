import React, { useState } from 'react';
import Button from './components/button/Button.jsx';
import ForumPage from '../src/pages/ForumPage/ForumPage.jsx';
import UserProfilePage from './pages/userProfilePage/UserProfilePage.jsx';
import FindJobPage from './pages/FindJobPage/FindJobPage.jsx';

import Header from './components/header/Header.jsx'

function App() {
  return (
    <div>
      <FindJobPage/>
    </div>
  );
}


export default App;