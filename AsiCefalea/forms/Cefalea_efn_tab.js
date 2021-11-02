
/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F106CC81-3C04-4DFF-9E9E-D14207DEADB9"}
 */
function onTabChange_efn_tab(previousIndex, event) {
	elements.tabs.setTabFGColorAt(previousIndex, '#000000');
	elements.tabs.setTabFGColorAt(elements.tabs.tabIndex, '#3336ff');
	
	if(elements.tabs.tabIndex == 1){
		elements.tabs.setTabFGColorAt(1,'#0000ff')
		forms.Cefalea_txt_efn_conciencia.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 2){
		elements.tabs.setTabFGColorAt(2,'#0000ff')
		forms.Cefalea_txt_efn_lenguaje.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 3){
		elements.tabs.setTabFGColorAt(3,'#0000ff')
		forms.Cefalea_txt_efn_craneales.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 4){
		elements.tabs.setTabFGColorAt(4,'#0000ff')
		forms.Cefalea_txt_efn_motor.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 5){
		elements.tabs.setTabFGColorAt(5,'#0000ff')
		forms.Cefalea_txt_efn_sensibilidad.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 6){
		elements.tabs.setTabFGColorAt(6,'#0000ff')
		forms.Cefalea_txt_efn_reflejos.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 7){
		elements.tabs.setTabFGColorAt(7,'#0000ff')
		forms.Cefalea_txt_efn_taxia.elements.tea_texto.requestFocus();
	}
	
	if(elements.tabs.tabIndex == 8){
		elements.tabs.setTabFGColorAt(8,'#0000ff')
		forms.Cefalea_txt_efn_otros.elements.tea_texto.requestFocus();
	}
}
