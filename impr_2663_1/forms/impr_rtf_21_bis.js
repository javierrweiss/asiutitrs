/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"95F6E30D-0A07-44A9-ADDC-827DFBF6FCF9"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E9E7BD67-D34E-4EDE-BB79-C84318E12441",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"23C32459-B4B3-437B-BE98-64E00023FA6E"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B954DF74-4844-4039-8379-CD2677149D2E"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1032744F-835B-42B9-AF01-C34C54D1D528"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"902526CF-F5F0-41F0-9E29-E906F28FC2E2"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"096473A7-6E93-47CF-B290-0BA64DF14AA6"}
 */
var frm_leg_dni = '16.352.455';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"72E3F64E-1468-4200-9DAB-2379A4F9C58E"}
 */
var frm_leg_sector = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"359B251C-8CE3-4B3F-B5CA-411F7452F5CC"}
 */
var frm_leg_categoria = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32CB4A5B-DC6D-4282-83E3-629A32AF501A"}
 */
var frm_leg_fecha = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89E79178-4797-456A-A4B2-300BE43FDCB6"}
 */
var frm_leg_hora = '';

/**
 * @properties={typeid:24,uuid:"C99F72D6-350E-4E49-BEBD-811753DEA287"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	var mes = application.getServerTimeStamp().getMonth()+1
	frm_leg_fecha = application.getServerTimeStamp().getDate()+ '/' + mes 
	                + '/' + application.getServerTimeStamp().getFullYear()
    frm_leg_hora = application.getServerTimeStamp().getHours() + ':' + application.getServerTimeStamp().getMinutes()
	
	frm_campoHTML = ''
	var html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width=10% align="left"><p>Legajo    : </p></td>'
	html += '<td width=10% align="left"><p>' + frm_leg + '</p></td>'
	html += '<td width=80% align="left"><p>' + frm_leg_nom + '</p></td>'
	html += '</tr>'
	html += '</table>'
		
	html += '<br>'
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="12%" align="left"><p>D.N.I.    :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_dni +'</p></td>'
	html += '</tr>'
		
	html += '<br>'	
		
	html += '<tr>'
	html += '<td width="12%" align="left"><p>Sector    :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_sector +'</p></td>'
	html += '</tr>'
		
	html += '<br>'	
		
	html += '<tr>'
	html += '<td width="12%" align="left"><p>Categoría :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_categoria +'</p></td>'
	html += '</tr>'
    html += '</table>'
    	
    html += '<br>'
    	
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="12%" align="left"><p>Fecha :</p></td>'
	html += '<td width="10%" align="left"><p>'+ frm_leg_fecha +'</p></td>'
	html += '<td width="10%" align="left"><p>Hora :</p></td>'
	html += '<td width="15%" align="left"><p>'+ frm_leg_hora +'</p></td>'
	html += '<td width="53%" align="left"><p> </p></td>'
	html += '</tr>'
    html += '</table>'
    	
    html += '<br>'
    	
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td align="left"><p>&nbsp</p></td>'
	html += '<td align="left"><p>&nbsp</td>'
	html += '</tr>'		
	html += '</table>'
		
	html += '<br>'
	html += '<br>'
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="50%" align="left"><p>Notificado: __________________________________</p></td>'
	html += '<td width="40%" align="left"><p>____________________________________ </td>'
	html += '<td width="10%" align="left"><p> </p></td>'
	html += '</tr>'
	html += '</table>'
	
	html += '<table width=100% cellpadding=0 cellspacing=0>'	
	html += '<tr>'
	html += '<td width="25%" align="left"><p> </p></td>'
	html += '<td width="30%" align="left"><p>Firma</p></td>'
	html += '<td width="35%" align="left"><p>Aclaración</td>'
	
	html += '</tr>'
		
	html += '</table></body></html>'
	frm_campoHTML = html
	//frm_campoRTF = frm_campoRTF + html

	
}
