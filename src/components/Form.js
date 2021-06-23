import React, { useState } from 'react';
import Error from './Error';

import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setConsult }) => {
	const [error, setError] = useState(false);

	const { city, country } = search;

	const handleChange = (e) => {
		setSearch({
			...search,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (city.trim() === '' || country.trim() === '') {
			setError(true);
			return;
		}
		setError(false);
		setConsult(true);
	};

	return (
		<form onSubmit={handleSubmit}>
			
			{ error ? <Error message="All fields must be completed"/> : null}

			<div className="input-field col s12">
				<input
					type="text"
					name="city"
					id="city"
					value={city}
					onChange={handleChange}
				/>
				<label htmlFor="city">City: </label>
			</div>
			<div className="input-field col s12">
				<select
					name="country"
					id="country"
					value={country}
					onChange={handleChange}
				>
					<option value=""> -- Select your country --</option>
					<option value="DE"> Germany </option>
					<option value="AT"> Austria </option>
					<option value="BE"> Belgium </option>
					<option value="DK"> Denmark </option>
					<option value="ES"> Spain </option>
					<option value="FR"> France </option>
					<option value="GR"> Greece </option>
					<option value="NL"> Netherlands </option>
					<option value="IE"> Ireland </option>
					<option value="IT"> Italy </option>
					<option value="LU"> Luxembourg </option>
					<option value="NO"> Norway </option>
					<option value="PT"> Portugal </option>
					<option value="UK"> United Kingdom </option>
					<option value="NZ"> Czech Republic </option>
					<option value="SE"> Sweden </option>
					<option value="CH"> Switzerland </option>
				</select>
				<label htmlFor="country">Country: </label>
			</div>

			<div className="input-field col s12">
				<button
					type="submit"
					className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
				>
					Search Weather
				</button>
			</div>
		</form>
	);
};

Form.propTypes ={
	search: PropTypes.object.isRequired,
	setSearch: PropTypes.func.isRequired,
	setConsult: PropTypes.func.isRequired
}

export default Form;
