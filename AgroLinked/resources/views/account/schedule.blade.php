@extends('layouts.main')

@section('content')

<div class="">

  <form id="showEventForm" action="/schedules/{{ $schedule->id }}" method="POST">
    @csrf
    @method('DELETE')

    <h4>Date: {{ $schedule->date  }}</h4>
    <h4>Title: {{ $schedule->title }} </h4>

    <a href="/schedules">
      <button type="button" class="btn btn-secondary">Cancel</button>
    </a>
    <a href="/schedules/{{ $schedule->id }}/edit">
      <button id="editButton" type="button" class="btn btn-primary">Edit</button>
    </a>
    <button id="deleteButton" type="submit" class="btn btn-danger">Delete</button>
  </form>

</div>

@endsection
