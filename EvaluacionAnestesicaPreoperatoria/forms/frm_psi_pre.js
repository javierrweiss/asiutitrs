
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"01634F46-B092-459A-BD23-91308D9FA507"}
 */
function onDataChange_anes_psipre_1(oldValue, newValue, event) {
	var name =''
	if (newValue==1){
		for(var i=2;i<=6;i++){
			name = 'anes_psipre_'+i
			forms.frm_psi_pre.foundset[name]=0
			forms.frm_psi_pre.elements[name].enabled=false
		}
	}else{
		for(i=2;i<=6;i++){
			name = 'anes_psipre_'+i
			forms.frm_psi_pre.elements[name].enabled=true
		}
	}
	return true
}
