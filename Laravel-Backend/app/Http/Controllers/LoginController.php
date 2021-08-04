<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class LoginController extends Controller
{
    public function login(Request $req)
    {
        $employee = Employee::where('user_name', $req->user_name)
            ->where('password', $req->password)
            ->get();
        if ($req->user_name == 'admin' && $req->password == 'admin') {
            $req->session()->put('type', "admin");
            return response()->json(200);
        } else if (count($employee) > 0) {
            $req->session()->put('type', "emp");
            return response()->json(200);
        } else {
            return response()->json("User not found!", 404);
        }
    }

    public function logout(Request $req)
    {
        $req->session()->flush();
        return response()->json(200);
    }
}
