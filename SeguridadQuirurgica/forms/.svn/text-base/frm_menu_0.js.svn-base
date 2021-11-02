/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A330B59F-E220-4EFB-A191-4D17D205ED60"}
 */
function onShowMenu(firstShow, event) {
	elements.vhiscli.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"F1E468BF-79EA-4E88-A4FA-D23585349167"}
 */
function onLoadMenu(event) {
	//globals.ControlAlerta(globals.vtipo, globals.vhiscli, 1, 1)
	globals.vtipohist = 0
	//globals.vhiscli = 0
	//globals.vhisclinica = ''
	elements.lbl_cirugia.visible = false
	elements.vservicio.visible = false
	elements.vcodnome.visible = false
	elements.icod_descrcod.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"4414AB39-0EE5-43A4-932E-3D84D6ED764A"}
 * @AllowToRunInFind
 */
function onDataChangeVhiscli(oldValue, newValue, event) {
	globals.vhiscli = utils.stringToNumber(globals.vhisclinica)
	var largo = globals.vhisclinica.length
	globals.vhisclinica = globals.vhisclinica.substr(0, largo - 1) + '/' + globals.vhisclinica.substr(largo - 1, 1)

	globals.vhiscli=globals.vHiscli
	globals.vvalhisto = true
	forms.frm_menu_0.elements.vhiscli.enabled = false
	/*
	forms.frm_menu_opciones.elements.btn_acirculante.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_aanestesiologo.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_acirujano.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_atodo.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_acirculantec.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_dcirujano.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_danestesiologo.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_dinstrumentadora.imageURL = "media:///space.png"
	forms.frm_menu_opciones.elements.btn_dcirculante.imageURL = "media:///space.png"
	*/
	
	databaseManager.revertEditedRecords()
	//databaseManager.rollbackEditedRecords()
	
    forms.frm_menu_0.controller.focusFirstField()
	
	//application.output(vhiscli_to_tbc_admision.getSize())
	if (vhiscli_to_tbc_admision.getSize() > 0) {
		
		ValidarAdmision(event)
		
		if (globals.vvalhisto) {
			//globals.ControlAlerta(globals.vtipo, globals.vhiscli, 1, 1)
			
			BuscarHisLectora(event)
			application.updateUI()
		} 
		else {
			globals.vhiscli = 0
			globals.vhisclinica = ''
			elements.vhiscli.enabled = true
			elements.vhiscli.editable = true
			history.back()
		}
	} 
	else {
		
		globals.vhiscli = 0
		globals.vhclinica = ''
		//plugins.dialogs.showErrorDialog('Error', 'La Historia Clinica no está en ADMISION', '  OK  ')
		
	}
}

/**
 * @properties={typeid:24,uuid:"D9A9FB66-B4F0-49DA-B390-DE83063112F5"}
 * @AllowToRunInFind
 */
function ValidarAdmision(event) {
	var fs = databaseManager.getFoundSet("maestros", "tbc_obras")
	fs.find()		
	fs['obr_codigo'] = vhiscli_to_tbc_admision.adm_obrsoc_7
	fs.search()
	
	if (fs.getSize() == 0){
		fs['obr_espami'] = 0
		fs['obr_razonsoc'] = fs['obr_codigo']
	}
	if (vhiscli_to_tbc_admision.adm_fecepic > 0 && fs['obr_espami'] != 2) {
		plugins.dialogs.showInfoDialog('Atencion', 'Paciente con Alta Clínica', 'OK')
		globals.vvalhisto = false
	} 
	if (vhiscli_to_tbc_admision.adm_fecaltaefec > 0 && fs['obr_espami'] != 2) {
		plugins.dialogs.showInfoDialog('Atencion', 'Paciente egresó del Sanatorio', 'OK')
		globals.vvalhisto = false
	}
	return globals.vvalhisto
}

/**
 * // TODO generated, please specify type and doc for the params
 * 
 *
 * @properties={typeid:24,uuid:"4066BD5B-7B34-4537-9134-A1C79DD3107D"}
 * @AllowToRunInFind
 */
function BuscarCirugint() {
	//foundset.vhiscli_to_tbc_cirugint.find()
	//foundset.vhiscli_to_tbc_cirugint.ciri_tipnome  = 0
	//foundset.vhiscli_to_tbc_cirugint.ciri_codnome  = 0
	//foundset.vhiscli_to_tbc_cirugint.ciri_histclin = globals.vhiscli
	//foundset.vhiscli_to_tbc_cirugint.ciri_est      = 0
	//foundset.vhiscli_to_tbc_cirugint.search()

	var fs = databaseManager.getFoundSet("asistencial", "tbc_cirugint")
	fs.find()
	fs['ciritiponome'] = 0
	fs['ciricodnome'] = 0
	fs['cirihistcl'] = globals.vhiscli
	fs['ciriestado'] = 0
	fs.search()

	//var x = forms.frm_menu.foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_cirugint.getSize()
	//var c = forms.frm_menu.foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_cirugint.getRecord(x)
	//application.output(c)
	//application.output(x)
	//application.output(globals.vhiscli)
	//forms.frm_menu.controller.setSelectedIndex(forms.frm_menu.foundset.vhiscli_to_tbc_cirugint.getSize())

	//plugins.dialogs.showInfoDialog('Atencion',forms.frm_menu.foundset.vhiscli_to_tbc_cirugint.getSize() ,' OK ')
	//plugins.dialogs.showInfoDialog('Atencion', fs.getSize(), ' OK ')

	//if (foundset.vhiscli_to_tbc_cirugint.getSize() > 0) {
	
	if (fs.getSize() > 0) {
		fs.setSelectedIndex(fs.getSize())

		globals.vprotocolo = fs['ciriprotocolo']
		globals.vexisteciru = 'S'
		//plugins.dialogs.showErrorDialog('Error', 'Estado = 0 en CIRUGINT   ', ' OK ')
		BuscarSeguquiSi()
	} 
	else {
		globals.vprotocolo = 0
		globals.vexisteciru = 'N'
		//plugins.dialogs.showErrorDialog('Error', 'Estado = 1 en CIRUGINT   ', ' OK ')
		BuscarSeguquiNo()
	}
	
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"32E5A7C5-6DB7-49B2-9A0A-C64939538E4F"}
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
	fs['segtipohc1'] = 0
	fs['seghistclinica1'] = globals.vhiscli
	fs['segprotocolo'] = globals.vprotocolo
	fs.search()

	//plugins.dialogs.showInfoDialog('Atencion', globals.vprotocolo, ' OK ')
	//plugins.dialogs.showInfoDialog('Atencion', forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.getSize(), ' OK ')
	//plugins.dialogs.showInfoDialog('Atencion', fs.getSize(), ' OK ')

	//if (forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.getSize() > 0) {
	if (fs.getSize() > 0) {
		globals.vexistesegu = 'S'
		//plugins.dialogs.showErrorDialog('Error', 'Está en SEGUQUI       ', 'OK')
	} 
	else {
		globals.vexistesegu = 'N'
		//plugins.dialogs.showErrorDialog('Error', 'No está en SEGUQUI    ', 'OK')
	}
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"3C2C1633-C639-4E34-8C9D-6E197A61501B"}
 * @AllowToRunInFind
 */
function BuscarSeguquiNo() {
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.find()
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_tiphistclin_1 = 0
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_histclin_1    = globals.vhiscli
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_protocolo     = globals.vprotocolo
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.search()

	var fs = databaseManager.getFoundSet("asistencial", "tbc_seguqui_new")
	fs.find()
	fs['segtipohc1'] = 0
	fs['seghistclinica1'] = globals.vhiscli
	fs['segprotocolo'] = 0
	fs.search()

	//if (forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.getSize() > 0) {
	if (fs.getSize() > 0) {
		globals.vexistesegu = 'S'
		//plugins.dialogs.showErrorDialog('Error', 'Está en SEGUQUI       ', 'OK')
	} else {
		globals.vexistesegu = 'N'
		//plugins.dialogs.showErrorDialog('Error', 'No está en SEGUQUI    ', 'OK')
	}
	return true
}

/**
 * @AllowToRunInFind
 *
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"A6C1BA21-F2A2-4716-8668-60D7461466E1"}
 */
function BuscarHisLectora(event) {
	globals.vexistelectora = 'N'
	globals.vNomenclaLectora=0
	globals.vestadolectora=1
	var vQuery = " select hlec_histclin, hlec_estado, hlec_nomencla, hlec_art, hlec_fecped, hlec_nropedunico from tbc_his_lectora where hlec_histclin = ?  and hlec_tiphistclin = 0 and (hlec_estado = 1 or hlec_estado = 3)"
	var args = new Array()
	args[0]=globals.vhiscli
	
	var fDataset = databaseManager.getDataSetByQuery("asistencial", vQuery, args, -1);
	if (fDataset.getMaxRowIndex()>0){
		for(var i=1;i<=fDataset.getMaxRowIndex()&&globals.vexistelectora == 'N';i++){
			if ( (fDataset.getValue(i,2) == 1 || fDataset.getValue(i,2) == 3) && fDataset.getValue(i,5) != 0 && fDataset.getValue(i,3) == 0 && fDataset.getValue(i,4) == 9999) {
				globals.vexistelectora = 'S'
			}
			if ( (fDataset.getValue(i,2) == 1 || fDataset.getValue(i,2) == 3) && fDataset.getValue(i,5) != 0 && fDataset.getValue(i,6) != 0 && fDataset.getValue(i,4) == 9999) {
				globals.vNomenclaLectora=fDataset.getValue(i,3)
				globals.vnropedunico=fDataset.getValue(i,6)
				globals.vexistelectora = 'S'
			}
		}
	}
	//vhiscli2_to_tbc_his_lectora.loadAllRecords()
	
	if (globals.vexistelectora == 'S') {
		MostrarIntervencion(event)
	}
	if (globals.vexistelectora == 'N') {
		
		BuscarCirugint()
		
		if(globals.vexisteciru== 'N'){
			if(globals.vexistesegu== 'N'){
				IngresarIntervencion(event)
			}else{
				forms.frm_menu_0.elements.tabless_opciones.visible=true
				/*
				forms.frm_acirculante_new.foundset.find()
				forms.frm_acirculante_new.foundset.seghistclinica=globals.vhiscli
				forms.frm_acirculante_new.foundset.segtipohc=0
				forms.frm_acirculante_new.foundset.segprotocolo=globals.vprotocolo
				forms.frm_acirculante_new.foundset.search()
				*/
				vs_to_tbc_seguqui_new.loadAllRecords()
				globals.MuestroTildeSeguqui('frm_acirculante_new')
				forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
			}
		}else{
			forms.frm_menu_0.elements.tabless_opciones.visible=true
			/*
			forms.frm_acirculante_new.foundset.find()
			forms.frm_acirculante_new.foundset.seghistclinica=globals.vhiscli
			forms.frm_acirculante_new.foundset.segtipohc=0
			forms.frm_acirculante_new.foundset.segprotocolo=globals.vprotocolo
			forms.frm_acirculante_new.foundset.search()
			*/
			vs_to_tbc_seguqui_new.loadAllRecords()
			globals.MuestroTildeSeguqui('frm_acirculante_new')
			forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
		}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"110C3092-2239-4089-AD28-0F7E07EAA86A"}
 * @AllowToRunInFind
 */
function MostrarIntervencion(event) {
	var vinterven = '      '

	var fs = databaseManager.getFoundSet("maestros", "tbc_imacodi")
	fs.clear()
	fs.find()
	fs['icodtiponom'] = 01
	fs['icodcodinom'] = globals.vNomenclaLectora
	fs.search()

	if (fs.getSize() > 0) {
		elements.lbl_cirugia.visible = true
		//elements.vservicio.enabled = false
		globals.vcodnome = fs['icodcodinom']
		elements.vcodnome.visible = true
		elements.icod_descrcod.visible = true
		elements.vcodnome.enabled = false
		elements.icod_descrcod.enabled = false

		//vinterven = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Confirma la Intervención?     ', '  Si  ', '  No  ')
		if (vinterven == '  No  ' && globals.vnropedunico != 0 && globals.vnropedunico != '') {
			plugins.dialogs.showInfoDialog('Información', 'Existe Seguridad Quirurgica asociada: ' + globals.vnropedunico, '  OK  ')
		} else {
			if (vinterven == '  No  ') {
				globals.vexistelectora = 'N'
				IngresarIntervencion(event)
			}
		}
	}
	//elements.vservicio.enabled   = false
	BuscarCirugint()
	forms.frm_menu_0.elements.tabless_opciones.visible=true
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	//globals.MuestroTildeSeguqui("frm_acirculante_new")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7F374510-F1DF-4A82-8996-A3E27CEFA224"}
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
 * @properties={typeid:24,uuid:"AF203846-F459-47EC-94EB-4A36ABCE7F35"}
 * @AllowToRunInFind
 */
function onDataChangeVcodnome(oldValue, newValue, event) {
	if(globals.vcodnome!=0&&globals.vcodnome!=null&&globals.vcodnome!=''){
		var fs1 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
		fs1.clear()
		fs1.find()
		fs1['icodtiponom'] = globals.vtiponome
		fs1['icodcodinom'] = globals.vcodnome
		fs1['icodestado'] = '<9'
		fs1.search()

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

			BuscarCirugint()
			
			MuestraOpciones()
			return true
			
		} else {
			globals.vcodnome = 0
	//		elements.vcodnome.requestFocus()
			return false
		}
		
	}else{
		globals.vcodnome = 0
	//	elements.vcodnome.requestFocus()
		return false
	}

}

/**
 * // TODO generated, please specify type and doc for the params
 *
 *
 * @properties={typeid:24,uuid:"6C8C72D4-0F60-4D6B-A3AC-FF1437C914BD"}
 */
function GrabarHisLectora() {
	if (globals.vexistelectora == 'N') {
		//if (foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami != 2){
		//var fs2 = databaseManager.getFoundSet("maestros", "tbc_param2")
		//globals.vnropedunico = fs2['prm2_54'] + 1
		//fs2['prm2_54'] = globals.vnropedunico
		//databaseManager.saveData()
		//}
		//else{
		//globals.vnropedunico = 0
		//}
		globals.vnropedunico = 0
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
		globals.vnropedunico=vDataset.getValue(1,numero_campo)+1;
		var done1 = plugins.rawSQL.executeSQL("parametros", "param2", "update param2 set " + nombre_campo + " = " + nombre_campo +" + 1 where key_param2 = 1; commit;")
		if (!done1) {
			var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
		}
		
		//var fs3 = databaseManager.getFoundSet("asistencial", "tbc_his_lectora")
		//fs3.newRecord()
		
		if (globals.vservicio == 5){
			globals.vestadolectora=3
		}
		if (globals.vservicio == 6){
			globals.vestadolectora=1
		}
		vhiscli2_to_tbc_his_lectora.newRecord()
		
		globals.InicializarDatosDeRelacion(vhiscli2_to_tbc_his_lectora,"asistencial","tbc_his_lectora")
		vhiscli2_to_tbc_his_lectora.hlec_histclin = globals.vhiscli
		vhiscli2_to_tbc_his_lectora.hlec_tiphistclin = 0
		if (globals.vservicio == 5){
			vhiscli2_to_tbc_his_lectora.hlec_estado = 3
			globals.vestadolectora=3
			vhiscli2_to_tbc_his_lectora.hlec_sector = 34
		}
		if (globals.vservicio == 6){
			vhiscli2_to_tbc_his_lectora.hlec_estado = 1
			globals.vestadolectora=1
			vhiscli2_to_tbc_his_lectora.hlec_sector = 66
		}
		var fecha0 = application.getServerTimeStamp()

		vhiscli2_to_tbc_his_lectora.hlec_fec = utils.stringToNumber(globals.FormatearFecha(fecha0,'AAAAMMDD'))
		vhiscli2_to_tbc_his_lectora.hlec_hora = utils.stringToNumber(globals.FormatearFecha(fecha0,'HHMMSSDD'))
		vhiscli2_to_tbc_his_lectora.hlec_fecped = utils.stringToNumber(globals.FormatearFecha(fecha0,'AAAAMMDD'))
		vhiscli2_to_tbc_his_lectora.hlec_horped = utils.stringToNumber(globals.FormatearFecha(fecha0,'HHMM'))

		vhiscli2_to_tbc_his_lectora.hlec_art = 9999
		//vhiscli2_to_tbc_his_lectora.hlec_sector = 34
		vhiscli2_to_tbc_his_lectora.hlec_nomencla = globals.vcodnome
		vhiscli2_to_tbc_his_lectora.hlec_nropedunico = globals.vnropedunico
		vhiscli2_to_tbc_his_lectora.hlec_filler = ' '
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
		
		
		databaseManager.saveData(vhiscli2_to_tbc_his_lectora.getRecord(1))
		var error1=''
		var error2=''
		var array = databaseManager.getFailedRecords(vhiscli2_to_tbc_his_lectora)
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
		globals.vexistelectora='S'

		//if (foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami != 2) {
		var fecha = utils.stringToNumber(vhiscli2_to_tbc_his_lectora.hlec_fec)
		var hora = utils.stringToNumber(vhiscli2_to_tbc_his_lectora.hlec_hora)
		globals.GenerarTXTInterfaseVisualMedica(2, globals.vservicio, 0, globals.vhiscli, fecha, hora, 0)
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
 * @properties={typeid:24,uuid:"229BD745-4A97-4CF0-988D-4B8C2B197B04"}
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
 * @properties={typeid:24,uuid:"3D4BF0E8-3BD9-4662-BA03-32B6BCC505E9"}
 */
function onFocusLostVservicio(event) {
	if (globals.vservicio == 5 || globals.vservicio == 6) {
		globals.vcodnome = 0
		elements.vcodnome.visible = true
		elements.lookup_nomenclador.visible=true
		elements.vcodnome.requestFocus()
	}
	if (globals.vservicio == 1) {
		elements.vcodnome.visible = false
		elements.icod_descrcod.visible = false
		elements.vservicio.enabled = false
		elements.lookup_nomenclador.enabled=false
		BuscarCirugint()
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D768331-99A1-43D3-AE33-69AE70DE1574"}
 */
function onAction_busco_Imacodi(event) {
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código del Imacodi";
	win.show(forms.frm_busqueda_imacodi)
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
 * @properties={typeid:24,uuid:"8A16EBFC-38F1-4257-80C5-106A1FECAB0D"}
 */
function onDataChange_vservicio(oldValue, newValue, event) {
	if (globals.vservicio == 5 || globals.vservicio == 6) {
		globals.vcodnome = 0
		globals.vtiponome=1
		elements.vcodnome.enabled = true
		elements.vcodnome.visible = true
		elements.icod_descrcod.visible = true
		elements.lookup_nomenclador.visible=true
		elements.vcodnome.requestFocus()
	}
	if (globals.vservicio == 1) {
		elements.vcodnome.visible = false
		elements.icod_descrcod.visible = false
		elements.vservicio.enabled = false
		
		BuscarCirugint()
		
		forms.frm_menu_0.elements.tabless_opciones.visible=true
		forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
		forms.frm_menu_opciones.controller.focusFirstField()
	}
	
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C432097F-7F6C-4B8F-8CED-BC559774100C"}
 * @AllowToRunInFind
 */
function onAction_vcodnome(event) {
	if(globals.vcodnome!=0&&globals.vcodnome!=null&&globals.vcodnome!=''){
		MuestraOpciones()
	}else{
		globals.vcodnome = 0
		elements.vcodnome.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B6B8042F-4780-48F5-A229-7949392FAFA7"}
 */
function onAction_VolveraMenu(event) {
	application.showForm('frm_menu_principal')
}

/**
 * @properties={typeid:24,uuid:"EA70B880-7BC2-429C-BC58-986E4FCECECF"}
 * @AllowToRunInFind
 */
function MuestraOpciones() {
	var fs1 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
	fs1.find()
	fs1['icodtiponom'] = globals.vtiponome
	fs1['icodcodinom'] = globals.vcodnome
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

		BuscarCirugint()
		forms.frm_menu_0.elements.tabless_opciones.visible=true
		forms.frm_menu_0.elements.tabless_opciones.tabIndex = 1
		forms.frm_menu_opciones.controller.focusFirstField()
	} else {
		globals.vcodnome = 0
		elements.vcodnome.requestFocus()
	}
}
