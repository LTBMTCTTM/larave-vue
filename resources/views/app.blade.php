<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}" />

    <title>Senbet</title>

    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
    <link rel="canonical" href="">
    <link rel="apple-touch-icon" href="" sizes="180x180">
    <meta name="theme-color" content="#000000">
    <link href="{{ mix('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ mix('css/all.css') }}" rel="stylesheet">
    <link href="{{ mix('css/owl.carousel.min.css') }}" rel="stylesheet">
</head>

<body>
<div id="app"></div>

<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
<script src="{{ mix('dist/jquery.min.js') }}"></script>
<script src="{{ mix('dist/bootstrap.bundle.min.js') }}"></script>
<script src="{{ mix('dist/owl.carousel.min.js') }}"></script>
<script src="{{ mix('dist/custom.js') }}"></script>


</body>

</html>
