/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6AB518C5-75EB-4212-A4EE-32C5DAD71395"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (otros_egresos_to_hojauti_items.getSize()>0){
		for(var i=0;i<=otros_egresos_to_hojauti_items.getSize();i++){
			otros_egresos_to_hojauti_items.setSelectedIndex(i)
			if (otros_egresos_to_hojauti_items.renglon > globals.renglon4){
				globals.renglon4=otros_egresos_to_hojauti_items.renglon	
			}
		}
	}
	otros_egresos_to_hojauti_items.newRecord()
	otros_egresos_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otros_egresos_to_hojauti_items.nro_operador = globals.vLegajo
	otros_egresos_to_hojauti_items.fecha_carga = utils.timestampToDate(new Date)
	otros_egresos_to_hojauti_items.hora_carga = horacarga	
	otros_egresos_to_hojauti_items.tipo="otrosegr"
	globals.renglon4 = globals.renglon4+ 1
	otros_egresos_to_hojauti_items.renglon= globals.renglon4
	globals.vAccionAgrega=true
	forms.frm_balance_egresos.elements.tabless_299.tabIndex=2
	forms.tab_ingresa_otros_egresos.elements.btn_borra.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38BFB42B-C279-4CE9-B476-315544171775"}
 */
function onAction_linea(event) {
	globals.vAccionAgrega=false
	forms.frm_balance_egresos.elements.tabless_299.tabIndex=2
	forms.tab_ingresa_otros_egresos.elements.btn_borra.visible=true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3977A962-D168-47DC-B092-189E0074A4E9"}
 */
function onShow_otros_egresos(firstShow, event) {
	if(globals.vEstadoAccion=="CONSULTA"){
		forms.frm_otros_egresos.controller.enabled=false
	}else{
		forms.frm_otros_egresos.controller.enabled=true
	}
}
