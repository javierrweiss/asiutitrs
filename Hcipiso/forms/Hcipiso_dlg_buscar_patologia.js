/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3C427AE-D1A6-471E-956D-9B1402E03E11"}
 */
var f_descripcion = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AB81695A-D4C0-4363-A1AD-D1ABEEB3D06A"}
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
 * @properties={typeid:24,uuid:"87321C95-460B-4D23-8D59-D502B1E0F585"}
 * @AllowToRunInFind
 */
function onAction_descripcion(event) {
	
    aplicarFiltro();
    forms.Hcipiso_tbl_patologia_alfa.controller.setSelectedIndex(1);
	forms.Hcipiso_tbl_patologia_alfa.elements.btn_seleccionar.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"676DA933-0EF2-4CF5-8335-8D8ED71EA236"}
 * @AllowToRunInFind
 */
function aplicarFiltro(){
	
	var texto = f_descripcion.toLocaleUpperCase();
    
    forms.Hcipiso_tbl_patologia_alfa.foundset.find();
    forms.Hcipiso_tbl_patologia_alfa.foundset.pat_descrip = '>=' + texto;
    forms.Hcipiso_tbl_patologia_alfa.foundset.search();
}
