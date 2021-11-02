/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"29E484DF-3B03-41EF-BA44-B6DEB6B58355"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.merpercod.requestFocus()
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"4A01E0F9-966F-4562-8EE8-6CD2D3918EAE"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_especialidad = foundset.esp_codi
	application.getWindow('Busca_espe').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"D70748A8-13DE-44DA-9258-0B581A06E2B1"}
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
		foundset.esp_codi = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.esp_descrip = '>' +  globals.gbl_con_busca.valueOf()		
	}	          

	foundset.search()	
	
	if(esnumero){
		foundset.sort('esp_codi asc')
	}else{
		foundset.sort('esp_descrip asc')	
	}
}