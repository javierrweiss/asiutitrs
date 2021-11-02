/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4423D4F-E90E-4BF0-B7D8-98F1812F4628"}
 * @AllowToRunInFind
 */
function onShow_filtrar(firstShow, event) {
	/*var myForm = solutionModel.getForm('frm_cons_estado_eco_comp_det_compras_cc');
	switch (globals.gbl_index){
		case 3:	myForm.dataSource = 'db:/desal/tbl_compras'; break
		case 4:	myForm.dataSource = 'db:/desal/tbl_honormed'; break
		case 5:	myForm.dataSource = 'db:/desal/tbl_rrhh'; break
		case 6:	myForm.dataSource = 'db:/desal/tbl_finanzas'; break
		case 7:	myForm.dataSource = 'db:/desal/tbl_conta'; break
		case 8:	myForm.dataSource = 'db:/desal/tbl_legales'; break
		case 9:	myForm.dataSource = 'db:/desal/tbl_snd'; break
	}	
	forms.frm_cons_estado_eco_comp_det_compras_cc.controller.recreateUI()
	*/
	if (globals.gbl_agrupacion == 1){
		elements.lbl_periodo.text = globals.gbl_periodo.toString().substr(4,2) + '/' +
	                                globals.gbl_periodo.toString().substr(0,4)
	}else{
		elements.lbl_periodo.text = 'Varios'
	}
		
	var $aux_periodo = new Array()							
	if (globals.gbl_agrupacion == 1){
		$aux_periodo[0] = globals.gbl_periodo
	}else{
		var $agrupa 
		var $m_aux = 0
		var $aux_ano = globals.gbl_periodo.toString().substr(0,4)
		var $aux_mes = globals.gbl_periodo.toString().substr(4,2)
		switch (globals.gbl_agrupacion){
			case 1: $agrupa =  1 ; break
			case 2: $agrupa =  3 ; break
			case 3: $agrupa =  4 ; break
			case 4: $agrupa =  6 ; break
			case 5: $agrupa = 12 ; break
		}
		$aux_periodo[0] = $aux_ano + '' + $aux_mes
		for (var i= 1; i < $agrupa; i++){
			$aux_mes++
		    if ($aux_mes > 12){
			    $aux_ano ++
			    $aux_mes = 1
		    }
			$m_aux = $aux_mes
		    if ($m_aux < 10){
			    $m_aux = '0' + $m_aux
		    }
		    $aux_periodo[i] = $aux_ano + '' + $m_aux
		    
		}		
	}
	controller.find()
	razonsoc     = globals.gbl_razonsoc
	//tipcompint   = globals.gbl_tipmov
	//macrocen     = globals.gbl_tipoprest
	//centro       = globals.gbl_concepto
	//subcentro    = globals.gbl_subconcepto
	periodo        = globals.gbl_periodo
	//tipprov      = globals.gbl_categclie
    controller.search()
	
	if (cuit == 0){
		elements.lbl_cuit.visible = false
		elements.nro_cuit.visible = false
	}else{
		elements.lbl_cuit.visible = true
		elements.nro_cuit.visible = true
		elements.lbl_cuit.text = 'CUIT :'	  
	}
}
