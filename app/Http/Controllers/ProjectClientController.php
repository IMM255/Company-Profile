<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Models\ProjectClient;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $client = ProjectClient::all()->map(function ($item){
            $item->avatar_url = $item->avatar ? Storage::url($item->avatar) : null;
            $item->logo_url = $item->logo ? Storage::url($item->logo) : null;
            return $item;
        });
        return Inertia::render('Admin/Clients/Index',['items' => $client]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Clients/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();
            if($request->hasFile("avatar")){
                $avatar_url = $request->file("avatar")->store("avatars","public");
                $validated["avatar"] = $avatar_url;
            }
            if($request->hasFile("logo")){
                $logo_url = $request->file("logo")->store("logos","public");
                $validated["logo"] = $logo_url;
            }
            ProjectClient::create($validated);
        });
        return redirect()->route("admin.clients.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(ProjectClient $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProjectClient $client)
    {

        return Inertia::render('Admin/Clients/Edit',["items" => $client]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, ProjectClient $client)
    {
        DB::transaction(function () use ($request, $client) {
            $validated = $request->validated();
            if($request->hasFile("avatar")){
                $avatar_url = $request->file("avatar")->store("avatars","public");
                $validated["avatar"] = $avatar_url;
            }
            if($request->hasFile("logo")){
                $logo_url = $request->file("logo")->store("logos","public");
                $validated["logo"] = $logo_url;
            }
            $client->update($validated);
        });
        return redirect()->route("admin.clients.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectClient $client)
    {
        DB::transaction(function() use ($client){
            $client->delete();
        });
    }
}
