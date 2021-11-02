/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2ED07E15-573C-46C5-98BD-173A8D7F11C5",variableType:4}
 */
var frm_es_nuevo = 0;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5DEFA33-09AB-40BC-93A8-C0A1D30805F1"}
 */
function onShow_inicio(firstShow, event) { 
	elements.lbl_titulo.text = 'Tratamiento de Soluciones'
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2ADF61E0-7043-4F72-91BB-F49DEF7F2370"}
 * @AllowToRunInFind
 */
function onAction_controlar_codigo(event) {		
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (frm_es_nuevo == 0){			
		    if (encontro == 0){   		
		    	globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		        inicializa_campos()	
				deshabilita_campos()
		        elements.codigo_solucion.requestFocus()
		    }else{
		    	foundset.loadRecords(tbl_solucion_to_tbl_solucion)
		    	globals.gbl_codigo_solucion  = codigo
			    globals.gbl_descripcion      = descripcion
			    globals.gbl_control_especial = control_especial
			    globals.gbl_control_acceso   = control_acceso		    				
				deshabilita_btn()
			    habilita_campos()
		        elements.codigo_solucion.enabled = false
				elements.descripcion.requestFocus()
		    }
		}else{
			if (encontro != 0){   		
				globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				inicializa_campos()
				deshabilita_campos()
			    elements.codigo_solucion.requestFocus()
			}else{
				deshabilita_btn()
				habilita_campos()
				elements.codigo_solucion.enabled = false
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
 * @properties={typeid:24,uuid:"683EB198-BF51-4A3A-ADC5-C32BF1DBAB4D"}
 */
function onAction_alta(event) {
	inicializa_campos()
	frm_es_nuevo = 1
	habilita_campos()
	deshabilita_btn()
	elements.codigo_solucion.requestFocus()	
}

/**
 * @properties={typeid:24,uuid:"F226600E-AB70-4042-9417-D25AA2B61A70"}
 */
function inicializa_campos(){
	globals.gbl_codigo_solucion  = ''
	globals.gbl_descripcion      = ''
	globals.gbl_control_acceso   = false
	globals.gbl_control_especial = false
	
	frm_es_nuevo = 0
	controller.loadRecords()
	foundset.sort('codigo asc')
}
/**
 * @properties={typeid:24,uuid:"9FAB83E0-0B77-4384-8842-906594D18A5E"}
 */
function habilita_campos(){
	elements.codigo_solucion.enabled  =true
    elements.descripcion.enabled      =true
    elements.control_acceso.enabled   =true	
    elements.control_especial.enabled =true	   
}
/**
 * @properties={typeid:24,uuid:"440F4F60-4358-4BBC-8AD5-82029100AE7D"}
 */
function deshabilita_campos(){	
	elements.codigo_solucion.enabled  =true
    elements.descripcion.enabled      =false
    elements.control_acceso.enabled   =false
    elements.control_especial.enabled =false    
}
/**
 * @properties={typeid:24,uuid:"3AC3CD99-525E-4AE0-8EC8-86DE820A84CE"}
 */
function deshabilita_btn(){
    elements.bt_anterior.enabled =false
    elements.bt_siguiente.enabled=false
    elements.bt_borrar.enabled   =true
    elements.bt_nuevo.enabled    =false
    elements.bt_buscar.enabled   =false
    elements.bt_imprimir.enabled =false
    elements.bt_grabar.enabled   =true
}
/**
 * @properties={typeid:24,uuid:"A2BBCDEB-323E-435B-9DDB-D915BCFC051F"}
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
 * @properties={typeid:24,uuid:"632D3D77-C7B5-40E9-9FB0-1A646B9F3863"}
 */
function onAction_cancelar(event) {
	if ((globals.gbl_codigo_solucion != codigo || globals.gbl_descripcion != descripcion ||
		globals.gbl_control_acceso != control_acceso ||	globals.gbl_control_especial != control_especial)
		&& globals.gbl_codigo_solucion != ''){
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
 * @properties={typeid:24,uuid:"39381890-EB81-4C70-AAC4-4A6FE44B156C"}
 * @AllowToRunInFind
 */
function onAction_grabar(event) {
	if (globals.gbl_codigo_solucion == ''|| globals.gbl_descripcion == ''){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')
	    elements.codigo_solucion.requestFocus()
	}else{
		if (frm_es_nuevo == 1){
			foundset.newRecord()
		}
		codigo           = globals.gbl_codigo_solucion
		descripcion      = globals.gbl_descripcion
		control_acceso   = globals.gbl_control_acceso
		control_especial = globals.gbl_control_especial		
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
 * @properties={typeid:24,uuid:"8E22D709-95A3-4F90-9576-92CEFB8E4431"}
 */
function onAction_borrar(event) {
	var encontro = tbl_solucion_to_tbl_solucion.getSize()
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
 * @properties={typeid:24,uuid:"F9BDC9E7-3AF5-4051-B3E7-49395DAC2294"}
 */
function onAction_atras(event) {
	frm_es_nuevo = 0
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	var $actual = foundset.getSelectedIndex()
	if ($actual == 1){
		foundset.setSelectedIndex($ultimo)
	}else{
	   foundset.setSelectedIndex($actual -1)
	}
	globals.gbl_codigo_solucion  = codigo
	globals.gbl_descripcion      = descripcion
	globals.gbl_control_acceso   = control_acceso
	globals.gbl_control_especial = control_especial
	deshabilita_campos()
	habilita_btn()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41B5F393-F130-411E-B0B1-B099A1C5DEB7"}
 * @AllowToRunInFind
 */
function onAction_adelante(event) {
	frm_es_nuevo = 0
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	var $actual = foundset.getSelectedIndex()
	if ($actual == $ultimo){
		foundset.setSelectedIndex(1)		
	}else{
		foundset.setSelectedIndex($actual + 1)
	}
	globals.gbl_codigo_solucion  = codigo
	globals.gbl_descripcion      = descripcion
	globals.gbl_control_acceso   = control_acceso
	globals.gbl_control_especial = control_especial
	deshabilita_campos()
	habilita_btn()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E528740-820A-486C-A179-0629ED974992"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion   = globals.gbl_codigo_solucion	
    var win = application.createWindow("Busca_solucion",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Solución'
    win.resizable = false
    win.show(forms.frm_tab_soluciones)
	win.destroy()
	if (globals.gbl_selec != 0){		
		globals.gbl_codigo_solucion = globals.gbl_solucion
		foundset.loadRecords(tbl_solucion_to_tbl_solucion)
	    globals.gbl_codigo_solucion  = codigo
	    globals.gbl_descripcion      = descripcion                
	    globals.gbl_control_acceso   = control_acceso
	    globals.gbl_control_especial = control_especial		
		deshabilita_btn()
	    habilita_campos()
		elements.codigo_solucion.enabled = false
		elements.descripcion.requestFocus()
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E695D0CC-90D7-42E6-AB2C-6E8A97E3A90E"}
 */
function onAction_imprimir(event) {
	globals.printRoutine('prn_solucion', true, 1)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CD1240B3-B790-4E9D-8DBF-41B4B3D32CBB"}
 */
function onHide_cerrar(event) {
	if ((globals.gbl_codigo_solucion != codigo || globals.gbl_descripcion != descripcion ||
	    globals.gbl_control_acceso != control_acceso ||	globals.gbl_control_especial != control_especial)
	    && globals.gbl_codigo_solucion != ''){
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
