/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F4141A7-7473-49F0-B265-C53D0FB1FCCC"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"483FCD1B-7ACF-4AE7-B1FF-8E8BB70D5701",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27BB8B73-E9B3-4739-AE84-18D227757B37"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A0316F5F-606C-4F40-8388-8AE15C4E9933"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC7049DD-F41F-4051-803A-292B68AAEC02"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"373C9D8C-EDE0-4AC5-A0E3-1DB8107334B3"}
 */
var frm_titulo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70029479-FC38-43B0-8EB2-BCFD0B71F6F1"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"840E3BBE-36CB-4647-BA48-2D0B89721110"}
 */
var frm_fecha_txt = '';

/**
 * @properties={typeid:24,uuid:"5B1CDA2C-ABAA-4EA0-A5EE-930913525D98"}
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
	html += '<td width=5% align="left"><p>Sr/a. </p></td>'
	html += '<td width=30% align="left"><p>' + frm_leg_nom + '</p></td>'
	html += '<td width=60% align="left"><p> -' + frm_leg + '- </p></td>'
	html += '</tr>'
	html += '</table>'		
	html += '</body></html>'
	frm_campoHTML = html	
}
