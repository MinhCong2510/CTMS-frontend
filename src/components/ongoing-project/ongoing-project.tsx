import classNames from 'classnames';
import styles from './ongoing-project.module.scss';

export interface OngoingProjectProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const OngoingProject = ({ className }: OngoingProjectProps) => {
    return (
        <div>
            <div className={styles.contentHeader}>Ongoing Projects:</div>
            <div className={styles.projectCarousel}>
                <div className={styles.projectCard}>
                    Cancer-Free
                    <img
                        src="https://st4.depositphotos.com/14431644/24384/i/450/depositphotos_243840022-stock-photo-text-sign-showing-cancer-free.jpg"
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
                <div className={styles.projectCard}>
                    Dementia
                    <img
                        src="https://img.aplaceformom.com/image/web-lighthouse/prod/dementia_behaviors.jpg?t=default"
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
