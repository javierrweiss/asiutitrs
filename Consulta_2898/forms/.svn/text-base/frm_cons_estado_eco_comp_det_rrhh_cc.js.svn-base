/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74F88072-2513-4ABB-B3F8-EB64C28985D2"}
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
	tipcompra    = globals.gbl_tipmov
	macrocen     = globals.gbl_tipoprest
	centro       = globals.gbl_concepto
	subcentro    = globals.gbl_subconcepto
	periodo      = $aux_periodo
	tipprov      = globals.gbl_categclie
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
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B3248D26-E681-44B9-9F5D-F37DA177CCA0"}
 */
function onAction_buscar_recibo(event) {
	if ((tipcompint == 71 || tipcompint == 72 || tipcompint == 73| tipcompint == 74) 
		&& tipcomp != 35){
	    globals.gbl_razonsoc = razonsoc 
		globals.gbl_categclie = numcompint
	    globals.gbl_tipmov   = periodo
	    switch (tipcompint){
		    case 71: globals.gbl_concepto = 1; break;
		    case 72: globals.gbl_concepto = 2; break;
		    case 73: globals.gbl_concepto = 3; break;
		    case 74: globals.gbl_concepto = 4; break;
		    case 79: globals.gbl_concepto = 9; break;
	    }		
	    var win = application.createWindow("det_recibo",JSWindow.MODAL_DIALOG)	
	    win.title= 'Detalle de Recibo'
	    win.resizable = false
	    solutionModel.removeForm
        win.show(forms.frm_cons_estado_eco_comp_det_rrhh_recibo)
        application.getWindow('det_recibo').hide()
        application.getWindow('det_recibo').destroy()
	}
}