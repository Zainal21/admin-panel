<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoryItem extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'categories';

    protected $guarded = [];

    public function items()
    {
        return $this->hasMany(Item::class, 'category_id', 'id');
    }
}
