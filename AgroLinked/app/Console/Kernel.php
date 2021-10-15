<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;
use App\Console\Commands\NotifyUsers;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        NotifyUsers::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {

      // date_default_timezone_set("Europe/Athens");
      // $schedule->call(function () {
      //
      //   $date = date("Y/m/d");
      //   $time = date("h:i");
      //   $s = DB::select('select date from schedules where id = 142');
      //   print_r($s);
      //
      //
      //   echo($date);
      //   echo($time);
      //
      // })->everyMinute();

      $schedule->command('send:notification')
         ->everyDay()
         ->sendOutputTo('TestQuery.log');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
