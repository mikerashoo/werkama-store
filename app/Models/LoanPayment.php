<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanPayment extends Model
{
    use HasFactory;

    protected $table = "loan_payments";

    public function loan()
    {
        return $this->belongsTo('App\Models\Loan', 'loan_id');
    }
}
