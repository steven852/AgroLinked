<?php

use Illuminate\Support\Facades\Route;
use App\Mail\NotifyEventUserMail;
use App\Mail\WelcomeNewUserMail;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Auth::guest()) {
        return view('reactViews.welcome'); // Guests
    } else {
        return view('account.home'); // Users
    }
});

Route::get('/email', function () {
    //Mail::to('steven.tononidis@gmail.com')->send(new WelcomeNewUserMail());
    //return new NotifyEventUserMail(); // Users
});



Route::get('/about', function () {
    return view('reactViews.welcome');
});

Route::get('/product', function () {
    return view('menu.product');
});

Route::get('/contact', function () {
    return view('menu.contact');
});



Auth::routes();


Route::get('/home', 'HomeController@index');

Route::resource('schedules', 'ScheduleController');
