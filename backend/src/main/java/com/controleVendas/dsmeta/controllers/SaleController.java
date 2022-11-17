package com.controleVendas.dsmeta.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.controleVendas.dsmeta.entities.Sale;
import com.controleVendas.dsmeta.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService service;
	
	@GetMapping
	public Page<Sale> findSale(
			@RequestParam(value = "minDate", defaultValue = "" ) String minDate, 
			@RequestParam(value = "maxDate", defaultValue = "" ) String maxDate, 
			org.springframework.data.domain.Pageable pageable){
		return service.findSales(minDate , maxDate, pageable);
	}
}
