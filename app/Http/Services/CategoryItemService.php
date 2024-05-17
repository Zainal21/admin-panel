<?php

namespace App\Http\Services;

use App\Models\CategoryItem;
use Illuminate\Support\Facades\DB;

class CategoryItemService
{
    /**
     * getStatisticItem
     *
     * @return void
     */
    public function getStatisticItem()
    {
        $allStatuses = ['Bagus', 'Rusak', 'Perlu Perbaikan', 'Dalam Perbaikan'];

        $categoryData = CategoryItem::select('categories.name as category', 'unit_items.status', DB::raw('COUNT(unit_items.id) as total_units'))
            ->join('items', 'categories.id', '=', 'items.category_id')
            ->join('unit_items', 'items.id', '=', 'unit_items.item_id')
            ->groupBy('categories.name', 'unit_items.status')
            ->get();

        $statusCounts = [];

        foreach ($categoryData as $data) {
            $category = $data->category;
            $status = $data->status;
            $totalUnits = $data->total_units;

            if (!isset($statusCounts[$status])) {
                $statusCounts[$status] = [];
            }

            $statusCounts[$status][$category] = $totalUnits;
        }

        $result = [];

        foreach ($allStatuses as $status) {
            $result[] = [
                'status' => $status,
                'total_units' => isset($statusCounts[$status]) ? $statusCounts[$status] : [],
            ];
        }

        return $result;
    }
    /**
     * create
     *
     * @param  array $data
     * @return CategoryItem
     */
    public function create(array $data)
    {
        return CategoryItem::create($data);
    }

    /**
     * getAll
     *
     * @return Collection
     */
    public function getCategories($keyword = null)
    {
        $query = CategoryItem::query();

        if ($keyword) {
            $query->where('name', 'like', '%' . $keyword . '%');
        }

        return $query->get();
    }

    /**
     * getById
     *
     * @param  string $id
     * @return CategoryItem
     */
    public function getById(string $id)
    {
        return CategoryItem::findOrFail($id);
    }

    /**
     * update Byid
     *
     * @param  string $id
     * @return bool
     */
    public function updateById(string $id, array $data)
    {
        return CategoryItem::whereId($id)->update($data);
    }

     /**
     * delete
     *
     * @param  string $id
     * @return bool
     */
    public function delete(string $id)
    {
        return CategoryItem::destroy($id);
    }
}
