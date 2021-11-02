/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FBA29CA4-3361-45D6-9C1F-E7BA119D98F2",variableType:4}
 */
var fgr = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D9D51E5-6026-4302-AC5D-2FFE9B101309",variableType:4}
 */
var fgb = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1C836821-01C2-4A76-95C1-CF697AAA8D67",variableType:4}
 */
var fhto = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"498BE7D6-D6D6-42C4-9A37-0BD8402E1416",variableType:4}
 */
var fhb = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F0740B93-E3B3-4312-88B1-A1C4DC024610",variableType:4}
 */
var fgluc = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1DBBB830-C2F3-4D9F-9B97-C4210ED1C955",variableType:4}
 */
var furea = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B9C277F-7970-43CA-84A0-EBAFA8A1EB99",variableType:4}
 */
var fcolinest = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"24694C85-A89A-4862-B540-F1BC185C64CE",variableType:4}
 */
var fkptt = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61C92C8B-4837-4A7B-B934-2F553AF3A924",variableType:4}
 */
var ftpo_prot = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1A08AC6C-588B-4236-AFDC-5F5EC253417C"}
 */
var fgrupo = " ";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"636C6558-D87C-4F45-BDF4-FA780386F78D"}
 */
var ffact_rh = " ";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F426676-F02B-4B8C-974B-CD42F5AA94C5",variableType:4}
 */
var fotros_lab = 0;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D106393F-E33E-456D-9662-3D35ECE09EEF"}
 */
function onAction_campos_gral(event) {
	switch (event.getElementName()){
		case 'fld_anesgr':elements.fld_anesgb.requestFocus();break;
		case 'fld_anesgb':elements.fld_aneshto.requestFocus();break;
		case 'fld_aneshto':elements.fld_aneshb.requestFocus();break;
		case 'fld_aneshb':elements.fld_anesgluc.requestFocus();break;
		case 'fld_anesgluc':elements.fld_anesurea.requestFocus();break;
		case 'fld_anesurea':elements.fld_anescolinest.requestFocus();break;
		case 'fld_anescolinest':elements.fld_aneskptt.requestFocus();break;
		case 'fld_aneskptt':elements.fld_anestpoprot.requestFocus();break;
		case 'fld_anestpoprot':elements.fld_anesgrupo.requestFocus();break;
		case 'fld_anesgrupo':elements.fld_anesfactrh.requestFocus();break;
		case 'fld_anesfactrh':elements.fld_anesotroslab.requestFocus();break;
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"27A68058-71B2-4C2B-97A1-F979C00F71E8"}
 */
function onDataChange_campos_gral(oldValue, newValue, event) {
	globals.anesambu_completo1=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo1_chk")
	globals.anesambu_completo2=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo2_chk")
	globals.anesambu_completo3=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo3_chk")
	globals.anesambu_completo4=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo4_chk")
	globals.anesambu_completo5=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo5_chk")
	globals.anesambu_completo6=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo6_chk")
	if(globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab",'fpresionmax')&&globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab",'fpresionmin')&&globals.anesambu_horainicio!=''&&globals.anesambu_horainicio!=null){
		globals.anesambu_completo9=true
	}else{
		globals.anesambu_completo9=false
	}
	if(globals.anesambu_completo1&&globals.anesambu_completo2&&globals.anesambu_completo3&&globals.anesambu_completo4&&globals.anesambu_completo5&&globals.anesambu_completo6&&globals.anesambu_completo9){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=true
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=false
	}
	return true
}
