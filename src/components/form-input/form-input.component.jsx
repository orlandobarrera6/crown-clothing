import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => {
	return (
		<div className='form-input-container'>
			<input className='form-input' onChange={handleChange} {...otherProps} />
			{label ? (
				<label
					className={`form-input-label ${
						otherProps.value.length ? "shrink" : ""
					}`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
