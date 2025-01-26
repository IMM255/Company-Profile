<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStatisticRequest;
use App\Http\Requests\UpdateStatisticRequest;
use App\Models\CompanyStatistic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CompanyStatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statistic = CompanyStatistic::all()->map(function ($item) {
            $item->icon_url = $item->icon ? Storage::url($item->icon) : null;
            return $item;
        });
        return Inertia::render('Admin/Statistics/Index',['items' => $statistic]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Statistics/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStatisticRequest $request)
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();

            if($request->hasFile('icon')){
                $iconPath = $request->file('icon')->store('icons','public');
                $validated['icon'] = $iconPath;
            }

            CompanyStatistic::create($validated);
        });

        return redirect()->route('admin.statistics.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(CompanyStatistic $companyStatistic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CompanyStatistic $statistic)
    {
        return Inertia::render('Admin/Statistics/Edit',['statistic' => $statistic]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatisticRequest $request, CompanyStatistic $statistic)
    {
        DB::transaction(function() use ($request, $statistic) {
            $validated = $request->validated();
            if($request->hasFile('icon')){
                $iconPath = $request->file('icon')->store('icons','public');
                $validated['icon'] = $iconPath;
            }
            $statistic->update($validated);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CompanyStatistic $statistic)
    {
        DB::transaction(function() use ($statistic){
            $statistic->delete();
        });
        return redirect()->route('admin.statistics.index');
    }
}
