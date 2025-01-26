<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAboutRequest;
use App\Http\Requests\UpdateAboutRequest;
use App\Models\CompanyAbout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CompanyAboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = CompanyAbout::all()->map(function($item){
            $item->thumbnail_url = $item->thumbnail ? Storage::url($item->thumbnail) : null;
            return $item;
        });
        return Inertia::render('Admin/Abouts/Index', [
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
    public function store(StoreAboutRequest $request)
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();
            if($request->hasFile("thumbnail")){
                $thumbnail_url = $request->thumbnail->store("thumbnails","public");
                $validated["thumbnail"] = $thumbnail_url;
            }
            CompanyAbout::create($validated);
        });
        return redirect()->route('admin.abouts.index');
    }


    /**
     * Display the specified resource.
     */
    public function show(CompanyAbout $about)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CompanyAbout $about)
    {
        return Inertia::render('Admin/Abouts/Edit',["items" => $about]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAboutRequest $request, CompanyAbout $about)
    {
        DB::transaction(function () use ($request, $about) {
            $validated = $request->validated();
            if($request->hasFile("thumbnail")){
                $thumbnail_url = $request->thumbnail->store("thumbnails","public");
                $validated["thumbnail"] = $thumbnail_url;
            }
            $about->update($validated);
        });
        return redirect()->route('admin.abouts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CompanyAbout $about)
    {
        DB::transaction(function() use ($about){
            $about->delete();
        });
        return redirect()->route("admin.abouts.index");
    }
}
