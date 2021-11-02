/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"5BE80D33-8D7A-42F3-BD16-582CF7FCE422"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.nome_tipo.requestFocus()
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"5A367845-F987-43DD-8F2F-4DAAF6DA7C60"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_nomencla = foundset.nome_codigo_2
	application.getWindow('Busca_nome').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"C01C4D6F-E9FB-47C8-9781-8A3E26B289E6"}
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
		foundset.nome_codigo_2 = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.nome_descr = '>' +  globals.gbl_con_busca.valueOf()		
	}	          

	foundset.search()	
	
	if(esnumero){
		foundset.sort('nome_codigo_1 asc nome_codigo_2 asc')
	}else{
		foundset.sort('nome_descr asc')	
	}
}
