
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Form from './Form'
import FormReducer from './FormReducer'
// import { Router } from 'react-router-dom'
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Form/>} />
				<Route path='/formreducer' element={<FormReducer/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
