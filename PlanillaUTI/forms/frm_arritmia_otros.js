/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54BBA856-BD99-4F97-A910-AE9A41B3BCC2"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (arritmias_to_hojauti_items.getSize()>0){
		for(var i=0;i<=arritmias_to_hojauti_items.getSize();i++){
			arritmias_to_hojauti_items.setSelectedIndex(i)
			if (arritmias_to_hojauti_items.renglon > globals.renglon2){
				globals.renglon2=arritmias_to_hojauti_items.renglon	
			}
		}
	}
	arritmias_to_hojauti_items.newRecord()
	arritmias_to_hojauti_items.tipo="arritmia"
	arritmias_to_hojauti_items.tipo_opera = globals.vTipoOperador
	arritmias_to_hojauti_items.nro_operador = globals.vLegajo
	arritmias_to_hojauti_items.fecha_carga = utils.timestampToDate(new Date)
	arritmias_to_hojauti_items.hora_carga = horacarga	
	globals.renglon2 = globals.renglon2 + 1
	arritmias_to_hojauti_items.renglon= globals.renglon2
	globals.vAccionAgrega=true
	forms.frm_valoracion.elements.tabless_188.tabIndex=2
	forms.tab_ingresa_otras_arritmias.elements.btn_borra.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2971F071-0004-4AD3-B185-6C4B272E21E7"}
 */
function onAction_linea(event) {
	globals.renglon_aux=forms.frm_heridas.foundset.renglon
	globals.vAccionAgrega=false
	forms.frm_valoracion.elements.tabless_188.tabIndex=2
	forms.tab_ingresa_otras_arritmias.elements.btn_borra.visible=true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39624E0B-4242-4506-A194-71F9C8E2C586"}
 */
function onShow_arritmias_otros(firstShow, event) {
	if (globals.vEstadoAccion=="CONSULTA"){
		forms.frm_arritmia_otros.controller.enabled=false
	}else{
		forms.frm_arritmia_otros.controller.enabled=true
	}
}
