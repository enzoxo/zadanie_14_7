
var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Nowak',
		email: 'jan.nowak@example.com',
	},

	{
		id: 2,
		firstName: 'Adam',
		lastName: 'Kowalski',
		email: 'jk.kowalski@example.com',
	},

	{
		id: 3,
		firstName: 'Kamil',
		lastName: 'Baszak',
		email: 'kbaszak@example.com',
		}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};




var App = React.createClass({
	render: function() {
		return (
			<div className = {'App'}>
				<ContactForm contact = {contactForm}></ContactForm>
				<Contacts item = {contacts}></Contacts>
			</div>		

			);
		
	}
});