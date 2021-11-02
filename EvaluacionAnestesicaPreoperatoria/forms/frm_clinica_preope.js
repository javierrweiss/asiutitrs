
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CE251349-4568-4B8E-A395-B3A86D611AB0"}
 */
function onDataChange_anes_clinpre_1(oldValue, newValue, event) {
	var name =''
	if (newValue==1){
		for(var i=2;i<=33;i++){
			name = 'anes_clinpre_'+i
			forms.frm_clinica_preope.foundset[name]=0
			forms.frm_clinica_preope.elements[name].enabled=false
		}
	}else{
		for(i=2;i<=33;i++){
			name = 'anes_clinpre_'+i
			forms.frm_clinica_preope.elements[name].enabled=true
		}
	}
	
	return true
}
