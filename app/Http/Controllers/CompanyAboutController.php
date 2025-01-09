<?php

namespace App\Http\Controllers;

use App\Models\CompanyAbout;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyAboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = CompanyAbout::all(); // Ganti dengan query data Anda
        return Inertia::render('Admin/About/Index', [
            'items' => $items,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Abouts/Create');
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
    public function show(CompanyAbout $CompanyAbout)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CompanyAbout $CompanyAbout)
    {
        return Inertia::render('Admin/Abouts/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CompanyAbout $CompanyAbout)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CompanyAbout $CompanyAbout)
    {
        //
    }
}
