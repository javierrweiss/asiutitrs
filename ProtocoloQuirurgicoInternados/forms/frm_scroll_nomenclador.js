/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC584F49-2887-46C5-ABDD-B61A2EB834FB"}
 */
function onAction_Scroll_Interven(event) {
	if(forms.frm_scroll_nomenclador.nome_pantalla==1||forms.frm_scroll_nomenclador.nome_pantalla==3||forms.frm_scroll_nomenclador.nome_pantalla==7){
		globals.vNomencla=forms.frm_scroll_nomenclador.nome_codigo
		globals.vNomenclaAlfa=forms.frm_scroll_nomenclador.nome_descr.substr(0,50)
	}else{
		globals.DIALOGS.showErrorDialog("Código Inválido","El código de Nomenclador no pertenece a una Cirugía")
		globals.vNomencla=0
		globals.vNomenclaAlfa=''
	}
    
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
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
 * @properties={typeid:24,uuid:"244A70C5-A7B0-46BA-975D-5E1F318A2C4C"}
 */
function onShow_scroll_interven(firstShow, event) {
	/**
	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			application.output("paso 3")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","=",2)
		}else{
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1])
		}
		
	}
	*/
}
