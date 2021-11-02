/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85D081A4-E84A-4F1D-9678-68DB285E20BB",variableType:4}
 */
var frm_error = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"806A3DA7-ED6B-486C-B71C-A6E0155BE561",variableType:4}
 */
var aux_total_fecha = 0;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"8A986C26-EEB1-4EA4-8A11-7068C8A12140",variableType:4}
 */
var aux_tot_ambulatorio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"39098EF1-C83C-43AC-B511-1ED8EDA003CD",variableType:4}
 */
var aux_tot_internado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45ED8B2A-36A8-4196-854B-4E1C83A6577F",variableType:4}
 */
var aux_tot_urgente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F953DDB2-7D4B-429C-BEBD-0E43BB4D8752",variableType:4}
 */
var aux_totales = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C86E812-2602-4200-8B6F-D4C62A8E6C6F"}
 */
function onAction_btn_procesa(event) {
	frm_error = 0
	onAction_buscar_profesional(event) 
	onAction_buscar_cobertura(event)
	onAction_buscar_motivo(event)
	if (frm_error == 0){
		if (globals.gbl_con_fecha_desde == null){
			globals.showErrorDialog('Debe ingresar Fecha desde', null, 'Ok',null, null, null);
	        elements.con_fecha_desde.requestFocus()
	    }else{
		    if (globals.gbl_con_fecha_hasta == null){
		        globals.showErrorDialog('Debe ingresar Fecha hasta', null, 'Ok',null, null, null);
		        elements.con_fecha_hasta.requestFocus()
		    }else{
			    elements.tabless_1.tabIndex=1
		        forms.msg_bar_progress.elements.bean_progress.minimum = 0
		        forms.msg_bar_progress.elements.bean_progress.maximum = 0			
			    forms.msg_bar_progress.elements.Texto_proceso.text= 'Generando consulta'
			    forms.msg_bar_progress.elements.img_grabar.visible = true
    			forms.msg_bar_progress.elements.img_excel.visible = false
		    	forms.msg_bar_progress.elements.img_imprimir.visible = false
			    elements.tabless_1.visible = true
			   // elements.aux_total_fecha.enabled = false 
		    	forms.frm_cons_cirugias_suspendidas_tbl.filtra()
	            if (forms.frm_cons_cirugias_suspendidas_tbl.foundset.getSize() !== 0){
				    elements.btn_imprimir.enabled = true
				    elements.btn_exportar.enabled = true

			    }else{
				    elements.btn_imprimir.enabled = false
				    elements.btn_exportar.enabled = false
				//	elements.aux_total_fecha.enabled = false
				}
			    elements.tabless_1.visible = false
		    }
	    }
	}
}

/**	
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C862186-5C38-4BD3-A862-735803F34595"}
 */
function onAction_buscar_profesional(event) {
	if (globals.gbl_con_profesional != '') {
	   // identifica si el campo es numérico o alfanumerico
	   var largo = globals.gbl_con_profesional.length;
	   var esnumero = true;
	   for (var i= 0;i<largo && esnumero == true; i++){
     		if (globals.gbl_con_profesional.charCodeAt(i)< 48 || globals.gbl_con_profesional.charCodeAt(i) > 57){
		    	esnumero = false
	    	}
	   }
	   if (esnumero){
    	   if(largo>6){
    		   //muestra mensaje de "dialogo"
			   globals.showErrorDialog('Error en código de Profesional, Ingrese un código correcto', null, 'Ok',null, null, null);
			   elements.con_profesional.requestFocus()
			   frm_error = 1
	   	   }else{
	   		   globals.gbl_profesional = utils.stringToNumber(globals.gbl_con_profesional.toString())	   		
	   		   if (gbl_prof_to_profesionales.getSize() < 1){
				   frm_error = 1
			       globals.showWarningDialog('Registro Inexistente.', null, 'Ok', null, null, null);
			       globals.gbl_con_profesional = ''
			       globals.gbl_profesional = 0
				   globals.gbl_con_profesional_apeynom = ''
			   	   elements.con_profesional.requestFocus()
			   }else {
			   	   globals.gbl_con_profesional_apeynom = gbl_prof_to_profesionales.medperapeynom
			   	   elements.con_fecha_desde.requestFocus()
			   }		
	   	   }
       }else{
    	   globals.gbl_con_indice = 1
       	   var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
		   win.title= 'Buscar Profesional'
		   win.resizable = false
		   globals.gbl_con_busca = globals.gbl_con_profesional
	       win.show(forms.frm_tab_med_per)
		   if (forms.frm_scr_med_per.foundset.medpercod > 0){
		      globals.gbl_con_profesional = forms.frm_scr_med_per.foundset.medpercod.toString()
		      globals.gbl_con_profesional_apeynom = forms.frm_scr_med_per.foundset.medperapeynom
		   }
	   }
    }else{
    	globals.gbl_profesional = 0
        globals.gbl_con_profesional_apeynom = 'TODOS'
    }
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0CF9C64D-0729-4807-883B-29A9CA5C83A6"}
 */
function onShow_inicializa_consulta(firstShow, event) {
	
	inicializa_consulta()
	globals.gbl_con_profesional_apeynom = 'TODOS'
	globals.gbl_con_motivo_nombre = 'TODOS'
	globals.gbl_con_cobertura_nombre = 'TODAS'
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"9B6B145A-DB0A-4254-9F0C-71187FE15963"}
 */
function inicializa_consulta() {
	globals.gbl_con_profesional = ''
	globals.gbl_profesional = 0
	globals.gbl_motivo_sus = 0
	globals.gbl_con_fecha_desde = null
	globals.gbl_con_fecha_hasta = null
	globals.gbl_con_tipo_histcli = 3
	globals.gbl_con_cobertura = ''
	globals.gbl_con_motivo_sus = ''
    globals.gbl_cobertura = 0
	elements.btn_imprimir.enabled = false
	elements.btn_exportar.enabled = false
	//elements.aux_total_fecha.enabled = false
	//aux_tot_ambulatorio = null
	//aux_tot_internado = null
	//aux_tot_urgente = null
	//aux_totales = null
	//aux_total_fecha = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34B0A551-3359-4ABD-BD59-372A913E53A2"}
 * @AllowToRunInFind
 */
function onAction_btn_imprimir(event){
	var win = application.createWindow("Selec_Reporte",JSWindow.MODAL_DIALOG)	
	win.title= 'Preparando Impresión'
	win.resizable = false
    win.show(forms.prn_cons_cirugias_suspendidas_sel)
	win.destroy()
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
 * @properties={typeid:24,uuid:"0831D0B2-5823-43E9-B8AC-61BCF1E063CA"}
 */
function onDataChange_controla_fecha_hasta(oldValue, newValue, event) {
	if (globals.gbl_con_fecha_hasta != null){
	   if (globals.gbl_con_fecha_hasta < globals.gbl_con_fecha_desde){
		   globals.showErrorDialog('La Fecha Hasta no puede ser menor a la Fecha Desde.', null, 'Ok', null, null, null);
		   elements.con_fecha_hasta.requestFocus()
		}
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"660BBF18-CF19-465A-A86C-0E7F74985B80"}
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
    
	var dp = ['Fecha','Quirofano_Nro', 'Hora_Desde', 'Hora_Hasta', 'Paciente_Nombre', 'Paciente_Tipo','Paciente_Histcli', 'Cirujano_Nombre','Especialidad_Cirujano', 'Obra_Social','Quirofano_Motivo_Susp', 'Observaciones_Motivos', 'Fecha_Carga', 'Hora_Carga', 'Operador_Alta', 'Operador_Modifica']
	var bytes = plugins.excelxport.excelExport(forms.frm_cons_cirugias_suspendidas_tbl.foundset,dp)
	var vfile = plugins.file.showFileSaveDialog("SQ-1869-" + application.getIPAddress() + ".xls")
	plugins.file.writeFile(vfile,bytes)
	elements.tabless_1.visible = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC3FD64E-08E4-4284-8CE9-C37441C9A804"}
 */
function onAction_buscar_profesional_consulta(event) {
		var largo = globals.gbl_con_profesional.length;
	    var esnumero = true;
	    globals.gbl_con_indice = 1;
	    for (var i= 0;i<largo && esnumero == true; i++){
		   if (globals.gbl_con_profesional.charCodeAt(i)< 48 || globals.gbl_con_profesional.charCodeAt(i) > 57){
			   esnumero = false
		   }
	    }
	    if (esnumero){
		   globals.gbl_profesional = utils.stringToNumber(globals.gbl_con_profesional.valueOf())
		   globals.gbl_con_indice = 2
	    }else{
		   globals.gbl_con_indice = 1
	    }
	    var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
	    win.title= 'Buscar Profesional'
	    win.resizable = false
		globals.gbl_con_busca = globals.gbl_con_profesional
        win.show(forms.frm_tab_med_per)
	
	    if (forms.frm_scr_med_per.foundset.medpercod > 0){
	       elements.btn_imprimir.enabled = true
	       elements.btn_exportar.enabled = true
		   globals.gbl_con_profesional = forms.frm_scr_med_per.foundset.medpercod.toString()
		   globals.gbl_con_profesional_apeynom = forms.frm_scr_med_per.foundset.medperapeynom
	   }else{
		   globals.gbl_profesional = 0
	   }
	   
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B03E3E4-ADE2-455B-8058-DCB7016E85E7"}
 */
function onAction_buscar_cobertura(event) {
	if (globals.gbl_con_cobertura != ''){
		   // identifica si el campo es numérico o alfanumerico
		   var largo = globals.gbl_con_cobertura.length;
		   var esnumero = true;
		   for (var i= 0;i<largo && esnumero == true; i++){
	     		if (globals.gbl_con_cobertura.charCodeAt(i)< 48 || globals.gbl_con_cobertura.charCodeAt(i) > 57){
			    	esnumero = false
		    	}
		   }
	       if (esnumero){
	    	   if(largo>4){
	    		   //muestra mensaje de "dialogo"
				   globals.showErrorDialog('Error en código de Cobertura, Ingrese un código correcto', null, 'Ok',null, null, null);
				   elements.con_cobertura.requestFocus()
				   frm_error = 1
		   	   }else{
		   		   globals.gbl_cobertura = utils.stringToNumber(globals.gbl_con_cobertura.valueOf())	   		
				   if (globals.gbl_cob_to_coberturas.getSize() < 1){
					   frm_error = 1
				       globals.showWarningDialog('Registro Inexistente.', null, 'Ok', null, null, null);
				   	   globals.gbl_con_cobertura = ''
				   	   globals.gbl_cobertura = 0
					   globals.gbl_con_cobertura_nombre = ''
				   	   elements.con_cobertura.requestFocus()
				   }else{
				       globals.gbl_con_cobertura_nombre = gbl_cob_to_coberturas.obr_razonsoc
				       elements.btn_procesa.requestFocus()
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1
	       	   var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
			   win.title= 'Buscar Cobertura'
			   win.resizable = false
		       win.show(forms.frm_tab_coberturas)
			   if (forms.frm_scr_coberturas.foundset.obr_codigo > 0){
			       globals.gbl_con_cobertura = forms.frm_scr_coberturas.foundset.obr_codigo.toString()
			       globals.gbl_con_cobertura_nombre = forms.frm_scr_coberturas.foundset.obr_razonsoc
			   }
		   }
	}else{
	       globals.gbl_con_cobertura_nombre = 'TODAS'
	       globals.gbl_cobertura = 0
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B078856-7B91-47D9-B839-52F7CAA41469"}
 */
function onAction_buscar_cobertura_consulta(event) {
	var largo = globals.gbl_con_cobertura.length;
	var esnumero = true;
	globals.gbl_con_indice = 1;
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_cobertura.charCodeAt(i)< 48 || globals.gbl_con_cobertura.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }
    if (esnumero){
	   globals.gbl_cobertura = utils.stringToNumber(globals.gbl_con_cobertura.valueOf())
	   globals.gbl_con_indice = 2
    }else{
	   globals.gbl_con_indice = 1
    }
    var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Cobertura'
    win.resizable = false
    win.show(forms.frm_tab_coberturas)

    if (forms.frm_scr_coberturas.foundset.obr_codigo > 0){
       elements.btn_imprimir.enabled = true
       elements.btn_exportar.enabled = true
	   globals.gbl_con_cobertura = forms.frm_scr_coberturas.foundset.obr_codigo.toString()
	   globals.gbl_con_cobertura_nombre = forms.frm_scr_coberturas.foundset.obr_razonsoc
   }else{
	   globals.gbl_cobertura = 0
   }
}

/**
 * @properties={typeid:24,uuid:"75F022ED-EC26-4918-A479-9B31B3D00725"}
 */
function Borra_aux() {
	forms.frm_cons_cirugias_suspendidas_tbl.borrar_aux()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"075C0E6D-0E8D-4901-92B2-663C6853CE9F"}
 */
function onAction_cambiar_totales(event) {
	//aux_tot_ambulatorio = globals.gbl_tot_ambulatorio[aux_total_fecha]
    //aux_tot_internado   = globals.gbl_tot_internado[aux_total_fecha]
    //aux_tot_urgente     = globals.gbl_tot_urgente[aux_total_fecha]
    //aux_totales         = globals.gbl_tot_totales[aux_total_fecha]
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F62451B4-5E0A-49E6-80AE-C244858DA608"}
 */
function onAction_buscar_motivo(event) {
	if (globals.gbl_con_motivo_sus != ''){
		   // identifica si el campo es numérico o alfanumerico
		   var largo = globals.gbl_con_motivo_sus.length;
		   var esnumero = true;
		   for (var i= 0;i<largo && esnumero == true; i++){
	     		if (globals.gbl_con_motivo_sus.charCodeAt(i)< 48 || globals.gbl_con_motivo_sus.charCodeAt(i) > 57){
			    	esnumero = false
		    	}
		   }
	       if (esnumero){
	    	   if(largo>4){
	    		   //muestra mensaje de "dialogo"
				   globals.showErrorDialog('Error en código de Motivo, Ingrese un código correcto', null, 'Ok',null, null, null);
				   elements.con_motivo_sus.requestFocus()
				   frm_error = 1
		   	   }else{
		   		   globals.gbl_motivo_sus = utils.stringToNumber(globals.gbl_con_motivo_sus.valueOf())	   		
				   if (globals.gbl_cob_to_motivos.getSize() < 1){
					   frm_error = 1
				       globals.showWarningDialog('Registro Inexistente.', null, 'Ok', null, null, null);
				   	   globals.gbl_con_motivo_sus = ''
				   	   globals.gbl_motivo_sus = 0
					   globals.gbl_con_motivo_nombre = ''
				   	   elements.con_motivo_sus.requestFocus()
				   }else{
				       globals.gbl_con_motivo_nombre = gbl_cob_to_motivos.motdes
				       elements.btn_procesa.requestFocus()
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1
	       	   var win = application.createWindow("Busca_motivo",JSWindow.MODAL_DIALOG)	
			   win.title= 'Buscar Motivo Suspención'
			   win.resizable = false
		       win.show(forms.frm_tab_motivos_sus)
			   if (forms.frm_scr_motivos_sus.foundset.motnro > 0){
			       globals.gbl_con_motivo_sus = forms.frm_scr_motivos_sus.foundset.motnro.toString()
			       globals.gbl_con_motivo_nombre = forms.frm_scr_motivos_sus.foundset.motdes
			   }
		   }
	}else{
	       globals.gbl_con_motivo_nombre = 'TODOS'
	       globals.gbl_motivo_sus = 0
	}		   
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBE6E56D-1BF1-45F3-82A0-208D72F5807E"}
 */
function onAction_buscar_motivos_consulta(event) {
	var largo = globals.gbl_con_motivo_sus.length;
	var esnumero = true;
	globals.gbl_con_indice = 1;
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_motivo_sus.charCodeAt(i)< 48 || globals.gbl_con_motivo_sus.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }
    if (esnumero){
	   globals.gbl_motivo_sus = utils.stringToNumber(globals.gbl_con_motivo_sus.valueOf())
	   globals.gbl_con_indice = 2
    }else{
	   globals.gbl_con_indice = 1
    }
    var win = application.createWindow("Busca_motivo",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Motivos Suspención'
    win.resizable = false
    win.show(forms.frm_tab_motivos_sus)

    if (forms.frm_scr_motivos_sus.foundset.motnro > 0){
       elements.btn_imprimir.enabled = true
       elements.btn_exportar.enabled = true
	   globals.gbl_con_motivo_sus = forms.frm_scr_motivos_sus.foundset.motnro.toString()
	   globals.gbl_con_motivo_nombre = forms.frm_scr_motivos_sus.foundset.motdes
   }else{
	   globals.gbl_motivo_sus = 0
   }
}
