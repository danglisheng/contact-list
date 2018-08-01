import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';
class ListContacts extends Component {
	static propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired
}
	state = {
		query:''
	}
	updateQuery = (query) => {
		this.setState({ query:query.trim()})
	}
	resetContacts=()=>{
		this.setState({ query:''})
	}
	
	render(){
		const { contacts,onDeleteContact,onNavigate } = this.props;
		const { query } = this.state;
		let showingContacts;
		if( query ) {
			const match = new RegExp(escapeRegExp(query),'i');
			showingContacts = contacts.filter((contact)=>match.test(contact.name));
		}
		else {
			showingContacts=contacts;
		}
		showingContacts.sort(sortBy('name'));
		return (
		   <div className="list-contacts">
		  	
		    <div className="list-contacts-top">
		    	<input 
		    		className="search-contacts"
		    		type='text'
		    		placeholder='搜索联系人'
		    		value={ query }
		    		onChange = {(event)=>this.updateQuery(event.target.value)}
		    		/>
		    	<Link to="/create"  className="add-contact">添加联系人</Link>
		    </div>
		    {
		    	showingContacts.length !== contacts.length && (
		    		<div className="showing-contacts">
		    			<span>现在显示{contacts.length}个联系人中的{showingContacts.length}个
		    			 </span>
		    			<button onClick={ this.resetContacts}>重置</button>
		    		</div>
		    		)
		    }
			<ol className="contact-list">
				{
					showingContacts.map((contact)=>(
						<li key={contact.id} className='contact-list-item'>
							<div className='contact-avatar' style={{ backgroundImage:`url(${contact.avatarURL})`}}>
							</div>
							<div className='contact-details'>
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button onClick={() => onDeleteContact(contact)} className="contact-remove">
								Remove
							</button>
						</li>
						))
				}
			</ol>
		   </div>
			);
	}
}

export default ListContacts;