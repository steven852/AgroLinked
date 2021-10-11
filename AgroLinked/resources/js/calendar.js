import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

document.addEventListener('DOMContentLoaded', function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
  });

  var calendar = new Calendar(document.getElementById('calendar'), {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    customButtons: {
      addEventButton: {
        text: 'Add new event',
        click: function() {
          $('#modalEvent').modal('show');
          $('#addEventForm').submit(function(e){
            e.preventDefault();
            e.stopImmediatePropagation(); // ??? https://stackoverflow.com/questions/33936696/form-submitting-twice-via-ajax-post fixes the double ajax post when page is not refreshed
            $.ajax({
              method: "POST",
              url: "/schedules",
              //dataType: "JSON", //for some reason I do not send json so will get an error callback
              data: {
                date:$('#date').val(),
                title:$('#title').val(),
              },
              success: function(){
                document.getElementById("addEventForm").reset(); // Resets form inputs. Look for a better solution later
                $('#modalEvent').modal('hide');
                calendar.refetchEvents();
              },
              error: function(){},
            });
          });
        }
      },
    },

    headerToolbar: {
      left: 'prev,next today addEventButton',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },

    themeSystem: 'bootstrap',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    eventStartEditable: false, // if true (default) allows to drag events to other dates

    events: function(info, successCallback, failureCallback) {
      $.ajax({
        url: '/schedules',
        dataType: 'JSON',
        method: 'GET',
        cache: false, // if true when you visit another site and hit the browser back button the calendar does not reload
        success: function(data) {
          successCallback(data);
        }
      });
    },

    eventClick: function(info){

      // TODO: Change cursor to a hand when hovering an event
      window.location = '/schedules/'+info.event.id;

      //I FAILED TO DO IT WITH A MODAL, WILL USE THE LARAVEL CONVENSIONS
      //$('#modalEdit').modal('show');
     //  $('#editEventForm').submit(function (e){
     //    e.preventDefault();
     //  //  e.stopImmediatePropagation();
     //    $.ajax({
     //      method: "PUT",
     //      url: "/schedules",
     //      success: function(data) {
     //        $('#modalEdit').modal('hide');
     //        calendar.refetchEvents();
     //        console.log("makiss"+info.event.id)
     //      },
     //      error: function(data) {
     //        console.log("makis"+info.event.id)
     //        // TODO: IDK
     //      },
     //    });
     //
     // });

    },

    dateClick: function(info) {
      // TODO: Refactor add event button here
    },


  });
  calendar.render();

});
