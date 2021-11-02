/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E391ACDC-7CC5-49C5-8532-1232475811AF"}
 */
var frm_descripcion_item = ''
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F99624D3-EFD1-4224-93E3-7860AE772289"}
 */
var frm_codigo_item = ''
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"11798E08-0540-43C4-920B-20361F10BA9C"}
 */
var frm_descripcion_solucion = ''

/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"D56D00B5-DEE0-4B41-8DDE-577335DD1F31"}
 */
function onShow_inicio(firstShow, event) {
	frm_descripcion_item     = 'TODOS'
	frm_descripcion_solucion = 'TODOS'
	forms.frm_mante_menu_cons_det.foundset.clear()	

	var dataset = application.getValueListItems('vl_tipo_acceso_itm')
	dataset.addRow(['TODOS'])	
	elements.tipo_acceso.setValueListItems(dataset)	
	
	dataset = application.getValueListItems('vl_modulo')
	dataset.addRow(['TODOS'])	
	elements.modulo.setValueListItems(dataset)	
	
	dataset = application.getValueListItems('vl_tipo_item')
	dataset.addRow(['TODOS'])	
	elements.tipo_item.setValueListItems(dataset)	
	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92FF988C-19C0-40C8-820C-57835BCD42AC"}
 */
function onAction_buscar_item(event) {
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_item   = ''
    var win = application.createWindow("Busca_item_menu",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Items de Menú'
    win.resizable = false
    win.show(forms.frm_tab_itm_menu)
	win.destroy()
	if (globals.gbl_item != 0){
		globals.gbl_codigo_item  = globals.gbl_item
		frm_codigo_item          = globals.gbl_item		
	    frm_descripcion_item     = tbl_itm_menu_to_tbl_itm_menu2.descripcion
	    elements.bt_procesar.requestFocus()	
    }else{
    	frm_codigo_item = ''
		frm_descripcion_item    = 'TODOS'
	    elements.codigo_solucion.requestFocus()	   	   
    }
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"9D16F732-B08A-421A-8BA8-988450CDC49E"}
 */
function onAction_controlar_codigo(event) {
	if(frm_codigo_item != '' && frm_codigo_item != null){
		globals.gbl_codigo_item = frm_codigo_item 
		var encontro = tbl_itm_menu_to_tbl_itm_menu2.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    frm_codigo_item      = ''
		    frm_descripcion_item = 'TODOS'
	        elements.codigo_item.requestFocus()
		}else{	 
            frm_descripcion_item =tbl_itm_menu_to_tbl_itm_menu2.descripcion 
			elements.codigo_solucion.requestFocus()
		}
	}else{
		frm_codigo_item      = ''
	    frm_descripcion_item = 'TODOS'
	}
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"E3DA5930-9107-4DFA-9B0A-C68902A5AAA2"}
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
			elements.bt_procesar.requestFocus()		    
		}
	}else{
		globals.gbl_codigo_solucion = ''
		frm_descripcion_solucion    = 'TODOS'
	}
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"A61ED195-28B7-49B4-8157-BB8DEC7951BD"}
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
	    elements.bt_procesar.requestFocus()	
    }else{
    	globals.gbl_codigo_solucion = ''
		frm_descripcion_solucion    = 'TODOS'
	    elements.codigo_solucion.requestFocus()	   	   
    }    
}

/**
 * @AllowToRunInFind
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"5272EFBE-E5D2-41A2-88A6-4C1950DDA43C"}
 */
function onAction_procesar(event) {
	forms.frm_mante_menu_cons_det.foundset.find()
	if(globals.gbl_codigo_solucion != ''){
		forms.frm_mante_menu_cons_det.foundset.codigo_solucion = globals.gbl_codigo_solucion
	}	
	if(globals.gbl_tipo_acceso != '' || globals.gbl_tipo_acceso != null){
		forms.frm_mante_menu_cons_det.foundset.tipo_acceso = globals.gbl_tipo_acceso
	}
	if(globals.gbl_modulo != '' || globals.gbl_modulo != null){
		forms.frm_mante_menu_cons_det.foundset.modulo = globals.gbl_modulo
	}
	if(globals.gbl_tipo_item != '' || globals.gbl_tipo_item != null){
		forms.frm_mante_menu_cons_det.foundset.tipo_item = globals.gbl_tipo_item
	}
	forms.frm_mante_menu_cons_det.foundset.search()
	if(forms.frm_mante_menu_cons_det.foundset.getSize()== 0){
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
 * @param event
 *
 * @properties={typeid:24,uuid:"4DCA4C7B-81C0-40B3-A70A-0B5A76E2AC0D"}
 */
function onAction_imprimir(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_mante_menu_cons_det.foundset,'rp_seguridad_mante_menu_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"2941D420-C55D-455C-986F-D26352F0F8AC"}
 */
function onAction_exportar_pdf(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-mante_menu-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms.frm_mante_menu_cons_det.foundset,'rp_seguridad_mante_menu_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
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
 * @param event
 *
 * @properties={typeid:24,uuid:"D1269AE0-F2F4-49C4-9EB4-B5AE7A1F2BBF"}
 */
function onAction_exportar_excel(event) {
	application.updateUI() 
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-mante_menu-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms.frm_mante_menu_cons_det.foundset,'rp_seguridad_mante_menu_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
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
