<?php

namespace App\Http\Controllers;

use App\Models\OurTeam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OurTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $team = OurTeam::orderByDesc('id')->paginate(10);
        return Inertia::render('Admin/Teams/Index',['items' => $team]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Teams/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(OurTeam $ourTeam)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OurTeam $ourTeam)
    {
        return Inertia::render('Admin/Teams/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OurTeam $ourTeam)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OurTeam $ourTeam)
    {
        //
    }
}
