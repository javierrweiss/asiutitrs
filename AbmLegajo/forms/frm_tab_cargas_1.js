
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09B0D158-0551-4F36-B3BA-2A55A70A5161"}
 */
function onShow_frm_tab_cargas_1(firstShow, event) {
	if(globals.per_1!=0 && globals.per_1!=null){
		if(legajo_to_tbc_personal_rrhh.getSize()>0){
			if(legajo_to_tbc_personal_rrhh.per_26!=globals.per_26){
				if(globals.per_26==5){
					forms.frm_tab_cargas_1.elements.tabless.visible=false
					forms.frm_tab_cargas_1.elements.tabless_2.visible=true
				}else{
					if(globals.per_26==1){
						forms.frm_tab_cargas_1.elements.tabless.visible=false
						forms.frm_tab_cargas_1.elements.tabless_2.visible=false
					}else{
						forms.frm_tab_cargas_1.elements.tabless.visible=true
						forms.frm_tab_cargas_1.elements.tabless_2.visible=false
					}
				}
			}else{
				if(legajo_to_tbc_personal_rrhh.per_26==5){
					forms.frm_tab_cargas_1.elements.tabless.visible=false
					forms.frm_tab_cargas_1.elements.tabless_2.visible=true
				}else{
					if(legajo_to_tbc_personal_rrhh.per_26==1){
						forms.frm_tab_cargas_1.elements.tabless.visible=false
						forms.frm_tab_cargas_1.elements.tabless_2.visible=false
					}else{
						forms.frm_tab_cargas_1.elements.tabless.visible=true
						forms.frm_tab_cargas_1.elements.tabless_2.visible=false
					}
				}
			}
		}
	}
}
