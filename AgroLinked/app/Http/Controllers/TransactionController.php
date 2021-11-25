<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }

  public function index(Request $request)
  {
    if($request->ajax())
    {
      $data = Transaction::where("user_id", auth()->id())->latest()->get()->take(5);
        return response()->json($data);
    }

    return view('account.home');
  }

   public function create()
  {
    return view('account.home');
  }

  public function store(Request $request)
  {
    $data = request()->validate([
      'date' => ['required', 'date'],
      'amount' => ['required', 'numeric'],
      'beneficiary' => ['required', 'string'],
      'type' => ['required', 'string'],
      'details' => '',
    ]);

    auth()->user()->transactions()->create($data);
    return view('account.home');
  }
}
