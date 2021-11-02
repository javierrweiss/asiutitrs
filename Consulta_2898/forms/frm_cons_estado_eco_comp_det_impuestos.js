/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"346E0829-B3C9-416E-A705-827608D50941"}
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
	razonsoc     = globals.gbl_razonsoc
	ente         = globals.gbl_tipmov
	impuesto     = globals.gbl_tipoprest
	concepto     = globals.gbl_concepto
	subconcepto  = globals.gbl_subconcepto
	periodo      = $aux_periodo	
    controller.search()	
	
}
