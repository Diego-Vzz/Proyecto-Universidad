<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserModel  extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 't_usuarios';

    /**
     * Los atributos que se pueden asignar masivamente.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        'email',
        'password',
        'usuario',
        'matricula',
        'consentimiento_datos',
        'fecha_nacimiento',
    ];

    /**
     * Los atributos que deben estar ocultos para arreglos.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Los atributos que deben ser convertidos a tipos nativos.
     *
     * @var array
     */
    protected $casts = [
        'consentimiento_datos' => 'boolean',
        'fecha_nacimiento' => 'date',
    ];

    /**
     * Establece la relación de contraseña encriptada.
     *
     * @param string $password
     * @return void
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }
}
