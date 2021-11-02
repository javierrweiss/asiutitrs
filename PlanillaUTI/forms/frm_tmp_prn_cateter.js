/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B10018EA-ABDB-4921-8DD9-426D9A46C3AE"}
 */
var html = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1C1C8106-47AE-4AAE-8DCB-93A14A2C585E"}
 */
var sino1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"976B5AC4-53DC-443D-AA6D-0AAE79685B24"}
 */
var sino2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F94D5749-42E9-4624-8C37-802E3F60E58C"}
 */
var sino3 = '';

/**
 * @properties={typeid:24,uuid:"25475821-D888-415A-9873-845738912383"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	if(tmp_prn_cateter_to_tmp_prn_cateter.getSize()>0){
		var hc = globals.vHiscli
		var t_ope = globals.vTipoOperador
		var n_ope = globals.vLegajo
		
		var done = plugins.rawSQL.executeSQL("enfermeria", "tmp_prn_cateter", "delete from tmp_prn_cateter where hiscli = ? and tipo_opera = ? and nro_operador = ?", [hc,t_ope,n_ope])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "tmp_prn_cateter")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
	}
	   globals.renglon10=0
	   //vhiscli_to_hojauti_cateteres.find()
	   //vhiscli_to_hojauti_cateteres.search()
	   if (vhiscli_to_hojauti_cateteres.getSize()>0){
		   html += '<html><body>'
		   html += '<table width=100% cellpadding=1 cellspacing=0>'
		   html += '<tr>'
		   html += '<td width=40% align=left>' + 'Tipo de Cateter/Sonda'  +'</td>'
		   html += '<td width=30% align=left>' + 'Valor' +'</td>'
		   html += '<td width=20% align=left>' + 'Fecha' +'</td>'
		   html += '<td width=10% align=left>' + 'Hora' +'</td>'
		   html += '</tr>'
		   html += '</table>'	
		   html += '</body></html>'
		   globals.tempHTML = html
		   grabar_registro()
		   grabar_linea()
		   html = ''		   
           
		   for(var i=1;i<=vhiscli_to_hojauti_cateteres.getSize();i++){
			   vhiscli_to_hojauti_cateteres.setSelectedIndex(i)
		   html += '<html><body>'
		   html += '<table width=100% cellpadding=1 cellspacing=0>'
		   html += '<tr>'
		   html += '<td width=25% align=left>' + vhiscli_to_hojauti_cateteres.tipo1  +'</td>'
		   html += '<td width=25% align=left>' + vhiscli_to_hojauti_cateteres.valores +'</td>'
		   html += '<td width=20% align=left>' + vhiscli_to_hojauti_cateteres.fecha_edit +'</td>'
		   html += '<td width=10% align=center>' + vhiscli_to_hojauti_cateteres.hora_edit +'</td>'
		   html += '<td width=20% align=center>' + vhiscli_to_hojauti_cateteres.cateter_texto +'</td>'
		   html += '</tr>'
		   html += '</table>'	
		   html += '</body></html>'
		   globals.tempHTML = html
		   grabar_registro()
		   html = ''		   

		   }
	   }
	  
}

/**
 * @properties={typeid:24,uuid:"1BBEE200-848E-419E-AE29-8888E29B4594"}
 */
function grabar_registro() {
	++globals.renglon10
	tmp_prn_cateter_to_tmp_prn_cateter.newRecord()
	tmp_prn_cateter_to_tmp_prn_cateter.hiscli = globals.vHiscli
	tmp_prn_cateter_to_tmp_prn_cateter.tipo_opera=globals.vTipoOperador
	tmp_prn_cateter_to_tmp_prn_cateter.nro_operador=globals.vLegajo
	tmp_prn_cateter_to_tmp_prn_cateter.fecha=globals.vFecha
	tmp_prn_cateter_to_tmp_prn_cateter.renglon=globals.renglon10
	tmp_prn_cateter_to_tmp_prn_cateter.tmp_aux = globals.tempHTML
	databaseManager.saveData(tmp_prn_cateter_to_tmp_prn_cateter)
	globals.tempHTML = '';
	//application.output(globals.tempHTML)
}

/**
 * @properties={typeid:24,uuid:"016E69B2-DDEE-4273-B515-C7B7AD83FECA"}
 */
function grabar_linea() {
	html = '';
	html += '<html><body>'	
	html += '<hr width=100%>'
	html += '</body></html>'
	globals.tempHTML = html
	grabar_registro()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB4C5A74-4E09-456F-B688-283E07B5E72D"}
 * @AllowToRunInFind
 */
function onShow_tmp_prn(firstShow, event) {
	sub_buildReport()
	tmp_prn_cateter_to_tmp_prn_cateter.find()
	tmp_prn_cateter_to_tmp_prn_cateter.search()
}
