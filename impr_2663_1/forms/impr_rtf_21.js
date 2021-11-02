/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AEF36A5B-DA46-4131-914F-B9C66ABB823E"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7672F9FB-40F9-4E7B-9264-DE2A4243B828",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C82FF22E-30C1-4D1C-826A-B954010B7396"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E5CE7775-352F-4335-ADCC-0E712A85BC71"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"446475F1-66F9-4BC1-B3FE-1F9688C55DCB"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"937A5C87-345F-461E-A64F-A294E3F7F4D2"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA4425B7-085C-45E2-BC5B-4D8E73B829E3"}
 */
var frm_leg_dni = '16.352.455';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"56D85298-DFD1-4BF6-B348-31E2FC03017F"}
 */
var frm_leg_sector = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7AF38EDF-19A8-4EE1-AC38-0CEAF5D913D4"}
 */
var frm_leg_categoria = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8EC8C33C-79BB-47A3-BECB-B643C35AE3B6"}
 */
var frm_leg_fecha = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA060A4B-1A16-4787-95C7-6F690D52B827"}
 */
var frm_leg_hora = '';

/**
 * @properties={typeid:24,uuid:"D6AAAB19-E49C-47FD-9590-CECA82E7BC0A"}
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
