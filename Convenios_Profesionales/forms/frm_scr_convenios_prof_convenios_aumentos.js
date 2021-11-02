
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FFE424D0-C543-47C9-81D6-4601E1EF476F",variableType:4}
 */
var res_recargo_diaf = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06FD4A20-3DD5-4316-BCA5-84F3454947C5",variableType:4}
 */
var res_recargo_noct = 0					
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DA089B2D-B0CA-4687-BE0F-1E28D6D3576A",variableType:4}
 */
var	res_recargo_urg = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A0D71938-22A5-41D3-8F64-2D2D099F1D6D",variableType:4}
 */
var	res_tipo_rec_diaf = 0		
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"11F01596-C4F5-4875-937F-4425EA5E7623",variableType:4}
 */
var	res_tipo_rec_noct = 0				
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B0F10895-837C-436B-A6F0-2B472A3E300E",variableType:4}
 */
var	res_tipo_rec_urg = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7113122C-60DF-427F-9697-4AFC919555E0",variableType:4}
 */
var res_grupo_nome = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B6936460-C16F-4571-BB76-0A25E3CD3D48",variableType:4}
 */
var res_tipo_nome = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F93588F4-CC40-43DA-B069-FCF20F35703A",variableType:4}
 */
var res_cod_nomencla = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F83FAFD-AC2E-4EB4-A415-B2C358E4184A",variableType:4}
 */
var res_cod_esp = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B7C35E15-DDF2-4CF5-8777-2C56FC2367F8",variableType:4}
 */
var res_cod_obra = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A3C0D9E8-E4AB-4F07-B964-67B777E381E0",variableType:8}
 */
var enabled = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C7FF6B4A-F3F3-4463-9A28-DEE8AF8623F4",variableType:8}
 */
var res_tipo_valor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"083E4541-A2EC-4E4A-9712-8071742ADE20",variableType:8}
 */
var res_cod_med = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"403D3631-B398-43A2-B018-346358ECFCE5",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E0DF1748-02F5-4207-9495-92ED2674888E",variableType:8}
 */
var res_imp_valor2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"322B96B6-6709-46AC-A0E6-4BDCFC89FA7F",variableType:8}
 */
var res_imp_valor_cal1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4049E5AF-20F9-49BB-B564-D5BF935924AD",variableType:8}
 */
var res_imp_valor_cal2 = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3ED937A-102A-4A1B-9363-91EF6A559DFA"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA10CF41-8166-41AC-B1EA-799633C0C045"}
 */
var res_des_nomencla = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5DCDD1D9-BBB7-4B9F-9F15-ED30B65C96E9",variableType:8}
 */
var res_des_grupo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"05FCC66F-7E18-4336-A1B8-090EB0C19BA7"}
 */
var res_des_obra = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"89080E74-ED13-45E2-8F2B-EE5EDA6A9DA7",variableType:93}
 */
var res_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76A611DE-BF42-4EAE-BAE7-EDEC71FA9022"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"208D8CA5-173A-46C2-838A-802AFFD7CF3E"}
 */
var res_des_med = null;

/*** 
 * @param event
 *
 * @properties={typeid:24,uuid:"7E7CECE7-92C7-4268-A622-AE0904942F5F"}
 */
function onAction_enabled(event) {
	if(foundset.enabled == 0 || null){
		if(forms.frm_convenios_prof_convenios_aumentos.frm_total_sel > 0){
		    forms.frm_convenios_prof_convenios_aumentos.frm_total_sel = forms.frm_convenios_prof_convenios_aumentos.frm_total_sel - 1
		}    				
	}else{
		forms.frm_convenios_prof_convenios_aumentos.frm_total_sel = forms.frm_convenios_prof_convenios_aumentos.frm_total_sel + 1
		
	}}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"EF964A38-DEBE-49E0-8824-1B81D958C4FE"}
 */
function onAction_selec(event) {
	var $max = databaseManager.getFoundSetCount(foundset)		
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()
	forms.frm_convenios_prof_convenios_aumentos.frm_total_sel = $max
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E28C9783-ABCE-4F48-BE07-3DA069ED5F54"}
 */
function onAction_desel(event) {
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',0)	
	fsUpdater.performUpdate()
	forms.frm_convenios_prof_convenios_aumentos.frm_total_sel = 0
}
