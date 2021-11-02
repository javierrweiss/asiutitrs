/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"672632F4-DE14-43AB-B2B5-7C8A4E96F9EC"}
 */
function onTabChange_actualiza(previousIndex, event) {
	globals.gbl_index   = forms.frm_cons_estado_economico_2898.elements.tabs.tabIndex
	globals.gbl_index_2 = forms.frm_cons_estado_eco_tp_compras.elements.tabs.tabIndex
	globals.gbl_index_3 = forms.frm_cons_estado_eco_tp_prest.elements.tabs.tabIndex
	globals.gbl_index_4 = forms.frm_cons_estado_eco_tp_rrhh.elements.tabs.tabIndex
	globals.gbl_index_5 = forms.frm_cons_estado_eco_tp_finanzas.elements.tabs.tabIndex
	globals.gbl_index_6 = forms.frm_cons_estado_eco_tp_conta.elements.tabs.tabIndex
	globals.gbl_index_7 = forms.frm_cons_estado_eco_tp_legales.elements.tabs.tabIndex
}
