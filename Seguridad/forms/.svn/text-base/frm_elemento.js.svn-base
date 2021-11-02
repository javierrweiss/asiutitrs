/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"913FEBB8-C070-44C9-8A63-372D5531DB5F",variableType:4}
 */
var frm_es_nuevo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8692D989-C147-4C12-AE83-4777478E1495"}
 */
var frm_descripcion_solucion = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"29137C2C-64A5-442C-AC3D-F912FA469250"}
 */
var frm_descripcion_formulario = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA2653D1-1DA5-40F0-82B0-B69CDCE752D7"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Tratamiento de Elementos'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1AE6FF2-06E9-4E08-A10E-8E5A7FE06723"}
 */
function onAction_controla_codigo_solucion(event) {
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
		    inicializa_campos()	
			deshabilita_campos()
		    elements.codigo_solucion.requestFocus()
		}else{
			frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion 
			deshabilita_btn()
			habilita_campos()
			if (frm_es_nuevo == 1){
			    elements.bt_buscarc.enabled      =false
			    elements.codigo_solucion.enabled =false
			}
			globals.gbl_descripcion       = ''
			globals.gbl_codigo_formulario = ''
			frm_descripcion_formulario    = ''
			globals.gbl_codigo_elemento   = ''
			elements.codigo_formulario.requestFocus()
		}
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2E3E96F-34CF-4860-BD27-51A25FA992C7"}
 */
function onAction_buscar_solucion(event) {
	globals.gbl_selec = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion = ''
    var win = application.createWindow("Busca_solucion",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Solución'
    win.resizable = false
    win.show(forms.frm_tab_soluciones)
	win.destroy()
	if (globals.gbl_selec != 0){
	    globals.gbl_codigo_solucion = globals.gbl_solucion
	    frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion
	    deshabilita_btn()
	    habilita_campos()
		if (frm_es_nuevo == 1){
		    elements.bt_buscarc.enabled      =false
		    elements.codigo_solucion.enabled =false
		}
	    elements.codigo_formulario.requestFocus()	
    }else{
	    inicializa_campos()	
	    deshabilita_campos()
        elements.codigo_solucion.requestFocus()	   	   
    }
    globals.gbl_descripcion       = ''
	globals.gbl_codigo_formulario = ''
	frm_descripcion_formulario    = ''
	globals.gbl_codigo_elemento   = ''	
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"368AE329-6CC4-4D56-AB07-F90C68833399"}
 */
function onAction_controla_codigo_formulario(event) {
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_formulario_to_tbl_formulario.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
		    inicializa_campos()	
			deshabilita_campos()
		    elements.codigo_formulario.requestFocus()
		}else{
			frm_descripcion_formulario = tbl_formulario_to_tbl_formulario.descripcion 
			foundset.loadRecords(tbl_formulario_to_tbl_formulario)
			deshabilita_btn()
			habilita_campos()
			if (frm_es_nuevo == 1){
			    elements.bt_buscar_formulario.enabled =false
			    elements.codigo_formulario.enabled    =false					
			}
			globals.gbl_descripcion       = ''
			globals.gbl_codigo_elemento   = ''
			elements.codigo_elemento.requestFocus()		    
		}
	}
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"ABE218F5-B8BB-45D7-8C06-D0A0FA3B1E4C"}
 */
function onAction_buscar_formulario(event) {
	globals.gbl_selec = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion = globals.gbl_codigo_solucion
	globals.gbl_formulario = ''
    var win = application.createWindow("Busca_formulario",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Formulario'
    win.resizable = false
    win.show(forms.frm_tab_formularios)
	win.destroy()
	if (globals.gbl_selec != 0){
		globals.gbl_codigo_solucion   = forms.frm_scr_formulario.foundset.codigo_solucion
		globals.gbl_codigo_formulario = forms.frm_scr_formulario.foundset.codigo
		foundset.loadRecords(tbl_formulario_to_tbl_formulario)	    
	    frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
	    frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
	    deshabilita_btn()
	    habilita_campos()
		if (frm_es_nuevo == 1){
		    elements.bt_buscar_formulario.enabled =false
		    elements.codigo_formulario.enabled    =false
		}
	    elements.codigo_elemento.requestFocus()	
    }else{
        elements.codigo_formulario.requestFocus()	   	   
    }
    globals.gbl_descripcion       = ''
	globals.gbl_codigo_elemento   = ''	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD83A149-59B6-432E-B6FA-BDAC8A5BF604"}
 * @AllowToRunInFind
 */
function onAction_controlar_codigo(event) {
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_elemento_to_tbl_elemento.getSize()
		if (frm_es_nuevo == 0){
		    if (encontro == 0){   		
		    	globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
		        globals.gbl_codigo_elemento = ''
		        globals.gbl_descripcion     = ''
				deshabilita_campos()
				elements.codigo_formulario.enabled    =true
				elements.bt_buscar_formulario.enabled =true
				elements.codigo_elemento.enabled      =true
		        elements.codigo_elemento.requestFocus()
		    }else{		    	
			    // globals.gbl_descripcion    = tbl_elemento_to_tbl_elemento.descripcion
		    	foundset.loadRecords(tbl_elemento_to_tbl_elemento)
		    	globals.gbl_codigo_elemento           = codigo
			    globals.gbl_descripcion               = descripcion					    
				deshabilita_btn()
			    habilita_campos()
				elements.bt_buscarc.enabled           =false
				elements.codigo_solucion.enabled      =false
				elements.codigo_formulario.enabled    =false
				elements.bt_buscar_formulario.enabled =false
				elements.bt_borrar.enabled            =true
				elements.bt_grabar.enabled            =true
				elements.descripcion.requestFocus()
		    }
		}else{
			if (encontro != 0){   		
				globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
				globals.gbl_codigo_elemento = ''
				deshabilita_campos()
				elements.codigo_formulario.enabled    =true
				elements.bt_buscar_formulario.enabled =true
				elements.codigo_elemento.enabled      =true
			    elements.codigo_elemento.requestFocus()
			}else{
			    //globals.gbl_descripcion    = tbl_elemento_to_tbl_elemento.descripcion				
				deshabilita_btn()
				habilita_campos()
				elements.bt_buscarc.enabled           =false
				elements.codigo_solucion.enabled      =false
				elements.bt_buscar_formulario.enabled =false
				elements.codigo_formulario.enabled    =false
				elements.descripcion.enabled          =true
				elements.bt_borrar.enabled            =true
				elements.bt_grabar.enabled            =true
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
 * @properties={typeid:24,uuid:"E10E7DF5-B872-4DB4-BCCF-A3FB963F6C8C"}
 */
function onAction_alta(event) {
	inicializa_campos()
	frm_es_nuevo = 1
	habilita_campos()
	deshabilita_btn()	
}

/**
 * @properties={typeid:24,uuid:"C9ED9308-781F-4E9D-A4C9-9894961BF817"}
 */
function inicializa_campos(){
	globals.gbl_codigo_solucion   = ''
	globals.gbl_descripcion       = ''
	frm_descripcion_solucion      = ''
	frm_descripcion_formulario    = ''
	globals.gbl_codigo_formulario = ''
	globals.gbl_codigo_elemento   = ''
	elements.bt_buscarc.enabled   =true
		
	frm_es_nuevo = 0
	controller.loadRecords()
	foundset.sort('codigo_solucion asc, codigo_formulario asc, codigo asc')
}

/**
 * @properties={typeid:24,uuid:"527D85D3-7615-491C-837C-ACFE2FD204C3"}
 */
function habilita_campos(){	
	elements.codigo_solucion.enabled      =true
	elements.codigo_formulario.enabled    =true
    elements.codigo_elemento.enabled      =true
    elements.descripcion.enabled          =true
    elements.bt_buscar_formulario.enabled =true	
}

/**
 * @properties={typeid:24,uuid:"372D0535-C867-4408-BEBF-12FCD2E6D655"}
 */
function deshabilita_campos(){	
	elements.codigo_solucion.enabled      =true
	elements.codigo_formulario.enabled    =false
	elements.codigo_elemento.enabled      =false
    elements.descripcion.enabled          =false 
	elements.bt_buscar_formulario.enabled =false
}

/**
 * @properties={typeid:24,uuid:"B83D8B37-3531-456D-A287-1754FA7DE324"}
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
 * @properties={typeid:24,uuid:"851A602A-E1AE-4758-9E28-5E1FE6F5FD0D"}
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
 * @properties={typeid:24,uuid:"84757622-AD9A-4572-B49B-666CA9E87447"}
 */
function onAction_cancelar(event) {
	if ((globals.gbl_codigo_solucion != codigo_solucion || globals.gbl_descripcion != descripcion ||
		globals.gbl_codigo_formulario != codigo_formulario || globals.gbl_codigo_elemento != codigo) && 
		globals.gbl_codigo_elemento != ''){
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
 * @properties={typeid:24,uuid:"B89A8B63-0CCF-4A17-A18A-294F222DA082"}
 */
function onAction_grabar(event) {
	if (globals.gbl_codigo_solucion == ''|| globals.gbl_descripcion == '' ||
		globals.gbl_codigo_formulario == '' || globals.gbl_codigo_elemento == ''){		
			globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')
	    elements.codigo_solucion.requestFocus()
	}else{
		if (frm_es_nuevo == 1){
			foundset.newRecord()
		}		
		codigo_formulario = globals.gbl_codigo_formulario
		codigo_solucion   = globals.gbl_codigo_solucion
		codigo            = globals.gbl_codigo_elemento
		descripcion       = globals.gbl_descripcion				
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
 * @properties={typeid:24,uuid:"9603682B-133F-4356-A1D4-BD1CFE532F1D"}
 */
function onAction_borrar(event) {
	var encontro = tbl_elemento_to_tbl_elemento.getSize()
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
 * @properties={typeid:24,uuid:"07F6AF59-1B74-44E8-AD98-5203C23CBAF9"}
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
	globals.gbl_codigo_solucion   = codigo_solucion
	globals.gbl_codigo_formulario = codigo_formulario
	globals.gbl_codigo_elemento   = codigo
	globals.gbl_descripcion       = descripcion	
	frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
    frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
	deshabilita_campos()
	habilita_btn()
	elements.bt_buscar_formulario.enabled =false
	elements.codigo_formulario.enabled    =false
	elements.codigo_elemento.enabled      =true
	elements.bt_buscarc.enabled           =false
	elements.codigo_solucion.enabled      =false	
	elements.codigo_elemento.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AAD9694-819C-496B-9D63-6405F66E1247"}
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
	globals.gbl_codigo_solucion   = codigo_solucion
	globals.gbl_codigo_formulario = codigo_formulario
	globals.gbl_codigo_elemento   = codigo
	globals.gbl_descripcion       = descripcion
	frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
    frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
	deshabilita_campos()
	habilita_btn()
	elements.bt_buscar_formulario.enabled =false
	elements.codigo_formulario.enabled    =false
	elements.codigo_elemento.enabled      =true
	elements.bt_buscarc.enabled           =false
	elements.codigo_solucion.enabled      =false	
	elements.codigo_elemento.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CAFBA92-B43A-4DA2-A72B-67186EAE66CF"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	globals.gbl_selec = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion = ''
	globals.gbl_formulario = '' 
	globals.gbl_elemento = ''
    var win = application.createWindow("Busca_elemento",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Elemento'
    win.resizable = false
    win.show(forms.frm_tab_elementos) 
	win.destroy()
	if (globals.gbl_selec != 0){		
		globals.gbl_codigo_solucion   = forms.frm_scr_elemento.foundset.codigo_solucion
		globals.gbl_codigo_formulario = forms.frm_scr_elemento.foundset.codigo_formulario
		globals.gbl_codigo_elemento   = forms.frm_scr_elemento.foundset.codigo
		foundset.loadRecords(tbl_elemento_to_tbl_elemento)
		globals.gbl_codigo_solucion   = codigo_solucion
		frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
		globals.gbl_codigo_formulario = codigo_formulario
		frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
		globals.gbl_codigo_elemento   = codigo
	    globals.gbl_descripcion       = descripcion		
		deshabilita_btn()
	    habilita_campos()
		elements.bt_buscarc.enabled           =false
		elements.codigo_solucion.enabled      =false
		elements.bt_buscar_formulario.enabled =false
		elements.codigo_formulario.enabled    =false
		elements.codigo_elemento.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"106C4FEE-D721-4473-9BA4-F1F48886D26F"}
 */
function onAction_imprimir(event) {
	globals.printRoutine('prn_elemento', true, 1)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A4CEA3F5-E057-41AF-A4D2-CEA881226B56"}
 */
function onHide_cerrar(event) {
	if ((globals.gbl_codigo_solucion != codigo_solucion || globals.gbl_descripcion != descripcion ||
	    globals.gbl_codigo_formulario != codigo_formulario || globals.gbl_codigo_elemento != codigo) && 
	    globals.gbl_codigo_elemento != ''){
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
