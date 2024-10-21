<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'transactionValue',
        'transactionType',
        'category',
        'descricao',
        'updated_at',
    ];

    protected $table = 'transacoes';
}
