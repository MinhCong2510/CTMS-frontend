import classNames from 'classnames';
import styles from './ongoing-project.module.scss';
import {Link} from 'react-router-dom';


export interface OngoingProjectProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const OngoingProject = ({ className }: OngoingProjectProps) => {
    return (
        <div className="Trials_blockFrontPage">

            <div className="Trials_blockFrontPage" >Ongoing Trial:</div>
            <div className={styles.projectCarousel}>
                <Link to= '/t1Home'> <div className={styles.projectCard}>Trial 1: Trial Name- Code- Manager<img
                    src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                    alt=""
                    style={{
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        height: 150,
                        width: 150,
                        objectFit: 'cover',
                    }}
                />
                </div> </Link>
                <div className={styles.projectCard}>Trial 2: Trial Name- Code- Manager<img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
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
                <div className={styles.projectCard}>Trial 3: Trial Name- Code- Manager<img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
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
                <div className={styles.projectCard}>Trial 4: Trial Name- Code- Manager<img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                    alt=""
                    style={{
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        height: 150,
                        width: 150,
                        objectFit: 'cover',
                    }}
                />
                </div></div>
        </div>
    );
};
