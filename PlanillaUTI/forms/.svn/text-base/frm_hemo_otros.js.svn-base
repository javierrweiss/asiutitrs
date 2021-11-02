
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1938CE01-DC48-4CAC-BA6D-E3CCFF7FAA8B"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (vs_to_hojauti_items.getSize()>0){
		for(var i=0;i<=vs_to_hojauti_items.getSize();i++){
			vs_to_hojauti_items.setSelectedIndex(i)
			if (vs_to_hojauti_items.renglon > globals.renglon){
				globals.renglon=vs_to_hojauti_items.renglon	
			}
		}
	}
	vs_to_hojauti_items.newRecord()
	vs_to_hojauti_items.tipo_opera = globals.vTipoOperador
	vs_to_hojauti_items.nro_operador = globals.vLegajo
	vs_to_hojauti_items.fecha_carga = utils.timestampToDate(new Date)
	vs_to_hojauti_items.hora_carga = horacarga
	vs_to_hojauti_items.tipo="hemorragia"
	globals.renglon = globals.renglon + 1
	vs_to_hojauti_items.renglon= globals.renglon
	globals.vAccionAgrega=true
	forms.frm_valoracion.elements.tabless_119.tabIndex=2
	forms.tab_ingresa_otros.elements.btn_borra.visible=false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"630705F1-7EBE-4576-91FA-3E5BFFB61F07"}
 * @AllowToRunInFind
 */
function onShow_hemo_otros(firstShow, event) {
	forms.frm_hemo_otros.foundset.find()
	forms.frm_hemo_otros.foundset.hiscli=globals.vHiscli
	forms.frm_hemo_otros.foundset.fecha=globals.vFecha
	forms.frm_hemo_otros.foundset.hora=globals.vHora
	forms.frm_hemo_otros.foundset.search()
	if(globals.vEstadoAccion=="CONSULTA"){
		forms.frm_hemo_otros.controller.enabled=false
	}else{
		forms.frm_hemo_otros.controller.enabled=true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EDE5B133-A98C-4B0B-9E2D-41A7E18A7011"}
 */
function onAction_linea(event) {
	globals.vAccionAgrega=false
	forms.frm_valoracion.elements.tabless_119.tabIndex=2
	forms.tab_ingresa_otros.elements.btn_borra.visible=true
}
