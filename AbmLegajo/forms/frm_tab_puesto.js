/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E96CA215-2562-496D-B325-ACC4189C1C55"}
 */
function onHide_tab_puesto(event) {
	if(vs_to_tbc_puesto.getSize()>0){
		return true	
	}else{
		return false
	}
	
}
