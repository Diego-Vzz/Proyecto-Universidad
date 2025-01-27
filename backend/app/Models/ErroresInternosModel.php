<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ErroresInternosModel extends Model
{
    use HasFactory;

    protected $table = 't_errores_internos';

    protected $fillable = [
        'id_ticket',
        'codigo_error',
        'id_usuario',
        'detalle_error',
        'controlador',
        'funcion',
    ];


    /**
     * Establece el valor del atributo id_ticket con un UUID.
     *
     * @param string $value
     * @return void
     */
    public function setIdTicketAttribute($value)
    {
        $this->attributes['id_ticket'] = $value ?: Str::uuid();
    }
}
