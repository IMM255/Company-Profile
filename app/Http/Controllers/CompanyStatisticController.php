<?php

namespace App\Http\Controllers;

use App\Models\CompanyStatistic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyStatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statistic = CompanyStatistic::orderByDesc('id')->paginate(10);
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
    public function store(Request $request)
    {
        //
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
    public function edit(CompanyStatistic $companyStatistic)
    {
        return Inertia::render('Admin/HeroSections/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CompanyStatistic $companyStatistic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CompanyStatistic $companyStatistic)
    {
        //
    }
}
