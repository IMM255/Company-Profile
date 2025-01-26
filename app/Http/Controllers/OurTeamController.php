<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Models\OurTeam;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class OurTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $team = OurTeam::all()->map(function($item){
            $item->avatar_url = $item->avatar ? Storage::url($item->avatar) : null;
            return $item;
        });
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
    public function store(StoreTeamRequest $request)
    {
        DB::transaction(function() use ($request){
            $validated = $request->validated();
            if($request->hasFile('avatar')){
                $avatar_url = $request->file('avatar')->store('avatars','public');
                $validated['avatar'] = $avatar_url;
            }
            OurTeam::create($validated);
        });
        return redirect()->route('admin.teams.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(OurTeam $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OurTeam $team)
    {
        return Inertia::render('Admin/Teams/Edit',["items" => $team]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamRequest $request, OurTeam $team)
    {
        DB::transaction(function() use ($request, $team){
            $validated = $request->validated();
            if($request->hasFile('avatar')){
                $avatar_url = $request->file('avatar')->store('avatars','public');
                $validated['avatar'] = $avatar_url;
            }
            $team->update($validated);
        });
        return redirect()->route('admin.teams.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OurTeam $team)
    {
        DB::transaction(function() use ($team) {
            $team->delete();
        });
        return redirect()->route('admin.teams.index');
    }
}
