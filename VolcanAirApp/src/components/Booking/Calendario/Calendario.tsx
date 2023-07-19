import { Calendar, LocaleConfig } from "react-native-calendars";
import React, { Dispatch, useState } from "react";
import { Flight } from "../../../Schemas/Flight";

type CalendarProps = {
    dataFlight: Flight;
    setDataFlight: Dispatch<Flight>;
}

const Calendario = ({dataFlight, setDataFlight}: CalendarProps) => {
    const [selected, setSelected] = useState('');

    return (
        <Calendar
            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#000000',
                dayTextColor: '#000000',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'blue',
                monthTextColor: '#000000',
                indicatorColor: '#000000',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
            }}
            onDayPress={day => {
                setSelected(day.dateString);
                setDataFlight({
                    ...dataFlight,
                    date: day.dateString    
                });

            }}
            markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'Blue' }
            }}
        />
    );
};

export default Calendario;