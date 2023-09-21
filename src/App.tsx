import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import styles from './App.module.scss';
import { ProjectPage } from './components/project-page/project-page';
import { FrontPage } from './components/front-page/front-page';
import { Header } from './components/header/header';
import {Forgot_your_password} from './components/forgot-your-password/forgot-your-password';

function App() {
    const [count, setCount] = useState(0);

   return (
        <div className={styles.App}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/frontpage" element={<FrontPage/>}/>
                <Route path="/projectpage" element={<ProjectPage/>}/>
                <Route path="/forgotpassword" element={<Forgot_your_password/>}/>
            </Routes>
            </div>
   );
}

export default App;
