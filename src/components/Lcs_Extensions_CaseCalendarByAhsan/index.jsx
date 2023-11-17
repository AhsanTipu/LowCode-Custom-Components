/* eslint-disable no-nested-ternary */
import { Fragment, useEffect, useState } from 'react';
import { DateTimeDisplay, Card, CardHeader, CardContent, Flex } from '@pega/cosmos-react-core';
import PropTypes from 'prop-types';

// includes in bundle
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import StyledLcsExtensionsCaseCalendarByAhsanWrapper from './styles';
import { text } from '@storybook/addon-knobs';

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file

const VIEW_TYPE = {
  DAY: 'timeGridDay',
  WEEK: 'timeGrdiWeek',
  MONTH: 'dayGridMonth'
};
export default function LcsExtensionsCaseCalendarByAhsan(props) {
  const [events, setEvents] = useState([]);
  let dateInfo = localStorage.getItem('fullcalendar');
  if (dateInfo) {
    dateInfo = JSON.parse(dateInfo);
    if (dateInfo.view.type == VIEW_TYPE.MONTH) {
      const middle = new Date(
        new Date(dateInfo.end) - (new Date(dateInfo.end) - new Date(dateInfo.start)) / 2
      );
      dateInfo.startStr = `${middle.toISOString().substring(0, 7)}-01}`;
    }
  }
  const { getPConnect, title } = props;

  const getDefaultView = () => {
    if (dateInfo !== null && dateInfo.view && dateInfo.view.type) {
      return dateInfo.view.type;
    }
    let defaultView;
    let defaultViewMode;

    switch (defaultViewMode) {
      case 'Monthly':
        defaultView = VIEW_TYPE.MONTH;
        break;
      case 'Weekly':
        defaultView = VIEW_TYPE.WEEK;
        break;
      case 'Daily':
        defaultView = VIEW_TYPE.DAY;
        break;
    }
    return defaultView;
  };
  const loadEvents = () => {
    PCore.getDataPageUtils()
      .getDataAsync('D_AppointmentList', getPConnect().getContextName())
      .then(response => {
        console.log(response);
        if (response.data !== null) {
          const tmpevents = [];
          response.data.forEach(item => {
            tmpevents.push({
              id: item.pyGUID,
              title: item.EventName,
              start: new Date(`${item.SessionStartDate}T${item.StartTime}`),
              end: new Date(
                `${item.SessionEndDate ? item.SessionEndDate : item.SessionStartDate}T${
                  item.StartTime
                }`
              ),
              item
            });
          });
          setEvents(tmpevents);
        }
      });
  };
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <StyledLcsExtensionsCaseCalendarByAhsanWrapper>
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardContent>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={events}
            defaultView={getDefaultView()}
          />
        </CardContent>
      </Card>
    </StyledLcsExtensionsCaseCalendarByAhsanWrapper>
  );
}

LcsExtensionsCaseCalendarByAhsan.defaultProps = {
  title: text('title', 'Calendar By Ahsan')
};

LcsExtensionsCaseCalendarByAhsan.propTypes = {
  getPConnect: PropTypes.func.isRequired,
  title: PropTypes.string
};
