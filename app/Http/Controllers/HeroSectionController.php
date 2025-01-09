<?php

namespace App\Http\Controllers;

use App\Models\HeroSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeroSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $heroSection = HeroSection::orderByDesc('id')->paginate(10);
        return Inertia::render('Admin/HeroSections/Index',['items' => $heroSection]);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(HeroSection $heroSection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HeroSection $heroSection)
    {
        return Inertia::render('Admin/HeroSections/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HeroSection $heroSection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HeroSection $heroSection)
    {
        //
    }
}
