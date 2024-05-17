<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Item extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'items';

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(CategoryItem::class, 'category_id', 'id');
    }

    public function units()
    {
        return $this->hasMany(UnitItem::class);
    }

}
