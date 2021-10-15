<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
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

      $scheduledUsersData = Schedule::whereDate('date', '=', date("Y/m/d"))->get(['user_id', 'date', 'title', 'place', 'details']);
      $userEmail = User::whereIn('id', $scheduledUsersData->pluck('user_id'))->get('email');

      for ($i = 0; $i < $userEmail->count(); $i++){
        //Mail::to($userEmail[$i], new NotifyEventUserMail($scheduledUsersData[$i]));
        Mail::to($userEmail[$i])->send(new NotifyEventUserMail($scheduledUsersData[$i]));
      }
    }
}
