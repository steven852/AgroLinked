<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Schedule;
use App\Models\User;
use App\Mail\NotifyEventUserMail;


class NotifyUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:notification';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a notification to the user at a specific date';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

      $scheduledDate = Schedule::whereDate('date', '=', date("Y/m/d"))->get('user_id');
      $userEmail = User::whereIn('id', $scheduledDate)->get();

    //   echo($scheduledDate);
      // echo("\r\n \r\n");
      // echo($userEmail);
      // echo("\r\n \r\n");
      foreach ($userEmail as $email) {
        echo($email);
        echo("\r\n");
        // Mail::to($email, new NotifyEventUserMail());
      }
    }
}
