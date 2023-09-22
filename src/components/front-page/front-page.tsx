import classNames from 'classnames';
import styles from './front-page.module.scss';
import { OngoingProject } from '../ongoing-project/ongoing-project';
import { UpcomingProject } from '../upcoming-project/upcoming-project';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';

export interface FrontPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FrontPage = ({ className }: FrontPageProps) => {
    return (
        
        <div className={classNames(styles.root, className)}>
        <Header />
        <Navbar />
            <div className="splitPanel">
                <div>
                    <OngoingProject />
                    <UpcomingProject /></div>
                <Sidebar />
            </div>
        </div>
    );
};
