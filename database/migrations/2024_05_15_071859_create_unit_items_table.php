<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('unit_items', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('item_id')->references('id')->on('items')->onUpdate('restrict')->onDelete('cascade');
            $table->string('code', 50);
            $table->enum('status', ['Bagus', 'Rusak', 'Perlu Perbaikan', 'Dalam Perbaikan']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('unit_items');
    }
};
