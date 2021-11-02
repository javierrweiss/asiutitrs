/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94A45FA2-3346-48F6-98B4-B4A775681025",variableType:4}
 */
var frm_error = 0;

/**
 * Perform the element default action. 
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08D63BC6-3094-493D-9BCD-93BE6F01D30F"}
 */
function onAction_btn_procesa(event) {
	
	if (globals.gbl_con_hiscli == 0 && globals.gbl_con_fecha_desde == null) {
		globals.showErrorDialog('Debe Ingresar Fecha o Historia Clínica', null, 'Ok', null, null, null);
		elements.con_fecha_desde.requestFocus()
	}else{
		if (globals.gbl_con_hiscli != ''){
			onAction_buscar_hist_clin(event)
		    application.updateUI()
		    if (frm_error == 1) {
		    	elements.con_hiscli.requestFocus()
		    }else{
		    	globals.gbl_con_fecha_desde = null
		    	globals.gbl_con_fecha_hasta = null
		    	procesa() 
		    }
	    }else{
	    	if (globals.gbl_con_fecha_desde == null){
			    globals.showErrorDialog('Debe Ingresar Fecha Desde', null, 'Ok', null, null, null);
			    elements.con_fecha_desde.requestFocus()
		    }else{
			   if (globals.gbl_con_fecha_hasta == null){
				   globals.showErrorDialog('Debe Ingresar Fecha Hasta', null, 'Ok', null, null, null);
				   elements.con_fecha_hasta.requestFocus()
			   }else{
				   globals.gbl_con_hiscli = ''
				   globals.hisclin = 0	    
				   procesa()
			   }
		    }
	    }	
	}
}
		
	
/**
 * @properties={typeid:24,uuid:"E60766AD-898F-4940-84F1-8581CBDDC0C0"}
 */
function procesa() {
	elements.tabless_1.tabIndex=1
    forms.msg_bar_progress.elements.bean_progress.minimum = 0
	forms.msg_bar_progress.elements.bean_progress.maximum = 0			
    forms.msg_bar_progress.elements.Texto_proceso.text= 'Generando consulta'
	forms.msg_bar_progress.elements.img_grabar.visible = true
	forms.msg_bar_progress.elements.img_excel.visible = false
   	forms.msg_bar_progress.elements.img_imprimir.visible = false
    elements.tabless_1.visible = true
   	forms.frm_cons_solicitud_anatomia_tbl.filtra()
    if (forms.frm_cons_solicitud_anatomia_tbl.foundset.getSize() !== 0){
	    elements.btn_imprimir.enabled = true
		// elements.btn_exportar.enabled = true
	}else{
		elements.btn_imprimir.enabled = false
		elements.btn_exportar.enabled = false
	}
	elements.tabless_1.visible = false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54CC64FB-CAA8-4CE3-9F98-D6B87550589A"}
 */
function onShow_inicializa_consulta(firstShow, event) {
	inicializa_consulta()
    controller.focusFirstField()	
}

/**
 * @properties={typeid:24,uuid:"003DCDD5-4464-453F-B891-3A4D311ED3EB"}
 */
function inicializa_consulta() {
	globals.gbl_con_fecha_desde = null   
	globals.gbl_con_fecha_hasta = null
	globals.gbl_con_hiscli = ''
	globals.gbl_hiscli = 0
	globals.apeynom = ''
	elements.btn_imprimir.enabled = false
	elements.btn_exportar.enabled = false 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"809F8C1D-D875-4B91-9FED-6C59B095C71D"}
 * @AllowToRunInFind
 */
function onAction_btn_imprimir(event){
	elements.tabless_1.tabIndex=1
    forms.msg_bar_progress.elements.bean_progress.minimum = 0
    forms.msg_bar_progress.elements.bean_progress.maximum = 0
	forms.msg_bar_progress.elements.Texto_proceso.text= 'Preparando impresión'
	forms.msg_bar_progress.elements.img_grabar.visible = false
	forms.msg_bar_progress.elements.img_excel.visible = false
	forms.msg_bar_progress.elements.img_imprimir.visible = true
	elements.tabless_1.visible = true
	forms.prn_cons_solicitud_anatomia.recorre_aux()
	globals.printRoutine('prn_cons_solicitud_anatomia', true)
	elements.tabless_1.visible = false
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BF805B91-644A-4DE3-8006-DAD6281EEF59"}
 */
function onDataChange_controla_fecha_hasta(oldValue, newValue, event) {
	if (globals.gbl_con_fecha_hasta != null){
	   if (globals.gbl_con_fecha_hasta < globals.gbl_con_fecha_desde){
		   globals.showErrorDialog('La Fecha Hasta no puede ser menor a la Fecha Desde.', null, 'Ok', null, null, null);
		   elements.con_fecha_hasta.requestFocus()
		}
	   globals.gbl_con_hiscli = ''
	   globals.gbl_hiscli = 0
	   globals.gbl_apeynom = ''
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CFE08678-FD7E-4359-9EEC-8CC2127E29E8"}
 */
function onAction_btn_exportar(event) {
	elements.tabless_1.tabIndex=1
    forms.msg_bar_progress.elements.bean_progress.minimum = 0
    forms.msg_bar_progress.elements.bean_progress.maximum = 0			
	forms.msg_bar_progress.elements.Texto_proceso.text= 'Generando archivo Excel'
	forms.msg_bar_progress.elements.img_grabar.visible = false
	forms.msg_bar_progress.elements.img_excel.visible = true
	forms.msg_bar_progress.elements.img_imprimir.visible = false
	elements.tabless_1.visible = true
    
	var dp = ['Hist_Clinica','Hist_Tip_Clin','Hist_Clin_Nombre', 'Nro_Solicitud', 'Fecha_Solicitud', 'Fecha_Resultado', 'Fecha_Recibido','Fecha_Entregado', 'Practica','Practica_Descripcion', 'Practica_Cantidad']
	var bytes = plugins.excelxport.excelExport(forms.frm_cons_solicitud_anatomia_tbl.foundset,dp)
	var vfile = plugins.file.showFileSaveDialog("SQ-253-" + application.getIPAddress() + ".xls")
	plugins.file.writeFile(vfile,bytes)
	elements.tabless_1.visible = false
}

/**
 * @properties={typeid:24,uuid:"71932505-6E19-4AC3-8FCC-7431C0D5A994"}
 */
function Borra_aux() {
	forms.frm_cons_solicitud_anatomia_tbl.borrar_aux()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69FEAC36-94C3-4E35-82B9-7764D1C6831A"}
 */
function onAction_Cerrar(event) {
	forms.frm_cons_solicitud_anatomia_tbl.borrar_aux()
	globals.gbl_vClose = true
	var args = globals.vLegajo+ ';' +globals.vLega+ ';' + globals.vOperador+  ';' +globals.vTipoOperador+';' + "true"
    application.closeSolution('Menu','retorno_MenuCirugia' , args)
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"78C3DBD3-F039-434A-B28F-CF5488922EAE"}
 */
function onAction_buscar_hist_clin_consulta(event) {
	var largo = globals.gbl_con_hiscli.length;
	var esnumero = true;
	globals.gbl_con_indice = 1;
	for (var i = 0; i < largo && esnumero == true; i++) {
		if (globals.gbl_con_hiscli.charCodeAt(i) < 48 || globals.gbl_con_hiscli.charCodeAt(i) > 57) {
			esnumero = false
		}
	}
	if (esnumero) {
		globals.gbl_hiscli = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
		globals.gbl_con_indice = 2
	} else {
		globals.gbl_con_indice = 1
	}
	var win = application.createWindow("Busca_hist_clin_unica", JSWindow.MODAL_DIALOG)
	win.title = 'Buscar Historia Clínica Única.' 
	win.resizable = false
	win.show(forms.frm_tab_hist_clin_unica)
	if (globals.gbl_con_indice == 1 ){
		globals.hisclin = buscar_tbc_admision_scroll_unica_nombre.histcabnrounico
		}else{
	    globals.hisclin = buscar_tbc_admision_scroll_unica_numero.histcabnrounico 
	}
	if (hisclin_to_tbc_admision_scroll.getSize() > 0) {
		globals.gbl_con_hiscli = hisclin_to_tbc_admision_scroll.adm_histclinuni.toString()
		globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
		globals.gbl_cobertura = hisclin_to_tbc_admision_scroll.adm_histclin
	} else {
		if (hisclin_to_tbc_hist_cab.getSize() > 0) {
			globals.gbl_cobertura = 0
			globals.gbl_con_hiscli = hisclin_to_tbc_hist_cab.histcabnrounico.toString()
			globals.apeynom = hisclin_to_tbc_hist_cab.histcabapellnom
		}else{
		    globals.gbl_hiscli = 0
		    globals.hisclin = 0
			frm_error = 1
		}
	}
	globals.gbl_con_fecha_desde = null
	globals.gbl_con_fecha_hasta = null
}


/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"33A75533-2C44-4D47-9F35-05DBD6ECA1E4"}
 */
function onAction_buscar_hist_clin(event) {
	frm_error = 0
    for (var j= 0; j < 10; j++){
    	globals.gbl_hist_clin[j] = 0
	}
	if (globals.gbl_con_hiscli != '') {
		// identifica si el campo es numérico o alfanumerico
		var largo = globals.gbl_con_hiscli.length;
		var esnumero = true;
		for (var i = 0; i < largo && esnumero == true; i++) {
			if (globals.gbl_con_hiscli.charCodeAt(i) < 48 || globals.gbl_con_hiscli.charCodeAt(i) > 57) {
				esnumero = false
			}
		}
		if (esnumero) {
			if (largo > 7) {
				//muestra mensaje de "dialogo"
				globals.showErrorDialog('Error en código de Historia Clínica, Ingrese un código correcto', null, 'Ok', null, null, null);
				elements.con_hiscli.requestFocus()
				frm_error = 1
			} else {
				globals.hisclin = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
				
				if (hisclin_to_tbc_admision_scroll.getSize() < 1) {
					if (hisclin_to_tbc_hist_cab.getSize() > 0) {
						globals.gbl_con_hiscli = hisclin_to_tbc_hist_cab.histcabnrounico.toString()
						globals.apeynom = hisclin_to_tbc_hist_cab.histcabapellnom
					}else{
   					    frm_error = 1
	    				globals.showWarningDialog('Registro Inexistente.', null, 'Ok', null, null, null);
		    			globals.gbl_con_hiscli = ''
			    		globals.apeynom = ''
					    elements.con_hiscli.requestFocus() 
					}
				}else{
					globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
					//globals.gbl_cobertura = hisclin_to_tbc_admision_scroll.adm_histclin 
					var aArgs = new Array();
					var SQL = "select adm_histclinuni, adm_histclin from vis_tbc_admision_scroll_hcu where adm_histclinuni = " + globals.gbl_con_hiscli 
				    var _ds = databaseManager.getDataSetByQuery("admisionscroll", SQL, aArgs, -1);
				    if (_ds.getMaxRowIndex() != 0){
				    	 for (i= 1; i <= _ds.getMaxRowIndex(); i++){
				    		 globals.gbl_hist_clin[i-1] = _ds.getValue(i,2)
				    	 }
					}
				    elements.btn_procesa.requestFocus()
				}
			}
		} else {
			globals.gbl_con_indice = 1
			globals.gbl_apeynom = globals.gbl_con_hiscli.toLocaleUpperCase()
			var win = application.createWindow("Busca_hist_clin_unica", JSWindow.MODAL_DIALOG)
			win.title = 'Buscar Historia Clínica Única'
			win.resizable = false
			win.show(forms.frm_tab_hist_clin_unica)
			globals.hisclin = buscar_tbc_admision_scroll_unica_nombre.histcabnrounico 
			if (hisclin_to_tbc_admision_scroll.getSize() > 0){
				globals.gbl_con_hiscli = hisclin_to_tbc_admision_scroll.adm_histclinuni.toString()
				globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
				globals.gbl_cobertura = hisclin_to_tbc_admision_scroll.adm_histclin
			} else {
				if (hisclin_to_tbc_hist_cab.getSize() > 0) {
					globals.gbl_cobertura = 0
					globals.gbl_con_hiscli = hisclin_to_tbc_hist_cab.histcabnrounico.toString()
					globals.apeynom = hisclin_to_tbc_hist_cab.histcabapellnom
				}else{
					globals.gbl_hiscli = 0
				    globals.hisclin = 0
					frm_error = 1
				}
			}				
		}
	}
	globals.gbl_con_fecha_desde = null
	globals.gbl_con_fecha_hasta = null
}
