/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED28B817-F252-4C2E-B750-C414DE824345"}
 * @AllowToRunInFind
 */
function onShow_filtrar(firstShow, event) {
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
	razonsocclie = globals.gbl_razonsoc
	tipmov       = globals.gbl_tipmov
	tipoprest    = globals.gbl_tipoprest
	concepto     = globals.gbl_concepto
	subconcep    = globals.gbl_subconcepto
	periodo      = $aux_periodo
	categclie    = globals.gbl_categclie
    controller.search()
	if (cuitclie == 0){
		elements.lbl_cuit.visible = false
		elements.nro_cuit.visible = false
	}else{
		elements.lbl_cuit.visible = true
		elements.nro_cuit.visible = true
		if (categclie == 1 || categclie == 6){
		    elements.lbl_cuit.text = 'Hist. Clin. :'
	    }else{
		    elements.lbl_cuit.text = 'CUIT :'
	    }
	}
}
