import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Forgot your password',
    Board: () => (
        <div className="forgotPBackground">
            <img
                src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/eHealthNSW_Logo%402x.7bf59f1d50bacc6c378cb4f49be66ac88bc1201a.png"
                alt=""
                className="logo"
            />
            <h1 className="forgotPassword">Forgot your password</h1>
            <h2 className="forgotPasswordh2">Please enter your details below or login</h2>
            <form className="forgotPW-form">
                <label className="Forgot-label">First name:</label>
                <br />
                <input type="text" className="forgot-input" />
                <br />
                <label className="Forgot-label">Last name:</label>
                <br />
                <input type="text" className="forgot-input" />
                <br />
                <label className="Forgot-label">Username</label>
                <br />
                <input type="text" className="forgot-input" />
                <br />
                <label className="Forgot-label">Phone number</label>
                <br />
                <input type="tel" className="forgot-input" placeholder="(+61) " />
                <br />
                <label className="Forgot-label">Email address</label>
                <br />
                <input type="email" className="forgot-input" />
                <br />
                <label className="Forgot-label">New password:</label>
                <br />
                <input type="password" className="forgot-input" />
                <br />
                <label className="Forgot-label">Confirm your password:</label>
                <br />
                <input type="password" className="forgot-input" />
                <br />

                <br />
                <input type="submit" value="Submit" className="submit_button" />
            </form>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
        windowWidth: 1024,
    },
});
