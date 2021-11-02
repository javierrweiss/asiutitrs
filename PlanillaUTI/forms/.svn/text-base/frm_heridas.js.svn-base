/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37670933-EED6-46DE-8152-180CD2BAB225"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (heridas_to_hojauti_items.getSize()>0){
		for(var i=0;i<=heridas_to_hojauti_items.getSize();i++){
			heridas_to_hojauti_items.setSelectedIndex(i)
			if (heridas_to_hojauti_items.renglon > globals.renglon6){
				globals.renglon6=heridas_items_to_hojauti_items.renglon	
			}
		}
	}
	
	heridas_to_hojauti_items.newRecord()
	heridas_to_hojauti_items.tipo_opera = globals.vTipoOperador
	heridas_to_hojauti_items.nro_operador = globals.vLegajo
	heridas_to_hojauti_items.fecha_carga = utils.timestampToDate(new Date)
	heridas_to_hojauti_items.hora_carga = horacarga
	heridas_to_hojauti_items.tipo="heridas"
	globals.renglon6 = globals.renglon6+ 1
	globals.renglon_aux=globals.renglon6
	heridas_to_hojauti_items.renglon= globals.renglon6
	globals.vAccionAgrega=true
	forms.frm_valoracion_3.elements.tabless_66.tabIndex=2
	forms.tab_ingresa_heridas.elements.btn_borra.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAB8E5BB-0FC8-4A27-9BB1-F0DD797DF494"}
 */
function onAction_heridas(event) {
	globals.renglon_aux=forms.frm_heridas.foundset.renglon
	globals.vAccionAgrega=false
	forms.frm_valoracion_3.elements.tabless_66.tabIndex=2
	forms.tab_ingresa_heridas.elements.btn_borra.visible=true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18A32833-B56E-4C1A-B3D4-831693719668"}
 */
function onAction_btn_sale(event) {
	if(globals.renglon6>0){
		forms.frm_valoracion_3.elements.val_otras_valoraciones.requestFocus()
	}	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C5C654CD-514B-4AA5-B1FA-D40B5F55B4E9"}
 */
function onShow_heridas(firstShow, event) {
	if(globals.vEstadoAccion=="CONSULTA"){
		forms.frm_heridas.controller.enabled=false
	}else{
		forms.frm_heridas.controller.enabled=true
	}
}
