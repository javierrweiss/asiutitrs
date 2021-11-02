/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"958DC197-3638-41A5-8373-F4CD2E07A266"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"86FF3DB4-F175-460D-92BC-F02F527D032B",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B0B4888-FD87-4218-A8ED-6F2F98E8AE18"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"30E1295A-CF4C-466F-9836-5922DECC7E99"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F56DD074-0D72-40FA-B794-79019EF10113"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4F978E1-329A-40EA-B10E-4569D1CAB347"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"53290F5E-EE4F-4EA0-A6FA-7D54659FA171"}
 */
var frm_fecha_txt = '';

/**
 * @properties={typeid:24,uuid:"36259F83-5823-4A67-B1D3-F3FC5D934CCA"}
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
