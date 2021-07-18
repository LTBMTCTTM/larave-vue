<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(): array
    {
        return [0 => 'A',1 => 'B',2 => 'C',3 => 'D',];
    }
}
