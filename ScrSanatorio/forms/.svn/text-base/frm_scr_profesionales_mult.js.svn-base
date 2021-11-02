/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ADF8C7BB-A6EE-462C-AD53-49A2BDB2A5A9"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
    globals.gbl_profesional = foundset.codigo
	application.getWindow('Busca_profe_mult').hide();
}

/** 
 * @properties={typeid:24,uuid:"8946C9F3-C18D-46FA-85B3-759EFF17F8C5"}
 * @AllowToRunInFind
 */
function filtra(){
	var largo = globals.gbl_con_busca.length;
    var esnumero = true;
    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_busca.charCodeAt(i)< 48 || globals.gbl_con_busca.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }
  /* Filtrar
	var $max = databaseManager.getFoundSetCount(foundset)
	for (i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		switch (forms.frm_tab_profesionales_mult.frm_campo_N1){	     
            case 2 : if (foundset.tipo == 'Interno'){
            	        if(foundset.enabled == 1){
            	            forms.frm_tab_profesionales_mult.frm_total_sel--
                        }
						foundset.enabled == 0
                     };break
            case 1 : if(foundset.tipo == 'Externo'){
            	        if(foundset.enabled == 1){
            	        	forms.frm_tab_profesionales_mult.frm_total_sel--
            	        }
            	        foundset.enabled = 0						
                     }; break	             
        }		
	}
	fin Filtrar
	*/
    foundset.find()
	if(esnumero){
		foundset.codigo = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.descripcion = '>' +  globals.gbl_con_busca.valueOf()		
	}
	
	switch (forms.frm_tab_profesionales_mult.frm_campo_N2){
	    case 1 : foundset.estado = 'Operativo';break	             
	    case 2 : foundset.estado = 'No Operativo'; break	             
	}	
	foundset.search()	
	
	if(esnumero){
		foundset.sort('codigo asc')
	}else{
		foundset.sort('descripcion asc')	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"869589D4-7274-42DE-BCC5-5400CC33892F"}
 */
function onAction_enabled(event) {
	if(foundset.enabled == 0 || null){		
		forms.frm_tab_profesionales_mult.frm_total_sel--
	}else{
		forms.frm_tab_profesionales_mult.frm_total_sel++		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12E7395A-5BE8-4FD7-B581-B3176FC3848B"}
 */
function onAction_selec(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_profesionales_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*
	for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)		
		if(foundset.enabled == 0){
		    foundset.enabled = 1
		    forms.frm_tab_profesionales_mult.frm_total_sel++
		}		
	}
	*/
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()	
	forms.frm_tab_profesionales_mult.frm_total_sel = $max
	controller.setSelectedIndex(1)
	forms.frm_tab_profesionales_mult.elements.lbl_procesando.visible = false
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"7C6C712C-2993-4D36-B820-14A5D0D18B4C"}
 */
function onAction_desel(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_profesionales_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*	  
	for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		if(foundset.enabled == 1){
		    foundset.enabled = 0
			forms.frm_tab_profesionales_mult.frm_total_sel--			
		}
	}
	*/	
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',0)	
	fsUpdater.performUpdate()
	if(forms.frm_tab_profesionales_mult.frm_total_sel > 0){
        forms.frm_tab_profesionales_mult.frm_total_sel = 
    	  forms.frm_tab_profesionales_mult.frm_total_sel - $max
		if(forms.frm_tab_profesionales_mult.frm_total_sel < 0){
			forms.frm_tab_profesionales_mult.frm_total_sel = 0
		}
	}
	controller.setSelectedIndex(1)
	forms.frm_tab_profesionales_mult.elements.lbl_procesando.visible = false
}
