/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E4FF17FD-C541-4A11-88F5-DF389BB4994E",variableType:4}
 */
var frm_es_nuevo = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A17C758E-BDC6-41C7-9CAC-984463518633"}
 */
function onShow_inicio(firstShow, event) { 
	elements.lbl_titulo.text = 'Tratamiento de Carpetas'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"585B038D-28F2-49CF-830B-C77F5113C725"}
 * @AllowToRunInFind
 */
function onAction_controlar_codigo(event) {		
	if(globals.gbl_codigo_carpeta != ''){
		var encontro = tbl_carpetas_to_tbl_carpetas.getSize()
		if (frm_es_nuevo == 0){			
		    if (encontro == 0){   		
		        globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		        inicializa_campos()	
				deshabilita_campos()
		        elements.carpeta.requestFocus()
		    }else{
		    	foundset.loadRecords(tbl_carpetas_to_tbl_carpetas)
		    	globals.gbl_codigo_carpeta = carpeta
			    globals.gbl_descripcion    = descripcion			    		    				
				deshabilita_btn()
			    habilita_campos()
		        elements.carpeta.enabled = false
				elements.descripcion.requestFocus()
		    }
		}else{
			if (encontro != 0){
				globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')			    
				inicializa_campos()
				deshabilita_campos()
			    elements.carpeta.requestFocus()
			}else{
				deshabilita_btn()
				habilita_campos()
				elements.carpeta.enabled = false
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
 * @properties={typeid:24,uuid:"42D9B5BB-0677-416B-BEF0-8804CDACEDA4"}
 */
function onAction_alta(event) {
	inicializa_campos()
	frm_es_nuevo = 1
	habilita_campos()
	deshabilita_btn()
	elements.carpeta.requestFocus()	
}

/**
 * @properties={typeid:24,uuid:"F1B26BE4-3A0E-4849-89D8-64A49F88E4A0"}
 */
function inicializa_campos(){
	globals.gbl_codigo_carpeta  = ''
	globals.gbl_descripcion      = ''
	
	frm_es_nuevo = 0
	controller.loadRecords()
	foundset.sort('carpeta asc')
}

/**
 * @properties={typeid:24,uuid:"007451BA-1991-4356-A733-B9EA156B2555"}
 */
function habilita_campos(){
	elements.carpeta.enabled     =true
    elements.descripcion.enabled =true    	   
}

/**
 * @properties={typeid:24,uuid:"5C244DF8-F1B8-4B89-A42D-A57AB6B15243"}
 */
function deshabilita_campos(){	
	elements.carpeta.enabled     =true
    elements.descripcion.enabled =false        
}

/**
 * @properties={typeid:24,uuid:"092B3C20-D162-4441-ABDE-D046E3CB7ECB"}
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
 * @properties={typeid:24,uuid:"9199DCDB-45E0-4089-9706-A41B03E3A32C"}
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
 * @properties={typeid:24,uuid:"F608B9B8-E8D2-43C8-9B47-96FC562B163E"}
 */
function onAction_cancelar(event) {
	if ((globals.gbl_codigo_carpeta != carpeta || globals.gbl_descripcion != descripcion)
		&& globals.gbl_codigo_carpeta != ''){
		//globals.showWarningDialog('Perderá los cambios, Confirma ?', null, 'Si', 'No', null, null)
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
 * @properties={typeid:24,uuid:"083031E9-9676-46A9-8CCD-55A66D7A069B"}
 * @AllowToRunInFind
 */
function onAction_grabar(event) {
	if (globals.gbl_codigo_carpeta == ''|| globals.gbl_descripcion == ''){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')		
	    elements.carpeta.requestFocus()
	}else{
		if (frm_es_nuevo == 1){
			foundset.newRecord()
		}
		carpeta     = globals.gbl_codigo_carpeta
		descripcion = globals.gbl_descripcion
		var $id = application.getUUID();
		//Verificando si existe clave primaria
		var sql = "SELECT EXISTS( SELECT id FROM smsciru_envios WHERE id='" + $id + "')"
		var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
		while(dsExists.getValue(1,1) == 1){
			$id = application.getUUID();
			sql = "SELECT EXISTS( SELECT id FROM smsciru_envios WHERE id='" + $id + "')"
			dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
		}
		foundset.id = $id
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
 * @properties={typeid:24,uuid:"5F91ECC5-AC80-4D50-998F-B018B54044AD"}
 */
function onAction_borrar(event) {
	var encontro = tbl_carpetas_to_tbl_carpetas.getSize()
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
 * @properties={typeid:24,uuid:"10160F3D-88DD-42D8-8E6F-7674858A4128"}
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
	globals.gbl_codigo_carpeta = carpeta
	globals.gbl_descripcion    = descripcion	
	deshabilita_campos()
	habilita_btn()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1B08525-3E4F-4E05-ADE6-468FF1F49C53"}
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
	globals.gbl_codigo_carpeta = carpeta
	globals.gbl_descripcion    = descripcion	
	deshabilita_campos()
	habilita_btn()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"288A7F41-54EC-4064-B0B9-F060245E76AB"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion   = ''	
    var win = application.createWindow("Busca_carpetas",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Carpeta'
    win.resizable = false
    win.show(forms.frm_tab_carpetas)
	win.destroy()
	if (globals.gbl_selec != 0){		
		globals.gbl_codigo_carpeta = globals.gbl_solucion
		foundset.loadRecords(tbl_carpetas_to_tbl_carpetas)
	    globals.gbl_codigo_carpeta  = carpeta
	    globals.gbl_descripcion     = descripcion    		
		deshabilita_btn()
	    habilita_campos()
		elements.carpeta.enabled = false
		elements.descripcion.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0621987C-E7FA-462A-81FE-76D84FD2FC52"}
 */
function onAction_imprimir(event) {
	globals.printRoutine('prn_carpeta', true, 1)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"ECE73FD4-0C42-4F44-ADB8-A3D817ED2411"}
 */
function onHide_cerrar(event) {
	if ((globals.gbl_codigo_carpeta != carpeta || globals.gbl_descripcion != descripcion)
	    && globals.gbl_codigo_carpeta != ''){	    
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
