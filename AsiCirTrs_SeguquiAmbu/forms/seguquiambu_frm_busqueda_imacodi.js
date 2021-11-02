/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"556B8660-7176-4E07-A3E2-C465CDBF3A68"}
 */
function onAction_FIND(event) {
	globals.segambu_imacodialfa=globals.segambu_imacodialfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63D248C3-C85A-4F83-80D4-45A2E296F6B1"}
 */
function onShow_busqueda_interven(firstShow, event) {
	/**
		if (globals.vEsHemodinamia=="Si"){
			databaseManager.removeTableFilterParam("maestros","RESTO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[2,3],"HEMO")
		}else{
			databaseManager.removeTableFilterParam("maestros","HEMO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1],"RESTO")
		}
		
	*/
}
