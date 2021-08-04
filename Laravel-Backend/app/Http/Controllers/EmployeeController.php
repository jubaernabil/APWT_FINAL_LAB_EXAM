<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    function list()
    {
        $list = Employee::get();
        return response()->json($list, 200);
    }

    function create(Request $req)
    {
        $employee  = new Employee;
        $employee->name = $req->name;
        $employee->user_name = $req->user_name;
        $employee->password = $req->password;
        $employee->company_name = $req->company_name;
        $employee->contact = $req->contact;
        $employee->save();
        return response()->json($employee, 200);
    }

    public function edit($id)
    {
        $employee  = Employee::find($id);
        return response()->json($employee, 200);
    }

    public function editUser(Request $req, $id)
    {
        $employee  = Employee::find($id);
        $employee->name = $req->name;
        $employee->user_name = $req->user_name;
        $employee->password = $req->password;
        $employee->company_name = $req->company_name;
        $employee->contact = $req->contact;
        $employee->save();
        return response()->json($employee, 200);
    }

    public function delete($id)
    {
        $employee  = Employee::find($id);
        $employee->forceDelete();
        return response(200);
    }
}
