/**
 * @properties={typeid:35,uuid:"24F46D69-7BEE-44A5-9D30-F7A6BF257346",variableType:-4}
 */
var frm_ds; 
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFD07C86-B956-40CC-8F7D-9728EE2DD8CD"}
 */
var frm_ip = '';

/**
 * @properties={typeid:35,uuid:"ABBE8BB1-CFE6-4BCB-97BB-69D87E07AC7B",variableType:-4}
 */
var frm_ds2 = new Array(); 

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA3C94FA-B71A-4716-A5D1-759A14895741"}
 */
function onShow_inicia(firstShow, event) {
	elements.frm_main.dividerLocation = 0.25	// divide ventana
	//Buscar por IP
	frm_ip   = application.getIPAddress()
	var $args = new Array()
	var $sql ="select * from tbl_permiso "        
             +"where codigo_perfil = ' ' and codigo_legajo = 0 and ip = '"
             + frm_ip + "'"			 
    var $frm_ds = databaseManager.getDataSetByQuery("desal", $sql, $args, 1);	
    var $max = $frm_ds.getMaxRowIndex()
	if ($max == 1){
	    globals.vOperador = frm_ip
	}else{
	//Login	
	    if (globals.gbl_title == ''){
	   	    var win = application.createWindow("Psw",JSWindow.MODAL_DIALOG)	
    	    //win.title= 'Login'
    	    win.resizable = false
    	    solutionModel.removeForm
    	    win.show(forms.psw_login_adm)
			//Limpia el Array del Treeview
			globals.gbl_expanding_Nodes = new Array()
    	    //win.hide()
		    //win.destroy()
	    }
	}
	//Fin login
	Armar_item()
}
	
	
	/**
 * @properties={typeid:24,uuid:"29E199B0-7CF6-4AD0-AA07-C8157F7FB609"}
 */
function Armar_item(){
    globals.gbl_fecha_hoy = application.getServerTimeStamp()
	//globals.gbl_empresa   = application.getValueListDisplayValue('vl_empresa',globals.vEmpresa)
	globals.gbl_empresa   = 'Sanatorio Colegiales'
	globals.gbl_usuario   = globals.vOperador	
	
	//Armar items de menú
	
	var $Args = new Array()
	var $SQL ="select DISTINCT tbl_itm_menu.modulo, tbl_itm_menu.tipo_item, tbl_itm_menu.nivel, tbl_itm_menu.orden, tbl_itm_menu.descripcion, " 
             +"PERF.codigo_solucion, tbl_itm_menu.parametro_sol, tbl_itm_menu.dependencia_1, tbl_itm_menu.dependencia_2 "
	         +"from tbl_itm_menu "
             +"left join tbl_perfil_itm PERF on tbl_itm_menu.codigo_solucion = PERF.codigo_solucion "
			 +"left join tbl_permiso PERM on PERF.codigo_perfil = PERM.codigo_perfil "
             +"where (PERF.accesible = true and PERM.codigo_legajo = "
             + globals.vLega
			 if (globals.vLega == 0){
				 $SQL = $SQL + " and PERM.ip = '"
				 + frm_ip + "'"
			 }
			 $SQL = $SQL +" ) or tbl_itm_menu.tipo_acceso = 1 "
             +" order by tbl_itm_menu.modulo asc, tbl_itm_menu.tipo_item asc, tbl_itm_menu.nivel asc, tbl_itm_menu.orden asc"
    frm_ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = frm_ds.getMaxRowIndex()
	if ($max != 0){
		
		frm_ds2 = databaseManager.createEmptyDataSet(0,  ['id', 'pid', 'treeColumn','icon', 'editable','solucion', 'parametro_sol', 'ok'])
		
		frm_ds2.addRow([0, null,'Modulos']) //titulo
		var $cont          = 0
		var $cont_modulo   = 0
		var $cont_item     = 0
		var $cont_dep1     = 0
		var $cont_dep2     = 0
		
		var $modulo        = ''
		var $modulo_ant    = null
		var $tipo_item     = ''
		var $tipo_item_ant = null		
		var $nivel         = 0
		var $descripcion   = ''
		var $solucion      = ''
		var $parametro_sol = ''
		var $aux_depen     = ''
		var $depen1        = Array()
		var $pos_depen1    = Array()
		var $depen2        = Array()
		var $pos_depen2    = Array()
		var j              = 0		
		for (var i= 1; i <= $max; i++){			
			$modulo        = application.getValueListDisplayValue('vl_modulo',frm_ds.getValue(i,1))
			$tipo_item     = application.getValueListDisplayValue('vl_tipo_item',frm_ds.getValue(i,2))
			$nivel         = frm_ds.getValue(i,3)
			$descripcion   = frm_ds.getValue(i,5)
			$solucion      = frm_ds.getValue(i,6)
			$parametro_sol = frm_ds.getValue(i,7)
			$cont = $cont+1

			if($modulo != $modulo_ant){
				frm_ds2.addRow([$cont, null, $modulo, "media:///men_book.png", 'false', null, null, null])
				$cont_modulo   = $cont
				$cont          = $cont+1
				$modulo_ant    = $modulo
				$tipo_item_ant = null
			}
			if($tipo_item != $tipo_item_ant){
				frm_ds2.addRow([$cont, $cont_modulo, $tipo_item, "media:///men_book.png", 'false', null, null, null])
				$cont_item     = $cont
				$cont          = $cont+1
				$tipo_item_ant = $tipo_item				
			}
			if($solucion == null){
				if($nivel == 1){									
		    	    $depen1[i]     = $descripcion
			        $pos_depen1[i] = $cont			       				
			        frm_ds2.addRow([$cont, $cont_item, $descripcion, "media:///men_book.png", 'false', null, null, null])
				    $cont = $cont+1						
		        }else{       
		        	if($nivel == 2){
		        		$depen2[i]     = $descripcion
					    $pos_depen2[i] = $cont						
						globals.gbl_codigo_item = frm_ds.getValue(i,8)
						$aux_depen = tbl_itm_menu_to_tbl_itm_menu.descripcion
						$cont_dep1 = 0
						for (j= i; j > 0; j--){
							if($depen1[j] == $aux_depen){
								$cont_dep1 = $pos_depen1[j]
								j = 0
							}
						}
					    frm_ds2.addRow([$cont, $cont_dep1, $descripcion, "media:///men_book.png", 'false', null, null, null])
						$cont = $cont+1
		        	}				
				}
		    }else{
		    	if ($nivel == 2){
		    		globals.gbl_codigo_item = frm_ds.getValue(i,8)
					$aux_depen = tbl_itm_menu_to_tbl_itm_menu.descripcion
					$cont_dep1 = 0
					for (j= i; j > 0; j--){
						if($depen1[j] == $aux_depen){
							$cont_dep1 = $pos_depen1[j]
							j = 0
						}
					}
					frm_ds2.addRow([$cont, $cont_dep1, $descripcion, '', 'false', $solucion, $parametro_sol, null])
		    	}else{
		    		if ($nivel == 3){
			    		globals.gbl_codigo_item = frm_ds.getValue(i,9)
						$aux_depen = tbl_itm_menu_to_tbl_itm_menu.descripcion
						$cont_dep2 = 0
						for (j= i; j > 0; j--){
							if($depen2[j] == $aux_depen){
								$cont_dep2 = $pos_depen2[j]
								j = 0
							}
						}
						frm_ds2.addRow([$cont, $cont_dep2, $descripcion, '', 'false', $solucion, $parametro_sol, null])
			    	}else{ 		
		    	        frm_ds2.addRow([$cont, $cont_item, $descripcion, '', 'false', $solucion, $parametro_sol, null])
			    	}
		    	}
		    }
		}
		//borra items sin accesos
		$cont--
		var $dataArray
		$dataArray = frm_ds2.getColumnAsArray(1)
		for (i= $cont ; i > 1; i--){
			var $id       = 0
			var $pid      = frm_ds2.getValue(i,2)
			    $solucion = frm_ds2.getValue(i,6)
			var $ok       = frm_ds2.getValue(i,8)
		    if($ok == null){
		    	if($solucion == null){
		    		frm_ds2.removeRow(i)
		    	}else{
		    		$id = $dataArray.indexOf($pid) + 1
					frm_ds2.setValue($id,8,'ok')
		    	}
		    }else{
		    	$id = $dataArray.indexOf($pid) + 1
				frm_ds2.setValue($id,8,'ok')
		    }
		}
		forms.frm_menu_treeview.elements.treeview.setDataSet(frm_ds2)		
		forms.frm_menu_treeview.elements.treeview.setColumnWidth('treeColumn', 335)
		forms.frm_menu_treeview.elements.treeview.setHeaderVisible(false)	
		
		var tope = globals.gbl_expanding_Nodes.length
		var args = globals.gbl_expanding_Nodes.toString()
	        args = args.split(',')		
		var row
		for(i=0;i<tope;i++){
			if(args[i]!=null && args[i]!='' && args[i]!='[' && args[i]!=']'){
				row = utils.stringToNumber(args[i])
				forms.frm_menu_treeview.elements.treeview.expandNode(row)								
			}
		}
		
		application.updateUI()		
		forms.frm_menu_top.cargar_menu()
	}    
	//Fin Armar	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2318ACA-0F9F-480B-A4EE-8F4873A7182D"}
 */
function opcion_sanatorio(event) {	
	elements.com_sanatorio.visible = false
	switch (globals.gbl_sanatorio){
		case 0 : globals.gbl_title = ''
		         globals.vLega = 0
		         var win = application.createWindow("Psw",JSWindow.MODAL_DIALOG)	         
	             win.resizable = false
	             solutionModel.removeForm
	             win.show(forms.psw_login_adm)
		         //Limpia el Array del Treeview
		         globals.gbl_expanding_Nodes = new Array()
		         Armar_item()
		         break;
		case 1 : globals.gbl_title = ''
			     globals.vLega = 0 
			     onShow_inicia(null, event)
			     break; 
		case 2 : application.exit() 
			     break;
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92B8D06C-650D-4D19-8655-AEF818427C56"}
 */
function onAction_abrir_itm_sanatorio(event) {
	globals.gbl_sanatorio = null
	forms.frm_menu_top.elements.com_transacciones.visible = false	
	forms.frm_menu_top.elements.com_consultas.visible     = false
	forms.frm_menu_top.elements.com_tablas.visible        = false
	elements.com_sanatorio.visible                        = true
	elements.com_sanatorio.requestFocus()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D46B7B42-218B-4041-ADD5-778BE5337121"}
 */
function cierra_sanatorio(event) {
	elements.com_sanatorio.visible = false
}