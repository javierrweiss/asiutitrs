/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"786B4F75-D112-4C16-9FFF-A495CC1B48B1"}
 */
var frm_descripcion_solucion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"00D4653A-BD1E-4EF2-86AC-67B0CAF8BC0F"}
 */
var frm_descripcion_formulario = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"81FA2C5B-9AB1-4A4A-91C1-3BEE685CB9CB"}
 */
var frm_descripcion_elemento = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C331DB3C-4DBA-4986-92E2-59093C47CB27"}
 */
function onShow_inicio(firstShow, event) {
	frm_descripcion_solucion   = 'TODOS'
	frm_descripcion_formulario = 'TODOS'
	frm_descripcion_elemento   = 'TODOS'
	forms.frm_elemento_cons_det.foundset.clear()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8A9181E-1738-40BF-8EC1-75B6245C9E1A"}
 */
function onAction_controla_codigo_solucion(event) {
	if(globals.gbl_codigo_solucion != '' && globals.gbl_codigo_solucion != null){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
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
 * @properties={typeid:24,uuid:"27AD9C7C-051D-4A87-BF67-1E8C517F6CC0"}
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
 * @properties={typeid:24,uuid:"C89DFB2E-9F05-4553-95D8-B0F60A32415B"}
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
 * @properties={typeid:24,uuid:"D5322414-C54D-471E-9E0B-6A3EBF86F5CE"}
 */
function onAction_controla_codigo_formulario(event) {
	if(globals.gbl_codigo_formulario != '' && globals.gbl_codigo_formulario != null){
		var encontro = tbl_formulario_to_tbl_formulario.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
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
 * @properties={typeid:24,uuid:"8D45F567-1FF8-4123-9813-439BD1F208C0"}
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
 * @properties={typeid:24,uuid:"483A5E58-7A31-4E62-9253-E5B26C0EFD9B"}
 */
function onAction_controla_codigo_elemento(event) {
	if(globals.gbl_codigo_elemento != '' && globals.gbl_codigo_elemento != null){
		var encontro = tbl_elemento_to_tbl_elemento.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
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
 * @properties={typeid:24,uuid:"530DCF3C-FFDD-4D26-81DE-9E6B2C244C9B"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	forms.frm_elemento_cons_det.foundset.find()
	if(globals.gbl_codigo_solucion != ''){
		forms.frm_elemento_cons_det.foundset.codigo_solucion = globals.gbl_codigo_solucion
	}
	if(globals.gbl_codigo_formulario != ''){
		forms.frm_elemento_cons_det.foundset.codigo_formulario = globals.gbl_codigo_formulario
	}
	if(globals.gbl_codigo_elemento != ''){
		forms.frm_elemento_cons_det.foundset.codigo = globals.gbl_codigo_elemento
	}
	forms.frm_elemento_cons_det.foundset.search()
	if(forms.frm_elemento_cons_det.foundset.getSize()== 0){
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
 * @properties={typeid:24,uuid:"46F75A18-181F-48E2-AF44-8939C02DE044"}
 */
function onAction_imprimir(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_elemento_cons_det.foundset,'rp_seguridad_elementos_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5CFB8BD-8578-40AC-B917-A9BE64BD442E"}
 */
function onAction_exportar_pdf(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-elementos-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms.frm_elemento_cons_det.foundset,'rp_seguridad_elementos_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
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
 * @properties={typeid:24,uuid:"1862CEC7-A34D-4EC9-94B8-7B080FBB6DE2"}
 */
function onAction_exportar_excel(event) {
	application.updateUI() 
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-elementos-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms.frm_elemento_cons_det.foundset,'rp_seguridad_elementos_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
		
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
