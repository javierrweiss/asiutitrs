/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CEFC60D9-697E-403A-B30C-8AA096451EB9"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C0E33ADE-F191-4A83-B487-A843E259DA07",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B6B5594-5188-4AD0-910E-BF33C5D921E5"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BB8FE8F5-83FD-4007-A4DD-195A07D465D7"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"670F05D4-073D-46C4-B2BD-B7EA58251EFF"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8CD21F5-D570-4068-9B4A-BC9AA04C354C"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1500BA13-72EE-4587-9945-4B17216BEB32"}
 */
var frm_fecha_txt = '';

/**
 * @properties={typeid:24,uuid:"21D2BE13-36E5-49A6-AF9C-BD654E65A636"}
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
