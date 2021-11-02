/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A9F414B9-D604-4995-B8C9-47870F678EB1"}
 */
function onAction_btn_procesa(event) {
	
	 forms.frm_consultas_tbl.filtra()
	if (forms.frm_consultas_tbl.foundset.getSize() !== 0){
		elements.btn_imprimir.enabled = true
		elements.btn_exportar.enabled = true
	}else{
		elements.btn_imprimir.enabled = false
		elements.btn_exportar.enabled = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5BD3D47D-EAEC-4DBA-BB62-CBF81883F05A"}
 */
function onAction_buscar_dni(event) {
	// identifica si el campo es numérico o alfanumerico
	var largo = globals.gbl_buscar.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.gbl_buscar.charCodeAt(i)< 48 || globals.gbl_buscar.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo>8){
    		//muestra mensaje de "dialogo"
			globals.showErrorDialog('Error en Nro. de Documento, Ingrese un número correcto', null, 'Ok',null, null, null);
			elements.con_documento.requestFocus()
	   	}
    }
    else{
    	globals.gbl_indice = 1
       	var win = application.createWindow("Busca",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Visitante'
		win.resizable = false
	    win.show(forms.frm_tab_visitantes)
		if (forms.frm_visitantes.foundset.vis_nro_doc > 0){
		   globals.gbl_buscar = forms.frm_visitantes.foundset.vis_nro_doc.toString()
		
		}
    }	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A85F9CF-9178-4063-8591-DCFDA4132938"}
 */
function onShow_inicializa_consulta(firstShow, event) {
	inicializa_consulta()
}

/**
 * @properties={typeid:24,uuid:"8038327C-21FC-496B-BED8-456E139880D2"}
 */
function inicializa_consulta() {
	globals.gbl_buscar = ''
	globals.gbl_dni = 0
	globals.gbl_con_fecha_ingr_desde = null
	globals.gbl_con_fecha_ingr_hasta = null
	globals.gbl_con_fecha_egr_desde = null
	globals.gbl_con_fecha_egr_hasta = null
	globals.gbl_con_sector = null
	globals.gbl_con_a_quien = null
	elements.btn_imprimir.enabled = false
	elements.btn_exportar.enabled = false
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9B302EA2-4184-429C-934C-BAD9AC299D68"}
 * @AllowToRunInFind
 */
function onDataChange_sector_consulta(oldValue, newValue, event) {
	var fs = databaseManager.getFoundSet("bases_auxiliares","tbl_acceso_sector")
	fs.find()
	fs['tbl_sector_desc'] = globals.gbl_con_sector
	fs.search()
	if (fs.getSize() > 0){
		fs.setSelectedIndex(1)
		globals.gbl_sector = fs['tbl_id_sector']
	}
	return true
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D29C629A-17DF-4E5B-8E6C-34B172982A70"}
 */
function onAction_btn_imprimir(event) {
	forms.prn_consulta.controller.print()
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF65C2C4-77D3-44B0-9972-29C0BC7A4C4F"}
 */
function onAction_controla_fecha_ing_hasta(event) {
	if (globals.gbl_con_fecha_ingr_hasta < globals.gbl_con_fecha_ingr_desde){
		globals.showErrorDialog('La Fecha Hasta no puede ser menor a la Fecha Desde.', null, 'Ok', null, null, null);
		elements.con_fecha_ing_hasta.requestFocus()
		}
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
 * @properties={typeid:24,uuid:"44CC1BC3-2DA9-4501-A73B-F589FF4B8860"}
 */
function onDataChange_controla_fecha_egr_hasta(oldValue, newValue, event) {
	if (globals.gbl_con_fecha_egr_hasta < globals.gbl_con_fecha_egr_desde){
		globals.showErrorDialog('La Fecha Hasta no puede ser menor a la Fecha Desde.', null, 'Ok', null, null, null);
		elements.con_fecha_egr_hasta.requestFocus()
		}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6BF28722-8ABB-4570-82F8-A2E873524D20"}
 */
function onAction_btn_exportar(event) {
	var bytes = plugins.excelxport.excelExport(forms.frm_consultas_tbl.foundset, ['mov_nro_doc','tbl_movimientos_accesos_to_tbl_visitantes.vis_nombre','tbl_movimientos_accesos_to_tbl_visitantes.vis_apellido','fecha_ingreso','hora_ingreso', 'mov_sector', 'mov_a_quien','mov_motivo', 'fecha_egreso', 'hora_egreso', 'usuario_nombre', 'usuario_apellido']);
	var vfile = plugins.file.showFileSaveDialog("Movimientos.xls")
	plugins.file.writeFile(vfile,bytes)
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
 * @properties={typeid:24,uuid:"50F62D2E-C9E9-4F22-B764-0CECF1C8E1A9"}
 */
function onDataChange_borrar_egreso(oldValue, newValue, event) {
	if (globals.gbl_con_sin_fecha_egr == 1) {
		globals.gbl_con_fecha_egr_desde = null
		globals.gbl_con_fecha_egr_hasta = null
		elements.con_fecha_egr_desde.enabled = false
		elements.con_fecha_egr_hasta.enabled = false
	}else{
		elements.con_fecha_egr_desde.enabled = true
		elements.con_fecha_egr_hasta.enabled = true
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BCA0595-6844-47CB-BB1B-885BA92BBE7F"}
 */
function onAction_buscar_dni_consulta(event) {
	var largo = globals.gbl_buscar.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.gbl_buscar.charCodeAt(i)< 48 || globals.gbl_buscar.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	if (esnumero){
		globals.gbl_dni = utils.stringToNumber(globals.gbl_buscar.valueOf())
		globals.gbl_indice = 2
	}else{
		globals.gbl_indice = 1
	}
	var win = application.createWindow("Busca",JSWindow.MODAL_DIALOG)	
	win.title= 'Buscar Visitante'
	win.resizable = false
    win.show(forms.frm_tab_visitantes)
	if (forms.frm_visitantes.foundset.vis_nro_doc > 0){
	    elements.btn_imprimir.enabled = true
	    elements.btn_exportar.enabled = true
		globals.gbl_buscar = forms.frm_visitantes.foundset.vis_nro_doc.toString() 

	}
}
