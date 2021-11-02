/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81A105B2-00E8-4E07-BF2F-1E011E10B1EE"}
 */
function onShowAlerta(firstShow, event) {
	if (globals.vhclin9 == 0){
		globals.valerta = 0
		globals.vtipo = 1
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
		elements.btn_baja.visible = false
		elements.btn_grabar.visible = false
		elements.vhclin.requestFocus()
	}
	else {
		globals.valerta = 1
		globals.vtipo = 1
		globals.vhclinica = ''
		globals.valergico = ''
		
		globals.vhclinica = globals.vhclin9.toString()
		var largo = globals.vhclinica.length
		//globals.vhclinica = globals.vhclinica.substr(0, largo - 1) + '/' + globals.vhclinica.substr(largo - 1, 1)
		elements.vhclin.editable  = false
		elements.vhclin.enabled   = false
		databaseManager.revertEditedRecords(foundset)
		//databaseManager.rollbackEditedRecords(foundset)
		
		if (globals.vcargaalerta == ' Si '){
			forms.frm_alerta_ambulatorio.foundset.newRecord()
			globals.InicializarDatos('frm_alerta_ambulatorio', 'asistencial', 'tbc_alerta')
			forms.frm_alerta_ambulatorio.foundset.aler_histclin = globals.vhclin9
			forms.frm_alerta_ambulatorio.foundset.aler_tipadmi = 1
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
 * @properties={typeid:24,uuid:"B66E8C93-4BCF-4391-9C08-DA7718AD6974"}
 * @AllowToRunInFind
 */
function onDataChangeVhclin(oldValue, newValue, event) {
	globals.vhclin9 = utils.stringToNumber(globals.vhclinica)
	var largo = globals.vhclinica.length
	//globals.vhclinica = globals.vhclinica.substr(0, largo - 1) + '/' + globals.vhclinica.substr(largo - 1, 1)

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

	databaseManager.revertEditedRecords(foundset)
	//databaseManager.rollbackEditedRecords(foundset)

	forms.frm_alerta_ambulatorio.foundset.find()
	forms.frm_alerta_ambulatorio.foundset.aler_histclin = globals.vhclin9
	forms.frm_alerta_ambulatorio.foundset.aler_tipadmi  = 0
	forms.frm_alerta_ambulatorio.foundset.search()

	if (forms.frm_alerta_ambulatorio.foundset.getSize() > 0)
		elements.btn_baja.visible = true
	else {
		forms.frm_alerta_ambulatorio.foundset.newRecord()
		globals.InicializarDatos('frm_alerta_ambulatorio', 'asistencial', 'tbc_alerta')
		forms.frm_alerta_ambulatorio.foundset.aler_histclin = globals.vhclin9
		forms.frm_alerta_ambulatorio.foundset.aler_tipadmi = 1
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
 * @properties={typeid:24,uuid:"50DE915D-3AF0-4C76-911D-3530CB6F3FF3"}
 */
function grabarAlerta(event) {
	//var x = application.getWindow()

	if (forms.frm_alerta_ambulatorio.foundset.aler_tipaler_1 == 1) {
		if (globals.IsBlank(globals.valergico)) {
			plugins.dialogs.showErrorDialog('Error', ' Informe a que es Alérgico ', ' OK ')
			elements.valergico.requestFocus()
		}
		else {
			forms.frm_alerta_ambulatorio.foundset.aler_alergico = globals.valergico
			forms.frm_alerta_ambulatorio.foundset.aler_codoper = 7605
			forms.frm_alerta_ambulatorio.foundset.aler_tipoper = 0
			databaseManager.saveData(forms.frm_alerta_ambulatorio.foundset.getRecord(1))
			//refresh the second record from the foundset.
			//databaseManager.refreshRecordFromDatabase(forms.frm_alerta.foundset, 1)
			salirAlerta(event)
		}
	}
	else {
		forms.frm_alerta_ambulatorio.foundset.aler_alergico = ' '
		forms.frm_alerta_ambulatorio.foundset.aler_codoper = 7605
		forms.frm_alerta_ambulatorio.foundset.aler_tipoper = 0
		databaseManager.saveData(forms.frm_alerta_ambulatorio.foundset.getRecord(1))
		//databaseManager.refreshRecordFromDatabase(forms.frm_alerta.foundset, 1)
		salirAlerta(event)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5C8E8B2-118B-41C5-8F41-6BA840F7457E"}
 */
function salirAlerta(event) {
	databaseManager.revertEditedRecords(foundset)
	//databaseManager.rollbackEditedRecords(foundset)
	
	elements.vhclin.enabled  = true
	elements.vhclin.editable = true
	/*
	if (globals.valerta == 0)
		application.showForm("protambu_frm_menu_principal")
	else {
		var win = application.getWindow()
		win.hide()
	} 
	*/
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4DD6DA12-4BDB-4DAD-AD25-EB13878545F1"}
 */
function bajaAlerta(event) {
	var baja = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Confirma la Baja? Desaparecerán los ALERTAS de este Paciente', '  Si  ', '  No  ')
	if (baja == '  Si  ') {
		forms.frm_alerta_ambulatorio.foundset.deleteRecord()
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
 * @properties={typeid:24,uuid:"78DFA35F-AFAA-4E4E-B569-40E9F2FD3F29"}
 */
function onDataChangeAlergico(oldValue, newValue, event) {
	if (foundset.aler_tipaler_1 == 0)
		globals.valergico = ''
	else
		elements.valergico.requestFocus()
	return true
}
