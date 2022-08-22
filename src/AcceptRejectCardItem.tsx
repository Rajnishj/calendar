/** @format */

import React from "react";
// Customizable Area Start
import {
	Box,
	Button,
	Modal,
	Typography,
	withStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./card.css";
import { Data } from "./Modal";
// Customizable Area End

// Customizable Area Start
export interface myProps {
	classes?: any;
	item: Data;
	index?: number;
}
// Customizable Area End

// Customizable Area Start
export interface Props {}
// Customizable Area End

// Customizable Area Start
const Styles: any = {};
// Customizable Area End

// Customizable Area Start

class AcceptRejectCardItem extends React.Component<myProps> {
	state = {
		open: false,
	};
	onButtonClick = () => {
		this.setState({
			open: true,
		});
	};
	onButtonCancelClick = () => {
		this.setState({
			open: false,
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<div className="card-sec">
				<div>
					<p>Shreya Shetty</p>
					<p>Mandatory leave</p>
					<p>Reason for leave</p>
				</div>
				<div className="button-sec">
					<button className="accept">Accept</button>
					<button onClick={this.onButtonClick} className="reject">
						Reject
					</button>
				</div>
				{this.state.open && (
					<div className="rejection">
						<div className="triangle-sec-1">
							<span className="triangle"></span>
						</div>
						<div className="rejection-inner">
							<h6>Reason for Rejection</h6>
							<input
								style={{ border: "none", outline: "none" }}
								className="input-field1"
								placeholder="........."
							/>
							<div className="button-sec button-section">
								<button onClick={this.onButtonCancelClick}>Cancel</button>
								<button className="submit">Submit</button>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
export default withStyles(Styles)(AcceptRejectCardItem);
// Customizable Area End
