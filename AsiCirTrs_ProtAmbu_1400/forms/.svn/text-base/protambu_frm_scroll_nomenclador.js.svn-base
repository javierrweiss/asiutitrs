/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"83EA9291-FB4B-4B9E-BCC3-518849D9A9B0"}
 */
function onAction_Scroll_Interven(event) {
	if(forms.protambu_frm_scroll_nomenclador.nome_pantalla==1||forms.protambu_frm_scroll_nomenclador.nome_pantalla==3||forms.protambu_frm_scroll_nomenclador.nome_pantalla==7||forms.protambu_frm_scroll_nomenclador.nome_pantalla==8||forms.protambu_frm_scroll_nomenclador.nome_pantalla==9){
		globals.vNomencla=forms.protambu_frm_scroll_nomenclador.nome_codigo
		globals.vNomenclaAlfa=forms.protambu_frm_scroll_nomenclador.nome_descr.substr(0,50)
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
 * @properties={typeid:24,uuid:"7E28D1FF-F88B-4A7C-9648-BAFFE0763E20"}
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
