
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BF9F4740-8919-4107-9980-0667CCB12244"}
 */
function onDataChange_anes_tratprev_1(oldValue, newValue, event) {
	var name =''
	if (newValue==1){
		for(var i=2;i<=19;i++){
			name = 'anes_tratprev_'+i
			forms.frm_tratam_previos.foundset[name]=0
			forms.frm_tratam_previos.elements[name].enabled=false
		}
	}else{
		for(i=2;i<=19;i++){
			name = 'anes_tratprev_'+i
			forms.frm_tratam_previos.elements[name].enabled=true
		}
	}
	return true
}
