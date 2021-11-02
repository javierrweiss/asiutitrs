/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"79CA66A0-2F95-4FDD-A5A3-F2E001E26D34"}
 */
var estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"855455F1-5B5F-4A1E-8D24-555F48E5BE46"}
 */
var tipo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F5AB9B3-754B-4EC2-AA58-D2F84DFC01E2"}
 */
var descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A2366953-836E-43EB-B48F-F7DEB8DBA8D8",variableType:8}
 */
var enabled = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5DE6FF06-D171-4C01-A4DE-750304DF07CE",variableType:8}
 */
var codigo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF033293-D809-4F06-B561-1B77A0152E8A"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.obr_codigo.requestFocus()	 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2C14927-A211-452D-9ECF-B4AC989782C1"}
 */
function onAction_captura(event) {
	globals.gbl_cobertura = foundset.codigo
	application.getWindow('Busca_cober').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"BDFE6C11-4BD8-454F-AEEA-0C1D560DFA60"}
 */
function filtra(){
	var largo = globals.gbl_con_busca.length;
    var esnumero = true;
    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_busca.charCodeAt(i)< 48 || globals.gbl_con_busca.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }

    foundset.find()
	if(esnumero){
		foundset.codigo = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.descripcion = '>' +  globals.gbl_con_busca.valueOf()		
	}
	if (forms.frm_tab_coberturas_mult.frm_campo_N1 != 0){      
        foundset.tipo = application.getValueListDisplayValue('vl_Obras_tipclie',forms.frm_tab_coberturas_mult.frm_campo_N1)             
    }  
    if (forms.frm_tab_coberturas_mult.frm_campo_N2 != 9999){  
        foundset.estado = application.getValueListDisplayValue('vl_Obras_estado',forms.frm_tab_coberturas_mult.frm_campo_N2)
    }
	foundset.search()	
	
	if(esnumero){
		foundset.sort('codigo asc')
	}else{
		foundset.sort('descripcion asc')	
	}
}
