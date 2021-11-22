import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Typography from '@mui/material/Typography';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';


const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

class Calendars extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      date: null,
      time: "08:00",
      data: {
        title: "",
        place: "",
        details: "",
      }
    };

    this.handleChange = (e) => {
      const {name, value} = e.target;
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          [name]: value,
        },
      }));
    };

    this.handleModalOpen = (e) => {
      this.setState({
        modalOpen: true,
        date: e.dateStr,
      });
    };
    this.handleModalClose = () => {
      this.setState({
        modalOpen: false,
      });
    };

    this.handleEvents = (info, successCallback, failureCallback) =>{
      $.ajax({
        url: '/schedules',
        dataType: 'JSON',
        method: 'GET',
        cache: false, // if true when you visit another site and hit the browser back button the calendar does not reload
        success: function(data) {
          successCallback(data);
        }
      });
    }

    this.handleChangeDate = (newValue) => {
      this.setState({
        date: newValue,
      });
    };

    this.handleChangeTime = (e) => {
      this.setState({
        time: e.target.value,
      });
    };

    this.handleCreate = () => {
      this.setState({
        modalOpen: false,
      });
      $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "POST",
        url: "/schedules",
        //dataType: "JSON", //for some reason I do not send json so will get an error callback
        data: {
          date: this.state.date + " " + this.state.time + ":00", // Add the seconds for the database validation
          title: this.state.data.title,
          place: this.state.data.place,
          details: this.state.data.details,
        },
        success: () => {
           this.calendarRef.current.getApi().refetchEvents();
        },
        error: () => {},
      });
    };
  }

  calendarRef = React.createRef();

  render(){
    return (
      <div>
        <FullCalendar
          plugins={[interactionPlugin, dayGridPlugin, bootstrapPlugin]}
          ref={this.calendarRef}
          initialView="dayGridMonth"
          themeSystem="bootstrap"
          events={this.handleEvents}
          dateClick={this.handleModalOpen}
        />
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className={"containerC"}>
            <Box className={"dateC"}>
              <Typography className={"mb-3"} variant="h6" component="h2">
                New Event
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  sx={{ mt: 2}}
                  label="Choose Date"
                  inputFormat="dd/MM/yyyy"
                  value={this.state.date}
                  onChange={this.handleChangeDate}
                  renderInput={(params) => <TextField sx={{ width: 150 }} {...params} />}
                />
                <TextField
                  id="time"
                  label="Choose Time"
                  type="time"
                  defaultValue={this.state.time}
                  onChange={this.handleChangeTime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ width: 150 }}
                />
                </Stack>
              </LocalizationProvider>
            </Box>

            <Box className={"dataC d-flex flex-column mt-4"}>
              <TextField
                className={"ms-2 mt-2"}
                label="Title"
                name="title"
                required
                rows={4}
                size="small"
                fullWidth
                value={this.state.data.title}
                onChange={this.handleChange}
              />
              <TextField
                className={"ms-2 mt-2"}
                label="Place"
                name="place"
                required
                rows={4}
                size="small"
                fullWidth
                value={this.state.data.place}
                onChange={this.handleChange}
              />
              <TextField
                className={"ms-2 mt-2"}
                label="Details"
                name="details"
                multiline
                rows={4}
                fullWidth
                value={this.state.data.details}
                onChange={this.handleChange}
              />
            </Box>
            <Box className={"buttonsC d-flex"}>
              <Button
                type="button"
                variant="contained"
                className={"bg-primary ms-2 mt-2"}
                onClick={this.handleCreate}
              >
                Create
              </Button>
              <Button
                type="button"
                variant="contained"
                className={"bg-secondary ms-2 mt-2"}
                onClick={this.handleModalClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default Calendars;
