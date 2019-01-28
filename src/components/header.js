import React, { Component } from 'react';

class Header extends Component{
	render() {
		return(
			<div>
				<nav className="navbar navbar-dark bg-primary">
  					<a className="navbar-brand" href="/">
    					<img src="/src/img/weather.png" width="80" height="80" className="d-inline-block align-top" alt="" />
  					</a>
				</nav>
			</div>
			);
	}
}

export default Header;