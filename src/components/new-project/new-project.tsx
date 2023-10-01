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
            <form className="NewTrial">
                <label className={classNames(styles.formField, 'TrialForm_input')}>Trial Name:<input type="text" className="username-input" />
                </label>
                <label className={classNames(styles.formField, 'TrialForm_input')}>Description:<input type="text" className={classNames('username-input', 'DescriptionNewTrial')} />
                </label>
                <label className={classNames(styles.formField, 'TrialForm_input')}>Sponsor:<input type="text" className="username-input" />
                </label>
                <br />
                <div
                    className="submit_button"
                >
                    <input
                        type="submit"
                        value="Create Clinical Trial"
                        style={{ color: '#FFFFFF', backgroundColor: '#ff0000', alignSelf: 'start', textAlign: 'center' }}
                        className="submit_button"
                    />
                </div>
            </form>
        </div>
    );
};
