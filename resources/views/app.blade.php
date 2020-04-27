<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    @routes
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" >
    <link href="{{ asset('/css/nprogress.css') }}" rel="stylesheet" >
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body>
<div class="min-h-full bg-gray-100">
    <div class="container mx-auto px-4 ">
        <div class="flex justify-center content-center">
            @inertia
        </div>
    </div>
</div>
</body>
</html>

