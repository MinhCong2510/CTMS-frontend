import classNames from 'classnames';
import styles from './new-project.module.scss';

export interface NewProjectProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewProject = ({ className }: NewProjectProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={classNames(styles.contentHeader, 'CTManager_Name')}
                style={{
                    textAlign: 'center',
                }}
            >New Clinical Trial</div>
            <form className={styles.projectForm}>
                <label className={classNames(styles.formField, 'TrialForm_input')}>Trial Name:<input type="text" className="username-input" />
                </label>
                <label className={styles.formField}>Description:<input type="text" className="username-input" />
                </label>
                <label className={styles.formField}>Start Date:<input type="text" className="username-input" />
                </label>
                <label className={styles.formField}>End Date:<input type="text" className="username-input" />
                </label>
                <label className={styles.formField}>Duration:<input type="text" className="username-input" />
                </label>
                <label className={styles.formField}>Treatment:<input type="text" className="username-input" />
                </label>
                <label className={styles.formField}>Number of patients:<input type="text" className="username-input" />
                </label>
                <br />
                <br />
                <div
                    style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginBottom: 20,
                    }}
                >
                    <input
                        type="submit"
                        value="Create Study"
                        style={{ color: '#FFFFFF', backgroundColor: 'rgb(3, 67, 125)' }}
                        className="submit_button"
                    />
                </div>
            </form>
        </div>
    );
};
