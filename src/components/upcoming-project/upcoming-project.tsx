import classNames from 'classnames';
import styles from './upcoming-project.module.scss';

export interface UpcomingProjectProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UpcomingProject = ({ className }: UpcomingProjectProps) => {
    return (
        <div className="Trials_blockFrontPage">
            <div className="Trials_blockFrontPage">Upcoming Projects:</div>
            <button className={classNames('OngoingTrialsPage-button', 'UpcomingTrial_blockFrontPage')}>Add a new trial ( authorised by eHealth clinical trial specialists  - Hidden from staffs)</button>
            <div className={styles.projectCarousel}>
                <div className={classNames('CTManager_Name', styles.projectCard)}>Trial 1: Trail Name - Code- Manager
                    <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                            objectFit: 'cover',
                        }}

                    />
                </div>
                <div className={styles.projectCard}>Trial 2: Trail Name - Code- Manager
                    <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                            objectFit: 'cover',
                        }}

                    />
                </div>
                <div className={styles.projectCard}>Trial 3: Trail Name - Code- Manager
                    <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                            objectFit: 'cover',
                        }}

                    />
                </div>
                <div className={styles.projectCard}>Trial 4: Trail Name - Code- Manager
                    <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                            objectFit: 'cover',
                        }}

                    />
                </div>
            </div>
        </div>
    );
};
