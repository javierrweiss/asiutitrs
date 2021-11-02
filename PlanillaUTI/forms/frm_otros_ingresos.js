/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F55D98D1-1F1E-4B34-A005-54B922286B06"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (otros_ingresos_to_hojauti_items.getSize()>0){
		for(var i=0;i<=otros_ingresos_to_hojauti_items.getSize();i++){
			otros_ingresos_to_hojauti_items.setSelectedIndex(i)
			if (otros_ingresos_to_hojauti_items.renglon > globals.renglon3){
				globals.renglon3=otros_ingresos_to_hojauti_items.renglon	
			}
		}
	}
	otros_ingresos_to_hojauti_items.newRecord()
	otros_ingresos_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otros_ingresos_to_hojauti_items.nro_operador = globals.vLegajo
	otros_ingresos_to_hojauti_items.fecha_carga = utils.timestampToDate(new Date)
	otros_ingresos_to_hojauti_items.hora_carga = horacarga
	otros_ingresos_to_hojauti_items.tipo="otrosing"
	globals.renglon3 = globals.renglon3+ 1
	otros_ingresos_to_hojauti_items.renglon= globals.renglon3
	globals.vAccionAgrega=true
	forms.frm_balance_ingresos.elements.tabless_72.tabIndex=2
	forms.tab_ingresa_otros_ingresos.elements.btn_borra.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7B99384-F68F-4B7D-AB3A-57B3719F28D8"}
 */
function onAction_linea(event) {
	globals.vAccionAgrega=false
	forms.frm_balance_ingresos.elements.tabless_72.tabIndex=2
	forms.tab_ingresa_otros_ingresos.elements.btn_borra.visible=true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0F0C9CF-3AD9-4D2F-BA4D-D93E490CC221"}
 */
function onShow_otros_ingresos(firstShow, event) {
	if(globals.vEstadoAccion=="CONSULTA"){
		forms.frm_otros_ingresos.controller.enabled=false
	}else{
		forms.frm_otros_ingresos.controller.enabled=true
	}
}
