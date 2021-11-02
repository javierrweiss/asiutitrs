
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C1E7FC7-067C-41FF-9751-3ABBC68CAFF8"}
 * @AllowToRunInFind
 */
function onAction_Get_Patology(event) {
	// TODO Auto-generated method stub
	if (forms.frm_src_patologia.foundset.find()){
		forms.frm_src_patologia.pat_codi = globals.gbl_patologia_n; 
		forms.frm_src_patologia.foundset.search()
	}
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Patología";
	win.setSize(850,550)
	win.show(forms.frm_src_patologia)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6840FB1-578A-4CBE-A470-85C5B945FBB2"}
 * @AllowToRunInFind
 */
function onAction_Show_Row(event) {
	// TODO Auto-generated method stub
	if(forms.frm_src_admision.foundset.find()){
		forms.frm_src_admision.adm_histclin = globals.gbl_histclin;
		forms.frm_src_admision.foundset.search()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param r1
 * @param r2
 *
 * @properties={typeid:24,uuid:"2052E6B2-4416-4A00-BAF6-D74E7B4324A9"}
 */

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"408DA5D5-46F2-42BC-89FC-DBCA02D04BCE"}
 * @AllowToRunInFind
 */

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FF08707-3CD4-4070-B1B6-719359460580"}
 * @AllowToRunInFind
 */
function onAction_GetByDate(event) {
	if (forms.frm_src_admision.foundset.find()){
		forms.frm_src_admision.foundset.adm_fecing = globals.gbl_admin_fechaIngreso;
		forms.frm_src_admision.foundset.search()
	}

	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda por fecha de ingreso";
	win.setSize(850,550)
	win.show(forms.frm_src_admision)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"070A4431-68E9-460F-8205-D11806DFA60A"}
 * @AllowToRunInFind
 */
function onActionShow(event) {
	// TODO Auto-generated method stub
	try {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de obra social";
	win.setSize(850,550)
	if(forms.frm_obras.foundset.find()){
		forms.frm_obras.foundset.obr_codigo = globals.gbl_admin_obraSoc+"||"+globals.gbl_admin_obraSoc+"____";
		forms.frm_obras.foundset.search()
		win.show(forms.frm_obras)
	 }
	} catch (msg) {
		plugins.dialogs.showErrorDialog("Registro no encontrado","El registro solicitado no pudo ser hallado.")
	}
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ACBE4202-3777-49CD-8309-685920BDA9EE"}
 */
function onDoubleClick_ShowList(event) {
	// TODO Auto-generated method stub
	
forms.frm_src_admision.foundset.loadAllRecords();
}
