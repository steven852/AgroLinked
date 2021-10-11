<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'AgroLinked') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link href="{{ asset('css/mystyle.css') }}" rel="stylesheet">
</head>
<body>

  <header>
    <div>
     <nav class="navbar navbar-expand-sm navbar-dark bg-black fixed-top">
       <div class="container-fluid">
         <div class="navbar-header">
           <a href ="/" class="navbar-brand">AgroLinked</a>
         </div>

         <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
             <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse navbar-left" id="navbarMenu">
           <ul class="nav navbar-nav me-auto">
             <li class="nav-item">
               <a href="/about" class="nav-link">About</a>
             </li>
             <li class="nav-item">
               <a hre ="/product" class="nav-link">Product</a>
             </li>
             <li class="nav-item">
               <a href="/contact" class="nav-link">Contact Us</a>
             </li>
           </ul>

           <ul class="nav navbar-nav">
             <li>
               <div class="btn-nav">
                 <a class="btn btn-primary btn-small navbar-btn me-4" href="/login">Log In</a>
               </div>
             </li>
             <li>
               <div class="btn-nav">
                 <a class="btn btn-primary btn-small navbar-btn me-4" href="/register">Register</a>
               </div>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   </div>

  <main class="main">
      @yield('content')
  </main>

 <div class="container-fullwidth">
  <footer class="text-center text-lg-start text-dark">
    <section class="d-flex justify-content-between p-4 text-white bg-success">
      <div class="d-none d-lg-block">
        <b>Find us on our social networks:</b>
      </div>
      <div>
        <a href="#" class="text-white me-4">
          <span class="fab fa-facebook-f"></span>
        </a>
        <a href="#" class="text-white me-4">
          <span class="fab fa-twitter"></span>
        </a>
        <a href="#" class="text-white me-4">
          <span class="fab fa-google"></span>
        </a>
        <a href="#" class="text-white me-4">
          <span class="fab fa-instagram"></span>
        </a>
        <a href="#" class="text-white me-4">
          <span class="fab fa-linkedin"></span>
        </a>
        <a href="#" class="text-white me-4">
          <span class="fab fa-github"></span>
        </a>
      </div>
    </section>

    <section class="bg-secondary">
      <div class="container text-center text-md-start">

        <div class="row">

          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">AgroLinked</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto"/>
            <p>
              Do it better when you are Agro-Linked.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto"/>

            <p>
              <a href="#!" class="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" class="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" class="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Bootstrap Angular</a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto"/>
            <p>
              <a href="#!" class="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Help</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto"/>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>

    <section class="p-1 text-white text-center bg-dark">
      <p>© 2021 Copyright: <a href="#">AgroLinked</a></p>
    </section>
  </footer>
</div>

</body>
</html>
