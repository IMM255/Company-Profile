<?php

namespace App\Http\Controllers;

use App\Models\OurPrinciple;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OurPrincipleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $principles = OurPrinciple::orderByDesc('id')->paginate(10);
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
    public function store(Request $request)
    {
        //
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
    public function edit(OurPrinciple $ourPrinciple)
    {
        return Inertia::render('Admin/Principles/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OurPrinciple $ourPrinciple)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OurPrinciple $ourPrinciple)
    {
        //
    }
}
