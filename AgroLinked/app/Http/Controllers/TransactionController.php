<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransactionController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }

  public function index()
  {
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
      'amount' => ['required', 'float'],
      'beneficiary' => ['required', 'string'],
      'type' => ['required', 'string'],
      'details' => '',
    ]);

    auth()->user()->transactions()->create($data);
    return view('account.home');
  }
}
