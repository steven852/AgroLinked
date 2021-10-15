@component('mail::message')
# Event Reminder

Your event with title: {{ $data->title }}, is due to today.


Thanks,<br>
{{ config('app.name') }}
@endcomponent
