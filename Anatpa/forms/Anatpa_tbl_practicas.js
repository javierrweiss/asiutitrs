/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0F05A13-29B8-4FF3-95AD-13B329041671"}
 */
function onAction_registro(event){
	
		forms.Anatpa_dlg_agregarItem.f_codigo = foundset['nome_codigo'];
		forms.Anatpa_dlg_agregarItem.f_descripcion = utils.stringTrim(foundset['nome_descr']);
		forms.Anatpa_dlg_agregarItem.f_tipoNom = foundset['nome_tipo'];
		
		forms.Anatpa_dlg_agregarItem.elements.txt_descripcion.enabled = false;
		forms.Anatpa_dlg_agregarItem.elements.txt_cantidad.requestFocus();
		//forms.Anatpa_frm_anatpaca.$isDirty = true;
		
		var $name = application.getActiveWindow().getName();
		var $win = application.getWindow($name);
		if($win!=null){
			$win.hide();
			$win.destroy();
		}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A153350-68FC-4296-A30E-06AD6BC3EBFF"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
