/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1E227C5-491E-41D2-B52E-77339CDB4B4C",variableType:12}
 */
var html = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"105088FA-CB4E-4050-9DCF-240B16433227",variableType:12}
 */
var sino1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9786F56E-DFC2-4C3A-B46C-3FE8C9FA632D",variableType:12}
 */
var sino2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"703C9C9F-950F-44A1-8A5B-38636C7F2100",variableType:12}
 */
var sino3 = '';

/**
 * @properties={typeid:24,uuid:"C7495038-59C0-44D9-817E-26FE0809117A"}
 */
function sub_buildReport() {
	if(tmp_prn_to_tmp_prn.getSize()>0){
		var hc = globals.vHiscli
		var t_ope = globals.vTipoOperador
		var n_ope = globals.vLegajo
		
		var done = plugins.rawSQL.executeSQL("enfermeria", "tmp_prn", "delete from tmp_prn where hiscli = ? and tipo_opera = ? and nro_operador = ?", [hc,t_ope,n_ope])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "tmp_prn")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
	}
	   globals.renglon10=0
	   if (vhiscli_to_hojauti_items.getSize()>0){
		  for(var i=1;i<=vhiscli_to_hojauti_items.getSize();i++){
			  vhiscli_to_hojauti_items.setSelectedIndex(i)
			   html += '<html><body>'
			   html += '<table width=100% cellpadding=1 cellspacing=0>'
			   html += '<tr>'
			   html += '<td width=100% align=left>' +i+' | '+ vhiscli_to_hojauti_items.hiscli+' | '+ vhiscli_to_hojauti_items.fecha+' | '+ vhiscli_to_hojauti_items.hora+' | '+ vhiscli_to_hojauti_items.tipo+' | '+ vhiscli_to_hojauti_items.renglon+' | '+ vhiscli_to_hojauti_items.concepto+' | '+vhiscli_to_hojauti_items.cantidad +'</td>'
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
 * @properties={typeid:24,uuid:"511477DD-F8F7-4CCB-A77B-659D55557167"}
 */
function grabar_registro() {
	++globals.renglon10
	tmp_prn_to_tmp_prn.newRecord()
	tmp_prn_to_tmp_prn.hiscli = globals.vHiscli
	tmp_prn_to_tmp_prn.tipo_opera=globals.vTipoOperador
	tmp_prn_to_tmp_prn.nro_operador=globals.vLegajo
	tmp_prn_to_tmp_prn.fecha=globals.vFecha
	tmp_prn_to_tmp_prn.renglon=globals.renglon10
	tmp_prn_to_tmp_prn.tmp_aux = globals.tempHTML
	databaseManager.saveData(tmp_prn_to_tmp_prn)
	globals.tempHTML = '';

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"718F3A0D-594B-4D6A-817B-8AF3C453BB5B"}
 * @AllowToRunInFind
 */
function onShow_tmp_prn(firstShow, event) {
	sub_buildReport()
	tmp_prn_to_tmp_prn.find()
	tmp_prn_to_tmp_prn.search()
}
