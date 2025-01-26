<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHeroSectionRequest;
use App\Http\Requests\UpdateHeroSectionRequest;
use App\Models\HeroSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HeroSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hero_section = HeroSection::all()->map(function($item){
            $item->banner_url = $item->banner ? Storage::url($item->banner) : null ;
            return $item;
        });
        return Inertia::render('Admin/HeroSections/Index',['items' => $hero_section]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/HeroSections/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHeroSectionRequest $request)
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();
            if($request->hasFile('banner')){
                $bannerPath = $request->file('banner')->store('banners','public');
                $validated['banner'] = $bannerPath;
            }
            HeroSection::create($validated);
        });

        return redirect()->route('admin.hero_sections.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(HeroSection $hero_section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HeroSection $hero_section)
    {
        return Inertia::render('Admin/HeroSections/Edit',['items' => $hero_section]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHeroSectionRequest $request, HeroSection $hero_section)
    {
        DB::transaction(function () use ($request, $hero_section) {
            $validated = $request->validated();
            if($request->hasFile('banner')){
                $bannerPath = $request->file('banner')->store('banners','public');
                $validated['banner'] = $bannerPath;
            }
            $hero_section->update($validated);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HeroSection $hero_section)
    {
        DB::transaction(function () use ($hero_section) {
        $hero_section->delete();
        });
        return redirect()->route('admin.hero_sections.index');
    }
}
