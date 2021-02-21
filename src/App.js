import "./App.css";
import TestimonialForm from "./TestimonialForm";
import TestimonialPage from "./TestimonialPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/" exact>
						<TestimonialPage />
					</Route>
					<Route path="/testimonial-form">
						<TestimonialForm />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
