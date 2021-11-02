/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DFEE5CFC-8655-41C2-BC35-46451920DDF2",variableType:4}
 */
var frm_es_nuevo = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DC6B6279-AF2F-4B6F-924E-5936C576DCDC"}
 */
var frm_descripcion_solucion = ''

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAA65375-FBB0-4982-8AAF-6E671ADD92A2"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Tratamiento de Formularios'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B242507-B969-471F-B3A4-D96BBB0C4D77"}
 */
function onAction_controla_codigo_solucion(event) {
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
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
			elements.codigo_formulario.requestFocus()		    
		}
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6597F7E4-1E17-4D2D-BDF5-429F65BA26DA"}
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
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AC48B73-8FD6-48CD-BEE3-7864FC167DBF"}
 * @AllowToRunInFind
 */
function onAction_controlar_codigo(event) {
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_formulario_to_tbl_formulario.getSize()
		if (frm_es_nuevo == 0){
		    if (encontro == 0){   		
		    	globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		        globals.gbl_codigo_formulario = ''
		        globals.gbl_descripcion       = ''
		        globals.gbl_control_acceso    = false
		        globals.gbl_control_especial  = false
				deshabilita_campos()				
				elements.codigo_formulario.enabled =true
		        elements.codigo_formulario.requestFocus()
		    }else{			    
		    	foundset.loadRecords(tbl_formulario_to_tbl_formulario)
		    	globals.gbl_codigo_formulario    = codigo
			    globals.gbl_descripcion          = descripcion
			    globals.gbl_control_acceso       = control_acceso
		        globals.gbl_control_especial     = control_especial
				deshabilita_btn()
			    habilita_campos()				
				elements.bt_buscarc.enabled       =false
				elements.codigo_solucion.enabled  =false				
				elements.descripcion.enabled      =true
				elements.control_acceso.enabled   =true
				elements.control_especial.enabled =true 
				elements.bt_borrar.enabled        =true
				elements.bt_grabar.enabled        =true
				elements.descripcion.requestFocus()
		    }
		}else{
			if (encontro != 0){   		
				globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				globals.gbl_codigo_formulario = ''
			    globals.gbl_control_acceso    = false
		        globals.gbl_control_especial  = false
				deshabilita_campos()
				elements.codigo_formulario.enabled =true
			    elements.codigo_formulario.requestFocus()
			}else{			    
				deshabilita_btn()
				habilita_campos()				
				elements.bt_buscarc.enabled       =false
				elements.codigo_solucion.enabled  =false
				elements.descripcion.enabled      =true
				elements.control_acceso.enabled   =true
				elements.control_especial.enabled =true
				elements.bt_borrar.enabled        =true
				elements.bt_grabar.enabled        =true
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
 * @properties={typeid:24,uuid:"1D3EA4A0-721E-4481-99C5-674A4384CFC3"}
 */
function onAction_alta(event) {
   inicializa_campos()
   frm_es_nuevo = 1
   habilita_campos()
   deshabilita_btn()
   elements.codigo_solucion.requestFocus()	
}

/**
 * @properties={typeid:24,uuid:"09C2082C-30F7-4EF0-95D8-D109137F3DD2"}
 */
function inicializa_campos(){
	globals.gbl_codigo_solucion   = ''
	globals.gbl_descripcion       = ''
	frm_descripcion_solucion      = ''
	globals.gbl_codigo_formulario = ''	
	globals.gbl_control_acceso    = false
	globals.gbl_control_especial  = false
		
	frm_es_nuevo = 0
	controller.loadRecords()
	foundset.sort('codigo_solucion asc, codigo asc')
}

/**
 * @properties={typeid:24,uuid:"832C79AB-0EC4-4594-A71F-AEDCE79B2652"}
 */
function habilita_campos(){
	elements.codigo_solucion.enabled   =true
	elements.bt_buscarc.enabled        =true	
	elements.codigo_formulario.enabled =true
	elements.control_acceso.enabled    =true
	elements.control_especial.enabled  =true
}

/**
 * @properties={typeid:24,uuid:"A75844F4-40E7-4822-83B1-9A81ED6E3457"}
 */
function deshabilita_campos(){	
	elements.codigo_solucion.enabled   =true
	elements.bt_buscarc.enabled        =true
	elements.codigo_formulario.enabled =false
    elements.descripcion.enabled       =false
	elements.control_acceso.enabled    =false
	elements.control_especial.enabled  =false
}

/**
 * @properties={typeid:24,uuid:"BE48730C-5692-497D-B235-38C4C29D25D9"}
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
 * @properties={typeid:24,uuid:"EDAC9BBA-913C-4F40-B42D-6D34F57B64EB"}
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
 * @properties={typeid:24,uuid:"E786EB00-62B3-4676-B877-A8B796C7B6C5"}
 */
function onAction_cancelar(event) {
	if ((globals.gbl_codigo_solucion != codigo_solucion || globals.gbl_descripcion != descripcion ||
		globals.gbl_codigo_formulario != codigo || globals.gbl_control_acceso != control_acceso || 
		globals.gbl_control_especial != control_especial) && globals.gbl_codigo_formulario != ''){
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
 * @properties={typeid:24,uuid:"64057B83-8E3F-41A1-A04B-EF840105C721"}
 */
function onAction_grabar(event) {
	if (globals.gbl_codigo_solucion == ''|| globals.gbl_descripcion == '' || globals.gbl_codigo_formulario == ''){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')		
	    elements.codigo_solucion.requestFocus()
	}else{
		if (frm_es_nuevo == 1){
			foundset.newRecord()
		}
		codigo           = globals.gbl_codigo_formulario
		codigo_solucion  = globals.gbl_codigo_solucion
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
 * @properties={typeid:24,uuid:"39F98F84-CDCC-42B6-8DDF-85BCCF7F78E3"}
 */
function onAction_borrar(event) {
	var encontro = tbl_formulario_to_tbl_formulario.getSize()
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
 * @properties={typeid:24,uuid:"62EF7805-2BD6-431C-81B9-8D0C8A6F818C"}
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
	frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
	globals.gbl_codigo_formulario = codigo
	globals.gbl_descripcion       = descripcion
	globals.gbl_control_acceso    = control_acceso
	globals.gbl_control_especial  = control_especial
	deshabilita_campos()
	habilita_btn()
	elements.codigo_formulario.enabled =true	
	elements.bt_buscarc.enabled        =false
	elements.codigo_solucion.enabled   =false	
	elements.codigo_formulario.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79AE94F7-84AF-4824-8242-2B81D0090372"}
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
	frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
	globals.gbl_codigo_formulario = codigo
	globals.gbl_descripcion       = descripcion
	globals.gbl_control_acceso    = control_acceso
	globals.gbl_control_especial  = control_especial
	deshabilita_campos()	
	habilita_btn()
	elements.codigo_formulario.enabled =true	
	elements.bt_buscarc.enabled        =false
	elements.codigo_solucion.enabled   =false	
	elements.codigo_formulario.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76452B80-2DE0-4295-80A6-289FE8EC55FC"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {	
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion   = ''
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
		globals.gbl_codigo_solucion   = codigo_solucion
		frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
	    globals.gbl_codigo_formulario = codigo
	    globals.gbl_descripcion       = descripcion
		globals.gbl_control_acceso    = control_acceso
		globals.gbl_control_especial  = control_especial
		deshabilita_btn()
	    habilita_campos()
		elements.bt_buscarc.enabled       =false
		elements.codigo_solucion.enabled  =false	
		elements.control_acceso.enabled   =false
		elements.control_especial.enabled =false
		elements.codigo_formulario.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D13CC8BB-8702-4CC3-B02F-145212E66949"}
 */
function onAction_imprimir(event) {
	globals.printRoutine('prn_formulario', true, 1)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"07D8C1D4-9C31-4BA0-8F1F-9AC9C2C6176B"}
 */
function onHide_cerrar(event) {
	if ((globals.gbl_codigo_solucion != codigo_solucion || globals.gbl_descripcion != descripcion ||
	    globals.gbl_codigo_formulario != codigo || globals.gbl_control_acceso != control_acceso || 
	    globals.gbl_control_especial != control_especial) && globals.gbl_codigo_formulario != ''){
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
