<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TransactionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/transactions', [TransactionController::class, 'show']);
Route::post('/store', [TransactionController::class, 'store']);
Route::put('/update/{id}', [TransactionController::class, 'update']);
Route::delete('/delete/{id}', [TransactionController::class, 'delete']);


