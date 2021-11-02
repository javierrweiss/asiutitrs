/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7D2C488B-A3C6-4171-A6F5-B6CFA20698ED",variableType:4}
 */
var f_tiponom = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF152BAA-4B54-4DD2-B5E4-6880B329325C",variableType:4}
 */
var f_codinom = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"89CD5C11-AE1A-499E-8AF0-FE1ADA495BF0",variableType:4}
 */
var f_pedido = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA06BDFA-22EC-4BAF-8416-5100527E637F",variableType:4}
 */
var f_servicio = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"19014D81-3203-49A0-9A87-82EADE97766C",variableType:4}
 */
var f_nroinforme = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A2593A04-E26A-4AD6-89C7-173752F90D6A"}
 */
var f_texto = ' ';


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5E78CF8-E657-4F71-A97E-EE4DA56A384F"}
 */
function onAction_AtCons_imapedet(event) {
	var current = foundset.getSelectedIndexes();
	var j=0;
	if (current.length > 1)
	{
		//for(var i=0;i<current.length;i++){
			//foundset.setSelectedIndex(current[i])
			forms.AtCons_texto.f_codinom[j]=foundset.imapedetcodinom
			forms.AtCons_texto.f_tiponom[j]=foundset.imapedettiponom
			forms.AtCons_texto.f_pedido[j]=foundset.imapedetpedido
			forms.AtCons_texto.f_servicio[j]=foundset.imapedetservicio
			forms.AtCons_texto.f_nroinforme=foundset.imapedetnroinforme
			if(foundset.imapedettextoinforme!=null){
				forms.AtCons_texto.f_informe=foundset.imapedettextoinforme
			}else{
				forms.AtCons_texto.f_informe=''
			}
			globals.AtCons_codinom=foundset.imapedetcodinom
			if(atcons_to_tbc_imapedet_new.getSize()>0){
				if(atcons_to_tbc_imapedet_new.idetestado>0){
					scopes.globals.AtCons_vmensaje = 'Práctica Informada'
					globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
					return
				}
			}
		//}
		
	}else{
		if(foundset.imapedettextoinforme!=null){
			forms.AtCons_texto.f_informe=foundset.imapedettextoinforme
		}else{
			forms.AtCons_texto.f_informe=''
		}
		forms.AtCons_texto.f_codinom[j]=foundset.imapedetcodinom
		forms.AtCons_texto.f_tiponom[j]=foundset.imapedettiponom
		forms.AtCons_texto.f_pedido[j]=foundset.imapedetpedido
		forms.AtCons_texto.f_servicio[j]=foundset.imapedetservicio
		forms.AtCons_texto.f_nroinforme=foundset.imapedetnroinforme
	
		globals.AtCons_codinom=foundset.imapedetcodinom
		if(atcons_to_tbc_imapedet_new.getSize()>0){
			if(atcons_to_tbc_imapedet_new.idetestado>0){
				scopes.globals.AtCons_vmensaje = 'Práctica Informada'
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				return
			}
		}
	}
	forms.AtCons_carga_informe.elements.tabless_1.enabled=true
	forms.AtCons_carga_informe.elements.tabless_1.tabIndex=1
	forms.AtCons_texto.elements.btn_graba.enabled=true
	forms.AtCons_texto.elements.txt_texto.editable=true
	forms.AtCons_texto.elements.txt_texto.requestFocus()
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"840680BD-0C85-47E0-9C20-F1C5E3DD3AC2"}
 */
function onRecordSelection_ATcons_imapedet(event) {
	if(foundset.imapedettextoinforme!=null){
		forms.AtCons_texto.f_informe=foundset.imapedettextoinforme
	}else{
		forms.AtCons_texto.f_informe=''
	}
	forms.AtCons_carga_informe.elements.tabless_1.tabIndex=1
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"15E6D788-F549-4394-B7B5-3011692F4020"}
 */
function onRecordSelection_1(event) {
	// TODO Auto-generated method stub
}
