<?php

namespace App\Http\Services;

use App\Models\UnitItem;

class UnitItemService
{

     /**
     * create
     *
     * @param  array $data
     * @return Item
     */
    public function create(array $data)
    {
        $data['code'] = 'UNIT-' . date('Ymd') . '-' . rand(0, 1000);
        return UnitItem::create($data);
    }

    /**
     * getAll
     *
     * @return Collection
     */
    public function getUnitItems($keyword = null)
    {
        $query = UnitItem::query()->with('item.category');

        if ($keyword) {
            $query->where('name', 'like', '%' . $keyword . '%');
        }

        return $query->get();
    }

    /**
     * getById
     *
     * @param  string $id
     * @return UnitItem
     */
    public function getById(string $id)
    {
        return UnitItem::findOrFail($id);
    }
    /**
     * update Byid
     *
     * @param  string $id
     * @param  array $data
     * @return bool
     */
    public function updateById(string $id, array $data)
    {
        return UnitItem::whereId($id)->update($data);
    }
    /**
     * delete
     *
     * @param  string $id
     * @return bool
     */
    public function delete(string $id)
    {
        return UnitItem::destroy($id);
    }
}
