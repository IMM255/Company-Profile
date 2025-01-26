<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestimonialRequest;
use App\Http\Requests\UpdateTestimonialRequest;
use App\Models\ProjectClient;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonial = Testimonial::all()->map(function($item){
            $item->thumbnail_url = $item->thumbnail ? Storage::url($item->thumbnail) : null;
            return $item;
        });
        return Inertia::render('Admin/Testimonials/Index',['items' => $testimonial]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clients = ProjectClient::all();
        return Inertia::render('Admin/Testimonials/Create',['projectsClients' => $clients ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestimonialRequest $request)
    {
        DB::transaction(function() use ($request){
            $validated = $request->validated();
            if($request->hasFile("thumbnail")){
                $thumbnail_url = $request->file("thumbnail")->store("thumbnails","public");
                $validated["thumbnail"] = $thumbnail_url;
            }
            Testimonial::create($validated);
        });
        return redirect()->route("admin.testimonials.index");
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
        $projectClients = ProjectClient::all();
        return Inertia::render('Admin/Testimonials/Edit',["items" => $testimonial, "projectClients" => $projectClients]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestimonialRequest $request, Testimonial $testimonial)
    {
        DB::transaction(function() use ($request, $testimonial){
            $validated = $request->validated();
            if($request->hasFile("thumbnail")){
                $thumbnail_url = $request->file("thumbnail")->store("thumbnails","public");
                $validated["thumbnail"] = $thumbnail_url;
            }
            $testimonial->update($validated);
        });
        return redirect()->route("admin.testimonials.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        DB::transaction(function() use ($testimonial){
            $testimonial->delete();
        });
    }
}
