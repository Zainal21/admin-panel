<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CategoryItem;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use Illuminate\Support\Facades\Redirect;
use App\Http\Services\CategoryItemService;

class CategoryItemController extends Controller
{
    public function __construct(
        public CategoryItemService $categoryService
    )
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = $this->categoryService->getCategories();
        return Inertia::render('Category/List', compact('categories'));
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $data = $request->validated();
        $this->categoryService->create($data);
        return Redirect::route('categories.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, string $id)
    {
        $data = $request->validated();
        $this->categoryService->updateById($id, $data);
        return Redirect::route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->categoryService->delete($id);
        return Redirect::route('categories.index');
    }
}
