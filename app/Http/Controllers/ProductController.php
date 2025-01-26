<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all()->map(function($item){
            $item->thumbnail_url = $item->thumbnail ? Storage::url($item->thumbnail) : null;
            return $item;
        });
        return Inertia::render('Admin/Products/Index',['items' => $products]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();
            if($request->hasFile("thumbnail")){
                $thumbnail_url = $request->file("thumbnail")->store("thumbnails","public");
                $validated["thumbnail"] = $thumbnail_url;
            }
            Product::create($validated);
        });
        return redirect()->route('admin.products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Admin/Products/Edit',["items" => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        DB::transaction(function () use ($request, $product) {
            $validated = $request->validated();
            if($request->hasFile("thumbnail")){
                $thumbnail_url = $request->file("thumbnail")->store("thumbnails","public");
                $validated["thumbnail"] = $thumbnail_url;
            }
            $product->update($validated);
        });
        return redirect()->route('admin.products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        DB::transaction(function() use ($product){
            $product->delete();
        });
    }
}
