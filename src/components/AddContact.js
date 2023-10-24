import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
    };
    render () {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type='text' 
                            id='name'
                            name='name' 
                            placeholder='Name'
                            autoComplete='name'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type='email' 
                            id='email'
                            name='email' 
                            placeholder='Email'
                            autoComplete='email'
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button className='ui button blue' type='submit'>Add</button>
                </form>
            </div>
        );
    }
}


export default AddContact;