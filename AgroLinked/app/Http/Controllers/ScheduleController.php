<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\User;


class ScheduleController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
      $this->middleware('cors');
  }

  public function index(Request $request)
  {
     if($request->ajax())
    {

    $data = Schedule::where("user_id", auth()->id())->get();
      return response()->json($data);
     }

    return view('account.schedules');
  }

   public function create()
  {
    return view('account.schedules');
  }


  public function store(Request $request)
  {
    $data = request()->validate([
      'date' => ['required', 'date'],
      'title' => ['required', 'string'],
      'place' => '',
      'details' => '',
    ]);

    auth()->user()->schedules()->create($data);
    return view('account.schedules');
  }

  public function show(Schedule $schedule)
  {
    return view('account.schedule', compact('schedule'));
  }

  public function edit(Schedule $schedule)
  {
    return view('account.schedules');
  }

  public function update(Request $request, $id)
  {
    return view('account.schedules');
  }

  public function destroy(Schedule $schedule)
  {
    $schedule->delete();
    return view('account.schedules');
  }


}
