import classNames from 'classnames';
import styles from './log-in.module.scss';

export interface LogInProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const LogIn = ({ className }: LogInProps) => {
    return <div className="background-img">
            <img
                src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/eHealthNSW_Logo%402x.7bf59f1d50bacc6c378cb4f49be66ac88bc1201a.png"
                alt=""
                className="logo"
                height="50"
            />
            <h1 className="Welcome-sign">Welcome to eHealth Clinical Trial</h1>
            <div className="formapplication">
                <img
                    src="https://www.ehealth.nsw.gov.au/__data/assets/image/0003/748713/Solutions_HPC_The-Benefit_595x595.png"
                    alt=""
                    height=""
                    className="front-index"
                />
                <form className="login-form">
                    <h4 className="H4">Please enter your details below</h4>
                    <label className="username">Username:</label>
                    <br />
                    <input type="text" className="username-input" />
                    <br />
                    <label className="password">Password:</label>
                    <br />
                    <input type="password" className="password-input" />
                    <br />
                    <a href="/">I forgot my password</a>
                    <br />
                    <input type="button" value="Login" className="submit_button" />
                </form>
            </div>
        </div>;
};
