/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B12329F-4150-4A1C-BAC7-453544405EE1",variableType:4}
 */
var frm_error = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0923B7A1-083F-4AC6-8749-E1B615DB41DB",variableType:4}
 */
var aux_total_fecha = 0;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"00E0F4BA-3282-4624-83F2-8C3A2B9FC114",variableType:4}
 */
var aux_tot_ambulatorio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8ADF7232-F0E8-45FE-8BA1-69A0CF1EEF7B",variableType:4}
 */
var aux_tot_internado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3C34331-D61C-487E-8CF1-780C15B1F741",variableType:4}
 */
var aux_tot_urgente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5365F473-C1FB-4BCD-A2C7-BA2063D36E27",variableType:4}
 */
var aux_totales = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41A26A1B-B01F-4295-950D-0773C207AFD3"}
 */
function onAction_btn_procesa(event) {
	frm_error = 0
	onAction_buscar_profesional(event)
	onAction_buscar_cobertura(event)
	onDataChange_controla_quirofano_desde(0,0,event)
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
			    elements.aux_total_fecha.enabled = false
		    	forms.frm_cons_turnos_quirofano_tbl.filtra()
	            if (forms.frm_cons_turnos_quirofano_tbl.foundset.getSize() !== 0){
				    elements.btn_imprimir.enabled = true
				    //elements.btn_exportar.enabled = true
					// Muestra Totales
				    aux_tot_ambulatorio = globals.gbl_tot_ambulatorio[0]
				    aux_tot_internado   = globals.gbl_tot_internado[0]
				    aux_tot_urgente     = globals.gbl_tot_urgente[0]
				    aux_totales         = globals.gbl_tot_totales[0]
				   
				    var aArgs = new Array();
				  	var aArgs_i = new Array();
				  	var fecha_aux = new Date()
				  	for (var j= 0; globals.gbl_tot_fecha[j] > 0; j++){
				  		fecha_aux =globals.gbl_tot_fecha[j]
					    aArgs.push(fecha_aux.getDate() + '/'+(fecha_aux.getMonth()+1)+'/'+ fecha_aux.getFullYear())
					    aArgs_i.push(j)
				  	}	
					application.setValueListItems('vl_fechas_total',aArgs,aArgs_i)
					aux_total_fecha     = 0
					elements.aux_total_fecha.enabled = true  
			    }else{
				    elements.btn_imprimir.enabled = false
				    elements.btn_exportar.enabled = false
					elements.aux_total_fecha.enabled = false
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
 * @properties={typeid:24,uuid:"BCF215E8-EE01-4078-8341-FC34D44E4654"}
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
		   win.destroy()
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
 * @properties={typeid:24,uuid:"06F46373-9DDD-4667-97D7-57A2CBB818F7"}
 */
function onShow_inicializa_consulta(firstShow, event) {
	inicializa_consulta()
	globals.gbl_con_profesional_apeynom = 'TODOS'
	globals.gbl_con_cobertura_nombre = 'TODAS'
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"7E115D23-7FDE-46A4-AB57-5CA163D86F5F"}
 */
function inicializa_consulta() {
	globals.gbl_con_profesional = ''
	globals.gbl_profesional = 0
	globals.gbl_con_quirofano_desde = 0
	globals.gbl_con_quirofano_hasta = 0	
	globals.gbl_con_fecha_desde = null
	globals.gbl_con_fecha_hasta = null
	globals.gbl_con_turnos = 0
	globals.gbl_con_cobertura = ''
    globals.gbl_cobertura = 0
	elements.btn_imprimir.enabled = false
	elements.btn_exportar.enabled = false
	elements.aux_total_fecha.enabled = false
	aux_tot_ambulatorio = null
	aux_tot_internado = null
	aux_tot_urgente = null
	aux_totales = null
	aux_total_fecha = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6742298E-99EC-4563-8F9B-9BDB8B56869A"}
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
	forms.prn_cons_turnos_quirofano.recorre_aux()
	globals.printRoutine('prn_cons_turnos_quirofano', true)
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
 * @properties={typeid:24,uuid:"CEBCE9D6-1F93-4EDD-885B-9573B2AA1FF1"}
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
 * @properties={typeid:24,uuid:"84014E22-8F45-4FED-8367-B0A24034C2B1"}
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
    
	var dp = ['Quirofano_Nro', 'Fecha', 'Hora_Desde', 'Hora_Hasta' , 'Quirofano_Estado', 'Quirofano_Motivo_Susp', 'Paciente_Tipo', 'Paciente_Nombre', 'Paciente_Telefono' , 'Obra_Social', 'Cirujano_Nombre', 'Intervencion', 'Intervencion_Descripcion', 'Observaciones', 'Anestesiologo', 'Anestesiologo_Nombre', 'Instrumentador', 'Fecha_Carga', 'Hora_Carga', 'Operador_Alta', 'Operador_Modifica']
	var bytes = plugins.excelxport.excelExport(forms.frm_cons_turnos_quirofano_tbl.foundset,dp)
	var vfile = plugins.file.showFileSaveDialog("SQ-515-" + application.getIPAddress() + ".xls")
	plugins.file.writeFile(vfile,bytes)
	elements.tabless_1.visible = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87B55604-04F7-44C7-85D5-3AF5C5E3F9F3"}
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
		win.destroy()
	
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
 * @properties={typeid:24,uuid:"281D496C-5D50-4FA2-9E82-F451E5BAA0CD"}
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
			   win.destroy()
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
 * @properties={typeid:24,uuid:"8045F5FF-A6F1-4FA7-A4A1-4C3DE0BFF61B"}
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
	win.destroy()

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
 * @properties={typeid:24,uuid:"8B2979B4-F480-4896-A7F1-83F485D86DBE"}
 */
function Borra_aux() {
	forms.frm_cons_turnos_quirofano_tbl.borrar_aux()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9EFA1B8C-E8AA-454B-BB08-E9FB98367116"}
 */
function onAction_cerrar(event) {
//	globals.gbl_vClose = true
	var args = globals.vLegajo+ ';' +globals.vLega+ ';' + globals.vOperador+  ';' +globals.vTipoOperador+';' + "true"
 application.closeSolution('Menu','retorno_MenuCirugia' , args)
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D5EAE85B-4EBE-49DD-AAE8-01E6EFF86866"}
 */
function onDataChange_controla_quirofano_desde(oldValue, newValue, event) {
	if (globals.gbl_con_quirofano_desde == 0){
		globals.gbl_con_quirofano_desde = 1
		globals.gbl_con_quirofano_hasta = 99
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A9904D03-567B-4C63-B1C5-8B9571B5BA7B"}
 */
function onDataChange_controla_quirofano_hasta(oldValue, newValue, event) {
	if (globals.gbl_con_quirofano_hasta > 0){
		   if (globals.gbl_con_quirofano_hasta < globals.gbl_con_quirofano_desde){
			   globals.showErrorDialog('Quirófano Hasta no puede ser menor a quirófano Desde.', null, 'Ok', null, null, null);
			   elements.con_quirofano_hasta.requestFocus()
			}
		}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D4246F4-A8DD-4950-ADB0-1FA45A140C8C"}
 */
function onAction_cambiar_totales(event) {
	aux_tot_ambulatorio = globals.gbl_tot_ambulatorio[aux_total_fecha]
    aux_tot_internado   = globals.gbl_tot_internado[aux_total_fecha]
    aux_tot_urgente     = globals.gbl_tot_urgente[aux_total_fecha]
    aux_totales         = globals.gbl_tot_totales[aux_total_fecha]
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B4CAE35-6823-48B4-B245-534DB5995996"}
 */
function onAction_Cerrar(event) {
	forms.frm_cons_turnos_quirofano_tbl.borrar_aux()
	globals.gbl_vClose = true
	var args = globals.vLegajo+ ';' +globals.vLega+ ';' + globals.vOperador+  ';' +globals.vTipoOperador+';' + "true"
    application.closeSolution('Menu','retorno_MenuCirugia' , args)
}
