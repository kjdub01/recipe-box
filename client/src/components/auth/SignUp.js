import React from 'react'

class SignUp extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="form-bg-overlay"> 
                <div className="form-bg">
                    <form onSubmit={this.handleSubmit} className="form">
                        <h2 className="form_title">Sign Up</h2>
                            <input type="email" id="email" onChange={this.handleChange} placeholder="Email"/>
                            <input type="password" id="password" onChange={this.handleChange} placeholder="Password"/>
                            <button className="btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;