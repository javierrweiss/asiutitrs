/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E99F449-44FE-42A5-946F-DB5722AD3577",variableType:8}
 */
var frm_error = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38486A2F-52E2-4D8A-9D3E-3A53EEC053D8"}
 */
function onAction_btn_procesa(event) {
	frm_error = 0
	onAction_buscar_profesional(event)
	onAction_buscar_cobertura(event)
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
		    	forms.frm_cons_protocolo_quirurgico_tbl.filtra()
	            if (forms.frm_cons_protocolo_quirurgico_tbl.foundset.getSize() !== 0){
				    elements.btn_imprimir.enabled = true
				    // elements.btn_exportar.enabled = true
			    }else{
				    elements.btn_imprimir.enabled = false
				    elements.btn_exportar.enabled = false
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
 * @properties={typeid:24,uuid:"8FA2E01E-456E-4D02-AB38-58BEE719258B"}
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
 * @properties={typeid:24,uuid:"2B812C04-84ED-4F66-BD83-80653E0EB4CE"}
 */
function onShow_inicializa_consulta(firstShow, event) {
	inicializa_consulta()
	globals.gbl_con_profesional_apeynom = 'TODOS'
	globals.gbl_con_cobertura_nombre = 'TODAS'
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"48893FA8-DC98-4D3E-A9BC-CFAEBE98768B"}
 */
function inicializa_consulta() {
	globals.gbl_con_profesional = ''
	globals.gbl_profesional = 0
	globals.gbl_con_fecha_desde = null
	globals.gbl_con_fecha_hasta = null
	globals.gbl_con_cobertura = ''
    globals.gbl_cobertura = 0
	elements.btn_imprimir.enabled = false
	elements.btn_exportar.enabled = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C7C1ABE-447A-4527-91C7-8ABAA73E8FFA"}
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
	forms.prn_cons_protocolo_quirurgico.recorre_aux()
	globals.printRoutine('prn_cons_protocolo_quirurgico', true)
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
 * @properties={typeid:24,uuid:"5AC8F9D7-6A46-42BB-9CB8-1CE0BBF9F2F7"}
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
 * @properties={typeid:24,uuid:"801AA069-7F77-4082-AAEB-D41F4A11942D"}
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
    
	var dp = ['Profesional_Nombre', 'Historia_Clinica', 'Historia_Clinica_Nombre' , 'Protocolo', 'Fecha_Carga', 'Hora_Carga', 'Fecha_Inicio' , 'Hora_Inicio', 'Fecha_Final', 'Hora_Final', 'Obra_Social'] 
	var bytes = plugins.excelxport.excelExport(forms.frm_cons_protocolo_quirurgico_tbl.foundset, dp)
	var vfile = plugins.file.showFileSaveDialog("SQ-389-" + application.getIPAddress() + ".xls")
	plugins.file.writeFile(vfile,bytes)
	elements.tabless_1.visible = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3EA8C7A7-83B2-47BA-BD7B-4842688758D0"}
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
 * @properties={typeid:24,uuid:"934B034A-ECE3-4757-A452-1DD9D7057454"}
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
 * @properties={typeid:24,uuid:"B8493D67-7FF2-446B-9D28-0BC445A29692"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EDB7D472-50E4-4804-9061-F28D772497BC"}
 */
function onAction_cerrar(event) {
	forms.frm_cons_protocolo_quirurgico_tbl.borrar_aux()
	globals.gbl_vClose = true
	var args = globals.vLegajo+ ';' +globals.vLega+ ';' + globals.vOperador+  ';' +globals.vTipoOperador+';' + "true"
    application.closeSolution('Menu','retorno_MenuCirugia' , args)
}
