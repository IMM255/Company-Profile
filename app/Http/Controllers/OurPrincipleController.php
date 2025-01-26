<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePrincipleRequest;
use App\Http\Requests\UpdatePrincipleRequest;
use App\Models\OurPrinciple;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class OurPrincipleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $principles = OurPrinciple::all()->map(function ($item) {
            $item->icon_url = $item->icon ? Storage::url($item->icon) : null;
            $item->thumbnail_url = $item->thumbnail ? Storage::url($item->thumbnail) : null;
            return $item;
        });
        return Inertia::render('Admin/Principles/Index',['items' => $principles]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Principles/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePrincipleRequest $request)
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();
            if($request->hasFile('icon')){
                $iconPath = $request->file('icon')->store('icons','public');
                $validated['icon'] = $iconPath;
            }
            if($request->hasFile('thumbnail')){
                $iconPath = $request->file('thumbnail')->store('thumbnails','public');
                $validated['thumbnail'] = $iconPath;
            }
            OurPrinciple::create($validated);
        });
        return redirect()->route('admin.principles.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(OurPrinciple $ourPrinciple)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OurPrinciple $principle)
    {
        return Inertia::render('Admin/Principles/Edit',['principle' => $principle]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePrincipleRequest $request, OurPrinciple $principle)
    {
        DB::transaction(function() use ($request, $principle) {
            $validated = $request->validated();
            if($request->hasFile('icon')){
                $iconPath = $request->file('icon')->store('icons','public');
                $validated['icon'] = $iconPath;
        }
            if($request->hasFile('thumbnail')){
                $thumbnailPath = $request->file('thumbnail')->store('thumbnail','public');
                $validated['thumbnail'] = $thumbnailPath;
            }
        $principle->update($validated);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OurPrinciple $ourPrinciple)
    {
        DB::transaction(function() use ($ourPrinciple){
            $ourPrinciple->delete();
        });
        return redirect()->route('admin.principles.index');
    }
}
