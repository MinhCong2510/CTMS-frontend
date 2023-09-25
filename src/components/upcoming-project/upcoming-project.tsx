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
        <div>
            <div className={styles.contentHeader}>Upcoming Projects:</div>
            <div className={styles.projectCarousel}>
                <div className={styles.projectCard}>
                    Sleeping Study
                    <img
                        src="https://renuerx.com/wp-content/uploads/2021/02/renue-rx-What-Vitamins-Interfere-With-Birth-Control-Pills-Supplement-Options.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                            objectFit:'cover',
                        }}
                    />
                </div></div>
        </div>
    );
};
