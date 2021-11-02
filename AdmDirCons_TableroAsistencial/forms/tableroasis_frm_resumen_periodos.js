/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4797C0FB-A42F-43CE-AE93-2194D2D6F4B6"}
 */
var peri_1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C64049E-445E-4455-A9A4-818ED58991F8"}
 */
var peri_2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE4C66AB-4149-43D7-9F86-6AFAC7E72753"}
 */
var peri_3 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C408896E-7CA4-4F64-A056-C1CD578CD981"}
 */
var peri_4 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF2D6B4E-7962-4182-8870-F73809397B5C"}
 */
var peri_5 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"324EC1A3-9C57-4065-8325-403C802261D0"}
 */
var peri_6 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70EC7030-4C7B-4E3B-9D0C-E4B4BC5A538B"}
 */
var peri_7 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1CC1E7E-7E78-4095-A0AF-0307261E35E7"}
 */
var peri_8 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"324FAE10-DE31-40F3-9616-E4EF30FE330C"}
 */
var peri_9 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66A7A228-2959-482F-BC2A-328F33268AF7"}
 */
var peri_10 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91C23C43-1316-4AF3-AC77-9D38AF65DEDF"}
 */
var peri_11 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"58C97090-4FFF-43C6-8018-32D0FFC70B1F"}
 */
var peri_12 = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AB647B2C-101A-43DF-A12E-34273589DA6F",variableType:4}
 */
var frm_pos = 0;

/**      
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"FEFE7AC4-4BE4-42B3-91AA-C3982AB938A3"}
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
 * @properties={typeid:24,uuid:"F59BDD71-9256-42D7-93E4-7F45699CD461"}
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
	    win.show(forms.frm_cons_estado_eco_comp_det_ventas)
	    application.getWindow('det_comp2').hide()
	    application.getWindow('det_comp2').destroy() 
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B73B5A8-C351-40E0-82C6-F318B15CBB8A"}
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
				if(categclie == 1){
					if(i > 1100){
						razonsoc
					}
			        if (tipmov == 1 && tipoprest == 1 && concepto == 2 && subconcepto == 0 && tipo == 6 &&
			        	(razonsoc != '' && razonsoc != 'Todos')){
				        visible = 0
			        }else{
			        	visible = 1
			        }
			    }else{
			    	visible = 1
		        }
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
 * @properties={typeid:24,uuid:"40EE6ECE-4C64-419A-8E64-199B7F506A0D"}
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
	foundset.sort('sector asc, tipmov asc, tipoprest_desc asc, concepto_desc asc, subconcepto_desc asc, tipo asc')	
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

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"DA676CCF-BEEF-483C-97D4-2B710F093612"}
 */
function onRender_titulos(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	switch ($rcd.nivel){
	
		case 1: 
                    //$prop.bgcolor = '#DDE7F4'
                	//$prop.fgcolor = '#DDE7F4'                    
                    //$prop.border = 'LineBorder,1,#DDE7F4'
	            
                    $prop.font    = 'Arial,1,12'
                
                ; break
	}
	 // This will raise an error now, because the variable is not longer of type text.
	// TODO Auto-generated method stub
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	/*
	if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F3224596-F1AF-47E1-BC95-1A7A078D9F4D"}
 * @AllowToRunInFind
 */
function onAction_muestro_detalle(event) {
	forms.tableroasis_frm_resumen_detalle_obras.foundset.find()
	forms.tableroasis_frm_resumen_detalle_obras.foundset['orden']=foundset['orden']
	forms.tableroasis_frm_resumen_detalle_obras.foundset['suborden']=foundset['suborden']
	forms.tableroasis_frm_resumen_detalle_obras.foundset.search()
	forms.tableroasis_frm_resumen_detalle_obras.titulo_indicador=foundset['tit_1']
	forms.tableroasis_frm_resumen_detalle_obras.frm_formato=foundset['formato']
	var win = application.createWindow("det_obras",JSWindow.MODAL_DIALOG)	
	win.title= 'Detalle por Cobertura'
	win.resizable = false
	win.show(forms.tableroasis_frm_resumen_detalle_obras)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85BFC683-58DC-490C-B37F-DE19D8EBC994"}
 * @AllowToRunInFind
 */
function onAction_muestro_comparacion(event) {
	databaseManager.revertEditedRecords()
	var $col_valores_ant=new Array()
	var $col_valores_act=new Array()
	var $formato=0
	forms.tableroasis_frm_resumen_comparacion_periodos.foundset.find()
	forms.tableroasis_frm_resumen_comparacion_periodos.foundset['orden']=foundset['orden']
	forms.tableroasis_frm_resumen_comparacion_periodos.foundset['suborden']=foundset['suborden']
	forms.tableroasis_frm_resumen_comparacion_periodos.foundset.search()
	forms.tableroasis_frm_resumen_comparacion_periodos.titulo_indicador=foundset['tit_1']
	if(forms.tableroasis_frm_resumen_comparacion_periodos.foundset.getSize()<3){
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset.setSelectedIndex(1)
		for(var i=1;i<=12;i++){
			$col_valores_ant[i]=utils.stringToNumber(forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i])
		}
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset.setSelectedIndex(2)
		for(i=1;i<=12;i++){
			$col_valores_act[i]=utils.stringToNumber(forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i])
		}
		$formato=utils.stringToNumber(forms.tableroasis_frm_resumen_comparacion_periodos.foundset['formato'])
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset.newRecord()
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset['orden']=foundset['orden']
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset['suborden']=foundset['suborden']
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset['tit_1']="Variación entre períodos"
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset['nivel']=9
		for(i=1;i<=12;i++){
			forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i]=$col_valores_act[i] - $col_valores_ant[i]
			if(forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i]==0){
				forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i]=' '
			}else{
				if($formato==2){
					forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i]=utils.numberFormat(forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i],'#,##0.000')
				}else{
					forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i]=utils.numberFormat(forms.tableroasis_frm_resumen_comparacion_periodos.foundset['col_'+i],'####')
				}
			}
		}
		databaseManager.saveData(forms.tableroasis_frm_resumen_comparacion_periodos.foundset)
		forms.tableroasis_frm_resumen_comparacion_periodos.foundset.sort('orden asc, suborden asc, nivel asc')
		var win = application.createWindow("det_comparacion",JSWindow.MODAL_DIALOG)	
		win.title= 'Comparación entre períodos'
		win.resizable = false
		win.show(forms.tableroasis_frm_resumen_comparacion_periodos)
	}else{
		globals.DIALOGS.showWarningDialog("Atención!","No está cargado el período anterior para comparar","Ok")
	}
}
