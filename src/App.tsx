import { useState, Component } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { ProjectPage } from './components/project-page/project-page';
import { FrontPage } from './components/front-page/front-page';
import { Forgot_your_password } from './components/forgot-your-password/forgot-your-password';
import { Staff } from './components/staff/staff';
import { Profile } from './components/profile/profile';
import { UpcomingProjectField } from './components/upcoming-project-field/upcoming-project-field';
import { OngoingProjectField } from './components/ongoing-project-field/ongoing-project-field';
import { LogIn } from './components/log-in/log-in';
import { Blank } from './components/blank/blank';
import Classnames from 'classnames';

function App() {
    const [count, setCount] = useState(0);

    return (
        navigate ('/LogIn'); 
        <div className={styles.App}>
        
            <Routes>
                <Route path="/frontpage" element={<FrontPage />} />
                <Route path="/projectpage" element={<ProjectPage />} />
                <Route path="/forgotpassword" element={<Forgot_your_password />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/ongoingprojects" element={<OngoingProjectField />} />
                <Route path="/upcomingprojects" element={<UpcomingProjectField />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
            <Blank className={Classnames(styles.blank_component, 'OngoingTrialsPage-button')} />
        </div>
    );
}

export default App;
