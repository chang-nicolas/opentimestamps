<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        @livewireStyles

        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
        
        <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
        rel="stylesheet"
        type="text/css"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic"
        rel="stylesheet"
        type="text/css"
        />
        
        <link
        rel="stylesheet"
        href="{{ asset('css/fontawesome-free-5.8.1-web/css/all.min.css') }}"
        type="text/css"
        />
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" type="text/css" />

<link rel="stylesheet" href="{{asset('css/animate.min.css')}}" type="text/css" />

<link rel="stylesheet" href="{{asset('css/main.css')}}" type="text/css" />

<meta name="msapplication-TileColor" content="#da532c" />
<meta name="theme-color" content="#ffffff" />

<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>OpenTimestamps Tutorial</title>
<meta property="og:title" content="OpenTimestamps Tutorial" />

<meta
  name="description"
  content="The OpenTimestamps protocol step-by-step: calculation of a data file hash value, submission to calendars, and handling of the ots receipt / proof (loading, displaying, upgrading, and verifyng)."
/>
<meta
  property="og:description"
  content="The OpenTimestamps protocol step-by-step: calculation of a data file hash value, submission to calendars, and handling of the ots receipt / proof (loading, displaying, upgrading, and verifyng)."
/>

<meta property="og:image" content="https://dgi.io/img/logo/dgi-logo.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@DigitalGoldInst" />
<meta name="twitter:site" content="@DigitalGoldInst" />

<meta property="og:site_name" content="Digital Gold Institute" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://dgi.io/ots-tutorial/" />
<meta name="author" content="Digital Gold Institute" />
<!-- <link rel="canonical" href="https://dgi.io/ots-tutorial/"> -->

<meta property="og:locale" content="en_US" />

<!-- Google Analytics -->
<script>
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "ga"
  );

  ga("create", "UA-126683188-2", "auto");
  ga("send", "pageview", {
    page: "/ots-tutorial/",
    title: "OpenTimestamps Tutorial",
  });
</script>
<!-- End Google Analytics -->
    </head>

      <!-- Google Tag Manager (noscript) -->
  <noscript
    ><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-WR2N34H"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe
  ></noscript>
  <!-- End Google Tag Manager (noscript) -->

    <body class="font-sans antialiased" id="page-top">
        <x-jet-banner />

        <div class="min-h-screen bg-gray-100">
            @livewire('navigation-menu')

            <!-- Page Heading -->
            @if (isset($header))
                <!-- <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {{ $header }}
                    </div>
                </header> -->
            @endif

            <!-- Page Content -->
            <main>
                {{ $slot }}
            </main>
        </div>

        @stack('modals')

        @livewireScripts
    </body>
    <script src="{{asset('js/ots/javascripts/application.js')}}"></script>
    <script src="{{asset('js/ots/javascripts/vendor/moment.min.js')}}"></script>
    <script src="{{asset('js/ots/javascripts/vendor/moment-timezone-with-data-2012-2022.min.js')}}"></script>
    <script src="{{asset('js/ots/javascripts/vendor/opentimestamps.min.js')}}"></script>
    <script src="{{asset('js/ots/javascripts/crypto-js/crypto-js.js')}}"></script>
    <script src="{{asset('js/ots/javascripts/index.js')}}"></script>

    <script src="{{asset('js/ots/javascripts/tools/tools.js')}}"></script>
    <script src="{{asset('js/ots/javascripts/tools/utils.js')}}"></script>

    <!-- jQuery -->
    <script src="{{asset('js/js/jquery.js')}}"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{{asset('js/js/bootstrap.min.js')}}"></script>

    <!-- Plugin JavaScript -->
    <script src="{{asset('js/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('js/js/jquery.fittext.js')}}"></script>
    <script src="{{asset('js/js/wow.min.js')}}"></script>

    <!-- Custom Theme JavaScript -->
    <script src="{{asset('js/js/creative.js')}}"></script>
</html>
