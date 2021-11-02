
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3EB653EA-9610-4F77-BAAA-FC2C2C3FF09C"}
 * @AllowToRunInFind
 */
function onShow_prueba_foundset(firstShow, event) {
	forms.frm_prueba_foundset.foundset.find()
	forms.frm_prueba_foundset.foundset.hiscli=1887140
	forms.frm_prueba_foundset.foundset.fecha=globals.vFecha
	forms.frm_prueba_foundset.foundset.search()
	for(var i = 0;i<forms.frm_prueba_foundset.foundset.getSize();i++){
		forms.frm_prueba_foundset.foundset.setSelectedIndex(i)
		plugins.dialogs.showInfoDialog('i',i)
		plugins.dialogs.showInfoDialog('hiscli',forms.frm_prueba_foundset.foundset.hiscli)
		plugins.dialogs.showInfoDialog('fecha',forms.frm_prueba_foundset.foundset.fecha)
		plugins.dialogs.showInfoDialog('hora',forms.frm_prueba_foundset.foundset.hora)
		plugins.dialogs.showInfoDialog('renglon',forms.frm_prueba_foundset.foundset.renglon)
		plugins.dialogs.showInfoDialog('tipo',forms.frm_prueba_foundset.foundset.tipo)
		plugins.dialogs.showInfoDialog('concepto',forms.frm_prueba_foundset.foundset.concepto)
		plugins.dialogs.showInfoDialog('cantidad',forms.frm_prueba_foundset.foundset.cantidad)
	}
}
