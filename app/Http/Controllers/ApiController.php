<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller{
    function getPictures(){
    	return $this->getPicturesFromPublic("/Symbols/");
    }

    function getProducts(){
    	$products = DB::table("products")->get();
    	$returnValues = [];
    	foreach ($products as $value) {
    		$value = collect($value)->put("images",$this->getPicturesFromPublic("/Products/".$value->name."/"));
    		array_push($returnValues, $value);
    	}
    	return $returnValues;    	
    }
    function getPicturesFromPublic($pathInPublic){
    	$dir = dir(getcwd());
    	$path = $dir->path.$pathInPublic;

    	$picPaths = scandir($path);
    	$sortedPaths = array_map(function($path){
    		if (strpos($path, '.png') !== false) {
    			return $path;
    		}	
    	}, $picPaths);
    	$sortedPaths = array_filter($sortedPaths, function($value) { return !is_null($value) && $value !== ''; });

    	$returnValues = [];
    	foreach ($sortedPaths as $curPicPath){ 
    		array_push($returnValues,[
    			"picture-path" => $curPicPath,
    			"img" => base64_encode(file_get_contents($path.$curPicPath)),
    		]);
    	}

    	return $returnValues;
    }
}
