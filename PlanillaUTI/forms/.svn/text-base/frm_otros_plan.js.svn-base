/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CA393B6-81E6-4EE7-B4E2-211E9AEE7EF6"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (otros_plan_to_hojauti_items.getSize()>0){
		for(var i=0;i<=otros_plan_to_hojauti_items.getSize();i++){
			otros_plan_to_hojauti_items.setSelectedIndex(i)
			if (otros_plan_to_hojauti_items.renglon > globals.renglon8){
				globals.renglon8=otros_plan_to_hojauti_items.renglon	
			}
		}
	}
	otros_plan_to_hojauti_items.newRecord()
	otros_plan_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otros_plan_to_hojauti_items.nro_operador = globals.vLegajo
	otros_plan_to_hojauti_items.fecha_carga = utils.timestampToDate(new Date)
	otros_plan_to_hojauti_items.hora_carga = horacarga
	otros_plan_to_hojauti_items.tipo="otrosplan"
	globals.renglon8 = globals.renglon8+ 1
	otros_plan_to_hojauti_items.renglon= globals.renglon8
	globals.vAccionAgrega=true
	forms.frm_plan_cuidados.elements.tabless_249.tabIndex=2
	forms.tab_ingresa_otros_plan.elements.btn_borra.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5EBC0D6-FFBE-4009-9678-FEF215E473F9"}
 */
function onAction_linea(event) {
	globals.vAccionAgrega=false
	forms.frm_plan_cuidados.elements.tabless_249.tabIndex=2
	forms.tab_ingresa_otros_plan.elements.btn_borra.visible=true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"587770DE-A236-4E77-90FC-51F333C55A24"}
 */
function onShow_otros_plan(firstShow, event) {
	if(globals.vEstadoAccion=="CONSULTA"){
		forms.frm_otros_plan.controller.enabled=false
	}else{
		forms.frm_otros_plan.controller.enabled=true
	}
}
