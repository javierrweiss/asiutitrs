/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C4E5CBF-2C84-4FF0-9CAA-59BA84F79CC1"}
 */
function onAction_Scroll_Interven(event) {
	scopes.globals.fichaaneste_interven = foundset.itv_codi
	scopes.globals.fichaaneste_interven_des = foundset.itv_descripcion
	var name = application.getActiveWindow()
	name.getName()
	var $win = application.getWindow(name.getName())
	if($win != null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C783B1F-AD05-49BE-A4BF-7827C77D23E6"}
 */
function onShow_scroll_interven(firstShow, event) {
//	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			//application.output("paso 3")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","=",2)
		}else{
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1])
		}
		
	//}
}

/**
 * @properties={typeid:24,uuid:"2E16372B-1D0B-48BE-A0F2-D89601D6CDAA"}
 * @AllowToRunInFind
 */
function filtra() {
	/*   armar algo parecido
	if(scopes.globals.fichaaneste_interven_des == null)
		{var largo = 0
		var esnumero = false}
	else
		{var largo = scopes.globals.fichaaneste_cirujano_alf.length
		var esnumero = true}
	
	for (var i = 0; i < largo && esnumero == true; i++){
	   if (scopes.globals.fichaaneste_cirujano_alf.charCodeAt(i)< 48 || scopes.globals.fichaaneste_cirujano_alf.charCodeAt(i) > 57){
		   esnumero = false
	   } 
	}
	
	foundset.find()
	if(scopes.globals.fichaaneste_cirujano_alf == null)
		{scopes.globals.fichaaneste_cirujano_alf = ''}
	if(esnumero){
		foundset.medpercod = '>= ' +  utils.stringToNumber(scopes.globals.fichaaneste_cirujano_alf.valueOf())
	}else{
		foundset.medperapeynom = '>' +  scopes.globals.fichaaneste_cirujano_alf		
	}	          
	
	var cuantos = foundset.search()	
	
	if(esnumero){
		foundset.sort('medpercod asc')
	}else{
		foundset.sort('medperapeynom asc')	
	}
	*/
}
