@component('mail::message')
# Introduction

The body of your message.

Here is the data i passed to the markdown: {{ $data }}

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
