<?php

namespace App\Http\Controllers;

use App\Models\ProjectClient;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonial = Testimonial::orderByDesc('id')->paginate(10);
        return Inertia::render('Admin/Testimonials/Index',['items' => $testimonial]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clients = ProjectClient::orderByDesc('id')->get();
        return Inertia::render('Admin/Testimonials/Create',['items' => $clients]);
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
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonial $testimonial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        //
    }
}
