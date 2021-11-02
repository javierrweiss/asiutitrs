
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"85D72593-3FD2-4396-A4BF-E7AD96BE2ED1"}
 */
function onDataChange_anes_cabcue_1(oldValue, newValue, event) {
	var name =''
	if (newValue==1){
		for(var i=2;i<=5;i++){
			name = 'anes_cabcue_'+i
			forms.frm_exam_cabeza_cuello.foundset[name]=0
			forms.frm_exam_cabeza_cuello.elements[name].enabled=false
		}
	}else{
		for(i=2;i<=5;i++){
			name = 'anes_cabcue_'+i
			forms.frm_exam_cabeza_cuello.elements[name].enabled=true
		}
	}
	return true
}
