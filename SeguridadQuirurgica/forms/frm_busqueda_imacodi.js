/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B683F7B-D812-4CCD-8492-F201CD1302A3"}
 */
function onAction_FIND(event) {
	globals.vImacodiAlfa=globals.vImacodiAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB8CE23D-95F2-4EE1-8309-E51AFB4420D6"}
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
