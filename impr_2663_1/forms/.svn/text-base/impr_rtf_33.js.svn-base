/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7728CBEF-AA88-46DE-82AD-8C7BC88A77CE"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"86130DD8-7A89-402F-BB44-2DE270A6048B",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A6B3C7F-A8FE-49EB-A9C0-2638B14F612D"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4091EE3E-1D2C-4730-AAD9-9A455FDD56AC"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD490D48-6926-4904-8035-F6097814E0CD"}
 */
var frm_campoHTML2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C943175-BE33-46DE-8D23-30324321CFC3"}
 */
var frm_leg = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F33BD09-7598-40BA-87DE-B6D8ED2ED1E9"}
 */
var frm_leg_nom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C4FFDD8F-030F-4992-A7DA-F54E6A3631AD"}
 */
var frm_leg_doc_tipo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4050FFC8-613A-45F7-BBD1-062A0A1F9BCA"}
 */
var frm_fecha_txt = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C54BAA6-DA25-48E6-A51A-B753F9EBE477"}
 */
var frm_leg_doc_nro = '';

/**
 * @properties={typeid:24,uuid:"73D2EF9A-52FE-4BF9-9C02-87E742B068BD"}
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
	
	frm_campoHTML2 = ''
	html = ''
	html += '<html><body>'
	html += '<p>Firma : ______________________________________________</p>'
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width=12% align="left"><p>Aclaración  :</p></td>'
	html += '<td width=88% align="left"><p>' + frm_leg_nom + '</p></td>'
	html += '</table>'
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'	
	html += '<td width=25% align="left"><p>Tipo y Nro. de documento : </p></td>'
	html += '<td width=10% align="left"><p>' + frm_leg_doc_tipo + '</p></td>'
	html += '<td width=65% align="left"><p>' + frm_leg_doc_nro + '</p></td>'
	html += '</tr>'
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'	
	html += '<td width=25% align="left"><p>Fecha : </p></td>'
	html += '<td width=75% align="left"><p>' + application.getServerTimeStamp().getDate() + '/' 
	        + (application.getServerTimeStamp().getMonth()+1) + '/' + + application.getServerTimeStamp().getFullYear() + '</p></td>'
	html += '</tr>'
		
	html += '</table>'		
	html += '</body></html>'
	frm_campoHTML2 = html	
}
