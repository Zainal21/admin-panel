<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\UnitItem;
use Illuminate\Http\Request;
use App\Http\Services\ItemService;
use App\Http\Requests\UnitItemRequest;
use App\Http\Services\UnitItemService;
use Illuminate\Support\Facades\Redirect;

class UnitItemController extends Controller
{
    public function __construct(
        public UnitItemService $unitItemService,
        public ItemService $itemService,
    )
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $units = $this->unitItemService->getUnitItems();
        $items = $this->itemService->getItems();
        return Inertia::render('Units/List', compact('units', 'items'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UnitItemRequest $request)
    {
        $data = $request->validated();
        $this->unitItemService->create($data);
        return Redirect::route('units.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UnitItemRequest $request, $id)
    {
        $data = $request->validated();
        $this->unitItemService->updateById($id, $data);
        return Redirect::route('units.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->unitItemService->delete($id);
        return Redirect::route('units.index');
    }
}
