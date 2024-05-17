<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // Create a test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Seed categories table
        $categories = [
            ['id' => Str::uuid(), 'name' => 'meja'],
            ['id' => Str::uuid(), 'name' => 'kursi']
        ];
        foreach ($categories as $category) {
            DB::table('categories')->insert($category);
        }

        // Seed items table
        $items = [
            ['id' => Str::uuid(), 'name' => 'Meja Belajar', 'brand' => 'IKEA', 'category_id' => $categories[0]['id']],
            ['id' => Str::uuid(), 'name' => 'Kursi Kantor', 'brand' => 'Informa', 'category_id' => $categories[1]['id']]
        ];
        foreach ($items as $item) {
            DB::table('items')->insert($item);
        }

        // Seed units table
        $units = [
            ['id' => Str::uuid(), 'item_id' => $items[0]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'bagus'],
            ['id' => Str::uuid(), 'item_id' => $items[0]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'rusak'],
            ['id' => Str::uuid(), 'item_id' => $items[1]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'bagus'],
            ['id' => Str::uuid(), 'item_id' => $items[1]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'perlu perbaikan'],
            ['id' => Str::uuid(), 'item_id' => $items[0]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'bagus'],
            ['id' => Str::uuid(), 'item_id' => $items[0]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'rusak'],
            ['id' => Str::uuid(), 'item_id' => $items[1]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'bagus'],
            ['id' => Str::uuid(), 'item_id' => $items[1]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'perlu perbaikan'],
            ['id' => Str::uuid(), 'item_id' => $items[1]['id'], 'code' => 'UNIT-' . date('Ymd') . '-' . rand(0, 1000), 'status' => 'perlu perbaikan'],
        ];
        foreach ($units as $unit) {
            DB::table('unit_items')->insert($unit);
        }
    }
}
