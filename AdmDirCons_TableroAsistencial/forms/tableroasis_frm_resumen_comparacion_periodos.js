/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DEABC5F6-308E-4118-8FAB-E85B772F5A33"}
 */
var titulo_indicador = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6950C7C4-994C-4F84-A521-9CCE63D71158"}
 */
var peri_1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"256170DC-4891-43D6-9A38-86EB36E83264"}
 */
var peri_2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ABE541CC-4321-4641-B087-A7D64971F472"}
 */
var peri_3 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"494534B9-2C16-417B-B83D-D5903F108C49"}
 */
var peri_4 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98F1C387-3476-43B8-8B75-9114FE01452D"}
 */
var peri_5 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77763C63-F555-4E71-B61A-4569DB02E28B"}
 */
var peri_6 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BE3695C9-5CA2-4CC6-956C-85F260D7E10A"}
 */
var peri_7 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C8111BBE-1878-48A2-AC9D-A040E25ABF44"}
 */
var peri_8 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B77A23B-2C43-4007-A9FB-6824B25624E8"}
 */
var peri_9 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12AC570A-356A-4CB8-AA54-8307B4950876"}
 */
var peri_10 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89F12D54-9038-4DFC-9887-256EAF587B42"}
 */
var peri_11 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B20842EB-2C3F-43A8-9F6A-5282E698046C"}
 */
var peri_12 = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"38755383-D430-4308-BB2A-611FBA4BC67D",variableType:4}
 */
var frm_pos = 0;

/**      
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"44B673AC-3D46-416B-ABD2-B33EA75EB797"}
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
 * @properties={typeid:24,uuid:"8966C22C-49A2-4B1E-8ED2-83BC7AB80136"}
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
 * @properties={typeid:24,uuid:"F262C3F3-A042-4078-89BA-134AC3010A0E"}
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
 * @properties={typeid:24,uuid:"2AC83DCF-4D45-4970-A23B-C34D20D6F8E3"}
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
 * @properties={typeid:24,uuid:"207D5DAC-6CF8-43B3-9293-92BFBED3813E"}
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
