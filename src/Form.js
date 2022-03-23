import React, { useNavigate } from 'react-router-dom'
import { useReducer, useState } from 'react'
const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
)

const validNameRegex = RegExp(/[0-9]/)

const reducerName = (state, action) => {
	if (action.type === 'NAME') {
		return {
			...state,
			name: action.name,
			isValid: validNameRegex.test(action.name),
			error: 'неправильно написали побробуйте еще раз',
		}
	}
}
const reducerEmail = (state, action) => {
	if (action.type === 'EMAIL') {
		return {
			...state,
			name: action.name,
			isValid: validEmailRegex.test(action.name),
			error: 'not is valid',
		}
	}
}
const reducerPassword = (state, action) => {
	if (action.type === 'PASSWORD') {
		return {
			...state,
			name: action.name,
			isValid: action.name.length >= 6,
			error: 'Больше 6 букв',
		}
	}
}

function Form() {
	const navigate = useNavigate()
	const [nameState, dispatchName] = useReducer(reducerName, {
		name: '',
		isValid: false,
		error: false,
	})

	const [emailState, dispatchEmail] = useReducer(reducerEmail, {
		name: '',
		isValid: false,
		error: false,
	})
	const [passwordState, dispatchPassword] = useReducer(reducerPassword, {
		name: '',
		isValid: false,
		error: false,
	})

	const [login, setLogin] = useState('')
	const nameChangeHandler = (e) => {
		dispatchName({ type: 'NAME', name: e.target.value })
		console.log(nameState)
	}

	const emailChangeHandler = (e) => {
		dispatchEmail({ type: 'EMAIL', name: e.target.value })
	}
	const passwordChangeHandler = (e) => {
		dispatchPassword({ type: 'PASSWORD', name: e.target.value })
	}
	const SubmitHandler = (e) => {
		e.preventDefault()
		setLogin(login)
	}
	return (
		<div className='App'>
			<div className='Register_Form'>
				<h1 className='h1'>Register</h1>
				<form className='Registerform' onSubmit={SubmitHandler}>
					<input
						value={nameState.name}
						onChange={nameChangeHandler}
						className='TextInput'
						type='text'
						name='email'
						placeholder='userName'
					/>
					<p>{nameState.isValid ? '' : nameState.error}</p>

					<br />
					<input
						value={emailState.name}
						onChange={emailChangeHandler}
						className='TextInput'
						type='text'
						name='name'
						placeholder='email'
					/>
					<p>{emailState.isValid ? '' : emailState.error}</p>
					<br />
					<input
						value={passwordState.name}
						onChange={passwordChangeHandler}
						className='TextInput'
						type='password'
						name='passwordRepeat'
						placeholder='password'
					/>
					<p>{passwordState.isValid ? '' : passwordState.error}</p>
					<label className='CheckboxLabel'>
						<input
							className='Checkbox_register'
							type='checkbox'
							name='termsAcceptted'
						/>
						Accept Terms of Use
					</label>
					<button
						disabled={
							!nameState.isValid &&
							!emailState.isValid &&
							!passwordState.isValid
						}
						onClick={() => {
							navigate('/formreducer')
						}}
						className='register_button'
					>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}
export default Form
