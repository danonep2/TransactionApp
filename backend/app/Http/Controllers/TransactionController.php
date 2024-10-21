<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transacao;

class TransactionController extends Controller
{
    public function show(){
        return Transacao::all();
    }

    public function store(Request $request){
        $transaction = new Transacao;
        $transaction->title = $request->title;
        $transaction->transactionType = $request->transactionType;
        $transaction->category = $request->category;
        $transaction->descricao = $request->descricao;

        $value = $request->transactionValue;

        if($request->transactionType == 'despesa' && $value > 0){
            $value = $value * -1;
        }

        if($request->transactionType == 'receita' && $value < 0){
            $value = $value * -1;
        }

        $transaction->transactionValue = $value;

        $transaction->save();

        return $transaction;
    }

    public function update($id ,Request $request){
        $transaction = Transacao::find($id);

        if(!$transaction){
            return response()->json(['error' => 'Transação não encontrada'], 404);
        }

        if($transaction->transactionType !== $request->transactionType){
            $request->transactionValue = $request->transactionValue * -1;
        }

        $transaction->title = $request->title;
        $transaction->transactionValue = $request->transactionValue;
        $transaction->transactionType = $request->transactionType;
        $transaction->category = $request->category;
        $transaction->descricao = $request->descricao;

        $transaction->updated_at = now();

        $transaction->save();

        return response()->json(['message' => 'Trasação atualizada com sucesso'], 200);
    }

    public function delete($id){
        $transaction = Transacao::find($id);
        $transaction->delete();

        return response()->json(['message' => 'Transação deletada com sucesso'], 200);
    }
}
