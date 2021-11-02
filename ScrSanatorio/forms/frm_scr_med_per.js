/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"BE938851-2407-4F2F-82D8-89735A7714AB"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.merpercod.requestFocus()
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"078D5892-91B1-40B3-9EE2-4708B7BD1419"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_profesional = foundset.medpercod
	application.getWindow('Busca_profe').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"5D0BE850-52CA-47F9-BEFF-236310EBC5C7"}
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
		foundset.medpercod = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.medperapeynom = '>' +  globals.gbl_con_busca.valueOf()		
	}
	switch (forms.frm_tab_med_per.frm_campo_N1){      
        case 1 : foundset.medpertipoie = 0;break	             
        case 2 : foundset.medpertipoie = 1; break	             
    }
    switch (forms.frm_tab_med_per.frm_campo_N2){      
        case 1 : foundset.medperfechabaja = 0;break	             
        case 2 : foundset.medperfechabaja = '> ' + 0; break	             
}
	foundset.search()	
	
	if(esnumero){
		foundset.sort('medpercod asc')
	}else{
		foundset.sort('medperapeynom asc')	
	}
}
