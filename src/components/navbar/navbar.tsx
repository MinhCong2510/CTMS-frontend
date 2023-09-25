import classNames from 'classnames';
import styles from './navbar.module.scss';
import {  Link} from 'react-router-dom';
export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={styles.navBar}>
                <Link to='/frontpage'><h3 className={styles.navElement}>Home</h3>  
                </Link>
                <Link to='/ongoingprojects'><h3 className={styles.navElement}> Ongoing Projects</h3></Link>
                <Link to='/upcomingprojects'><h3 className={styles.navElement}> Upcoming Projects</h3></Link>
                <Link to='/projectpage'><h3 className={styles.navElement}> New Project</h3></Link>
                <Link to='/staff'><h3 className={styles.navElement}> Staff</h3></Link>
                <Link to='/profile'><h3 className={styles.navElement}> Profile</h3></Link>
                <Link to='/login'><img src="https://cdn-icons-png.flaticon.com/512/56/56805.png" alt="" 
                style={{
                    height: 35,
                    width: 35,
                    objectFit:'cover',
                    marginLeft:10,
                }}/></Link>
        </nav>
    );
};
