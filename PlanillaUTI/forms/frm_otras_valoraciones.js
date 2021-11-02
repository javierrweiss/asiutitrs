/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"32DFA9F0-7980-4226-95A6-9A7BE80DFBD6"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (otras_valoriz_to_hojauti_items.getSize()>0){
		for(var i=0;i<=otras_valoriz_to_hojauti_items.getSize();i++){
			otras_valoriz_to_hojauti_items.setSelectedIndex(i)
			if (otras_valoriz_to_hojauti_items.renglon > globals.renglon7){
				globals.renglon7=otras_valoriz_to_hojauti_items.renglon	
			}
		}
	}
	otras_valoriz_to_hojauti_items.newRecord()
	otras_valoriz_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otras_valoriz_to_hojauti_items.nro_operador = globals.vLegajo
	otras_valoriz_to_hojauti_items.fecha_carga = utils.timestampToDate(new Date)
	otras_valoriz_to_hojauti_items.hora_carga = horacarga
	otras_valoriz_to_hojauti_items.tipo="otrosvalor"
	globals.renglon7 = globals.renglon7+ 1
	otras_valoriz_to_hojauti_items.renglon= globals.renglon7
	globals.vAccionAgrega=true
	forms.frm_valoracion_3.elements.tabless_88.tabIndex=2
	forms.tab_ingresa_otras_valoriz.elements.btn_borra.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7A0C628-AEA4-412F-8B4C-CFA01014040D"}
 */
function onAction_linea(event) {
	globals.vAccionAgrega=false
	forms.frm_valoracion_3.elements.tabless_88.tabIndex=2
	forms.tab_ingresa_otras_valoriz.elements.btn_borra.visible=true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6F7D99D5-46B3-45B3-9685-18F5E743AF85"}
 */
function onShow_otras_valoraciones(firstShow, event) {
	if(globals.vEstadoAccion=="CONSULTA"){
		forms.frm_otras_valoraciones.controller.enabled=false
	}else{
		forms.frm_otras_valoraciones.controller.enabled=true
	}
}
