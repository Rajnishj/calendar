/** @format */

import React from "react";
// Customizable Area Start
import { Box, Modal, Typography, withStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AcceptRejectCardItem from "./AcceptRejectCardItem";
// Customizable Area End

// Customizable Area Start
export interface myProps {
	classes?: any;
	open: boolean;
	onClose: any;
}
export interface Data {
	name: string;
	leaveType: string;
	days: number;
	reason: string;
}
// Customizable Area End

// Customizable Area Start
export interface Props {}
// Customizable Area End

// Customizable Area Start
const Styles: any = {
	boxStyle: {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "900px",
		background: "white",
		padding: "30px 40px",
		borderRadius: "6px",
		height: "550px",
		overflowX: "scroll",
	},
	headerContent: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
};
const data: Data[] = [
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
	{
		name: "Shreya Shetty",
		leaveType: "Mandatory leave",
		days: 1,
		reason: "sick leave",
	},
];
// Customizable Area End

// Customizable Area Start

class AcceptRejectPopup extends React.Component<myProps> {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Modal
					open={this.props.open}
					onClose={this.props.onClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<Box className={classes.boxStyle}>
						<Box className={classes.headerContent}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-around",
									alignItems: "center",
								}}>
								<Typography
									style={{
										fontSize: "27px",
										color: "black",
										marginRight: "20px",
									}}
									variant="h6"
									component="h6">
									Pending Approval
								</Typography>
								<Typography component="span">(Total - 23)</Typography>
							</div>
							<CloseIcon onClick={this.props.onClose} />
						</Box>
						{data.map((item, index) => (
							<div key={index}>
								<AcceptRejectCardItem item={item} index={index} />
							</div>
						))}
					</Box>
				</Modal>
			</div>
		);
	}
}
export default withStyles(Styles)(AcceptRejectPopup);
// Customizable Area End
