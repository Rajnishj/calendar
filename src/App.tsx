/** @format */

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CalendarApi } from "@fullcalendar/react";
import CalenderApp from "./Calender";
import AcceptRejectPopup from "./Modal";
function App() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button onClick={() => setOpen(true)}>Open Modal</button>
			<CalenderApp />

			<AcceptRejectPopup open={open} onClose={() => setOpen(false)} />
		</>
	);
}

export default App;
