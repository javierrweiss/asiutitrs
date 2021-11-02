/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"637FAD73-A2EB-4ED1-9D9C-78531BFC579C"}
 */
function onShow_frm_tab_cargas_2(firstShow, event) {
	if(globals.per_26==5){
			forms.frm_tab_cargas_2.elements.tabless.visible=false
			forms.frm_tab_cargas_2.elements.tabless_2.visible=true
	}else{
			if(globals.per_26==1){
					forms.frm_tab_cargas_2.elements.tabless.visible=false
					forms.frm_tab_cargas_2.elements.tabless_2.visible=false
			}else{
					forms.frm_tab_cargas_2.elements.tabless.visible=true
					forms.frm_tab_cargas_2.elements.tabless_2.visible=false
			}
	}
}
