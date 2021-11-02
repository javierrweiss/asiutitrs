/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5EBD8342-77F3-41BA-BBB8-42283793D3E0"}
 */
var f_descripcion = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"86C4AB71-854D-426C-95E7-C192BA0811FE"}
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
 * @properties={typeid:24,uuid:"0A1F4BBA-FC04-4558-8B4B-BE2252D99F6B"}
 * @AllowToRunInFind
 */
function onAction_descripcion(event) {
	 forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_patologia=f_descripcion;
    aplicarFiltro();
    forms.AsiUtiTrs_hoja_tbl_patologia_alfa.controller.setSelectedIndex(1);
	forms.AsiUtiTrs_hoja_tbl_patologia_alfa.elements.btn_seleccionar.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"7B52DCB2-4F92-4688-96B7-3E9DA7A1601F"}
 * @AllowToRunInFind
 */
function aplicarFiltro(){
	
	//var texto = f_descripcion.toLocaleUpperCase();
	var valorIngresado = forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_patologia.toLocaleUpperCase();
	//var codigoPatologia = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat1
	
		if(valorIngresado){
			
			if(isNaN(valorIngresado)){
			forms.AsiUtiTrs_hoja_tbl_patologia_alfa.foundset.find();
		    forms.AsiUtiTrs_hoja_tbl_patologia_alfa.foundset.pat_descrip = '>=' + valorIngresado;
		    forms.AsiUtiTrs_hoja_tbl_patologia_alfa.foundset.search();
		    forms.AsiUtiTrs_hoja_tbl_patologia_alfa.controller.recreateUI();
			}
		    
		    
		    else{
		    	forms.AsiUtiTrs_hoja_tbl_patologia_alfa.foundset.find();
			    forms.AsiUtiTrs_hoja_tbl_patologia_alfa.foundset.pat_codi =  valorIngresado;
			    forms.AsiUtiTrs_hoja_tbl_patologia_alfa.foundset.search();
			    forms.AsiUtiTrs_hoja_tbl_patologia_alfa.controller.recreateUI();
			}
		    
			
		
	}
	
}

