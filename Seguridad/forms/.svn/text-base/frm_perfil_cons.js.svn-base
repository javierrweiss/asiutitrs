/**
 * @properties={typeid:35,uuid:"1882EAE4-3798-40A9-8FBC-736DD60B434F",variableType:-4}
 */
var frm_accesible = false;
/**
 * @properties={typeid:35,uuid:"03686F46-AEAB-4971-A6E2-CE16DA6AFE8B",variableType:-4}
 */
var frm_visible = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F44089C7-2C0C-4A79-902A-4156844FA1E9"}
 */
var frm_descripcion_solucion = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D66BF49-9813-4208-ABA3-A0B6AAC8AA86"}
 */
var frm_descripcion_perfil = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE965640-1681-4AB6-95BD-DC9C33E2D674"}
 */
var frm_descripcion_formulario = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CAE9FB00-886A-41C2-A988-9A683AB5F930"}
 */
var frm_descripcion_elemento = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0770EB90-BFD7-4B57-9FE9-20446AA9CD7D"}
 */
function onShow_inicio(firstShow, event) {
	frm_descripcion_solucion   = 'TODOS'
	frm_descripcion_formulario = 'TODOS'
	frm_descripcion_elemento   = 'TODOS'
	frm_descripcion_perfil   = 'TODOS'
	forms.frm_perfil_cons_itm.foundset.clear()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C339349-967A-451F-A5E9-ABC462227279"}
 */
function onAction_controla_codigo_solucion(event) {
	if(globals.gbl_codigo_solucion != '' && globals.gbl_codigo_solucion != null){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    globals.gbl_codigo_solucion = ''
		    frm_descripcion_solucion    = 'TODOS'
		    elements.codigo_solucion.requestFocus()
		}else{
			frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion	
			elements.codigo_formulario.requestFocus()		    
		}
	}else{
		globals.gbl_codigo_solucion = ''
		frm_descripcion_solucion    = 'TODOS'
	}		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"205829E4-F121-40F2-B4CC-6ADD2141AABA"}
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
	    globals.gbl_codigo_solucion   = globals.gbl_solucion
	    frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
	    elements.codigo_formulario.requestFocus()	
    }else{    	
    	globals.gbl_codigo_solucion = ''
		frm_descripcion_solucion    = 'TODOS'	
        elements.codigo_solucion.requestFocus()	   	   
    }    
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8D67896A-2F4D-46D7-9B24-1A4295A20208"}
 * @AllowToRunInFind
 */
function onAction_buscar_formulario(event) {	
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
		frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
		frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
		elements.codigo_formulario.requestFocus()
	}else{
		globals.gbl_codigo_solucion   = ''
		frm_descripcion_solucion      = 'TODOS'
		globals.gbl_codigo_formulario = ''
		frm_descripcion_formulario    = 'TODOS'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBC67435-5807-4129-BB11-04A82D01F919"}
 */
function onAction_controla_codigo_formulario(event) {
	if(globals.gbl_codigo_formulario != '' && globals.gbl_codigo_formulario != null){
		var encontro = tbl_formulario_to_tbl_formulario.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    globals.gbl_codigo_formulario = ''
		    frm_descripcion_formulario    = 'TODOS'
		    elements.codigo_formulario.requestFocus()
		}else{
			globals.gbl_codigo_solucion   = forms.frm_scr_formulario.foundset.codigo_solucion
			globals.gbl_codigo_formulario = forms.frm_scr_formulario.foundset.codigo				
			frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
			frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
			elements.codigo_elemento.requestFocus()		    
		}
	}else{
		globals.gbl_codigo_solucion   = ''
		frm_descripcion_solucion      = 'TODOS'
		globals.gbl_codigo_formulario = ''
		frm_descripcion_formulario    = 'TODOS'
	}
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"6B7DCE9F-05E3-4B9D-868B-1F6BD0C36CFF"}
 */
function onAction_buscar_elemento(event) {	
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion   = ''
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
		frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
		frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
		frm_descripcion_elemento      = tbl_elemento_to_tbl_elemento.descripcion
		elements.codigo_elemento.requestFocus()
	}else{
		globals.gbl_codigo_solucion   = ''
		frm_descripcion_solucion      = 'TODOS'
		globals.gbl_codigo_formulario = ''
		frm_descripcion_formulario    = 'TODOS'
		globals.gbl_codigo_elemento   = ''
		frm_descripcion_elemento      = 'TODOS'
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"CA0FAB0F-00C3-4682-A34F-999F7B897E5B"}
 */
function onAction_controla_codigo_elemento(event) {
	if(globals.gbl_codigo_elemento != '' && globals.gbl_codigo_elemento != null){
		var encontro = tbl_elemento_to_tbl_elemento.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    globals.gbl_codigo_elemento   = ''
		    frm_descripcion_elemento      = 'TODOS'
		    elements.codigo_elemento.requestFocus()
		}else{
			globals.gbl_codigo_solucion   = forms.frm_scr_elemento.foundset.codigo_solucion
			globals.gbl_codigo_formulario = forms.frm_scr_elemento.foundset.codigo_formulario
			globals.gbl_codigo_elemento   = forms.frm_scr_elemento.foundset.codigo
			frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
			frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
			frm_descripcion_elemento      = tbl_elemento_to_tbl_elemento.descripcion
			elements.bt_procesar.requestFocus()		    
		}
	}else{
		globals.gbl_codigo_solucion   = ''
		frm_descripcion_solucion      = 'TODOS'
		globals.gbl_codigo_formulario = ''
		frm_descripcion_formulario    = 'TODOS'
		globals.gbl_codigo_elemento   = ''
		frm_descripcion_elemento      = 'TODOS'
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CFF2AF97-C515-4717-A46C-05242F052A0B"}
 */
function onAction_buscar_perfil(event) {
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_perfil = ''
	var win = application.createWindow("Busca_perfil",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Perfil'
    win.resizable = false
    win.show(forms.frm_tab_perfiles)
	win.destroy()
	if (globals.gbl_selec != 0){
		globals.gbl_codigo_perfil = globals.gbl_perfil			
		frm_descripcion_perfil    = tbl_perfil_to_tbl_perfil.descripcion
		elements.codigo_perfil.requestFocus()
	}else{
		globals.gbl_codigo_perfil = ''
		frm_descripcion_perfil    = 'TODOS'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7A19441-B7DE-4262-BC98-2F8572EDCE7F"}
 */
function onAction_controla_codigo_perfil(event) {
	if(globals.gbl_codigo_perfil != '' && globals.gbl_codigo_perfil != null){
		var encontro = tbl_perfil_to_tbl_perfil.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    globals.gbl_codigo_perfil = ''
		    frm_descripcion_perfil    = 'TODOS'
		    elements.codigo_perfil.requestFocus()
		}else{			
			globals.gbl_codigo_perfil = tbl_perfil_to_tbl_perfil.codigo
			frm_descripcion_perfil    = tbl_perfil_to_tbl_perfil.descripcion
			elements.bt_procesar.requestFocus()		    
		}
	}else{		
		globals.gbl_codigo_perfil = ''
		frm_descripcion_perfil    = 'TODOS'
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C53FB639-C28B-48E8-A609-FED255D46BED"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	forms.frm_perfil_cons_itm.foundset.find()
	if(globals.gbl_codigo_solucion != ''){
		forms.frm_perfil_cons_itm.foundset.codigo_solucion = globals.gbl_codigo_solucion
	}
	if(globals.gbl_codigo_formulario != ''){
		forms.frm_perfil_cons_itm.foundset.codigo_formulario = globals.gbl_codigo_formulario
	}
	if(globals.gbl_codigo_elemento != ''){
		forms.frm_perfil_cons_itm.foundset.codigo_elemento = globals.gbl_codigo_elemento
	}
	if(globals.gbl_codigo_perfil != ''){
		forms.frm_perfil_cons_itm.foundset.codigo_perfil = globals.gbl_codigo_perfil
	}
	if(frm_accesible == true){
		forms.frm_perfil_cons_itm.foundset.accesible = frm_accesible
	}
	if(frm_visible == true){
		forms.frm_perfil_cons_itm.foundset.visible = frm_visible
	}
	forms.frm_perfil_cons_itm.foundset.search()
	if(forms.frm_perfil_cons_itm.foundset.getSize()== 0){
		globals.DIALOGS.showWarningDialog('Atención','No hay datos para mostrar', 'Ok')
	    elements.codigo_solucion.requestFocus()
		elements.bt_imprimir.enabled       = false
		elements.bt_exportar_prf.enabled   = false
		elements.bt_exportar_excel.enabled = false
	}else{
		elements.bt_imprimir.enabled       = true
		elements.bt_exportar_prf.enabled   = true
		elements.bt_exportar_excel.enabled = true		
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5741934A-982F-499C-BEA3-203B79FC240F"}
 */
function onAction_imprimir(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_perfil_cons_itm.foundset,'rp_seguridad_perfiles_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B69DFA87-A3E9-4B68-8ECA-8488DBA6654B"}
 */
function onAction_exportar_pdf(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-perfiles-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms.frm_perfil_cons_itm.foundset,'rp_seguridad_perfiles_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
		var $OS = application.getOSName();
		if (/Windows/.test($OS)) {
		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
	    } else if (/Linux|Freebsd/.test($OS)) {
	       application.executeProgram('xdg-open', $arch);
	    } else if (/Mac/.test($OS)) {
	       application.executeProgram('open', $arch);
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D61BCDBF-6D2D-4CD9-AB85-F2F63A0131F4"}
 */
function onAction_exportar_excel(event) {
	application.updateUI() 
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-perfiles-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms.frm_perfil_cons_itm.foundset,'rp_seguridad_perfiles_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
		
		var $OS = application.getOSName();
		if (/Windows/.test($OS)) {
		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
	    } else if (/Linux|Freebsd/.test($OS)) {
	       application.executeProgram('xdg-open', $arch);
	    } else if (/Mac/.test($OS)) {
	       application.executeProgram('open', $arch);
	    }
	}
}

