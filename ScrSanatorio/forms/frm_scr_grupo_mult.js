/**
 * @param event
 *
 * @properties={typeid:24,uuid:"5D058260-594C-4EA3-B544-B287C56AF763"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
    globals.gbl_grupo_nom = foundset.codigo
	application.getWindow('Busca_grupo_mult').hide();
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A3DE9473-517D-4ACA-8833-7554C70931C0"}
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
	
	foundset.search()	
	
	if(esnumero){
		foundset.sort('tipo asc, codigo asc')
	}else{
		foundset.sort('descripcion asc')	
	}
}


/**
 * @param event
 *
 * @properties={typeid:24,uuid:"666D40CF-C2B1-4870-AFDF-FE0B6F0689C0"}
 */
function onAction_enabled(event) {
	if(foundset.enabled == 0 || null){		
		forms.frm_tab_grupo_mult.frm_total_sel--
	}else{
		forms.frm_tab_grupo_mult.frm_total_sel++		
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"F06AC0B3-68F7-422E-9B3E-C17A06A76643"}
 */
function onAction_selec(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_grupo_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()	
	forms.frm_tab_grupo_mult.frm_total_sel = $max
	controller.setSelectedIndex(1)
	forms.frm_tab_grupo_mult.elements.lbl_procesando.visible = false
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C6816B94-80F9-4B62-9D65-0F2EF39AA611"}
 */
function onAction_desel(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_grupo_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',0)	
	fsUpdater.performUpdate()
	if(forms.frm_tab_grupo_mult.frm_total_sel > 0){
        forms.frm_tab_grupo_mult.frm_total_sel = 
    	  forms.frm_tab_grupo_mult.frm_total_sel - $max
		if(forms.frm_tab_grupo_mult.frm_total_sel < 0){
			forms.frm_tab_grupo_mult.frm_total_sel = 0
		}
	}
	controller.setSelectedIndex(1)
	forms.frm_tab_grupo_mult.elements.lbl_procesando.visible = false
}
