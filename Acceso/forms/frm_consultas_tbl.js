/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3EE282E8-08E9-4739-9536-0F4C122081B1",variableType:8}
 */
var mes_hasta = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1E111B72-5DFF-4AFE-8DD9-0FE8988A8F46",variableType:8}
 */
var mes_desde = 0;

/**
 * @properties={typeid:24,uuid:"FCE8CB99-ED63-4B7B-A57C-CE01CD8A8826"}
 * @AllowToRunInFind
 */
function filtra() {
	foundset.clear()
	foundset.find()
	foundset.sort('mov_fecha_ing asc')
	if (globals.gbl_buscar !== null) {
		foundset.mov_nro_doc = globals.gbl_buscar 
	}
	if (globals.gbl_con_fecha_ingr_desde !== null) {
		foundset.mov_fecha_ing = globals.gbl_con_fecha_ingr_desde
	}
	if (globals.gbl_con_fecha_ingr_hasta !== null) {
		mes_desde = globals.gbl_con_fecha_ingr_desde.getMonth()+1
		mes_hasta = globals.gbl_con_fecha_ingr_hasta.getMonth()+1
		foundset.mov_fecha_ing='#'+mes_desde+"-"+globals.gbl_con_fecha_ingr_desde.getDate()+"-"+globals.gbl_con_fecha_ingr_desde.getFullYear()+'...'+mes_hasta+"-"+globals.gbl_con_fecha_ingr_hasta.getDate()+"-"+globals.gbl_con_fecha_ingr_hasta.getFullYear()+'|MM-dd-yyyy'
	}
	if (globals.gbl_con_sector !== null) {
		foundset.mov_sector = globals.gbl_con_sector 
	}
	if (globals.gbl_con_a_quien !== null) {
		foundset.mov_a_quien = globals.gbl_con_a_quien 
	}
	if (globals.gbl_con_fecha_egr_desde !== null) {
		foundset.mov_fecha_egr = globals.gbl_con_fecha_egr_desde
	}
	if (globals.gbl_con_fecha_egr_hasta !== null) {
		mes_desde = globals.gbl_con_fecha_egr_desde.getMonth()+1
		mes_hasta = globals.gbl_con_fecha_egr_hasta.getMonth()+1
		foundset.mov_fecha_egr='#'+mes_desde+"-"+globals.gbl_con_fecha_egr_desde.getDate()+"-"+globals.gbl_con_fecha_egr_desde.getFullYear()+'...'+mes_hasta+"-"+globals.gbl_con_fecha_egr_hasta.getDate()+"-"+globals.gbl_con_fecha_egr_hasta.getFullYear()+'|MM-dd-yyyy'
	}
	if (globals.gbl_con_sin_fecha_egr == 1)
		foundset.mov_fecha_egr= '^null'
    foundset.search()	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5AFB014E-8808-45EB-A6A0-FE8F0E97F625"}
 */
function onShow_limpia_foundset(firstShow, event) {
	foundset.clear()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BCC5BC70-6788-4A9F-8E7E-890D2627B899"}
 */
function onAction_cons_zoom(event) {
	var win = application.createWindow("Zoom_cons",JSWindow.MODAL_DIALOG)	
	win.title= 'Observación'
	win.resizable = false
    win.show(forms.frm_consultas_tbl_zoom)
}
