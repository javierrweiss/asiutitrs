
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61E01D19-27FD-4CE8-8E7B-B6D901593216"}
 */
function onAction_cancelar(event) {
	var win = application.getWindow("Selec_Reporte")
	win.hide()
	win.destroy()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6F11934B-9E0C-4ED0-BCF6-D8BBC587C1FC"}
 */
function onAction_procesar(event) {
	var win = application.getWindow("Selec_Reporte")
	win.hide()
	win.destroy()	
	forms.frm_cons_cirugias_suspendidas_1869.elements.tabless_1.tabIndex=1
	forms.msg_bar_progress.elements.bean_progress.minimum = 0
	forms.msg_bar_progress.elements.bean_progress.maximum = 0
	forms.msg_bar_progress.elements.Texto_proceso.text= 'Preparando impresión'
	forms.msg_bar_progress.elements.img_grabar.visible = false
	forms.msg_bar_progress.elements.img_excel.visible = false
	forms.msg_bar_progress.elements.img_imprimir.visible = true	
	
	forms.frm_cons_cirugias_suspendidas_1869.elements.tabless_1.visible = true
	forms.prn_cons_cirugias_suspendidas.recorre_aux()
	globals.printRoutine('prn_cons_cirugias_suspendidas', true)
	forms.frm_cons_cirugias_suspendidas_1869.elements.tabless_1.visible = false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C2BF730-3D53-4BB2-8531-43E8059C257D"}
 */
function onShow_inicializa(firstShow, event) {
	globals.gbl_con_tipo_reporte = 0
	globals.gbl_con_resumen_motivo = false
	globals.gbl_con_resumen_obra = false
	globals.gbl_con_resumen_medico = false
	globals.gbl_con_resumen_especialidad = false
}
