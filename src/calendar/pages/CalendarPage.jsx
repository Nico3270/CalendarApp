import { Navbar } from "../components/Navbar";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { addHours, format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import esEs from 'date-fns/locale/es'
import { getMessagesEs } from "../../helpers/getMessages";

const locales = {
    'es': esEs,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const events = [{
    title: "Cumpleaños del jefe",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: { id: "123", nombre: "Nicolas" }
}];

const eventStyleGetter = (event, start, end, isSelected) => {
    console.log([event, start, end, isSelected]);
    const style = { backgroundColor: "#347CF7", borderRadious: "0px", opacity: 0.8, color: "white" };
    return {style}

}

export const CalendarPage = () => {
    return (
        <>
            <Navbar />
            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "80vh" }}
                messages={getMessagesEs()}
                eventPropGetter={eventStyleGetter}
            />

        </>
    )
}