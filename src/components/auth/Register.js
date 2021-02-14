import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import axios from 'axios';
import { notifications } from '../Utils/Utils';
import { useHistory } from 'react-router-dom';

const INITIALUSERSTATE = { firstName: '', lastName: '', login: '', email: '', password: '' };
const Register = () => {
	const [userState, setUserState] = useState(INITIALUSERSTATE);
	let history = useHistory();

	const handleChange = (e) => {
		console.log(e.target.name);
		setUserState({ ...userState, [e.target.name]: e.target.value });
	};

	const handleSubmet = async (e) => {
		e.preventDefault();
		// console.log(userState, 'userState');
		const response = await axios.post('/register', userState);
		if (response.status === 201) {
			try {
				notifications('success', response.statusText);
				setUserState(INITIALUSERSTATE);
				history.push('/login');
			} catch (error) {
				notifications('error', response.statusText);
			}
		}else {
			notifications('error', response.title);
		}
	};

	return (
		<div>
			<Header></Header>
			<div className='sign-in-main'>
				<div className='container d-flex'>
					<div className='sign-in-container py-5 m-auto border'>
						<div className='sign-in-header'>
							<h4 className='font-weight-bold'>Sign Up</h4>
							<p className='sign-in-intro'>
								<span className='text-muted'>New to Food Delivery App ? </span>
								<span className='text-danger font-weight-bold'>Sign In</span>
							</p>
							<div className='login-social-media py-3'>
								<button className='btn btn-primary btn-block btn-sm'>Continue with Google</button>
							</div>
						</div>
						<form onSubmit={handleSubmet}>
							<div className='form-group'>
								<div className='form-row'>
									<div className='col-6'>
										<label htmlFor='firstName'>FirstName</label>
										<input
											name='firstName'
											onChange={handleChange}
											type='text'
											className='form-control form-control-sm'
											placeholder='firstName'
											value={userState.firstName}
										/>
									</div>
									<div className='col-6'>
										<label htmlFor='lastName'>LastName</label>
										<input
											name='lastName'
											onChange={handleChange}
											type='text'
											className='form-control form-control-sm'
											placeholder='lastName'
											value={userState.lastName}
										/>
									</div>
								</div>
							</div>
							<div className='form-group'>
								<div className='form-row'>
									<div className='col-6'>
										<label htmlFor='login'>UserName</label>
										<input
											name='login'
											onChange={handleChange}
											type='text'
											className='form-control form-control-sm'
											placeholder='userName'
											value={userState.login}
										/>
									</div>
									<div className='col-6'>
										<label htmlFor='InputEmail'>Email address</label>
										<input
											name='email'
											onChange={handleChange}
											type='email'
											className='form-control form-control-sm'
											placeholder='email'
											value={userState.email}
										/>
									</div>
								</div>
							</div>
							<div className='form-group'>
								<label htmlFor='InputPassword1'>Password</label>
								<input
									name='password'
									onChange={handleChange}
									type='password'
									className='form-control form-control-sm'
									value={userState.password}
								/>
							</div>
							<button type='submit' className='btn btn-danger btn-sm'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Register;
