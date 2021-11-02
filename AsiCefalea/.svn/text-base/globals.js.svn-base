/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"086F3758-C460-419B-ABA4-9A45DBD36131",variableType:4}
 */
var cefalea_obra = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"243619B0-F5FD-49C4-BCA2-E45314C0D84F",variableType:4}
 */
var cefalea_especial = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ED6B446C-BEED-41B8-B915-F91129F047D7",variableType:4}
 */
var cefalea_tip_medico = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E3FAC12B-B199-4E14-B3CC-46EF88F0D36C",variableType:4}
 */
var cefalea_leg_medico = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9323D0A4-D3DB-48AC-BC4A-370192986951",variableType:4}
 */
var cefalea_grupo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85D106A2-D383-469D-BF22-2FB706D6275E",variableType:4}
 */
var cefalea_fecha = 0;


/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"7833F7ED-814B-4720-9FDC-91A641AA7AEC"}
 */
function onSolutionOpen_cefalea() {
	databaseManager.setAutoSave(false)
	globals.vHiscli=361989
	globals.cefalea_fecha=20201114
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7BE653DE-EBC5-4B87-97DD-C7A0D40ABB9D"}
 */
function cefalea_onshow(firstShow, event) {
	forms.Cefalea_frm_principal.f_paciente=cefalea_vhiscli_to_tbc_hist_cab_new.histcabapellnom
	forms.Cefalea_frm_principal.f_histClinUnica=globals.vHiscli
	forms.Cefalea_frm_principal.f_cobertura=cefalea_vhiscli_to_tbc_hist_cab_new.tbc_hist_cab_new_to_tbc_obras.obr_razonsoc
	forms.Cefalea_frm_principal.f_edad=globals.CalculoEdad(cefalea_vhiscli_to_tbc_hist_cab_new.histcabfechanac)
	var win = application.createWindow("Cefalea_itm",JSWindow.MODAL_DIALOG)
    win.title= "Protocolo de Cefalea"
    win.resizable = true
	 win.setSize(1250,700)
	 //win.resetBounds()
    win.show(forms.Cefalea_Inicio)
}
