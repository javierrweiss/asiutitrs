/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B60C36FD-0030-4B9D-9827-369C450B9675"}
 */
var fhisclinica_edit = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7EF4215-6CC6-4002-BDE3-1EE388E181B0"}
 */
function onShowMenu(firstShow, event) {
	elements.vhiscli.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"928B1E9E-D72A-474E-9231-8201AF80B88D"}
 */
function onLoadMenu(event) {
	
	globals.segambu_tipohist = 1
	elements.lbl_cirugia.visible = false
	elements.vservicio.visible = false
	elements.vcodnome.visible = false
	elements.icod_descrcod.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"C08BB77B-9400-4AA0-B264-A90EE7882C36"}
 * @AllowToRunInFind
 */
function onDataChangeVhiscli(oldValue, newValue, event) {
	globals.vClose=false
	fhisclinica_edit = globals.vHiscli.toString()
	var largo =fhisclinica_edit.length
	fhisclinica_edit = fhisclinica_edit.substr(0, largo - 1) + '/' + fhisclinica_edit.substr(largo - 1, 1)

	
	globals.segambu_vvalhisto = true
	forms.seguquiambu_frm_menu_0.elements.vhiscli.enabled = false
	
	
	databaseManager.revertEditedRecords()
	
	
    forms.seguquiambu_frm_menu_0.controller.focusFirstField()
	
	
	if (seguquiambu_vhiscli_to_tbc_hist_cab_new.getSize() > 0) {
		globals.segambu_vvalhisto=ValidarGuardia()
		if(globals.segambu_vvalhisto){
			if(seguquiambu_vs_to_tbc_seguqui_new.getSize()>0){
				globals.segambu_existesegu = 'S'
				globals.segambu_vexistesegu = 'S'
			}else{
				globals.segambu_existesegu = 'N'
				globals.segambu_vexistesegu = 'N'
			}
			BuscarHisLectora(event)
			application.updateUI()	
		}else{
			globals.vHiscli = 0
			fhisclinica_edit = ''
			elements.vhiscli.enabled = true
			elements.vhiscli.editable = true
			globals.segambu_existesegu = 'N'
			globals.segambu_vexistesegu = 'N'
			history.back()
		}
	}else{
		globals.vHiscli = 0
		fhisclinica_edit = ''
		globals.segambu_existesegu = 'N'
		globals.segambu_vexistesegu = 'N'
		//plugins.dialogs.showErrorDialog('Error', 'La Historia Clinica no está en ADMISION', '  OK  ')
		
	}
}

/**
 * @properties={typeid:24,uuid:"467E0578-7C23-44A7-A44B-1FE8138C807F"}
 * @AllowToRunInFind
 */
function ValidarAdmision(event) {
	var fs = databaseManager.getFoundSet("maestros", "tbc_obras")
	fs.find()		
	fs['obr_codigo'] = seguquiambu_vhiscli_to_tbc_admision.adm_obrsoc_7
	fs.search()
	
	if (fs.getSize() == 0){
		fs['obr_espami'] = 0
		fs['obr_razonsoc'] = fs['obr_codigo']
	}
	if (seguquiambu_vhiscli_to_tbc_admision.adm_fecepic > 0 && fs['obr_espami'] != 2) {
		plugins.dialogs.showInfoDialog('Atencion', 'Paciente con Alta Clínica', 'OK')
		globals.segambu_vvalhisto = false
	} 
	if (seguquiambu_vhiscli_to_tbc_admision.adm_fecaltaefec > 0 && fs['obr_espami'] != 2) {
		plugins.dialogs.showInfoDialog('Atencion', 'Paciente egresó del Sanatorio', 'OK')
		globals.segambu_vvalhisto = false
	}
	return globals.segambu_vvalhisto
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"7D3EA0F8-CBF9-4680-8092-60B6DA6B0E1F"}
 * @AllowToRunInFind
 */
function BuscarSeguquiSi() {
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.find()
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_tiphistclin_1 = 0
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_histclin_1    = globals.vhiscli
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_protocolo     = globals.vprotocolo
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.search()

	var fs = databaseManager.getFoundSet("asistencial", "tbc_seguqui_new")
	fs.find()
	fs['segtipohc'] = 1
	fs['seghistclinica'] = globals.vHiscli
	fs['segfechacarga'] = globals.segambu_fecha_ingreso
	fs['seghoracarga'] = globals.segambu_hora_ingreso
	fs.search()

	if (fs.getSize() > 0) {
		globals.segambu_existesegu = 'S'
	} 
	else {
		globals.segambu_existesegu = 'N'
	}
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"B53C9B27-9127-42A9-B024-9082D616B7F3"}
 * @AllowToRunInFind
 */
function BuscarSeguquiNo() {
	

	var fs = databaseManager.getFoundSet("asistencial", "tbc_seguqui_new")
	fs.find()
	fs['segtipohc'] = 1
	fs['seghistclinica'] = globals.vHiscli
	fs['segfechacarga'] = globals.segambu_fecha_ingreso
	fs['seghoracarga'] = globals.segambu_hora_ingreso
	fs.search()
	if (fs.getSize() > 0) {
		globals.segambu_existesegu = 'S'
	} else {
		globals.segambu_existesegu = 'N'
	}
	return true
}

/**
 * @AllowToRunInFind
 *
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"75A7CE16-D1D7-4987-9A5D-DC7976770879"}
 */
function BuscarHisLectora(event) {
	globals.segambu_vexistelectora = 'N'
	globals.segambu_vNomenclaLectora=0
	globals.segambu_vestadolectora=1
	var vQuery = " select hlec_histclin, hlec_estado, hlec_nomencla, hlec_art, hlec_fecped, hlec_nropedunico from tbc_his_lectora where hlec_histclin = ?  and hlec_tiphistclin = 1 and (hlec_estado = 1 or hlec_estado = 3)"
	var args = new Array()
	args[0]=globals.vHiscli
	
	var fDataset = databaseManager.getDataSetByQuery("asistencial", vQuery, args, -1);
	if (fDataset.getMaxRowIndex()>0){
		for(var i=1;i<=fDataset.getMaxRowIndex()&&globals.segambu_vexistelectora == 'N';i++){
			if ( (fDataset.getValue(i,2) == 1 || fDataset.getValue(i,2) == 3) && fDataset.getValue(i,5) != 0 && fDataset.getValue(i,3) == 0 && fDataset.getValue(i,4) == 9999) {
				globals.segambu_vexistelectora = 'S'
			}
			if ( (fDataset.getValue(i,2) == 1 || fDataset.getValue(i,2) == 3) && fDataset.getValue(i,5) != 0 && fDataset.getValue(i,6) != 0 && fDataset.getValue(i,4) == 9999) {
				globals.segambu_vNomenclaLectora=fDataset.getValue(i,3)
				globals.segambu_vnropedunico=fDataset.getValue(i,6)
				globals.segambu_vexistelectora = 'S'
			}
		}
	}
	//vhiscli2_to_tbc_his_lectora.loadAllRecords()
	
	if (globals.segambu_vexistelectora == 'S') {
		MostrarIntervencion(event)
	}
	if (globals.segambu_vexistelectora == 'N') {
		
		//BuscarCirugint()
		
		if(ValidarGuardia()){
			if(globals.segambu_vexistesegu== 'N'){
				IngresarIntervencion(event)
			}else{
				forms.seguquiambu_frm_menu_0.elements.tabless_opciones.visible=true
				seguquiambu_vs_to_tbc_seguqui_new.loadAllRecords()
				globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_acirculante')
				forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
			}
		}else{
			forms.seguquiambu_frm_menu_0.elements.tabless_opciones.visible=true
			seguquiambu_vs_to_tbc_seguqui_new.loadAllRecords()
			globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_acirculante')
			forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
		}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BBD7CC41-5DB3-4A09-972C-387CEB15240B"}
 * @AllowToRunInFind
 */
function MostrarIntervencion(event) {
	var vinterven = '      '

	var fs = databaseManager.getFoundSet("maestros", "tbc_imacodi")
	fs.clear()
	fs.find()
	fs['icodtiponom'] = 01
	fs['icodcodinom'] = globals.segambu_vNomenclaLectora
	fs.search()

	if (fs.getSize() > 0) {
		elements.lbl_cirugia.visible = true
		//elements.vservicio.enabled = false
		globals.segambu_codnome = fs['icodcodinom']
		elements.vcodnome.visible = true
		elements.icod_descrcod.visible = true
		elements.vcodnome.enabled = false
		elements.icod_descrcod.enabled = false

		//vinterven = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Confirma la Intervención?     ', '  Si  ', '  No  ')
		if (vinterven == '  No  ' && globals.segambu_vnropedunico != 0 && globals.segambu_vnropedunico != '') {
			plugins.dialogs.showInfoDialog('Información', 'Existe Seguridad Quirurgica asociada: ' + globals.segambu_vnropedunico, '  OK  ')
		} else {
			if (vinterven == '  No  ') {
				globals.segambu_vexistelectora = 'N'
				IngresarIntervencion(event)
			}
		}
	}
	
	//BuscarCirugint()
	
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.visible=true
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
	//globals.MuestroTildeSeguqui("frm_acirculante_new")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"78C999CF-3F29-4B1B-AF7F-CA2296B95252"}
 */
function IngresarIntervencion(event) {
	elements.lbl_cirugia.visible = true
	elements.vservicio.enabled = true
	elements.vservicio.visible = true
	elements.lookup_nomenclador.enabled=true
	elements.vservicio.requestFocus()
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7736DA2D-915B-4C9B-9188-B3774BC2CA59"}
 * @AllowToRunInFind
 */
function onDataChangeVcodnome(oldValue, newValue, event) {
	if(globals.segambu_codnome!=0&&globals.segambu_codnome!=null&&globals.segambu_codnome!=''){
		var fs1 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
		fs1.clear()
		fs1.find()
		fs1['icodtiponom'] = globals.segambu_tiponome
		fs1['icodcodinom'] = globals.segambu_codnome
		fs1['icodestado'] = '<9'
		fs1.search()

	

		if (fs1.getSize() > 0) {
			elements.icod_descrcod.visible = true
			elements.vservicio.enabled = false
			elements.vcodnome.enabled = false
			elements.icod_descrcod.enabled = false
			elements.lookup_nomenclador.enabled=false
			GrabarHisLectora()

			MuestraOpciones()
			return true
			
		} else {
			globals.segambu_codnome = 0
			elements.vcodnome.requestFocus()
			return false
		}
		
	}else{
		globals.segambu_codnome = 0
		elements.vcodnome.requestFocus()
		return false
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 *
 * @properties={typeid:24,uuid:"AB23789C-AD3C-40C9-8910-D231B7B9F482"}
 */
function GrabarHisLectora() {
	if (globals.segambu_vexistelectora == 'N') {
		//if (foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami != 2){
		//var fs2 = databaseManager.getFoundSet("maestros", "tbc_param2")
		//globals.vnropedunico = fs2['prm2_54'] + 1
		//fs2['prm2_54'] = globals.vnropedunico
		//databaseManager.saveData()
		//}
		//else{
		//globals.vnropedunico = 0
		//}
		globals.segambu_vnropedunico = 0
		var done0 = plugins.rawSQL.executeSQL("parametros", "param2", "begin; lock table param2 in row exclusive mode;")
		if (!done0) {
			var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
		}
		var done = plugins.rawSQL.executeSQL("parametros", "param2", "select * from param2 where key_param2 = 1 for update;")
		if (!done) {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
		var vQuery = " SELECT * FROM param2 WHERE key_param2 = 1";
		var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
		
		var nombre_campo='prm2_54';
		var numero_campo=54;
		globals.segambu_vnropedunico=vDataset.getValue(1,numero_campo)+1;
		var done1 = plugins.rawSQL.executeSQL("parametros", "param2", "update param2 set " + nombre_campo + " = " + nombre_campo +" + 1 where key_param2 = 1; commit;")
		if (!done1) {
			var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
		}
		
		if (globals.segambu_servicio == 5){
			globals.segambu_vestadolectora=3
			globals.segambu_estadolectora=3
		}
		if (globals.segambu_servicio == 6){
			globals.segambu_vestadolectora=1
			globals.segambu_estadolectora=1
		}
		seguqui_vhiscli2_to_tbc_his_lectora.newRecord()
		globals.InicializarDatosDeRelacion(seguqui_vhiscli2_to_tbc_his_lectora,"asistencial","tbc_his_lectora")
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_histclin = globals.vHiscli
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_tiphistclin = 1
		if (globals.segambu_servicio == 5){
			seguqui_vhiscli2_to_tbc_his_lectora.hlec_estado = 3
			seguqui_vhiscli2_to_tbc_his_lectora.hlec_sector = 34
		}
		if (globals.segambu_servicio == 6){
			seguqui_vhiscli2_to_tbc_his_lectora.hlec_estado = 1
			seguqui_vhiscli2_to_tbc_his_lectora.hlec_sector = 66
		}
		var fecha0 = application.getServerTimeStamp()

		seguqui_vhiscli2_to_tbc_his_lectora.hlec_fec = utils.stringToNumber(globals.FormatearFecha(fecha0,'AAAAMMDD'))
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_hora = utils.stringToNumber(globals.FormatearFecha(fecha0,'HHMMSSDD'))
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_fecped = utils.stringToNumber(globals.FormatearFecha(fecha0,'AAAAMMDD'))
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_horped = utils.stringToNumber(globals.FormatearFecha(fecha0,'HHMM'))

		seguqui_vhiscli2_to_tbc_his_lectora.hlec_art = 9999
		
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_nomencla = globals.segambu_codnome
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_nropedunico = globals.segambu_vnropedunico
		seguqui_vhiscli2_to_tbc_his_lectora.hlec_filler = ' '
		/*
		application.output(vhiscli2_to_tbc_his_lectora.hlec_histclin)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_art)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_artpedfar)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_cama)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_canpedfar)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_cant)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_combo)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_conindic)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_estado)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_fec)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_fecing)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_feclec)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_fecped)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_filler)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_habita)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_histclin)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_hora)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_horing)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_horlec)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_horped)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_imagen)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_imed)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_justificado)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_key_imapedi)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_key_pedfar)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_legmed)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_legoper)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_medori)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_nomencla)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_nropedunico)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_nrorep)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_postanes)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_protocolo)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_reposicion)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_sdopedfar)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_sector)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_tiphistclin)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_tiplegmed)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_tiplegoper)
		application.output(vhiscli2_to_tbc_his_lectora.hlec_urgen)
		*/
		
		
		databaseManager.saveData(seguqui_vhiscli2_to_tbc_his_lectora.getRecord(1))
		var error1=''
		var error2=''
		var array = databaseManager.getFailedRecords(seguqui_vhiscli2_to_tbc_his_lectora)
		for (var i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		}
		globals.segambu_vexistelectora='S'

		//if (foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami != 2) {
		var fecha = utils.stringToNumber(seguqui_vhiscli2_to_tbc_his_lectora.hlec_fec)
		var hora = utils.stringToNumber(seguqui_vhiscli2_to_tbc_his_lectora.hlec_hora)
		
		globals.GenerarTXTInterfaseVisualMedica(2, globals.segambu_servicio, 1, globals.vHiscli, fecha, hora, 0)
		//}
	}
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSFoundset} fs
 * @param {String}     base
 * @param {String}     tabla
 *
 * @properties={typeid:24,uuid:"4DFCBBBB-348E-47C1-9E57-6ABCB4866A4C"}
 */
function InicializarHisLectora(fs, base, tabla) {
	var table = databaseManager.getTable(base, tabla);
	var columnNamesArray = table.getColumnNames();
	for (var i = 0; i < columnNamesArray.length; i++) {
		var name = fs.alldataproviders[i];
		var columnNames = table.getColumnNames()
		var firstColumnName = columnNamesArray[i];
		var jscolumn = table.getColumn(firstColumnName);

		switch (jscolumn.getType()) {
		case JSColumn.TEXT:
			fs[firstColumnName] = " "
			break
		case JSColumn.INTEGER:
		case JSColumn.NUMBER:
			fs[firstColumnName] = 0
			break
		default:
			fs[firstColumnName] = 0
			break
		}
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24B7E2F7-27C3-45FE-83E8-FE210A7D54A5"}
 */
function onFocusLostVservicio(event) {
	if (globals.segambu_servicio == 5 || globals.segambu_servicio == 6) {
		globals.segambu_codnome = 0
		elements.vcodnome.visible = true
		elements.lookup_nomenclador.visible=true
		elements.vcodnome.requestFocus()
	}
	if (globals.segambu_servicio == 1) {
		elements.vcodnome.visible = false
		elements.icod_descrcod.visible = false
		elements.vservicio.enabled = false
		elements.lookup_nomenclador.enabled=false
		//BuscarCirugint()
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48686E57-66B8-4D20-A5FC-AF9B502396BC"}
 */
function onAction_busco_Imacodi(event) {
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código del Imacodi";
	win.show(forms.seguquiambu_frm_busqueda_imacodi)
	MuestraOpciones()
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8910DD27-880B-427C-B7A2-9369A5A4DCC4"}
 */
function onDataChange_vservicio(oldValue, newValue, event) {
	if (globals.segambu_servicio == 5 || globals.segambu_servicio == 6) {
		globals.segambu_codnome = 0
		globals.segambu_tiponome=1
		elements.vcodnome.enabled = true
		elements.vcodnome.visible = true
		elements.icod_descrcod.visible = true
		elements.lookup_nomenclador.visible=true
		elements.vcodnome.requestFocus()
	}
	if (globals.segambu_servicio == 1) {
		elements.vcodnome.visible = false
		elements.icod_descrcod.visible = false
		elements.vservicio.enabled = false
		
		//BuscarCirugint()
		
		forms.seguquiambu_frm_menu_0.elements.tabless_opciones.visible=true
		forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex=1
		forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
	}
	
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89E88CF6-FD6D-4A1E-829D-9A0F28D97456"}
 * @AllowToRunInFind
 */
function onAction_vcodnome(event) {
	if(globals.segambu_codnome!=0&&globals.segambu_codnome!=null&&globals.segambu_codnome!=''){
		MuestraOpciones()
	}else{
		globals.segambu_codnome = 0
		elements.vcodnome.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84E7ECD6-521F-413D-AEC6-E62696E17756"}
 */
function onAction_VolveraMenu(event) {
	globals.vClose=true
	application.showForm('protambu_frm_menu_principal')
}

/**
 * @properties={typeid:24,uuid:"C498A67D-2654-447F-AC34-AE954701AE9A"}
 * @AllowToRunInFind
 */
function MuestraOpciones() {
	var fs1 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
	fs1.find()
	fs1['icodtiponom'] = globals.segambu_tiponome
	fs1['icodcodinom'] = globals.segambu_codnome
	fs1['icodestado'] = '<9'
	fs1.search()
	
	//application.output(globals.vtiponome)
	//application.output(globals.vcodnome)
	//foundset.vcodnome_to_tbc_imacodi.icod_tiponom = globals.vtiponome
	//foundset.vcodnome_to_tbc_imacodi.icod_codinom = globals.vcodnome
	//foundset.vcodnome_to_tbc_imacodi.icod_estado != 9

	if (fs1.getSize() > 0) {
		//if (foundset.vcodnome_to_tbc_imacodi.getSize() > 0){
		elements.icod_descrcod.visible = true
		elements.vservicio.enabled = false
		elements.vcodnome.enabled = false
		elements.icod_descrcod.enabled = false
		elements.lookup_nomenclador.enabled=false
		GrabarHisLectora()

		//BuscarCirugint()
		
		forms.seguquiambu_frm_menu_0.elements.tabless_opciones.visible=true
		forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = 1
		forms.seguquiambu_frm_menu_opciones.controller.focusFirstField()
	} else {
		globals.segambu_codnome = 0
		elements.vcodnome.requestFocus()
	}
}

/**
 * @properties={typeid:24,uuid:"2783EA4A-73FC-43DB-BE13-F395DE89F81D"}
 * @AllowToRunInFind
 */
function ValidarGuardia() {
	var $registro_ok=false;
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_guardia");
	fs1.find();
	fs1['guar_histclinica'] =  globals.vHiscli;
	fs1['guar_fechaingreso'] = globals.segambu_fecha_ingreso;
	fs1['guar_horaingreso'] = globals.segambu_hora_ingreso;
	fs1.search();
	if(fs1.getSize()>0){
		if(fs1['guar_especialidad']!=5){
			plugins.dialogs.showErrorDialog("Especialidad No Corresponde","La especialidad no correpsonde a Cirugía","Ok");
			$registro_ok=false;
		}else{
			switch(fs1['guar_estado']){
				case 3:plugins.dialogs.showErrorDialog("Estado Paciente","Paciente tomado en otra terminal","Ok");$registro_ok=false;break;
				case 4:plugins.dialogs.showErrorDialog("Estado Paciente","Paciente con Alta Médica","Ok");$registro_ok=false;break;
				case 5:plugins.dialogs.showErrorDialog("Estado Paciente","Paciente con Alta Administrativa","Ok");$registro_ok=false;break;
				case 9:plugins.dialogs.showErrorDialog("Estado Paciente","Paciente Anulado","Ok");$registro_ok=false;break;
				default:$registro_ok=true;break;
			}
		}
	}
	return $registro_ok
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"355A138F-B414-4B9F-A719-692B71F80E4C"}
 */
function onHide_seguquiambu_frm_menu_0(event) {
	return globals.vClose
}
