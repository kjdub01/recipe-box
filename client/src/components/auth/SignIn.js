import React from 'react'

class SignIn extends React.Component {
    state = {}

    handleChange = (e) => {
        console.log(e)
    }

    handleSubmit = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div className="form-bg-overlay"> 
                <div className="form-bg">
                    <form onsubmit={this.handleSubmit} className="form">
                        <h2 className="form_title">Sign In</h2>
                        <div className="form">
                            <label htmlFor="email">Email    </label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className= "form">
                            <label htmlFor="password">Password  </label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="form">
                            <button className="btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;
