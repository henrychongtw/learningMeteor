import React, { Component } from 'react';

class BinsShare extends Component {
	handleSubmit(event) {
		event.preventDefault();

		const email = this.refs.email.value;
		// this.refs.email.value
		Meteor.call('bins.share', this.props.bin, email);
		// this.refs.email.value = '';
	}

	renderShareList() {
		return this.props.bin.sharedWith.map(email => {
			return (
				<button 
					key={email}
					className="btn btn-default">
						{email}
				</button>
			)
		})
	}

	render () {
		return (
			<footer className="bins-share">
				<form onSubmit={this.handleSubmit.bind(this)} className="input-group">
					<input ref="email" className="form-control" />
					<div className="input-group-btn">
						<button 
							className="btn btn-default">
							Share Bin
						</button>
					</div>
				</form>
				<div >
					Shared with:
				</div>
				<div className="btn-group">
					{this.renderShareList()}
				</div>
			</footer>
		);
	}
}

export default BinsShare;