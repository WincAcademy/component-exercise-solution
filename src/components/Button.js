import './Button.css';

export const Button = () => {
	return (
		<>
			<h2>Would you like tea or coffee?</h2>
			<div className="Button-group">
				<button className="Button">Tea</button>
				<button className="Button">Coffee</button>
			</div>
		</>
	);
};
