/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34ABAB6D-C4AA-401B-A357-AAEFA225AA54"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B4970D71-F4EA-4BD4-AAFD-72A7F1E09146",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB9453CA-9E88-48E0-8010-2B596332D93E"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3FD12DA1-2376-42AD-B957-983766FBE13D"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10D79571-04A5-4773-B0B5-EB34FFF18FFD"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E2B402D-9080-4C31-A43C-8B50A3A00F3D"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D507B196-94DF-41B0-B552-49934B9B2EC3"}
 */
var frm_fecha_txt = '';

/**
 * @properties={typeid:24,uuid:"5922D9DD-092A-403A-8FAE-4592A59F7E68"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	var mes = application.getServerTimeStamp().getMonth()
	
	frm_fecha_txt = 'Buenos Aires, ' + application.getServerTimeStamp().getDate() + ' de ' + globals.Traer_nom_mes_corto(mes)
	              + ' del ' + application.getServerTimeStamp().getFullYear()
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
	html += '</body></html>'
	frm_campoHTML = html	
}
