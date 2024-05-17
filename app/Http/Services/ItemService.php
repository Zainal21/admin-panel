<?php

namespace App\Http\Services;

use App\Models\Item;

class ItemService
{
    /**
     * create
     *
     * @param  array $data
     * @return Item
     */
    public function create(array $data)
    {
        return Item::create($data);
    }

    /**
     * getAll
     *
     * @return Collection
     */
    public function getItems($keyword = null)
    {
        $query = Item::query()->with('category');

        if ($keyword) {
            $query->where('name', 'like', '%' . $keyword . '%');
        }

        return $query->get();
    }
    /**
     * getById
     *
     * @param  string $id
     * @return Item
     */
    public function getById(string $id)
    {
        return Item::findOrFail($id);
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
        return Item::whereId($id)->update($data);
    }

    /**
     * delete
     *
     * @param  string $id
     * @return bool
     */
    public function delete(string $id)
    {
        return Item::destroy($id);
    }
}
