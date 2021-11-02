/**
 * @param event
 *
 * @properties={typeid:24,uuid:"87DA911E-53A1-4868-B5A2-0B61C66098D6"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
    globals.gbl_cobertura = foundset.codigo 
	application.getWindow('Busca_cober_mult').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"61749E98-9579-48EC-BE2C-8D444F03EB71"}
 */
function filtra(){
	var largo = globals.gbl_con_busca.length;
    var esnumero = true;
    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_busca.charCodeAt(i)< 48 || globals.gbl_con_busca.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }

    foundset.find()
	if(esnumero){
		foundset.codigo = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.descripcion = '>' +  globals.gbl_con_busca.valueOf()		
	}	
	if (forms.frm_tab_coberturas_mult.frm_campo_N1 != 0){      
        foundset.tipo = application.getValueListDisplayValue('vl_Obras_tipclie',forms.frm_tab_coberturas_mult.frm_campo_N1)             
    }  
    if (forms.frm_tab_coberturas_mult.frm_campo_N2 != 9999){  
        foundset.estado = application.getValueListDisplayValue('vl_Obras_estado',forms.frm_tab_coberturas_mult.frm_campo_N2)
    }
	foundset.search()	
	
	if(esnumero){
		foundset.sort('codigo asc')
	}else{
		foundset.sort('descripcion asc')	
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E8EA95BA-9272-47AF-81CC-3B10169C3BA1"}
 */
function onAction_enabled(event) {
	if(foundset.enabled == 0 || null){		
		forms.frm_tab_coberturas_mult.frm_total_sel--
	}else{
		forms.frm_tab_coberturas_mult.frm_total_sel++		
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3E8FB569-971A-432A-8EA5-C021BB56EF9F"}
 */
function onAction_selec(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_coberturas_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)		
		if(foundset.enabled == 0){
		    foundset.enabled = 1
		    forms.frm_tab_coberturas_mult.frm_total_sel++
		}		
	}*/
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()
	forms.frm_tab_coberturas_mult.frm_total_sel = $max
	controller.setSelectedIndex(1)
	forms.frm_tab_coberturas_mult.elements.lbl_procesando.visible = false
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D9533F23-C201-4F1D-AC5C-F58493AB76DA"}
 */
function onAction_desel(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_coberturas_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		if(foundset.enabled == 1){
		    foundset.enabled = 0
			forms.frm_tab_coberturas_mult.frm_total_sel--			
		}
	}*/
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',0)	
	fsUpdater.performUpdate()
	if(forms.frm_tab_coberturas_mult.frm_total_sel > 0){
        forms.frm_tab_coberturas_mult.frm_total_sel = 
    	  forms.frm_tab_coberturas_mult.frm_total_sel - $max
		if(forms.frm_tab_coberturas_mult.frm_total_sel < 0){
			forms.frm_tab_coberturas_mult.frm_total_sel = 0
		}
	}
	controller.setSelectedIndex(1)
	forms.frm_tab_coberturas_mult.elements.lbl_procesando.visible = false
}