/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A57F73FB-D3FA-4F12-BCF8-2BECABE67409"}
 */
var f_descripcion = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1B75EF8A-4184-4E79-8EEC-FBA60A62834B"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
		
	f_descripcion = '';
	elements.txt_descripcion.requestFocus();
	aplicarFiltro();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF214193-99C5-472C-A994-E6A093337FC0"}
 * @AllowToRunInFind
 */
function onAction_descripcion(event) {
	
    aplicarFiltro();
    forms.AsiUcoTrs_tbl_patologia_alfa.controller.setSelectedIndex(1);
	forms.AsiUcoTrs_tbl_patologia_alfa.elements.btn_seleccionar.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"98C8DCE5-7804-418B-9375-03C2AC434F12"}
 * @AllowToRunInFind
 */
function aplicarFiltro(){
	
	var texto = f_descripcion.toLocaleUpperCase();
    
    forms.AsiUcoTrs_tbl_patologia_alfa.foundset.find();
    forms.AsiUcoTrs_tbl_patologia_alfa.foundset.pat_descrip = '>=' + texto;
    forms.AsiUcoTrs_tbl_patologia_alfa.foundset.search();
}
