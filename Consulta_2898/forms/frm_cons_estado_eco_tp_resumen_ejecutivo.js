/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC34D5A8-5266-483B-90F4-193D1C8D1B10",variableType:4}
 */
var frm_pos = 0;

/**      
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"3B0E3BE1-E63C-41F4-AC12-A5B3FC1B0896"}
 */
function onRender_todos(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	switch ($rcd.tipo){	 
		case 1: if ($elemento == 'dtl_01' || $elemento == 'dtl_02' || $elemento == 'dtl_03' || $elemento == 'dtl_04' || $elemento == 'dtl_05' || $elemento == 'dtl_06' ||
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12' ||
                    $elemento == 'por_01' || $elemento == 'por_02' || $elemento == 'por_03' || $elemento == 'por_04' || $elemento == 'por_05' || $elemento == 'por_06' ||
                    $elemento == 'por_07' || $elemento == 'por_08' || $elemento == 'por_09' || $elemento == 'por_10' || $elemento == 'por_11' || $elemento == 'por_12'){
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
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12' ||
                    $elemento == 'por_01' || $elemento == 'por_02' || $elemento == 'por_03' || $elemento == 'por_04' || $elemento == 'por_05' || $elemento == 'por_06' ||
                    $elemento == 'por_07' || $elemento == 'por_08' || $elemento == 'por_09' || $elemento == 'por_10' || $elemento == 'por_11' || $elemento == 'por_12'){                 
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
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12' ||
                    $elemento == 'por_01' || $elemento == 'por_02' || $elemento == 'por_03' || $elemento == 'por_04' || $elemento == 'por_05' || $elemento == 'por_06' ||
                    $elemento == 'por_07' || $elemento == 'por_08' || $elemento == 'por_09' || $elemento == 'por_10' || $elemento == 'por_11' || $elemento == 'por_12'){                 
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
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12' ||
                    $elemento == 'por_01' || $elemento == 'por_02' || $elemento == 'por_03' || $elemento == 'por_04' || $elemento == 'por_05' || $elemento == 'por_06' ||
                    $elemento == 'por_07' || $elemento == 'por_08' || $elemento == 'por_09' || $elemento == 'por_10' || $elemento == 'por_11' || $elemento == 'por_12'){                 
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
                	if($rcd.boton_m == 0){
                		$prop.visible = true                		
                	}else{
                		$prop.visible = false
                	}
                	                
                }
                if ($elemento == 'btn_men'){
                	if($rcd.boton_m == 1){
                		$prop.visible = true                		
                	}else{
                		$prop.visible = false
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
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12' ||
                    $elemento == 'por_01' || $elemento == 'por_02' || $elemento == 'por_03' || $elemento == 'por_04' || $elemento == 'por_05' || $elemento == 'por_06' ||
                    $elemento == 'por_07' || $elemento == 'por_08' || $elemento == 'por_09' || $elemento == 'por_10' || $elemento == 'por_11' || $elemento == 'por_12'){                 
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
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12' ||
                    $elemento == 'por_01' || $elemento == 'por_02' || $elemento == 'por_03' || $elemento == 'por_04' || $elemento == 'por_05' || $elemento == 'por_06' ||
                    $elemento == 'por_07' || $elemento == 'por_08' || $elemento == 'por_09' || $elemento == 'por_10' || $elemento == 'por_11' || $elemento == 'por_12'){                 
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
                    $elemento == 'dtl_07' || $elemento == 'dtl_08' || $elemento == 'dtl_09' || $elemento == 'dtl_10' || $elemento == 'dtl_11' || $elemento == 'dtl_12' ||
                    $elemento == 'por_01' || $elemento == 'por_02' || $elemento == 'por_03' || $elemento == 'por_04' || $elemento == 'por_05' || $elemento == 'por_06' ||
                    $elemento == 'por_07' || $elemento == 'por_08' || $elemento == 'por_09' || $elemento == 'por_10' || $elemento == 'por_11' || $elemento == 'por_12'){                 
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
 * @properties={typeid:24,uuid:"F3937264-A4C0-4A24-95CE-C92948E90D60"}
 */
function onAction_buscar_comprobantes(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4361666-8607-4EFA-B20E-5BA630A57B8E"}
 * @AllowToRunInFind
 */
function onAction_mas_menos(event) {	
	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"757A1534-A6E6-49A3-AC5A-D2756078EE8A"}
 */
function filtra_visibles() {
	//Colocar Titulos
	var $lbl_ano   = 'lbl_ano_tit_'
	var $lbl_mes   = 'lbl_mes_tit_'
	var $lbl_camas = 'lbl_camas_'
	var $lbl_pesos = 'lbl_pesos_'		
	var $lbl_porc  = 'lbl_porc_'
	for (var i = 0; i <= 11; i++){
		elements[$lbl_ano + i].text = globals.gbl_ano_tit[i]
	    elements[$lbl_mes + i].text = globals.gbl_mes_tit[i]
	    if (i >= globals.gbl_meses){
	    	elements[$lbl_ano + i].visible   = false
			elements[$lbl_mes + i].visible   = false
			elements[$lbl_camas + i].visible = false
			elements[$lbl_pesos + i].visible = false
			elements[$lbl_porc + i].visible  = false
	    }else{
	    	elements[$lbl_ano + i].visible   = true
			elements[$lbl_mes + i].visible   = true
			elements[$lbl_camas + i].visible = true
			elements[$lbl_pesos + i].visible = true
			elements[$lbl_porc + i].visible  = true
	    }
	}
	foundset.sort('sector asc, tipmov asc, tipoprest asc, concepto asc, subconcepto asc, tipo asc')		
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
