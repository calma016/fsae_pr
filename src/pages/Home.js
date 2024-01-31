import React from "react";

import user_icon from '../Assets/user.svg'
import email_icon from '../Assets/mail.svg'
import password_icon from '../Assets/lock.svg'


const Home = () => {
	return (
		<div>
			<div className='container'>
				<div className='header'>
					<div className="test">Sign Up</div>
					<div className="underline"></div>
				</div>
				<div className="inputs">
					<div className="input">
						<img src={user_icon} alt="" />
						<input placeholder="Username" type="text" />
					</div>
					<div className="input" >
						<img src={email_icon} alt="" />
						<input placeholder="Email" type="email" />
					</div>
					<div className="input">
						<img src={password_icon} alt="" />
						<input placeholder="Password" type="password" />
					</div>
				</div>
				<div className="forgot-password">Lost Password? <span>Click Here</span></div>
				<div className="submit-container">
					<div className="submit">Sign Up</div>
					<div className="submit">Login</div>
				</div>
			</div>
		</div>
	)
}
export default Home;
