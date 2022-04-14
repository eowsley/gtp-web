import React from 'react';
import './Contact.css'

function Contact(props) {


    return (
			<div className='contact__div'>
				<div className='contact__heroimg'></div>
				<h2 className='contact__h2'>Contact Us</h2>

				<form>
					<label htmlFor='name'>
						<span className='contact__span'>Name </span> (required)
					</label>
					<br />
					<input type='text' id='name' required={true} />

					<br />
					<label htmlFor='email'>
						<span className='contact__span'>Email </span> (required)
					</label>
					<br />
					<input type='email' id='email' required={true} />

					<br />
					<label htmlFor='comment'>
						<span className='contact__span'>Comment </span> (required)
					</label>
					<br />
					<textarea
						className='contact__inputcomment'
						type='text'
						id='comment'
						required={true}
					/>
                    <br/>
                    <button className='contact__btn'>Submit</button>

				</form>
			</div>
		);
}

export default Contact;