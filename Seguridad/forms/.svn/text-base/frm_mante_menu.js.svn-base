/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F6B4B1E-F0F7-44B6-A7C7-249A4FBC91F7",variableType:4}
 */
var frm_es_nuevo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3E29A02-1243-4DD1-B371-6A5BBB058FE6"}
 */
var frm_descripcion_solucion = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"36EAB86A-4EFE-4FF5-834F-EFD6AE3E1116"}
 */
var frm_descripcion_dependencia_1 = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2824B4DD-CFC4-4E3E-9561-5768A7070082"}
 */
var frm_descripcion_dependencia_2 = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F95E9EA-1461-4B72-9962-F4EB30F73679"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Tratamiento de Items de Menú'
	globals.gbl_codigo_item = ''
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C6B0F8D-1C54-4D58-B5E0-E55F9B46AED7"}
 * @AllowToRunInFind
 */
function onAction_controlar_codigo(event) {
	if(globals.gbl_codigo_item != ''){
		var $aux_item
		var encontro = tbl_itm_menu_to_tbl_itm_menu2.getSize()
		if (frm_es_nuevo == 0){
		    if (encontro == 0){   		
		    	globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		        deshabilita_campos()	
				inicializa_campos()
				elements.codigo_item.enabled = true
		        elements.codigo_item.requestFocus()
		    }else{			    
		    	foundset.loadRecords(tbl_itm_menu_to_tbl_itm_menu2)
		    	globals.gbl_codigo_item       = codigo_item
			    globals.gbl_descripcion       = descripcion
			    globals.gbl_tipo_acceso       = tipo_acceso
		        globals.gbl_tipo_item         = tipo_item
		        globals.gbl_modulo            = modulo
		        globals.gbl_nivel             = nivel
		        globals.gbl_orden             = orden
		        globals.gbl_codigo_solucion   = codigo_solucion
		        frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
		        globals.gbl_parametro         = parametro_sol
				
		        $aux_item                     = globals.gbl_codigo_item
		        globals.gbl_dependencia_1     = dependencia_1
				globals.gbl_codigo_item       = globals.gbl_dependencia_1
				frm_descripcion_dependencia_1 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
		        globals.gbl_dependencia_2     = dependencia_2
		        globals.gbl_codigo_item       = globals.gbl_dependencia_2
				frm_descripcion_dependencia_2 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
				globals.gbl_codigo_item       = $aux_item
				
				deshabilita_btn() 
			    habilita_campos()				
				elements.codigo_item.enabled  = false 
				elements.bt_borrar.enabled    =true
				elements.bt_grabar.enabled    =true
				onAction_tipo_acceso(event)
		    	onAction_nivel(event)
				elements.descripcion.requestFocus()
		    }
		}else{
			if (encontro != 0){   		
				globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		        deshabilita_campos()	
				inicializa_campos()
				elements.codigo_item.enabled = true
		        elements.codigo_item.requestFocus()
			}else{			    
				deshabilita_btn() 
			    habilita_campos()				
				elements.codigo_item.enabled  = false				
				elements.bt_borrar.enabled    =true
				elements.bt_grabar.enabled    =true
				elements.descripcion.requestFocus()
			}
		}
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0C20D4B-A34C-45A7-A953-7238F669D56D"}
 */
function onAction_tipo_acceso(event) {
	habilita_campos2()
	if (globals.gbl_tipo_acceso == 1){		
		elements.codigo_solucion.enabled = false
		elements.bt_buscar_sol.enabled   = false
		elements.parametro.enabled       = false
		globals.gbl_codigo_solucion      = ''
		frm_descripcion_solucion         = ''
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD3965AA-DC4D-49D1-BD53-85A75C3A60E9"}
 */
function onAction_nivel(event) {
	if (globals.gbl_nivel == 1){
		elements.dependencia_1.enabled  = false
		elements.bt_buscar_dep1.enabled = false
		elements.dependencia_2.enabled  = false		
		elements.bt_buscar_dep2.enabled = false
		globals.gbl_dependencia_1       = ''
		globals.gbl_dependencia_2       = ''
		frm_descripcion_dependencia_1   = ''
		frm_descripcion_dependencia_2   = ''		
	}else{
		if (globals.gbl_nivel == 2){
			elements.dependencia_1.enabled  = true
			elements.bt_buscar_dep1.enabled = true
			elements.dependencia_2.enabled  = false
			elements.bt_buscar_dep2.enabled = false
		    globals.gbl_dependencia_2       = ''
		    frm_descripcion_dependencia_2   = '' 
	    }else{
	    	elements.dependencia_1.enabled  = true
			elements.bt_buscar_dep1.enabled = true
		    elements.dependencia_2.enabled  = true
			elements.bt_buscar_dep2.enabled = true
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43D5A90C-82D7-48B4-B0DF-F3316DC86C9E"}
 */
function onAction_controla_codigo_solucion(event) {
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
			globals.gbl_codigo_solucion = ''
			frm_descripcion_solucion    = ''
		    elements.codigo_solucion.requestFocus()
		}else{
			frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion 
			elements.parametro.requestFocus()		    
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09D74EA1-581E-4582-91F8-1B9C06490005"}
 */
function onAction_buscar_solucion(event) {
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion   = ''
    var win = application.createWindow("Busca_solucion",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Solución'
    win.resizable = false
    win.show(forms.frm_tab_soluciones)
	win.destroy()
	if (globals.gbl_selec != 0){
	    globals.gbl_codigo_solucion = globals.gbl_solucion
	    frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion
	    elements.parametro.requestFocus()	
    }else{
	    elements.codigo_solucion.requestFocus()	   	   
    }    
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D042AB77-7B08-45CA-B71B-5F8623BCED17"}
 */
function onAction_controlar_dependencia(event) {
	var $aux_dependencia = ''
	var $aux_descripcion = ''
	var $aux_item	
	var $elemen          = event.getElementName()	
	if(event.getElementName()  == 'dependencia_1'){
	    $aux_dependencia = globals.gbl_dependencia_1
	}else{
		$aux_dependencia = globals.gbl_dependencia_2
	}
	if($aux_dependencia != ''){
		$aux_item               = globals.gbl_codigo_item
		globals.gbl_codigo_item = $aux_dependencia
		var encontro = tbl_itm_menu_to_tbl_itm_menu2.getSize()		
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    elements[$elemen].requestFocus()
			$aux_dependencia = ''
			$aux_descripcion = ''
		}else{	   	
			$aux_dependencia = tbl_itm_menu_to_tbl_itm_menu2.codigo_item
			$aux_descripcion = tbl_itm_menu_to_tbl_itm_menu2.descripcion		   	
		}
		if($elemen == 'dependencia_1'){
		    globals.gbl_dependencia_1     = $aux_dependencia
			frm_descripcion_dependencia_1 = $aux_descripcion
		}else{
			globals.gbl_dependencia_2     = $aux_dependencia
			frm_descripcion_dependencia_2 = $aux_descripcion
		}
		globals.gbl_codigo_item = $aux_item
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6A5ED97E-8172-497C-8919-09E6783F5535"}
 */
function onAction_alta(event) {
   inicializa_campos()
   frm_es_nuevo = 1
   habilita_campos()
   deshabilita_btn()
   elements.codigo_item.requestFocus()	
}

/**
 * @properties={typeid:24,uuid:"C3CB8050-C123-4F8B-B77D-125D32E70B7C"}
 */
function inicializa_campos(){
	globals.gbl_codigo_item       = ''
	globals.gbl_descripcion       = null
	globals.gbl_tipo_acceso       = null
	globals.gbl_tipo_item         = null
	globals.gbl_modulo            = null
	globals.gbl_nivel             = null
	globals.gbl_orden             = null
	globals.gbl_codigo_solucion   = ''	
	frm_descripcion_solucion      = ''
	globals.gbl_parametro         = null
	globals.gbl_dependencia_1     = ''
	frm_descripcion_dependencia_1 = ''
	globals.gbl_dependencia_2     = ''
	frm_descripcion_dependencia_2 = ''	
		
	frm_es_nuevo = 0
	controller.loadRecords()
	foundset.sort('codigo_item asc')
}

/**
 * @properties={typeid:24,uuid:"AE31A316-F025-4737-9BCF-70DF5D94BCCA"}
 */
function habilita_campos(){
	elements.tipo_acceso.enabled     =true
	elements.tipo_item.enabled       =true
    elements.descripcion.enabled     =true
	elements.modulo.enabled          =true
	elements.nivel.enabled           =true
	elements.orden.enabled           =true 
}

/**
 * @properties={typeid:24,uuid:"76E1DDCC-EC1E-43B1-B50D-C4B8DDF3B6D2"}
 */
function habilita_campos2(){
	elements.codigo_solucion.enabled =true
	elements.bt_buscar_sol.enabled   =true
	elements.parametro.enabled       =true
	elements.dependencia_1.enabled   =true
	elements.bt_buscar_dep1.enabled  =true
	elements.dependencia_2.enabled   =true
	elements.bt_buscar_dep2.enabled  =true
}

/**
 * @properties={typeid:24,uuid:"11ED6058-ACCB-4C53-90AB-9A9DF27547A8"}
 */
function deshabilita_campos(){	
	elements.codigo_item.enabled     =true
	elements.tipo_acceso.enabled     =false
	elements.tipo_item.enabled       =false
    elements.descripcion.enabled     =false
	elements.modulo.enabled          =false
	elements.nivel.enabled           =false
	elements.orden.enabled           =false 
	elements.codigo_solucion.enabled =false
	elements.bt_buscar_sol.enabled   =false
	elements.parametro.enabled       =false
	elements.dependencia_1.enabled   =false
	elements.bt_buscar_dep1.enabled  =false
	elements.dependencia_2.enabled   =false
	elements.bt_buscar_dep2.enabled  =false
}

/**
 * @properties={typeid:24,uuid:"1D3D4D2E-5D3C-4F3A-8FE5-D4C7392F68B1"}
 */
function deshabilita_btn(){
    elements.bt_anterior.enabled =false
    elements.bt_siguiente.enabled=false
    elements.bt_borrar.enabled   =false
    elements.bt_nuevo.enabled    =false
    elements.bt_buscar.enabled   =false
    elements.bt_imprimir.enabled =false
    elements.bt_grabar.enabled   =false
}

/**
 * @properties={typeid:24,uuid:"199C1326-90D4-476D-BE2D-C9F10B20ED4B"}
 */
function habilita_btn(){	
	elements.bt_anterior.enabled =true
    elements.bt_siguiente.enabled=true
    elements.bt_borrar.enabled   =false
    elements.bt_nuevo.enabled    =true
    elements.bt_buscar.enabled   =true
    elements.bt_imprimir.enabled =true
    elements.bt_grabar.enabled   =false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6BF78AC8-D01E-45A8-B9B3-3F46EE9DCE6F"}
 */
function onAction_cancelar(event) {
	if ((globals.gbl_codigo_item != codigo_item || globals.gbl_descripcion != descripcion)
		&& globals.gbl_codigo_item != ''){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){
			inicializa_campos()
			deshabilita_campos()
			habilita_btn()			
		}
	}else{
		inicializa_campos()
		deshabilita_campos()
	    habilita_btn()		
	}		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F287CBFC-88A2-49D7-9805-F439A3809C6C"}
 */
function onAction_grabar(event) {
	if (globals.gbl_codigo_item == ''|| globals.gbl_descripcion == ''){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')
	    elements.codigo_item.requestFocus()
	}else{
		if (frm_es_nuevo == 1){
			foundset.newRecord()
		}
		codigo_item     = globals.gbl_codigo_item   
	    descripcion     = globals.gbl_descripcion   
	    tipo_acceso     = globals.gbl_tipo_acceso        
	    tipo_item       = globals.gbl_tipo_item         
	    modulo          = globals.gbl_modulo            
        nivel           = globals.gbl_nivel  
        orden           = globals.gbl_orden 
        codigo_solucion = globals.gbl_codigo_solucion    
        parametro_sol   = globals.gbl_parametro
        dependencia_1   = globals.gbl_dependencia_1     
        dependencia_2   = globals.gbl_dependencia_2     
		databaseManager.saveData()
		inicializa_campos()
		deshabilita_campos()
		habilita_btn()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B12A56E4-28E9-49B4-84F1-E5EB491E1507"}
 */
function onAction_borrar(event) {
	var encontro = tbl_itm_menu_to_tbl_itm_menu2.getSize()
	if (encontro != 0){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Se borrará el registro, Confirma ?','Si', 'No')
		if ($ok=='Si'){
			foundset.deleteRecord()
            inicializa_campos()	
			deshabilita_campos()
			habilita_btn()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB948822-35E8-468D-9CFC-41F41A132594"}
 */
function onAction_atras(event) {
	frm_es_nuevo = 0
	var $aux_item
	var $ultimo  = databaseManager.getFoundSetCount(foundset)
	var $actual  = foundset.getSelectedIndex()
	if ($actual == 1){
		foundset.setSelectedIndex($ultimo)
	}else{
	   foundset.setSelectedIndex($actual -1)
	}
	globals.gbl_codigo_item       = codigo_item
    globals.gbl_descripcion       = descripcion
    globals.gbl_tipo_acceso       = tipo_acceso
    globals.gbl_tipo_item         = tipo_item
    globals.gbl_modulo            = modulo
    globals.gbl_nivel             = nivel
    globals.gbl_orden             = orden
    globals.gbl_codigo_solucion   = codigo_solucion
    frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
    globals.gbl_parametro         = parametro_sol
    
    $aux_item                     = globals.gbl_codigo_item
    globals.gbl_dependencia_1     = dependencia_1
	globals.gbl_codigo_item       = globals.gbl_dependencia_1
	frm_descripcion_dependencia_1 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
    globals.gbl_dependencia_2     = dependencia_2
    globals.gbl_codigo_item       = globals.gbl_dependencia_2
	frm_descripcion_dependencia_2 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
	globals.gbl_codigo_item       = $aux_item
	
	deshabilita_campos()
	habilita_btn()		
	elements.codigo_item.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F71343CB-D772-4AF9-834B-7DB4BDED42B9"}
 * @AllowToRunInFind
 */
function onAction_adelante(event) {
	frm_es_nuevo = 0
	var $aux_item
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	var $actual = foundset.getSelectedIndex()
	if ($actual == $ultimo){
		foundset.setSelectedIndex(1)		
	}else{
		foundset.setSelectedIndex($actual + 1)
	}
	globals.gbl_codigo_item       = codigo_item
    globals.gbl_descripcion       = descripcion
    globals.gbl_tipo_acceso       = tipo_acceso
    globals.gbl_tipo_item         = tipo_item
    globals.gbl_modulo            = modulo
    globals.gbl_nivel             = nivel
    globals.gbl_orden             = orden
    globals.gbl_codigo_solucion   = codigo_solucion
    frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
    globals.gbl_parametro         = parametro_sol
    
    $aux_item                     = globals.gbl_codigo_item
    globals.gbl_dependencia_1     = dependencia_1
	globals.gbl_codigo_item       = globals.gbl_dependencia_1
	frm_descripcion_dependencia_1 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
    globals.gbl_dependencia_2     = dependencia_2
    globals.gbl_codigo_item       = globals.gbl_dependencia_2
	frm_descripcion_dependencia_2 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
	globals.gbl_codigo_item       = $aux_item
	
	deshabilita_campos()	
	habilita_btn()	
	elements.codigo_item.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"46BE53C3-6555-4A8C-B317-265E26D2A64D"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {	
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_item       = ''
	var $aux_item	
	var win = application.createWindow("Busca_item_menu",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Item de Menú'
    win.resizable = false
    win.show(forms.frm_tab_itm_menu)
	win.destroy()
	if (globals.gbl_selec != 0){		
		if(event.getElementName() == 'bt_buscar'){	
		    globals.gbl_codigo_item     = globals.gbl_item
		    foundset.loadRecords(tbl_itm_menu_to_tbl_itm_menu2)
		    globals.gbl_descripcion     = tbl_itm_menu_to_tbl_itm_menu2.descripcion
	        globals.gbl_tipo_acceso     = tipo_acceso
	        globals.gbl_tipo_item       = tipo_item
	        globals.gbl_modulo          = modulo
	        globals.gbl_nivel           = nivel
	        globals.gbl_orden           = orden
	        globals.gbl_codigo_solucion = codigo_solucion
	        frm_descripcion_solucion    = tbl_solucion_to_tbl_solucion.descripcion
	        globals.gbl_parametro       = parametro_sol

	        $aux_item                     = globals.gbl_codigo_item
            globals.gbl_dependencia_1     = dependencia_1
		    globals.gbl_codigo_item       = globals.gbl_dependencia_1
		    frm_descripcion_dependencia_1 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
            globals.gbl_dependencia_2     = dependencia_2
            globals.gbl_codigo_item       = globals.gbl_dependencia_2
		    frm_descripcion_dependencia_2 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
		    globals.gbl_codigo_item       = $aux_item
		
		    deshabilita_btn()
	        habilita_campos()
			elements.bt_borrar.enabled   = true
			elements.bt_grabar.enabled   = true
		    elements.codigo_item.enabled = false
		    onAction_tipo_acceso(event)
		    onAction_nivel(event)
		    elements.descripcion.requestFocus()
		}else{
			if(event.getElementName() == 'bt_buscar_dep1'){
				$aux_item                     = globals.gbl_codigo_item
				globals.gbl_codigo_item       = globals.gbl_item               
	            globals.gbl_dependencia_1     = tbl_itm_menu_to_tbl_itm_menu2.codigo_item			    
			    frm_descripcion_dependencia_1 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
				globals.gbl_codigo_item       = $aux_item	
			}else{
				$aux_item                     = globals.gbl_codigo_item
				globals.gbl_codigo_item       = globals.gbl_item
	            globals.gbl_dependencia_2     = tbl_itm_menu_to_tbl_itm_menu2.codigo_item			    
			    frm_descripcion_dependencia_2 = tbl_itm_menu_to_tbl_itm_menu2.descripcion
				globals.gbl_codigo_item       = $aux_item
			}			
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42C0250B-7CE3-46FA-9BB6-5D6403ACDFB5"}
 */
function onAction_imprimir(event) {
	foundset.clear()
	globals.gbl_codigo_item = ''
	globals.gbl_descripcion = null
	globals.printRoutine('prn_mante_menu', true, 0)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D8B86CA6-67C5-4FAF-B578-40E8C982E8D4"}
 */
function onHide_cerrar(event) {
	if ((globals.gbl_codigo_item != codigo_item || globals.gbl_descripcion != descripcion)
		&& globals.gbl_codigo_item != ''){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){
		    inicializa_campos()
		    deshabilita_campos()
		    habilita_btn()
			return true
	    }else{
	        return false
	    }	    
    }else{
	    inicializa_campos()
	    deshabilita_campos()
        habilita_btn()
		return true
    }		
}