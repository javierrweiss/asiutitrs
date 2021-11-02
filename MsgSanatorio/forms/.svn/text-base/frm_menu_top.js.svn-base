/**
 * @properties={typeid:24,uuid:"E3C8CB4A-8670-45B8-873C-5FED454EEFEC"}
 */
function cargar_menu(){
//Armar solapas de menú
	var $ip   = application.getIPAddress()
	var $Args = new Array()
	var $SQL ="select DISTINCT tbl_itm_menu.modulo, tbl_itm_menu.tipo_item, tbl_itm_menu.nivel, tbl_itm_menu.orden, tbl_itm_menu.descripcion, " 
             +"PERF.codigo_solucion, tbl_itm_menu.parametro_sol, tbl_itm_menu.dependencia_1, tbl_itm_menu.dependencia_2, tbl_itm_menu.codigo_item, null "
	         +"from tbl_itm_menu "
             +"left join tbl_perfil_itm PERF on tbl_itm_menu.codigo_solucion = PERF.codigo_solucion "
			 +"left join tbl_permiso PERM on PERF.codigo_perfil = PERM.codigo_perfil "
             +"where (PERF.accesible = true and PERM.codigo_legajo = "
             + globals.vLega
			 if (globals.vLega == 0){
				 $SQL = $SQL + " and PERM.ip = '"
				 + $ip + "'"
			 }
			 $SQL = $SQL
             +") or tbl_itm_menu.tipo_acceso = 1 "
             +" order by tbl_itm_menu.modulo asc, tbl_itm_menu.tipo_item asc, tbl_itm_menu.nivel asc, tbl_itm_menu.orden asc"
    globals.gbl_ds22 = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    globals.gbl_max = globals.gbl_ds22.getMaxRowIndex()   
	
	if (globals.gbl_max != 0){	
		//borra items sin accesos
		var $dataArray
		$dataArray = globals.gbl_ds22.getColumnAsArray(10)
		for (var i= globals.gbl_max ; i > 0; i--){
			var $id   = 0
			var $pid1 = globals.gbl_ds22.getValue(i,8)
			var $pid2 = globals.gbl_ds22.getValue(i,9)
			var $sol  = globals.gbl_ds22.getValue(i,6)
			var $ok   = globals.gbl_ds22.getValue(i,11)
		    if($ok == null){
		    	if($sol == null){
		    		globals.gbl_ds22.removeRow(i)
		    	}else{
		    		$id = $dataArray.indexOf($pid1) + 1
		    		globals.gbl_ds22.setValue($id,11,'ok')
					$id = $dataArray.indexOf($pid2) + 1
		    		globals.gbl_ds22.setValue($id,11,'ok')
		    	}
		    }else{
		    	$id = $dataArray.indexOf($pid1) + 1
		    	globals.gbl_ds22.setValue($id,11,'ok')
				$id = $dataArray.indexOf($pid2) + 1
		    	globals.gbl_ds22.setValue($id,11,'ok')
		    }
		}
		
		var $cont_tran     = 0
		var $cont_cons     = 0
		var $cont_tabl     = 0
		
		var $modulo        = ''
		var $modulo_ant    = null
		var $tipo_item     = ''
		var $dep           = ''
		var $tipo_item_ant = null		
		var $descripcion   = ''
		var $solucion      = ''
		var $parametro_sol = ''
		var $nivel         = 0	
		 	      
  		var tr_1Args   = new Array()
  	    var tr_1Args_i = new Array()
  		var co_1Args   = new Array()
  	    var co_1Args_i = new Array()
		var tb_1Args   = new Array()
  	    var tb_1Args_i = new Array()  			

  		var $html      = ''
		for (i= 1; i <= globals.gbl_max; i++){	
			if(globals.gbl_ds22.getValue(i,10) != null){
			    $modulo        = application.getValueListDisplayValue('vl_modulo',globals.gbl_ds22.getValue(i,1))
			    $tipo_item     = application.getValueListDisplayValue('vl_tipo_item',globals.gbl_ds22.getValue(i,2))	
			    $nivel         = globals.gbl_ds22.getValue(i,3)
			    $descripcion   = globals.gbl_ds22.getValue(i,5)
			    $solucion      = globals.gbl_ds22.getValue(i,6)
			    $parametro_sol = globals.gbl_ds22.getValue(i,7)
			    $dep           = globals.gbl_ds22.getValue(i,10)
			
			    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
			    $html += '<tr>'
			    if($tipo_item_ant != $tipo_item){
				    $modulo_ant = ''
				    $tipo_item_ant = $tipo_item
			    }
			    if(globals.gbl_ds22.getValue(i,2) == 0){ // Item Menú 0-Transaciones 1-Consultas 2-Tablas
			        if($modulo_ant != $modulo){ // Poner titulo el Modulo 
			    	    $cont_tran = $cont_tran + 1
				        globals.gbl_transaccion1_sol[$cont_tran] = $solucion
				        globals.gbl_transaccion1_par[$cont_tran] = $parametro_sol
				        globals.gbl_transaccion1_dir[$cont_tran] = 0
				        globals.gbl_transaccion1_dep[$cont_tran] = 0
				        $html += '<td width=292>&#160 &#160 &#160' + '    │<B>' + $modulo + '</B></td>'				    				    
					    $html += '</tr>'
					    $html += '</table></body></html>'
				        tr_1Args.push($html)
				        tr_1Args_i.push($cont_tran)
					    $modulo_ant = $modulo
					    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
					    $html += '<tr>'
			        }
				    if($nivel == 1){
				        $cont_tran = $cont_tran + 1				    
				        globals.gbl_transaccion1_sol[$cont_tran] = $solucion
				        globals.gbl_transaccion1_par[$cont_tran] = $parametro_sol
				        globals.gbl_transaccion1_dir[$cont_tran] = 1
				        globals.gbl_transaccion1_dep[$cont_tran] = $dep
				        $html += '<td width=290>&#160 &#160 &#160' + '    │&#160 &#160 &#160' + $descripcion.substr(0,44) + '</td>'
				        if($solucion == null){	
				    	    $html += '<td width=10>' + '  ►' +'</td>'	
				        }else{		
				    	    $html += '<td width=10>' + '   ' +'</td>'
				        }				    
					    $html += '</tr>'
					    $html += '</table></body></html>'
				        tr_1Args.push($html)
				        tr_1Args_i.push($cont_tran)				
				    }
			    }else{				
				    if(globals.gbl_ds22.getValue(i,2) == 1){// Item Menú 0-Transaciones 1-Consultas 2-Tablas
					    if($modulo_ant != $modulo){ // Poner titulo el Modulo
				    	    $cont_cons = $cont_cons + 1					    
					        globals.gbl_consulta1_sol[$cont_cons] = $solucion
					        globals.gbl_consulta1_par[$cont_cons] = $parametro_sol
					        globals.gbl_consulta1_dir[$cont_cons] = 0
					        globals.gbl_consulta1_dep[$cont_cons] = 0
					        $html += '<td width=292>&#160 &#160 &#160' + '    │<B>' + $modulo + '</B></td>'				    				    
						    $html += '</tr>'
						    $html += '</table></body></html>'
					        co_1Args.push($html)
					        co_1Args_i.push($cont_cons)						
						    $modulo_ant = $modulo
						    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
						    $html += '<tr>'
				        }
					    if($nivel == 1){
					        $cont_cons = $cont_cons + 1					    
					        globals.gbl_consulta1_sol[$cont_cons] = $solucion
					        globals.gbl_consulta1_par[$cont_cons] = $parametro_sol
					        globals.gbl_consulta1_dir[$cont_cons] = 1
					        globals.gbl_consulta1_dep[$cont_cons] = $dep
					        $html += '<td width=290>&#160 &#160 &#160' + '    │&#160 &#160 &#160' + $descripcion.substr(0,44) + '</td>'
					        if($solucion == null){	
					    	    $html += '<td width=10>' + '  ►' +'</td>'	
					        }else{		
					    	    $html += '<td width=10>' + '   ' +'</td>'
					        }				    
						    $html += '</tr>'
						    $html += '</table></body></html>'
					        co_1Args.push($html)
					        co_1Args_i.push($cont_cons)					
					    }					
				    }else{
					    if($modulo_ant != $modulo){ // Poner titulo el Modulo
				    	    $cont_tabl = $cont_tabl + 1					    
					        globals.gbl_tabla1_sol[$cont_tabl] = $solucion
					        globals.gbl_tabla1_par[$cont_tabl] = $parametro_sol
					        globals.gbl_tabla1_dir[$cont_tabl] = 0
					        globals.gbl_tabla1_dep[$cont_tabl] = 0
						    $html += '<td width=292>&#160 &#160 &#160' + '    │<B>' + $modulo + '</B></td>'				    				    
						    $html += '</tr>'
						    $html += '</table></body></html>'
					        tb_1Args.push($html)
					        tb_1Args_i.push($cont_tabl)						
						    $modulo_ant = $modulo
						    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
						    $html += '<tr>'
				        }
					    if($nivel == 1){
					        $cont_tabl = $cont_tabl + 1					    
					        globals.gbl_tabla1_sol[$cont_tabl] = $solucion
					        globals.gbl_tabla1_par[$cont_tabl] = $parametro_sol
					        globals.gbl_tabla1_dir[$cont_tabl] = 1
					        globals.gbl_tabla1_dep[$cont_tabl] = $dep
					        $html += '<td width=290>&#160 &#160 &#160' + '    │&#160 &#160 &#160' + $descripcion.substr(0,44) + '</td>'
					        if($solucion == null){	
					    	    $html += '<td width=10>' + '  ►' +'</td>'	
					        }else{		
					    	    $html += '<td width=10>' + '   ' +'</td>'
					        }				    
						    $html += '</tr>'
						    $html += '</table></body></html>'
					        tb_1Args.push($html)
					        tb_1Args_i.push($cont_tabl)
					    }
					}
				}
			}
		}
		application.setValueListItems('vl_transacciones',tr_1Args, tr_1Args_i)		
		application.setValueListItems('vl_consulta',co_1Args, co_1Args_i)		
		application.setValueListItems('vl_tabla',tb_1Args, tb_1Args_i)
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2FABB9C-AAE6-4C78-AEA3-7689DF6160A7"}
 */
function onAction_abrir_itm_transacciones(event) {
	cierra_items()
	var $alt = 8
	var $max =  550
	var $top = globals.gbl_transaccion1_sol.length - 1 
	if($top > 1){
	    for (var i = 1; i <= $top; i++){
		    $alt = $alt+15		    			
	    }
	    if($alt > $max){
	    	$alt = $max
	    }
	    elements.com_transacciones.setSize(335,$alt)	
	    globals.gbl_transacciones   = 1
	    globals.gbl_transacciones_1 = 0
	    globals.gbl_transacciones_2 = 0
	    elements.com_transacciones.visible = true
	    elements.com_transacciones.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98688E92-B774-4980-9794-AC45BF2B460D"}
 */
function onAction_abrir_itm_consultas(event) {
	cierra_items()
	var $alt = 8
	var $max = 550
	var $top = globals.gbl_consulta1_sol.length - 1
	if($top > 1){
	    for (var i = 1; i <= $top; i++){
		    $alt = $alt+15		    			
	    }
	    if($alt > $max){
	    	$alt = $max
	    }
	    elements.com_consultas.setSize(335,$alt)	
	    globals.gbl_consultas   = 1
	    globals.gbl_consultas_1 = 0
	    globals.gbl_consultas_2 = 0
	    elements.com_consultas.visible = true
	    elements.com_consultas.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"221607AE-06AC-4795-A42E-FD9D153B5587"}
 */
function onAction_abrir_itm_tablas(event) {
	cierra_items()
	var $alt = 8
	var $max = 550
	var $top = globals.gbl_tabla1_sol.length - 1	
	if($top > 1){
	    for (var i = 1; i <= $top; i++){
			$alt = $alt+15		   		
	    }
	    if($alt > $max){
	    	$alt = $max
	    }
	    elements.com_tablas.setSize(335,$alt)
	    globals.gbl_tablas   = 1
	    globals.gbl_tablas_1 = 0
	    globals.gbl_tablas_2 = 0
	    elements.com_tablas.visible = true
	    elements.com_tablas.requestFocus()
	}
}
/**
 * @properties={typeid:24,uuid:"C4750214-44F1-411A-90F2-AC4EA5C4E54E"}
 */
function cierra_items() {		
	elements.com_transacciones.visible   = false
	elements.com_transacciones_1.visible = false
	elements.com_transacciones_2.visible = false
	elements.com_consultas.visible       = false
	elements.com_consultas_1.visible     = false
	elements.com_consultas_2.visible     = false
	elements.com_tablas.visible          = false
	elements.com_tablas_1.visible        = false
	elements.com_tablas_2.visible        = false
	forms.frm_menu.elements.com_sanatorio.visible = false
}
/**
 * @properties={typeid:24,uuid:"82D28DDF-6F24-4AD1-99B6-ECB60D95862F"}
 */
function cierra_transacciones(){
	var $item = globals.gbl_transacciones_1
	if($item == 0){
	    elements.com_transacciones.visible   = false
		elements.com_transacciones_1.visible = false
		elements.com_transacciones_2.visible = false
	}
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C3A5986C-6254-40CF-BF9A-F01940B75BB8"}
 */
function onDataChange_opcion_transacciones(oldValue, newValue, event) {
	opcion_transacciones()
	return true
}

/**
 * Handle focus lost event of the element.
 *
 //* @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"447065A0-39AD-4B58-9F94-1A1223A3F208"}
 */
function onFocusLost_cierra_itm_transacciones_1() {
	var $item = globals.gbl_transacciones_1
	if(globals.gbl_transaccion2_dep[$item] == 0){
		elements.com_transacciones.visible   = false
	    elements.com_transacciones_1.visible = false
		elements.com_transacciones_2.visible = false
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F71EF87D-2E8E-4902-9A75-5265FD3980FA"}
 */
function onDataChange_opcion_transacciones_1(oldValue, newValue, event) {
	opcion_transacciones_1()
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"201BE693-D1F4-4512-8148-B0DDDD064BD2"}
 */
function onFocusLost_cierra_itm_transacciones_2(event) {
    elements.com_transacciones_2.visible = false
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A8F76FFF-F4BF-4C23-A55B-B88C9A1FCA49"}
 */
function onDataChange_opcion_transacciones_2(oldValue, newValue, event) {
	opcion_transacciones_2()
	return true
}

/**
 * @properties={typeid:24,uuid:"35726B19-F65C-4A34-B143-44DA01F09088"}
 */
function opcion_transacciones() {	
	elements.com_transacciones_1.visible = false
	elements.com_transacciones_2.visible = false
	var $item = globals.gbl_transacciones
	if(globals.gbl_transaccion1_dir[$item] == 1){
		var $solucion      = globals.gbl_transaccion1_sol[$item]
	    var $parametro_sol = globals.gbl_transaccion1_par[$item]
	       
	    if($solucion == null){
	    	var $cont_tran   = 0
	        var $dep         = ''
	        var $tipo_item   = null
	
	        var $descripcion = ''
	        $solucion        = ''
	        $parametro_sol   = ''
	        var $nivel       = 0      
	        var tr_2Args     = new Array()
	        var tr_2Args_i   = new Array()	
	        
			var $html        = ''
	        for (var i= 1; i <= globals.gbl_max; i++){
		        $tipo_item     = utils.stringToNumber(globals.gbl_ds22.getValue(i,2))
		        $nivel         = globals.gbl_ds22.getValue(i,3)
		        $descripcion   = globals.gbl_ds22.getValue(i,5)
		        $solucion      = globals.gbl_ds22.getValue(i,6)
		        $parametro_sol = globals.gbl_ds22.getValue(i,7)
		        $dep           = globals.gbl_ds22.getValue(i,8)
	            if($nivel == 2 && $tipo_item== 0 && globals.gbl_transaccion1_dep[$item]==$dep){
		            $cont_tran = $cont_tran + 1
		            $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
		            $html += '<tr>'
		            globals.gbl_transaccion2_sol[$cont_tran] = $solucion
		            globals.gbl_transaccion2_par[$cont_tran] = $parametro_sol
		            globals.gbl_transaccion2_dir[$cont_tran] = 1
		            globals.gbl_transaccion2_dep[$cont_tran] = globals.gbl_ds22.getValue(i,10)
		            $html += '<td width=290>&#160 &#160 &#160' + '    │' + $descripcion.substr(0,44) + '</td>'
		            if($solucion == null){	
		    	        $html += '<td width=10>' + '  ►' +'</td>'	
		            }else{		
		    	        $html += '<td width=10>' + '   ' +'</td>'
		            }				    
			        $html += '</tr>'
			        $html += '</table></body></html>'
		            tr_2Args.push($html)
		            tr_2Args_i.push($cont_tran)						
		        }
	        }	
	        application.setValueListItems('vl_transacciones_1',tr_2Args, tr_2Args_i)
		    
			var $mouse = java.awt.MouseInfo.getPointerInfo().getLocation()	       
	        var $y       = $mouse.y - 18 
	    	var $alt     = $y
			var $alt_itm = 8
			var $max     = 600
			var $top     = $cont_tran 
			for (i = 1; i <= $top; i++){
				$alt_itm = $alt_itm +15
				$alt     = $alt + 15
			}
	        if($alt > $max){
	        	$y = $max - $alt_itm
	        }
			elements.com_transacciones_1.setSize(335,$alt_itm)
			elements.com_transacciones_1.setLocation(347,$y)
		    elements.com_transacciones_1.visible = true	        
		    globals.gbl_transacciones_1 = 0	
	    }else{
	    	// buscar los elementos expandidos
	    	globals.gbl_expanding_Nodes = new Array()
	    	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
		    for(var j=0;j< $maxi ;j++){		    	
			    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
			    	globals.gbl_expanding_Nodes[j]= j
				}else{
					globals.gbl_expanding_Nodes[j]= 0
				}					
		    }
		    var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
		             +';'+globals.gbl_expanding_Nodes
			if(utils.stringTrim($solucion)=='AsiCirTrs_ProtAmbu'||utils.stringTrim($solucion)=='AtencionConsultorio'){
					application.closeSolution(utils.stringTrim($solucion),'llamada_a_'+utils.stringTrim($solucion),args)
			}else{
					application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
			}		 
            //application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)		    			
	    }	    
	}
}

/**
 * @properties={typeid:24,uuid:"5B77D90B-1BEF-41E4-92F1-AA0CEB15D241"}
 */
function opcion_transacciones_1() {	
	var $item = globals.gbl_transacciones_1
	if(globals.gbl_transaccion2_dir[$item] == 1){
		var $solucion      = globals.gbl_transaccion2_sol[$item]
	    var $parametro_sol = globals.gbl_transaccion2_par[$item]
	    
	    if($solucion == null){
	    	var $cont_tran   = 0
	        var $dep         = ''
	        var $tipo_item   = null
	
	        var $descripcion = ''
	        $solucion        = ''
	        $parametro_sol   = ''
	        var $nivel       = 0      
	        var tr_3Args     = new Array()
	        var tr_3Args_i   = new Array()	
	        
			var $html        = ''
	        for (var i= 1; i <= globals.gbl_max; i++){
		        $tipo_item     = utils.stringToNumber(globals.gbl_ds22.getValue(i,2))
				$nivel         = globals.gbl_ds22.getValue(i,3)
		        $descripcion   = globals.gbl_ds22.getValue(i,5)
		        $solucion      = globals.gbl_ds22.getValue(i,6)
		        $parametro_sol = globals.gbl_ds22.getValue(i,7)
		        $dep           = globals.gbl_ds22.getValue(i,9)
	            if($nivel == 3 && $tipo_item== 0 && globals.gbl_transaccion2_dep[$item]==$dep){
	            	$cont_tran = $cont_tran + 1
	            	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
		            $html += '<tr>'
					globals.gbl_transaccion3_sol[$cont_tran] = $solucion
	                globals.gbl_transaccion3_par[$cont_tran] = $parametro_sol
	                globals.gbl_transaccion3_dir[$cont_tran] = 1
	                globals.gbl_transaccion3_dep[$cont_tran] = globals.gbl_ds22.getValue(i,10)
	                $html += '<td width=290>&#160 &#160 &#160' + '    │' + $descripcion.substr(0,44) + '</td>'
	                if($solucion == null){	
	    	            $html += '<td width=10>' + '  ►' +'</td>'	
	                }else{		
	    	            $html += '<td width=10>' + '   ' +'</td>'
	                }				    
		            $html += '</tr>'
		            $html += '</table></body></html>'
	                tr_3Args.push($html)
	                tr_3Args_i.push($cont_tran)
	            }
	        }
	  
	        application.setValueListItems('vl_transacciones_2',tr_3Args, tr_3Args_i)
			
			var $mouse = java.awt.MouseInfo.getPointerInfo().getLocation()	       
	        var $y       = $mouse.y - 18 
	    	var $alt     = $y
			var $alt_itm = 8
			var $max     = 600
			var $top     = $cont_tran 
			for (i = 1; i <= $top; i++){
				$alt_itm = $alt_itm +15
				$alt     = $alt + 15
			}
	        if($alt > $max){
	        	$y = $max - $alt_itm
	        }			
            
			elements.com_transacciones_2.setSize(310,$alt_itm)
			elements.com_transacciones_2.setLocation(677,$y)
		    elements.com_transacciones_2.visible = true	        	
		    globals.gbl_transacciones_2 = 0		
	    }else{
	    	// buscar los elementos expandidos
	    	globals.gbl_expanding_Nodes = new Array()
	    	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
		    for(var j=0;j< $maxi ;j++){		    	
			    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
			    	globals.gbl_expanding_Nodes[j]= j
				}else{
					globals.gbl_expanding_Nodes[j]= 0
				}					
		    }
		    var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
		             +';'+globals.gbl_expanding_Nodes
					 
			if(utils.stringTrim($solucion)=='AsiCirTrs_ProtAmbu'||utils.stringTrim($solucion)=='AtencionConsultorio'){
						application.closeSolution(utils.stringTrim($solucion),'llamada_a_'+utils.stringTrim($solucion),args)
			}else{
						application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
			}		 
			//application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
	    }
	}	
}

/**
 * @properties={typeid:24,uuid:"17837D41-1D76-4A47-8089-36B6173336A1"}
 */
function opcion_transacciones_2() {
	var $item          = globals.gbl_transacciones_2
	var $solucion      = globals.gbl_transaccion3_sol[$item]
	var $parametro_sol = globals.gbl_transaccion3_par[$item]
	var dataset = application.getValueListItems('vl_transacciones_2')
	
	// buscar los elementos expandidos
	globals.gbl_expanding_Nodes = new Array()
	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
    for(var j=0;j< $maxi ;j++){		    	
	    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
	    	globals.gbl_expanding_Nodes[j]= j
		}else{
			globals.gbl_expanding_Nodes[j]= 0
		}					
    }
	globals.gbl_title = dataset.getValue(utils.stringToNumber(globals.gbl_transacciones_2),1)	
	var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
	         +';'+globals.gbl_expanding_Nodes
	if(utils.stringTrim($solucion)=='AsiCirTrs_ProtAmbu'||utils.stringTrim($solucion)=='AtencionConsultorio'){
			application.closeSolution(utils.stringTrim($solucion),'llamada_a_'+utils.stringTrim($solucion),args)
	}else{
			application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
	}		 
    //application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
}

/**
 * @properties={typeid:24,uuid:"CE084591-094C-4E87-863B-CEC74E55E027"}
 */
function cierra_consultas(){
	var $item = globals.gbl_consultas_1
	if($item == 0){
	    elements.com_consultas.visible   = false
		elements.com_consultas_1.visible = false
		elements.com_consultas_2.visible = false
	}
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"E3E6846F-E0E8-4EC9-926E-1DC403742E74"}
 */
function onDataChange_opcion_consultas(oldValue, newValue, event) {
	opcion_consultas()
	return true
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"2A15F890-F8DD-4F8B-A89A-B0AD36E70164"}
 */
function onFocusLost_cierra_itm_consultas_1(event) {
	var $item = globals.gbl_consultas_1
	if(globals.gbl_consulta2_dep[$item] == 0){
		elements.com_consultas.visible   = false
	    elements.com_consultas_1.visible = false
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 * 
 *
 * @properties={typeid:24,uuid:"5036DCC8-3419-40E0-928B-65A4E08B1E8D"}
 */
function onDataChange_opcion_consultas_1(oldValue, newValue, event) {
	opcion_consultas_1()
	return true
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"63ECF026-0481-49BA-97DB-19B298B30403"}
 */
function onFocusLost_cierra_itm_consultas_2(event) {
    elements.com_consultas_2.visible = false
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 * 
 *
 * @properties={typeid:24,uuid:"D93A568F-7726-40F3-8169-70A532D18917"}
 */
function onDataChange_opcion_consultas_2(oldValue, newValue, event) {
	opcion_consultas_2()
	return true
}

/**
 * @properties={typeid:24,uuid:"2C4C3476-7366-4FDD-9297-71F0A2CA2916"}
 */
function opcion_consultas(){
	elements.com_consultas_1.visible = false
	elements.com_consultas_2.visible = false
	var $item = globals.gbl_consultas
	if(globals.gbl_consulta1_dir[$item] == 1){
		var $solucion      = globals.gbl_consulta1_sol[$item]
	    var $parametro_sol = globals.gbl_consulta1_par[$item]
	      
	    if($solucion == null){
	    	var $cont_cons   = 0
	        var $dep         = ''
	        var $tipo_item   = null
	
	        var $descripcion = ''
	        $solucion        = ''
	        $parametro_sol   = ''
	        var $nivel       = 0      
	        var co_2Args     = new Array()
	        var co_2Args_i   = new Array()	
	        
			var $html        = ''
	        for (var i= 1; i <= globals.gbl_max; i++){
		        $tipo_item     = utils.stringToNumber(globals.gbl_ds22.getValue(i,2))
		        $nivel         = globals.gbl_ds22.getValue(i,3)
		        $descripcion   = globals.gbl_ds22.getValue(i,5)
		        $solucion      = globals.gbl_ds22.getValue(i,6)
		        $parametro_sol = globals.gbl_ds22.getValue(i,7)
		        $dep           = globals.gbl_ds22.getValue(i,8)
	            if($nivel == 2 && $tipo_item== 1 && globals.gbl_consulta1_dep[$item]==$dep){
		            $cont_cons = $cont_cons + 1
		            $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
		            $html += '<tr>'
		            globals.gbl_consulta2_sol[$cont_cons] = $solucion
		            globals.gbl_consulta2_par[$cont_cons] = $parametro_sol
		            globals.gbl_consulta2_dir[$cont_cons] = 1
		            globals.gbl_consulta2_dep[$cont_cons] = globals.gbl_ds22.getValue(i,10)
		            $html += '<td width=320>&#160 &#160 &#160' + '    │' + $descripcion.substr(0,44) + '</td>'
		            if($solucion == null){	
		    	        $html += '<td width=10>' + '  ►' +'</td>'	
		            }else{		
		    	        $html += '<td width=10>' + '   ' +'</td>'
		            }				    
			        $html += '</tr>'
			        $html += '</table></body></html>'
		            co_2Args.push($html)
		            co_2Args_i.push($cont_cons)						
		        }
	        }	
	        application.setValueListItems('vl_consulta_1',co_2Args, co_2Args_i)
		
			var $mouse = java.awt.MouseInfo.getPointerInfo().getLocation()	       
	        var $y       = $mouse.y - 18 
	    	var $alt     = $y
			var $alt_itm = 8
			var $max     = 600
			var $top     = $cont_cons 
			for (i = 1; i <= $top; i++){
				$alt_itm = $alt_itm +15
				$alt     = $alt + 15
			}
            if($alt > $max){
            	$y = $max - $alt_itm	            
	        }			
			
			elements.com_consultas_1.setSize(342,$alt_itm)
			elements.com_consultas_1.setLocation(449,$y)
		    elements.com_consultas_1.visible = true			
		    globals.gbl_consultas_1 = 0	
	    }else{
	    	// buscar los elementos expandidos
	    	globals.gbl_expanding_Nodes = new Array()
	    	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
		    for(var j=0;j< $maxi ;j++){		    	
			    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
			    	globals.gbl_expanding_Nodes[j]= j
				}else{
					globals.gbl_expanding_Nodes[j]= 0
				}					
		    }
		    var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
		             +';'+globals.gbl_expanding_Nodes  
			if(utils.stringTrim($solucion)=='AsiCirTrs_ProtAmbu'||utils.stringTrim($solucion)=='AtencionConsultorio'){
					application.closeSolution(utils.stringTrim($solucion),'llamada_a_'+utils.stringTrim($solucion),args)
			}else{
					application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
			}		 
			//application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
	    }	    
	}
}

/**
 * @properties={typeid:24,uuid:"758597BB-B1F3-498F-BDB7-5DA8E6E0ABCF"}
 */
function opcion_consultas_1() {	
	var $item = globals.gbl_consultas_1
	if(globals.gbl_consulta2_dir[$item] == 1){
		var $solucion      = globals.gbl_consulta2_sol[$item]
	    var $parametro_sol = globals.gbl_consulta2_par[$item]
	        
	    if($solucion == null){
	    	var $cont_cons   = 0
	        var $dep         = ''
	        var $tipo_item   = null
	
	        var $descripcion = ''
	        $solucion        = ''
	        $parametro_sol   = ''
	        var $nivel       = 0      
	        var co_3Args     = new Array()
	        var co_3Args_i   = new Array()	
	        
			var $html        = ''
	        for (var i= 1; i <= globals.gbl_max; i++){
		        $tipo_item     = utils.stringToNumber(globals.gbl_ds22.getValue(i,2))
				$nivel         = globals.gbl_ds22.getValue(i,3)
		        $descripcion   = globals.gbl_ds22.getValue(i,5)
		        $solucion      = globals.gbl_ds22.getValue(i,6)
		        $parametro_sol = globals.gbl_ds22.getValue(i,7)
		        $dep           = globals.gbl_ds22.getValue(i,9)
	            if($nivel == 3 && $tipo_item== 1 && globals.gbl_consulta2_dep[$item]==$dep){
	            	$cont_cons = $cont_cons + 1
	            	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
		            $html += '<tr>'
					globals.gbl_consulta3_sol[$cont_cons] = $solucion
	                globals.gbl_consulta3_par[$cont_cons] = $parametro_sol
	                globals.gbl_consulta3_dir[$cont_cons] = 1
	                globals.gbl_consulta3_dep[$cont_cons] = globals.gbl_ds22.getValue(i,10)
	                $html += '<td width=290>&#160 &#160 &#160' + '    │' + $descripcion.substr(0,44) + '</td>'
	                if($solucion == null){	
	    	            $html += '<td width=10>' + '  ►' +'</td>'	
	                }else{		
	    	            $html += '<td width=10>' + '   ' +'</td>'
	                }				    
		            $html += '</tr>'
		            $html += '</table></body></html>'
	                co_3Args.push($html)
	                co_3Args_i.push($cont_cons)
	            }
	        }
	        application.setValueListItems('vl_consulta_2',co_3Args, co_3Args_i)
			
			var $mouse = java.awt.MouseInfo.getPointerInfo().getLocation()	       
	        var $y       = $mouse.y - 18 
	    	var $alt     = $y
			var $alt_itm = 8
			var $max     = 600
			var $top     = $cont_cons 
			for (i = 1; i <= $top; i++){
				$alt_itm = $alt_itm +15
				$alt     = $alt + 15
			}
	        if($alt > $max){
	        	$y = $max - $alt_itm
	        }			
            
			elements.com_consultas_2.setSize(330,$alt_itm)
			elements.com_consultas_2.setLocation(791,$y)
		    elements.com_consultas_2.visible = true	        
		    globals.gbl_consultas_2 = 0	
	    }else{
	    	// buscar los elementos expandidos
	    	globals.gbl_expanding_Nodes = new Array()
	    	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
		    for(var j=0;j< $maxi ;j++){		    	
			    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
			    	globals.gbl_expanding_Nodes[j]= j
				}else{
					globals.gbl_expanding_Nodes[j]= 0
				}					
		    }
		    var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
		             +';'+globals.gbl_expanding_Nodes
			if(utils.stringTrim($solucion)=='AsiCirTrs_ProtAmbu'||utils.stringTrim($solucion)=='AtencionConsultorio'){
					application.closeSolution(utils.stringTrim($solucion),'llamada_a_'+utils.stringTrim($solucion),args)
			}else{
					application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
			}
			//application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
	    }
	}	
}

/**
 * @properties={typeid:24,uuid:"345BA742-EBC1-479E-85C7-807129615E0C"}
 */
function opcion_consultas_2() {
	var $item          = globals.gbl_consultas_2
	var $solucion      = globals.gbl_consulta3_sol[$item]
	var $parametro_sol = globals.gbl_consulta3_par[$item]
	
	// buscar los elementos expandidos
	globals.gbl_expanding_Nodes = new Array()
	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
    for(var j=0;j< $maxi ;j++){		    	
	    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
	    	globals.gbl_expanding_Nodes[j]= j
		}else{
			globals.gbl_expanding_Nodes[j]= 0
		}					
    }
	globals.gbl_title = dataset.getValue(utils.stringToNumber(globals.gbl_consultas_2),1)	
	var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
	         +';'+globals.gbl_expanding_Nodes 
	if(utils.stringTrim($solucion)=='AsiCirTrs_ProtAmbu'||utils.stringTrim($solucion)=='AtencionConsultorio'){
			application.closeSolution(utils.stringTrim($solucion),'llamada_a_'+utils.stringTrim($solucion),args)
	}else{
			application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
	}		 
	//application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
}

/**
 * @properties={typeid:24,uuid:"54DCA95D-4889-4B49-AB14-F1BFE81B4EE7"}
 */
function cierra_tablas(){
	var $item = globals.gbl_tablas_1
	if($item == 0){
	    elements.com_tablas.visible   = false
		elements.com_tablas_1.visible = false
		elements.com_tablas_2.visible = false
	}
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"75BBE9D1-8870-48D1-81EF-363C6524D8D6"}
 */
function onDataChange_opcion_tablas(oldValue, newValue, event) {
	opcion_tablas()
	return true
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"0EA0DE7B-A158-464E-B051-5EA3D86B613C"}
 */
function onFocusLost_cierra_itm_tablas_1(event) {
	var $item = globals.gbl_tablas_1
	if(globals.gbl_tabla2_dep[$item] == 0){
		elements.com_tablas.visible   = false
	    elements.com_tablas_1.visible = false
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 * 
 *
 * @properties={typeid:24,uuid:"F17A5454-4B96-42E0-B7CC-98FF937D8081"}
 */
function onDataChange_opcion_tablas_1(oldValue, newValue, event) {
	opcion_tablas_1()
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E93E53DA-F75B-4796-8960-97975652BE82"}
 */
function onFocusLost_cierra_itm_tablas_2(event) {
    elements.com_tablas_2.visible = false
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 * 
 *
 * @properties={typeid:24,uuid:"7B77AF44-22AA-41C8-ADB3-11424BBA17FD"}
 */
function onDataChange_opcion_tablas_2(oldValue, newValue, event) {
	opcion_tablas_2()
	return true
}

/**
 * @properties={typeid:24,uuid:"D1F7B0DF-7225-4690-8C18-96D075C56658"}
 */
function opcion_tablas() {
	elements.com_tablas_1.visible = false
	elements.com_tablas_2.visible = false
	var $item = globals.gbl_tablas
	if(globals.gbl_tabla1_dir[$item] == 1){
		var $solucion      = globals.gbl_tabla1_sol[$item]
	    var $parametro_sol = globals.gbl_tabla1_par[$item]
	    	    
	    if($solucion == null){
	    	var $cont_tabl   = 0
	        var $dep         = ''
	        var $tipo_item   = null
	
	        var $descripcion = ''
	        $solucion        = ''
	        $parametro_sol   = ''
	        var $nivel       = 0      
	        var tb_2Args     = new Array()
	        var tb_2Args_i   = new Array()	
	        
			var $html        = ''
	        for (var i= 1; i <= globals.gbl_max; i++){
		        $tipo_item     = utils.stringToNumber(globals.gbl_ds22.getValue(i,2))
		        $nivel         = globals.gbl_ds22.getValue(i,3)
		        $descripcion   = globals.gbl_ds22.getValue(i,5)
		        $solucion      = globals.gbl_ds22.getValue(i,6)
		        $parametro_sol = globals.gbl_ds22.getValue(i,7)
		        $dep           = globals.gbl_ds22.getValue(i,8)
	            if($nivel == 2 && $tipo_item== 2 && globals.gbl_tabla1_dep[$item]==$dep){
		            $cont_tabl = $cont_tabl + 1
		            $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
		            $html += '<tr>'
		            globals.gbl_tabla2_sol[$cont_tabl] = $solucion
		            globals.gbl_tabla2_par[$cont_tabl] = $parametro_sol
		            globals.gbl_tabla2_dir[$cont_tabl] = 1
		            globals.gbl_tabla2_dep[$cont_tabl] = globals.gbl_ds22.getValue(i,10)
		            $html += '<td width=290>&#160 &#160 &#160' + '    │' + $descripcion.substr(0,44) + '</td>'
		            if($solucion == null){	
		    	        $html += '<td width=10>' + '  ►' +'</td>'	
		            }else{		
		    	        $html += '<td width=10>' + '   ' +'</td>'
		            }				    
			        $html += '</tr>'
			        $html += '</table></body></html>'
		            tb_2Args.push($html)
		            tb_2Args_i.push($cont_tabl)						
		        }
	        }	
	        application.setValueListItems('vl_tabla_1',tb_2Args, tb_2Args_i)
		
			var $mouse = java.awt.MouseInfo.getPointerInfo().getLocation()	       
	        var $y       = $mouse.y - 18 
	    	var $alt     = $y
			var $alt_itm = 8
			var $max     = 600
			var $top     = $cont_tabl 
			for (i = 1; i <= $top; i++){
				$alt_itm = $alt_itm +15
				$alt     = $alt + 15
			}
	        if($alt > $max){
	        	$y = $max - $alt_itm
	        }
			
			elements.com_tablas_1.setSize(335,$alt_itm)
			elements.com_tablas_1.setLocation(523,$y)
		    elements.com_tablas_1.visible = true	        	
		    globals.gbl_tablas_1 = 0	
	    }else{
	    	// buscar los elementos expandidos
	    	globals.gbl_expanding_Nodes = new Array()
	    	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
		    for(var j=0;j< $maxi ;j++){		    	
			    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
			    	globals.gbl_expanding_Nodes[j]= j
				}else{
					globals.gbl_expanding_Nodes[j]= 0
				}					
		    }
		    var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
		             +';'+globals.gbl_expanding_Nodes
			application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
	    }	    
	}
}

/**
 * @properties={typeid:24,uuid:"E1A0956A-3D5F-45BA-BBC8-DEACD1D4833D"}
 */
function opcion_tablas_1() {	
	var $item = globals.gbl_tablas_1
	if(globals.gbl_tabla2_dir[$item] == 1){
		var $solucion      = globals.gbl_tabla2_sol[$item]
	    var $parametro_sol = globals.gbl_tabla2_par[$item]
	    	    
	    if($solucion == null){
	    	var $cont_tabl   = 0
	        var $dep         = ''
	        var $tipo_item   = null
	
	        var $descripcion = ''
	        $solucion        = ''
	        $parametro_sol   = ''
	        var $nivel       = 0      
	        var tb_3Args     = new Array()
	        var tb_3Args_i   = new Array()	
	        
			var $html        = ''
	        for (var i= 1; i <= globals.gbl_max; i++){
		        $tipo_item     = utils.stringToNumber(globals.gbl_ds22.getValue(i,2))
				$nivel         = globals.gbl_ds22.getValue(i,3)
		        $descripcion   = globals.gbl_ds22.getValue(i,5)
		        $solucion      = globals.gbl_ds22.getValue(i,6)
		        $parametro_sol = globals.gbl_ds22.getValue(i,7)
		        $dep           = globals.gbl_ds22.getValue(i,9)
	            if($nivel == 3 && $tipo_item== 2 && globals.gbl_tabla2_dep[$item]==$dep){
	            	$cont_tabl = $cont_tabl + 1
	            	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
		            $html += '<tr>'
					globals.gbl_tabla3_sol[$cont_tabl] = $solucion
	                globals.gbl_tabla3_par[$cont_tabl] = $parametro_sol
	                globals.gbl_tabla3_dir[$cont_tabl] = 1
	                globals.gbl_tabla3_dep[$cont_tabl] = globals.gbl_ds22.getValue(i,10)
	                $html += '<td width=290>&#160 &#160 &#160' + '    │' + $descripcion.substr(0,44) + '</td>'
	                if($solucion == null){	
	    	            $html += '<td width=10>' + '  ►' +'</td>'	
	                }else{		
	    	            $html += '<td width=10>' + '   ' +'</td>'
	                }				    
		            $html += '</tr>'
		            $html += '</table></body></html>'
	                tb_3Args.push($html)
	                tb_3Args_i.push($cont_tabl)
	            }
	        }
	        application.setValueListItems('vl_tabla_2',tb_3Args, tb_3Args_i)
			
			var $mouse = java.awt.MouseInfo.getPointerInfo().getLocation()	       
	        var $y       = $mouse.y - 18 
	    	var $alt     = $y
			var $alt_itm = 8
			var $max     = 600
			var $top     = $cont_tabl 
			for (i = 1; i <= $top; i++){
				$alt_itm = $alt_itm +15
				$alt     = $alt + 15
			}
	        if($alt > $max){
	        	$y = $max - $alt_itm
	        }	
 
			elements.com_tablas_2.setSize(310,$alt_itm)
			elements.com_tablas_2.setLocation(853,$y)
		    elements.com_tablas_2.visible = true	        	
		    globals.gbl_tablas_2 = 0	
	    }else{
	    	// buscar los elementos expandidos
	    	globals.gbl_expanding_Nodes = new Array()
	    	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
		    for(var j=0;j< $maxi ;j++){		    	
			    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
			    	globals.gbl_expanding_Nodes[j]= j
				}else{
					globals.gbl_expanding_Nodes[j]= 0
				}					
		    }
		    var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
		             +';'+globals.gbl_expanding_Nodes
			application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
	    }
	}	
}

/**
 * @properties={typeid:24,uuid:"4F4E27ED-B5E7-4056-A1F1-44F1001C3AB4"}
 */
function opcion_tablas_2() {	
	var $item          = globals.gbl_tablas_2
	var $solucion      = globals.gbl_tabla3_sol[$item]
	var $parametro_sol = globals.gbl_tabla3_par[$item]
	
	// buscar los elementos expandidos
	globals.gbl_expanding_Nodes = new Array()
	var $maxi = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
    for(var j=0;j< $maxi ;j++){		    	
	    if(forms.frm_menu_treeview.elements.treeview.isNodeExpanded(j)== true){				   
	    	globals.gbl_expanding_Nodes[j]= j
		}else{
			globals.gbl_expanding_Nodes[j]= 0
		}					
    }
	
	var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
	         +';'+globals.gbl_expanding_Nodes  
	application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',args)
}
