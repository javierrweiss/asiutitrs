/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F22A22E9-ADA6-4BF8-8D69-F79936A85CC4"}
 */
function onAction_FIND(event) {
	globals.vIntervenAlfa=globals.vIntervenAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.frm_scroll_interven.controller.focusFirstField()
	forms.frm_scroll_interven.elements.itv_codi.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26EBD817-E731-469F-89C3-A54733345128"}
 */
function onShow_busqueda_interven(firstShow, event) {
	globals.vIntervenAlfa=''
	elements.buscar.requestFocus()
	/*
	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			databaseManager.removeTableFilterParam("maestros","RESTO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[2,3],"HEMO")
		}else{
			databaseManager.removeTableFilterParam("maestros","HEMO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1],"RESTO")
		}
		
	}
	*/
}
