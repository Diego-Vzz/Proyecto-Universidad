<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public static function JsonResponse($mensaje, $data, $status = 200)
    {
        return response()->json([
            'message' => $mensaje,
            'variables' => $data
        ], $status);
    }
}
