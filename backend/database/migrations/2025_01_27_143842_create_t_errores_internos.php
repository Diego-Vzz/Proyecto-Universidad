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
        Schema::create('t_errores_internos', function (Blueprint $table) {
            $table->id();
            $table->string('id_ticket');
            $table->integer('codigo_error');
            $table->integer('id_usuario')->nullable();
            $table->text('detalle_error');
            $table->string('controlador');
            $table->string('funcion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('t_errores_internos');
    }
};
