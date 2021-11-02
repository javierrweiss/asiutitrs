/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02A13D7A-003F-4403-AA53-AD1E92BDA55D"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.patologia_cod.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2EBBCFC2-5D5C-4DE5-8726-FE0DCE9604AC"}
 */
function onAction_codi(event) {
	scopes.globals.gbl_diagnostico = foundset.pat_codi
	scopes.globals.gbl_con_diagnostico = foundset.pat_descrip
	//application.getWindow('busca_diagnos').hide();
	var $win = application.getWindow("busca_diagnos");
	if ($win != null){
		$win.hide() 
		$win.destroy()}
		else {return}
}

/**
 * @properties={typeid:24,uuid:"8C1986F0-6C15-4D96-93D9-CC953D826BC2"}
 * @AllowToRunInFind
 */
function filtra() {
	if(scopes.globals.gbl_con_diagnostico == null)
		{var largo = 0}
	else
		{var largo = scopes.globals.gbl_con_diagnostico.length}
    var esnumero = true;
    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (scopes.globals.gbl_con_diagnostico.charCodeAt(i)< 48 || scopes.globals.gbl_con_diagnostico.charCodeAt(i) > 57){
		   esnumero = false
	   } 
    }
    
    foundset.find()
	if(scopes.globals.gbl_con_diagnostico == null)
	{scopes.globals.gbl_con_diagnostico = ''}
	if(esnumero){
		foundset.pat_codi = '>= ' +  utils.stringToNumber(scopes.globals.gbl_con_diagnostico.valueOf())
	}else{
		foundset.pat_descrip = '>' +  scopes.globals.gbl_con_diagnostico.valueOf()		
	}	          

	var cuantos = foundset.search()	
	
	if(esnumero){
		foundset.sort('pat_codi asc')
	}else{
		foundset.sort('pat_descrip asc')	
	}
}
