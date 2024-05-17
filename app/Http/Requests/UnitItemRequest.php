<?php

namespace App\Http\Requests;

use App\Models\UnitItem;
use Illuminate\Foundation\Http\FormRequest;

class UnitItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $status = UnitItem::UNIT_STATUS;
        return [
            'item_id' => 'required|exists:items,id',
            'status' => 'required|in:'. implode(',', $status),

        ];
    }
}
