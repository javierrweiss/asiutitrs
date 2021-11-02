/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42AC5368-0D2D-4D4E-9336-B75771491FF5"}
 */
function onShowAlerta(firstShow, event) {
	if (globals.vhclin9 == 0){
		globals.valerta = 0
		globals.vtipo = 0
		globals.vhclinica = ''
		globals.valergico = ''
		elements.lbl_titulo.visible     = false
		elements.valergico.visible      = false
		elements.aler_tipaler_1.visible = false
		elements.aler_tipaler_2.visible = false
		elements.aler_tipaler_3.visible = false
		elements.aler_tipaler_4.visible = false
		elements.aler_tipaler_5.visible = false
		elements.aler_tipaler_6.visible = false
		elements.aler_tipaler_7.visible = false
		elements.aler_tipaler_8.visible = false
		elements.aler_tipaler_9.visible = false
		elements.aler_tipaler_10.visible = false
		elements.aler_tipaler_11.visible = false
		elements.aler_tipaler_12.visible = false
		elements.aler_tipaler_13.visible = false
		elements.aler_tipaler_14.visible = false
		elements.aler_tipaler_15.visible = false
		elements.aler_tipaler_16.visible = false
		elements.aler_tipaler_17.visible = false
		elements.aler_tipaler_18.visible = false
		elements.aler_tipaler_19.visible = false
		elements.aler_tipaler_20.visible = false
		elements.aler_tipaler_21.visible = false
		elements.aler_tipaler_22.visible = false
		elements.btn_baja.visible = false
		elements.btn_grabar.visible = false
		elements.vhclin.requestFocus()
	}
	else {
		globals.valerta = 1
		globals.vtipo = 0
		globals.vhclinica = ''
		globals.valergico = ''
		
		globals.vhclinica = globals.vhclin9.toString()
		var largo = globals.vhclinica.length
		globals.vhclinica = globals.vhclinica.substr(0, largo - 1) + '/' + globals.vhclinica.substr(largo - 1, 1)
		elements.vhclin.editable  = false
		elements.vhclin.enabled   = false
		databaseManager.revertEditedRecords(foundset)
		//databaseManager.rollbackEditedRecords(foundset)
		
		if (globals.vcargaalerta == ' Si '){
			forms.frm_alerta.foundset.newRecord()
			globals.InicializarDatos('frm_alerta', 'asistencial', 'tbc_alerta')
			forms.frm_alerta.foundset.aler_histclin = globals.vhclin9
			forms.frm_alerta.foundset.aler_tipadmi = 0
		}
		elements.btn_baja.visible = false
		elements.btn_salir.requestFocus()
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9ADC73E3-327E-40DD-BD2D-EA1FED3FF211"}
 * @AllowToRunInFind
 */
function onDataChangeVhclin(oldValue, newValue, event) {
	globals.vhclin9 = utils.stringToNumber(globals.vhclinica)
	var largo = globals.vhclinica.length
	globals.vhclinica = globals.vhclinica.substr(0, largo - 1) + '/' + globals.vhclinica.substr(largo - 1, 1)

	elements.vhclin.editable    = false
	elements.vhclin.enabled     = false
	elements.valergico.visible  = true
	elements.lbl_titulo.visible = true
	elements.aler_tipaler_1.visible = true
	elements.aler_tipaler_2.visible = true
	elements.aler_tipaler_3.visible = true
	elements.aler_tipaler_4.visible = true
	elements.aler_tipaler_5.visible = true
	elements.aler_tipaler_6.visible = true
	elements.aler_tipaler_7.visible = true
	elements.aler_tipaler_8.visible = true
	elements.aler_tipaler_9.visible = true
	elements.aler_tipaler_10.visible = true
	elements.aler_tipaler_11.visible = true
	elements.aler_tipaler_12.visible = true
	elements.aler_tipaler_13.visible = true
	elements.aler_tipaler_14.visible = true
	elements.aler_tipaler_15.visible = true
	elements.aler_tipaler_16.visible = true
	elements.aler_tipaler_17.visible = true
	elements.aler_tipaler_18.visible = true
	elements.aler_tipaler_19.visible = true
	elements.aler_tipaler_20.visible = true
	elements.aler_tipaler_21.visible = true
	elements.aler_tipaler_22.visible = true

	databaseManager.revertEditedRecords(foundset)
	//databaseManager.rollbackEditedRecords(foundset)

	forms.frm_alerta.foundset.find()
	forms.frm_alerta.foundset.aler_histclin = globals.vhclin9
	forms.frm_alerta.foundset.aler_tipadmi  = 0
	forms.frm_alerta.foundset.search()

	if (forms.frm_alerta.foundset.getSize() > 0)
		elements.btn_baja.visible = true
	else {
		forms.frm_alerta.foundset.newRecord()
		globals.InicializarDatos('frm_alerta', 'asistencial', 'tbc_alerta')
		forms.frm_alerta.foundset.aler_histclin = globals.vhclin9
		forms.frm_alerta.foundset.aler_tipadmi = 0
	}
	globals.valergico = foundset.aler_alergico
	elements.btn_grabar.visible = true
	elements.btn_salir.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96B2B3E0-566A-4C1B-BC7E-4EB05087AA02"}
 */
function grabarAlerta(event) {
	//var x = application.getWindow()

	if (forms.frm_alerta.foundset.aler_tipaler_1 == 1) {
		if (globals.IsBlank(globals.valergico)) {
			plugins.dialogs.showErrorDialog('Error', ' Informe a que es Alérgico ', ' OK ')
			elements.valergico.requestFocus()
		}
		else {
			forms.frm_alerta.foundset.aler_alergico = globals.valergico
			forms.frm_alerta.foundset.aler_codoper = 7605
			forms.frm_alerta.foundset.aler_tipoper = 0
			databaseManager.saveData(forms.frm_alerta.foundset.getRecord(1))
			//refresh the second record from the foundset.
			//databaseManager.refreshRecordFromDatabase(forms.frm_alerta.foundset, 1)
			salirAlerta(event)
		}
	}
	else {
		forms.frm_alerta.foundset.aler_alergico = ' '
		forms.frm_alerta.foundset.aler_codoper = 7605
		forms.frm_alerta.foundset.aler_tipoper = 0
		databaseManager.saveData(forms.frm_alerta.foundset.getRecord(1))
		//databaseManager.refreshRecordFromDatabase(forms.frm_alerta.foundset, 1)
		salirAlerta(event)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E985881-B05C-4740-A657-FDD15F02124E"}
 */
function salirAlerta(event) {
	databaseManager.revertEditedRecords(foundset)
	//databaseManager.rollbackEditedRecords(foundset)
	
	elements.vhclin.enabled  = true
	elements.vhclin.editable = true
	if (globals.valerta == 0)
		application.showForm("frm_menu_principal")
	else {
		var win = application.getWindow()
		win.hide()
	} 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCC6E896-077E-44DC-9ECF-8D9DA50CF36B"}
 */
function bajaAlerta(event) {
	var baja = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Confirma la Baja? Desaparecerán los ALERTAS de este Paciente', '  Si  ', '  No  ')
	if (baja == '  Si  ') {
		forms.frm_alerta.foundset.deleteRecord()
		salirAlerta(event)
	}
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
 * @properties={typeid:24,uuid:"510B491D-CFCE-437B-9157-277AC0141135"}
 */
function onDataChangeAlergico(oldValue, newValue, event) {
	if (foundset.aler_tipaler_1 == 0)
		globals.valergico = ''
	else
		elements.valergico.requestFocus()
	return true
}
