/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C37AAE8A-9526-4BA8-AC52-526102475FB6"}
 */
function onAction_enabled(event) {
	if(foundset.enabled == 0 || null){		
		forms.frm_convenios_prof_copia.frm_total_sel--
	}else{
		forms.frm_convenios_prof_copia.frm_total_sel++		
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E237FFDB-8EE0-45BE-9EB5-1B74A5EEA692"}
 */
function onAction_selec(event) {
	var $max = databaseManager.getFoundSetCount(foundset)	
	application.updateUI()	
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()
	forms.frm_convenios_prof_copia.frm_total_sel = $max
	controller.setSelectedIndex(1)	
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"30B8126B-08AD-4555-BA15-6DE09E57577F"}
 */
function onAction_desel(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	application.updateUI()
		var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',0)	
	fsUpdater.performUpdate()
	if(forms.frm_convenios_prof_copia.frm_total_sel > 0){
        forms.frm_convenios_prof_copia.frm_total_sel = 
    	  forms.frm_convenios_prof_copia - $max
		if(forms.frm_convenios_prof_copia.frm_total_sel < 0){
			forms.frm_convenios_prof_copia.frm_total_sel = 0
		}
	}
	controller.setSelectedIndex(1)
}