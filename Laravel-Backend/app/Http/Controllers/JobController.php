<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    function list()
    {
        $list = Job::get();
        return response()->json($list, 200);
    }

    function create(Request $req)
    {
        $job  = new Job;
        $job->title = $req->title;
        $job->location = $req->location;
        $job->company_name = $req->company_name;
        $job->salary = $req->salary;
        $job->save();
        return response()->json($job, 200);
    }

    public function edit($id)
    {
        $job  = Job::find($id);
        return response()->json($job, 200);
    }

    public function editUser(Request $req, $id)
    {
        $job  = Job::find($id);
        $job->title = $req->title;
        $job->location = $req->location;
        $job->company_name = $req->company_name;
        $job->salary = $req->salary;
        $job->save();
        return response()->json($job, 200);
    }

    public function delete($id)
    {
        $job  = Job::find($id);
        $job->forceDelete();
        return response(200);
    }
}
