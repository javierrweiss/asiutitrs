/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AEFB9770-564E-423A-9F3B-8FCF2E5D5235",variableType:93}
 */
var fecha_desde = null;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A9C77B60-CEFD-45CB-8A53-3EE06CEF949B",variableType:93}
 */
var fecha_hasta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FAFBB24C-A73A-4D99-908A-75B27CB4041B",variableType:8}
 */
var lote = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"772CC6E2-45F1-44B0-BFC2-A8B73C8502B0"}
 */
var profesional = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8FFAEDAB-3756-4A6A-86BB-934F894377D5"}
 */
var tipo_prestacion = null;

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"702B5303-55D2-4AEE-98AC-6FCFDCE675E1"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
    globals.gbl_lote = foundset.lote
	application.getWindow('Busca_lote').hide();
}
