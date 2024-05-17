<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UnitItem extends Model
{
    use HasFactory, HasUuids;

    const UNIT_STATUS = ['Bagus', 'Rusak', 'Perlu Perbaikan', 'Dalam Perbaikan'];

    protected $guarded = [];

    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }
}
