/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC8D4245-19BA-4022-9F41-A252A5CD82EA"}
 */
var f_descripcion = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"0A7F3642-3AE6-4039-A865-03694347195D"}
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
 * @properties={typeid:24,uuid:"CD9CE598-0038-4AF3-BFBB-E1FC10543B53"}
 * @AllowToRunInFind
 */
function onAction_descripcion(event) {
	 forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia=f_descripcion;
    aplicarFiltro();
    forms.AsiUtiTrs_tbl_patologia_alfa.controller.setSelectedIndex(1);
	forms.AsiUtiTrs_tbl_patologia_alfa.elements.btn_seleccionar.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"59AAA30D-1427-4A5D-BD7D-CBC6CF978A60"}
 * @AllowToRunInFind
 */
function aplicarFiltro(){
	var valorIngresado = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia.toLocaleUpperCase();
		if(valorIngresado){	
			if(isNaN(valorIngresado)){
			forms.AsiUtiTrs_tbl_patologia_alfa.foundset.find();
		    forms.AsiUtiTrs_tbl_patologia_alfa.foundset.pat_descrip = '>=' + valorIngresado;
		    forms.AsiUtiTrs_tbl_patologia_alfa.foundset.search();
		} else{
		    	forms.AsiUtiTrs_tbl_patologia_alfa.foundset.find();
			    forms.AsiUtiTrs_tbl_patologia_alfa.foundset.pat_codi = valorIngresado +'%';
			    forms.AsiUtiTrs_tbl_patologia_alfa.foundset.search();
			    forms.AsiUtiTrs_tbl_patologia_alfa.controller.recreateUI();
			}  
	}   
  }
