
/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"B186C3AC-F659-458A-B39F-D0C14245699D"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.gru1.requestFocus()
}


/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"2A7BA33B-C87B-4BC2-A151-7D215E2C63DE"}
 */
function onRecordSelection_frm_scr_grupo(event) {
	globals.gbl_grupo_nom = foundset.gru2
	application.getWindow('Busca_grupo').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"166B1CDF-8030-4B3F-87F9-CE86D483E04A"}
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
		foundset.gru2 = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.gru3 = '>' +  globals.gbl_con_busca.valueOf()		
	}	          

	foundset.search()	
	
	if(esnumero){
		foundset.sort('gru1 asc, gru2 asc')
	}else{
		foundset.sort('gru3 asc')	
	}
}
