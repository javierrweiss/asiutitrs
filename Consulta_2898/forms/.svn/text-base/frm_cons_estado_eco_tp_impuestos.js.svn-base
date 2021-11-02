/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48CBF61F-D683-4D90-9D1F-05D315D3ACE2",variableType:4}
 */
var frm_pos = 0;

/**      
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"447A84EB-6848-4D92-AC50-D85E6D892614"}
 */
function onRender_todos(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	switch ($rcd.tipo){
	/*	case 0: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
	                $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
	           	    $prop.bgcolor = '#ffffff'	           	 
		            $prop.fgcolor = '#000000'
		            $prop.border = 'LineBorder,1,#000000'
		            $prop.font    = 'Arial,1,15'
		            
		            var $aux = ''
                    $aux = $elemento
                    $aux = $aux.substr(4,2)
                    if (utils.stringToNumber($aux) > globals.gbl_meses){
                    	$prop.bgcolor = '#DDE7F4'
                        $prop.fgcolor = '#DDE7F4'                    
                        $prop.border = 'LineBorder,1,#DDE7F4'                        
                    }
	            }	           
	            if ($elemento == 'lbl_tit_1'){
	        	    $prop.bgcolor = '#DDE7F4'
                	$prop.fgcolor = '#DDE7F4'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
				   
	            }	           
	            ; break
	*/  
		case 1: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
                    $prop.bgcolor = '#DDE7F4'
                	$prop.fgcolor = '#DDE7F4'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
	            }
                if ($elemento == 'lbl_tit_1'){
                	$prop.bgcolor = '#0080c0'
                	$prop.fgcolor = '#ffffff'                    
                    $prop.border = 'LineBorder,1,#0080c0'
                    $prop.font    = 'Arial,1,18'
                }
                ; break
	    case 2: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
                    $prop.bgcolor = '#DDE7F4'
    	            $prop.fgcolor = '#DDE7F4'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                }
                if ($elemento == 'lbl_tit_1'){
    	            $prop.bgcolor = '#DDE7F4'
    	            $prop.fgcolor = '#000000'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                    $prop.font    = 'Arial,0,15'
                }
                ; break
	    case 3: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
                    $prop.bgcolor = '#DDE7F4'
                    $prop.fgcolor = '#DDE7F4'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                }
                if ($elemento == 'lbl_tit_1'){
                    $prop.bgcolor = '#DDE7F4'
                    $prop.fgcolor = '#000000'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                    $prop.font    = 'Arial,0,15'
                }
                ; break
	    case 4: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04'  | $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
	                $prop.bgcolor = '#ffffff'
                    $prop.fgcolor = '#000000'
                                        
                    var $aux = ''
                    $aux = $elemento
                    $aux = $aux.substr(4,2)
                    if (utils.stringToNumber($aux) > globals.gbl_meses){
                    	$prop.bgcolor = '#DDE7F4'
                        $prop.fgcolor = '#DDE7F4'                    
                        $prop.border = 'LineBorder,1,#DDE7F4'                        
                    }
                }	           
                if ($elemento == 'lbl_tit_1'){
                	$prop.bgcolor = '#DDE7F4'
                	$prop.fgcolor = '#000000'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                    $prop.font    = 'Arial,0,15'
                }	           
                if ($elemento == 'btn_mas'){
                	if($rcd.subconcepto == 0){
                		$prop.visible = false
                	}else{
                	    if($rcd.boton_m == 0){
                		    $prop.visible = true                		
                	    }else{
                		    $prop.visible = false
                	    }
                	}                	                
                }
                if ($elemento == 'btn_men'){
                	if($rcd.subconcepto == 0){
                		$prop.visible = false
                	}else{
                	    if($rcd.boton_m == 1){
                		    $prop.visible = true                		
                	    }else{
                		    $prop.visible = false
                	    }
                	}                	                
                }
                if ($elemento == 'btn_mas_subc'){
                	if($rcd.subconcepto != 0){
                		$prop.visible = false
                	}else{
                	    if($rcd.boton_m == 0){
                		    $prop.visible = true                		
                	    }else{
                		    $prop.visible = false
                	    }
                	}                	                
                }
                if ($elemento == 'btn_men_subc'){
                	if($rcd.subconcepto != 0){
                		$prop.visible = false
                	}else{
                	    if($rcd.boton_m == 1){
                		    $prop.visible = true                		
                	    }else{
                		    $prop.visible = false
                	    }
                	}                	                
                }
                ; break
	 /*   case 5: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
                    $prop.bgcolor = '#DDE7F4'
                    $prop.fgcolor = '#DDE7F4'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                    
                    $aux = ''
                    $aux = $elemento
                    $aux = $aux.substr(4,2)
                    if (utils.stringToNumber($aux) > globals.gbl_meses){
                    	$prop.bgcolor = '#DDE7F4'
                        $prop.fgcolor = '#DDE7F4'                    
                        $prop.border = 'LineBorder,1,#DDE7F4'                        
                    }
                }	           
                if ($elemento == 'lbl_tit_1'){
    	            $prop.bgcolor = '#DDE7F4'
    	            $prop.fgcolor = '#000000'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                    $prop.font    = 'Arial,0,17'
                }
                if ($elemento == 'btn_mas || btn_men'){
    	            $prop.visible = false                
                }
                ; break
                */
	    case 6: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04'  | $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
                    $prop.bgcolor = '#ffffff'
                    $prop.fgcolor = '#808080'
                    if ($rcd.boton_m == 1){	
                        $prop.bgcolor = '#dbdbdb'
                        $prop.fgcolor = '#000000'
                    }
                    $aux = ''
                    $aux = $elemento
                    $aux = $aux.substr(4,2)
                    if (utils.stringToNumber($aux) > globals.gbl_meses || $rcd.col_1 == null){
                    	$prop.bgcolor = '#DDE7F4'
                        $prop.fgcolor = '#DDE7F4'                    
                        $prop.border = 'LineBorder,1,#DDE7F4'                        
                    }
                }	           
                if ($elemento == 'lbl_tit_1'){
    	            $prop.bgcolor = '#DDE7F4'
    	            $prop.fgcolor = '#000000'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                    $prop.font    = 'Arial,0,15'
                    if ($rcd.col_1 == null){
                        $prop.font    = 'Arial,0,17'
                    }
                }	           
                if ($elemento == 'btn_mas || btn_men'){
    	            $prop.visible = false               
                }
                ; break
	    case 7: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
                    $prop.bgcolor = '#dbdbdb'
                    $prop.fgcolor = '#000000'
        
                    $aux = ''
                    $aux = $elemento
                    $aux = $aux.substr(4,2)
                    if (utils.stringToNumber($aux) > globals.gbl_meses){
        	            $prop.bgcolor = '#DDE7F4'
                        $prop.fgcolor = '#DDE7F4'                    
                        $prop.border = 'LineBorder,1,#DDE7F4'                        
                    }
                }	           
                if ($elemento == 'lbl_tit_1'){
                    $prop.bgcolor = '#DDE7F4'
                    $prop.fgcolor = '#000000'                    
                    $prop.border = 'LineBorder,1,#DDE7F4'
                    $prop.font    = 'Arial,0,15'
                }                
                ; break
	    case 8: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12'){
                    $prop.bgcolor = '#dbdbdb'
                    $prop.fgcolor = '#000000'

                    $aux = ''
                    $aux = $elemento
                    $aux = $aux.substr(4,2)
                    if (utils.stringToNumber($aux) > globals.gbl_meses || $rcd.tit_1 == ''){
                        $prop.bgcolor = '#DDE7F4'
                        $prop.fgcolor = '#DDE7F4'                    
                        $prop.border = 'LineBorder,1,#DDE7F4'                        
                    }                    
                }	           
                if ($elemento == 'lbl_tit_1'){
                    $prop.bgcolor = '#dbdbdb'
                    $prop.fgcolor = '#000000'                    
                    $prop.border = 'LineBorder,1,#dbdbdb'
                    $prop.font    = 'Arial,0,18'                
                    if ($rcd.tit_1 == ''){
                	    $prop.bgcolor = '#DDE7F4'
      	                $prop.fgcolor = '#DDE7F4' 
      	                $prop.border = 'LineBorder,1,#DDE7F4'
                    }
                }
                ; break

	    default: $prop.visible = false; break
	}	  
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"FEC03184-E3B7-4E4A-BDDB-C3591545FF85"}
 */
function onAction_buscar_comprobantes(event) {
	controller.getSelectedIndex()	
	var boton_press = ''
	boton_press = event.getElementName()
	boton_press = boton_press.split('_')
	var columna = utils.stringToNumber(boton_press[1])
	var $aux_col = columna - 1
	
	globals.gbl_sector      = sector
	globals.gbl_tipmov      = tipmov
	globals.gbl_tipoprest   = tipoprest 
	globals.gbl_concepto    = concepto
	globals.gbl_subconcepto = subconcepto
	globals.gbl_razonsoc    = razonsoc
	globals.gbl_categclie   = categclie
	 
	if (globals.gbl_agrupacion != 1){
		var $agrupa
		switch (globals.gbl_agrupacion){
		    case 1: $agrupa =  1 ; break
		    case 2: $agrupa =  3 ; break
		    case 3: $agrupa =  4 ; break
		    case 4: $agrupa =  6 ; break
		    case 5: $agrupa = 12 ; break
	    }
	  	$aux_col = (columna -1) * $agrupa
	}		
	globals.gbl_periodo     = utils.stringToNumber(globals.periodo_tabla_per[$aux_col])
	var imp_per = foundset['col_'+ columna]
	if (tipo ==  6 && imp_per != null && boton_m == 0){
		var win = application.createWindow("det_comp2",JSWindow.MODAL_DIALOG)	
		win.title= 'Detalle de Comprobantes'
		win.resizable = false
		solutionModel.removeForm
	    win.show(forms.frm_cons_estado_eco_comp_det_impuestos)
	    application.getWindow('det_comp2').hide()
	    application.getWindow('det_comp2').destroy() 
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75D70A96-6559-42F3-B456-A338529D3756"}
 * @AllowToRunInFind
 */
function onAction_mas_menos(event) {	
	forms.frm_cons_estado_economico_2898.elements.lbl_procesando.visible = true
	application.updateUI()	
	controller.getSelectedIndex()	
	var $sector      = sector
	var $tipmov      = tipmov
	var $tipoprest   = tipoprest
	var $concepto    = concepto
	var $subconcepto = subconcepto		
	var $boton_m     = boton_m
	frm_pos          = controller.getSelectedIndex() 	
	foundset.find()
	sector      = $sector
	tipmov      = $tipmov
	tipoprest   = $tipoprest
	concepto    = $concepto
	subconcepto = $subconcepto
	
	foundset.search()
    var $max = databaseManager.getFoundSetCount(foundset)
	var i
	if ($boton_m == 0){	
		for (i = 1; i <= $max ; i++){
			foundset.setSelectedIndex(i)
			if (tipo == 5 || tipo == 6){
			    visible = 1
			}else{
				if (tipo == 4){
					foundset.boton_m = 1
		    	}
			}
			if(razonsoc == 'Todos' || categclie_desc == 'Todos'){
		        marca_totales = 1		    
		    }
		}
		
		filtra_visibles()				
	}else{
		for (i = 1; i <=  $max ; i++){
			foundset.setSelectedIndex(i)
			if (tipo == 5 || tipo == 6){
			    visible = 0
		    }else{
				if (tipo == 4){
					foundset.boton_m = 0
		    	}
		    }
		    if(razonsoc == 'Todos' || categclie_desc == 'Todos'){
		        marca_totales = 0		    
		    }
		}
		filtra_visibles()		
	}
	
	forms.frm_cons_estado_economico_2898.elements.lbl_procesando.visible = false
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"7BCA543A-65F0-4DC9-A202-78DDE87960BA"}
 */
function filtra_visibles() {
	//Colocar Titulos
	var $lbl_ano = 'lbl_ano_tit_'
	var $lbl_mes = 'lbl_mes_tit_'
	for (var i = 0; i <= 11; i++){
		elements[$lbl_ano + i].text = globals.gbl_ano_tit[i]
	    elements[$lbl_mes + i].text = globals.gbl_mes_tit[i]
	    if (i >= globals.gbl_meses){
	    	elements[$lbl_ano + i].visible = false
			elements[$lbl_mes + i].visible = false
	    }else{
	    	elements[$lbl_ano + i].visible = true
			elements[$lbl_mes + i].visible = true
	    }
	}
	foundset.sort('sector asc, tipmov asc, tipoprest asc, concepto asc')	
    foundset.find()
	visible = 1	
	foundset.search()	
	var $i = 200
	while ($i < frm_pos){
	   foundset.search()
	   foundset.setSelectedIndex($i)
	   $i += 200
	}
	foundset.setSelectedIndex(frm_pos)
}
