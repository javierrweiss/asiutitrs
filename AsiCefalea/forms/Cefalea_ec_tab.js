
/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"090E2017-65DF-4204-A40E-CA4B3F16F0B3"}
 */
function onTabChange_ec(previousIndex, event) {
	elements.tabs.setTabFGColorAt(previousIndex, '#000000');
	elements.tabs.setTabFGColorAt(elements.tabs.tabIndex, '#3336ff');
	
	if(elements.tabs.tabIndex == 1){
		elements.tabs.setTabFGColorAt(1,'#0000ff')
		forms.Cefalea_txt_ec_rx.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 2){
		elements.tabs.setTabFGColorAt(2,'#0000ff')
		forms.Cefalea_txt_ec_tac.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 3){
		elements.tabs.setTabFGColorAt(3,'#0000ff')
		forms.Cefalea_txt_ec_rmn.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 4){
		elements.tabs.setTabFGColorAt(4,'#0000ff')
		forms.Cefalea_txt_ec_otros.elements.tea_texto.requestFocus();
	}
}
