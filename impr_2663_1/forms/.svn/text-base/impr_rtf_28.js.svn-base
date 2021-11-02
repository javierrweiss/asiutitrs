/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"25320D4A-327C-4601-8AA0-93D5DF06AED6"}
 */
var frm_prog = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"490277BD-4B24-4B7D-B3CA-A1AB034D4F1D",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B6052260-7C3A-44CD-95F8-89FF28A3E2C5"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FCDC690A-D6B4-4F6A-AE48-EC4FCB68AD65"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2E23D6E-DA8F-4047-9686-8D47C40BB136"}
 */
var frm_campoHTML2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F7EC70BF-7658-4C4F-81EA-2911B46C27CD"}
 */
var frm_leg = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4FAEDFB1-319B-43DA-B464-9BCDE2600645"}
 */
var frm_leg_nom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"13F60A2E-710A-44C3-976D-F2B7689421DC"}
 */
var frm_leg_doc_tipo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6F8F97DD-917B-41B4-A069-D2D043B2AE50"}
 */
var frm_fecha_txt = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70A0F2FE-EFB5-4DCD-AF36-41E72E96C9FB"}
 */
var frm_leg_doc_nro = '';

/**
 * @properties={typeid:24,uuid:"76F6817E-ADCD-456E-A775-C3728C8FDBD5"}
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
