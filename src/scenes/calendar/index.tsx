import { useState } from 'react'

import '@fullcalendar/react/dist/vdom'
import FullCalendar, {
  formatDate,
  ViewComponentType,
  ViewProps
} from '@fullcalendar/react'
import dayGridPlugin, { DayGridView } from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'

import { tokens } from '../../theme'

import { Header } from '../../components'

type CalendarProps = {
  id: string
  title: string
  start: string
  end: string
  allDay: string
}

export const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState<CalendarProps[]>([])

  const handleDateClick = (selected: any) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.start,
        end: selected.end,
        allDay: selected.allDay
      })
    }
  }
  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full calendar Interative Page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          p="15px"
          borderRadius="4px"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography variant="h5">Event</Typography>
          <List>
            {currentEvents?.map((e) => (
              <ListItem
                key={e.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px'
                }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={
                    <Typography>
                      {formatDate(e.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events as any)}
            initialEvents={[
              { id: '1234', title: 'All-day event', date: '2022-12-12' },
              { id: '431', title: 'Timed event', date: '2022-12-16' }
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}
