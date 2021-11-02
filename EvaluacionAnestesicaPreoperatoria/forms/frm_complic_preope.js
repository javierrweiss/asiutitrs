
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"91DD8B65-125A-4ED5-B126-C171D98D7A27"}
 */
function onDataChange_anes_complipre_1(oldValue, newValue, event) {
	var name =''
	if (newValue==1){
		for(var i=2;i<=8;i++){
			name = 'anes_complipre_'+i
			forms.frm_complic_preope.foundset[name]=0
			forms.frm_complic_preope.elements[name].enabled=false
		}
	}else{
		for(i=2;i<=8;i++){
			name = 'anes_complipre_'+i
			forms.frm_complic_preope.elements[name].enabled=true
		}
	}
	return true
}
