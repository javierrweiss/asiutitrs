/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"88CDA750-6502-4A12-B64E-513828872EED"}
 */
var frm_descripcion_solucion = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"434DD9DB-CE23-48A9-AAD2-4D193A96D980"}
 */
var frm_descripcion_formulario = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6FF5B51-25EB-4BCA-BE2D-260042976584"}
 */
function onShow_inicio(firstShow, event) {
	frm_descripcion_solucion   = 'TODOS'
	frm_descripcion_formulario = 'TODOS'
	forms.frm_formulario_cons_det.foundset.clear()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B439BD3-D4E9-4F2C-AF2B-F87508B1DB80"}
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
			//frm_descripcion_formulario    = 'TODOS'
			//globals.gbl_codigo_formulario = ''	
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
 * @properties={typeid:24,uuid:"856BE6C5-891B-43AA-8D97-D142D4DF2D42"}
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
	    //frm_descripcion_formulario    = 'TODOS'
		//globals.gbl_codigo_formulario = ''
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
 * @properties={typeid:24,uuid:"2847D986-1D71-4E5E-A2E2-C7B52CDC8DB4"}
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
 * @properties={typeid:24,uuid:"C676BB16-B180-46AD-8CD0-9385FA0513F5"}
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
			elements.bt_procesar.requestFocus()		    
		}
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
 * @properties={typeid:24,uuid:"5F52B6F3-A992-4AD5-B619-884B5F80AE51"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	forms.frm_formulario_cons_det.foundset.find()
	if(globals.gbl_codigo_solucion != ''){
		forms.frm_formulario_cons_det.foundset.codigo_solucion = globals.gbl_codigo_solucion
	}
	if(globals.gbl_codigo_formulario != ''){
		forms.frm_formulario_cons_det.foundset.codigo = globals.gbl_codigo_formulario
	}
	forms.frm_formulario_cons_det.foundset.search()
	if(forms.frm_formulario_cons_det.foundset.getSize()== 0){
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
 * @properties={typeid:24,uuid:"04AB029A-D2ED-4422-8F26-81C9F26FE02F"}
 */
function onAction_imprimir(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_formulario_cons_det.foundset,'rp_seguridad_formularios_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FC7D584-977D-4B00-AE4C-C0D836144E34"}
 */
function onAction_exportar_pdf(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-formularios-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms.frm_formulario_cons_det.foundset,'rp_seguridad_formularios_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
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
 * @properties={typeid:24,uuid:"75D9DD03-8DC0-44C1-A6C7-155DE027AB55"}
 */
function onAction_exportar_excel(event) {
	application.updateUI() 
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-formularios-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms.frm_formulario_cons_det.foundset,'rp_seguridad_formularios_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
		
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
