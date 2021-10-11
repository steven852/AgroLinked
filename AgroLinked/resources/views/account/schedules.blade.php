@extends('layouts.main')

@section('content')

<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->

<div id='app'></div>
<div id='calendar'></div>

<!-- Modal -->
<div class="modal fade" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="modalEventLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="modalEventLabel">New Event</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="addEventForm" action="/schedules" method="POST">
          @csrf

          <label for="date"><b>Date</b></label>
          <input type="datetime-local" name="date" required id="date">

          <label for="title"><b>Title</b></label>
          <input type="text" list="titles" name="title" id="title" required>
          <datalist id="titles">
            <option value="Watering">
            <option value="Sprinkling">
          </datalist>

          <label for="place"><b>Place</b></label>
          <input type="text" name="place" id="place">

          <label for="details"><b>Details</b></label>
          <input type="text" name="details" id="details">

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button id="applyBtn" type="submit" class="btn btn-primary" form="addEventForm">Apply</button>
      </div>
    </div>
  </div>
</div>

@endsection
