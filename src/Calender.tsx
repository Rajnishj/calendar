/** @format */

import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
	DateClickArg,
} from "@fullcalendar/interaction";
import ReactDOM from "react-dom";
import { events } from "./data";
// import { INITIAL_EVENTS, createEventId } from "./event-utils";
import "./main.css";

export default class CalenderApp extends React.Component {
	state = {
		weekendsVisible: true,
		currentEvents: [],
	};
	handleDateClick = (e: DateClickArg) => {
		console.log(e);
	};

	render() {
		const renderEventContent = (eventInfo: any) => (
			<>
				<div>
					<div
						className={
							eventInfo.event.extendedProps.staus === "Absent"
								? "absent title"
								: eventInfo.event.extendedProps.status === "Present"
								? "present title"
								: eventInfo.event.extendedProps.status === "Official Duty"
								? "officialDuty title"
								: "workFromHome title"
						}>
						<div className="">
							<div className="test2">
								<p
									className={
										eventInfo.event.extendedProps.pending === true
											? "circle"
											: "noClass"
									}></p>

								<p style={{ margin: 0 }}>
									{eventInfo.event.extendedProps.status}
								</p>
							</div>
							{eventInfo.event.extendedProps.pending === true ? (
								<>
									<span className="pending-triangle"></span>
									<p className="test">
										<span>Pending for approval</span>
									</p>
								</>
							) : null}
						</div>
					</div>
				</div>
			</>
		);

		return (
			<div className="demo-app">
				<div className="demo-app-main">
					<FullCalendar
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
						headerToolbar={{
							left: "prev,title,myCustomButton",
						}}
						initialView="dayGridMonth"
						selectMirror={true}
						dayMaxEvents={true}
						weekends={this.state.weekendsVisible}
						events={events}
						eventContent={renderEventContent}
						datesSet={(dateInfo) => {
							console.log(dateInfo.start); //start of the range the calendar date
							console.log(dateInfo.end); //end of the range the calendar date
						}}
					/>
				</div>
			</div>
		);
	}
}
