<?php

namespace App\Http\Controllers;

use App\Models\ErroresInternosModel;
use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    private static function token($usuario): mixed
    {
        return $usuario->createToken('auth_token', ['*'], now()->addDays(7))->plainTextToken;
    }

    private static  function generarUuidNumerico()
    {

        $timestamp = microtime(true);

        $uniqueId = str_replace('.', '', $timestamp);

        $randomNumber = rand(1000, 9999);

        $uuidNumerico = $uniqueId . $randomNumber;

        return $uuidNumerico;
    }

    public static function fn_register(Request $request)
    {
        try {

            $user = UserModel::where('email', $request->input('email'))->first();

            if ($user) {
                return GeneralController::JsonResponse('El usuario ya existe', null, 599);
            }

            $user = UserModel::where('usuario', $request->input('usuario'))->first();

            if ($user) {
                return GeneralController::JsonResponse('El usuario ya existe', null, 599);
            }

            $user = UserModel::create([
                'nombre' => $request->input('nombre'),
                'apellido_paterno' => $request->input('apellido_paterno'),
                'apellido_materno' => $request->input('apellido_materno'),
                'email' => $request->input('email'),
                'password' => $request->input('password'),
                'rol' => $request->input('rol'),
                'usuario' => $request->input('usuario'),
                'matricula' => self::generarUuidNumerico(),
                'consentimiento_datos' => true,
                'fecha_nacimiento' => $request->input('fecha_nacimiento'),
            ]);

            $token = self::token($user);

            return GeneralController::JsonResponse('', [
                'usuario' => [
                    'id' => $user->id,
                    'matricula' => $user->matricula,
                    'usuario' => $user->usuario,
                ],
                'token' => $token
            ], 200);
        } catch (\Exception $e) {
            $codigo_error = 599;

            ErroresInternosModel::create([
                'id_ticket' => null,
                'codigo_error' => $codigo_error,
                'id_usuario' => null,
                'detalle_error' => $e->getMessage(),
                'controlador' => 'AuthController',
                'funcion' => 'fn_register',
            ]);

            return GeneralController::JsonResponse('Error interno', null, $codigo_error);
        }
    }

    public static function fn_login(Request $request)
    {
        try {

            $user = UserModel::where('email', $request->input('email'))->first();

            if (!$user || !Hash::check($request->input('password'), $user->password)) {
                return GeneralController::JsonResponse('Credenciales invalidas', null, 599);
            }

            $token = self::token($user);

            return GeneralController::JsonResponse('', [
                'usuario' => [
                    'id' => $user->id,
                    'matricula' => $user->matricula,
                    'usuario' => $user->usuario,
                ],
                'token' => $token
            ], 200);
        } catch (\Exception $e) {
            $codigo_error = 599;

            ErroresInternosModel::create([
                'id_ticket' => null,
                'codigo_error' => $codigo_error,
                'id_usuario' => null,
                'detalle_error' => $e->getMessage(),
                'controlador' => 'AuthController',
                'funcion' => 'fn_login',
            ]);

            return GeneralController::JsonResponse('Error interno', null, $codigo_error);
        }
    }
}
