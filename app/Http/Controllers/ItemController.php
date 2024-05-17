<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\ItemRequest;
use App\Http\Services\ItemService;
use Illuminate\Support\Facades\Redirect;
use App\Http\Services\CategoryItemService;

class ItemController extends Controller
{
    public function __construct(
        public CategoryItemService $categoryService,
        public ItemService $itemService,
    )
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = $this->itemService->getItems();
        $categories = $this->categoryService->getCategories();
        return Inertia::render('Items/List', compact('items', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ItemRequest $request)
    {
        $data = $request->validated();
        $this->itemService->create($data);
        return Redirect::route('items.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ItemRequest $request, string $id)
    {
        $data = $request->validated();
        $this->itemService->updateById($id, $data);
        return Redirect::route('items.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->itemService->delete($id);
        return Redirect::route('items.index');
    }
}
