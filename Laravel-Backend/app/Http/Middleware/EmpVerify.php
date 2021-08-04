<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EmpVerify
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (strtolower($request->session()->get('type')) == 'emp') {
            return $next($request);
        } else {
            return response()->json("Not found!", 404);
        }
    }
}
