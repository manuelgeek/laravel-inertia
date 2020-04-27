<?php

namespace App\Http\Controllers;

use App\Helpers\FileUploads;
use App\Http\Requests\AvatarRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    public function avatar(AvatarRequest $request)
    {
        Log::info($request->all());
        $file = $request->photo;
        $folder = '/upload/avatar/';
        $user = Auth::user();
        $user->avatar =  (new FileUploads())->updateImage($file, $user->avatar, $folder);
        $user->save();
        return back()->with('success', 'Avatar Updated');
    }
}
