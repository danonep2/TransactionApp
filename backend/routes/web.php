<?php

use App\Models\Transacao;
use App\Http\Controllers\TransactionController;

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/teste', function () {
    $transacao = new Transacao;
    $transacao->title = 'Teste';
    $transacao->transactionValue = 1000;
    $transacao->transactionType = 'despeza';
    $transacao->category = 'teste';
    $transacao->save();

    return Transacao::all();
});
