/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"67B0ED1C-AF73-4C34-84B9-EDB3827FFD7B"}
 */
var f_tiponro_paciente = '';


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9A24343A-95F9-41F9-957A-3DE0DEBD2767"}
 * @AllowToRunInFind
 */
function onShow_envios_dtl(firstShow, event) {
	foundset.find()
	foundset.id=smsciru_fecha_actual_to_smsciru_envios.id
	foundset.search()
	if(foundset.getSize()>0){
		if(foundset.tipo_pac=='Amb'){
			f_tiponro_paciente='Hist.Clinica   '
		}else{
			f_tiponro_paciente='Nro.Internación'
		}
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"37D658E3-13C8-49A8-B608-AE7EC0CC9A31"}
 */
function onHide(event) {
	var $name = application.getActiveWindow().getName()
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
