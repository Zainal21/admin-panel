<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Services\CategoryItemService;

class HomeController extends Controller
{
    /**
     * index
     *
     * @return Inertia
     */
    public function index()
    {
        $service = new CategoryItemService();
        $statistics = $service->getStatisticItem();
        return Inertia::render('Dashboard', compact('statistics'));
    }
}
