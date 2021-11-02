/**
 * @properties={typeid:35,uuid:"3869843A-68C8-42E4-B4AB-8D02161DDCC5",variableType:-4}
 */
var anesambu_completo9 = false;

/**
 * @properties={typeid:35,uuid:"36923C57-B787-4914-9EF5-5928578F05CA",variableType:-4}
 */
var anesambu_completo1 = false;
/**
 * @properties={typeid:35,uuid:"6BA892AB-7651-44CC-B095-FBA051456106",variableType:-4}
 */
var anesambu_completo2 = false;
/**
 * @properties={typeid:35,uuid:"FD62AFDA-55EB-44E1-9DA1-F7A9E3EAA3C4",variableType:-4}
 */
var anesambu_completo3 = false;
/**
 * @properties={typeid:35,uuid:"94ADFAB1-3060-485B-8002-5ADA640AE9D6",variableType:-4}
 */
var anesambu_completo4 = false;
/**
 * @properties={typeid:35,uuid:"EEFF603E-48DF-4976-9DB9-BC063E3F30D6",variableType:-4}
 */
var anesambu_completo5 = false;
/**
 * @properties={typeid:35,uuid:"CCF96B07-B6AD-4CE5-A344-7A0A41107C74",variableType:-4}
 */
var anesambu_completo6 = false;
/**
 * @properties={typeid:35,uuid:"517B76B2-5577-41B6-88A0-62C2065D8E90",variableType:-4}
 */
var anesambu_completo7 = true;
/**
 * @properties={typeid:35,uuid:"C95AC0C7-AC72-4F8D-A2EF-1781F5DF7186",variableType:-4}
 */
var anesambu_completo8 = true;

/**
 * @properties={typeid:35,uuid:"4A439ADC-334F-40ED-B634-CA982E915555",variableType:-4}
 */
var anesambu_alta = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A179DF15-DB4F-4C2B-A426-ABBDE9F9191E",variableType:4}
 */
var anesambu_tipac = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4780C04-2241-4FB8-8BC5-64CF7D94AEAC"}
 */
var anesambu_horainicio = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F09821F2-B123-4744-A2A1-BE776B8DD9C2",variableType:4}
 */
var anesambu_horaingreso = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D987A4C-C301-4C2C-90FB-CDAC811B7136",variableType:4}
 */
var anesambu_fechaingreso = 0;

/**
 * @param {String} form
 * @properties={typeid:24,uuid:"079EB4E8-0967-4EC6-AB0E-E0AEAD0B7D03"}
 */
function anesambu_valida_datos_obligatorios(form) {
	var completo = true
	var frm = solutionModel.getForm(form);
	var name = form;
	var variables = frm.getVariables();
	
	for (var i in variables){
		
		if(forms[name][variables[i].name].toString()==null){
			if(variables[i].name!='fobste_3'&&variables[i].name!='fobste_2'&&variables[i].name!='fobste_1'&&variables[i].name!='fpedia_1'&&variables[i].name!='fpedia_2'&&variables[i].name!='fpedia_3'){
				completo = false
			}
		}
		if(variables[i].name=='fasa_1'||variables[i].name=='freghab_4'){
			if(forms[name][variables[i].name]==0){
				completo = false
			}
		}
		
	}
		
	return completo
}

/**
 * @param {String} form
 * @param {String} campo
 * @properties={typeid:24,uuid:"8FB2C20A-7864-48E9-8327-D17C74ECAC6F"}
 */
function anesambu_valida_datos_cabecera(form, campo) {
	var completo = true
	if(forms[form][campo]==0||forms[form][campo]==null||forms[form][campo]==''){
		completo = false
	}
	return completo
}
