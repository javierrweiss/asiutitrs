/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2669F339-F947-4F4A-89B2-E0BEA46D851D",variableType:12}
 */
var sino1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9EF1D77-A469-4749-847F-FD89CA24C61C",variableType:12}
 */
var sino3 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12112EA9-F18B-4B83-B20E-4DFE497B02E2",variableType:12}
 */
var sino2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F429D72-5E89-4608-A183-77CBE1C3AC71",variableType:12}
 */
var html = '';

/**
 * @properties={typeid:24,uuid:"B03A5641-0076-4EF1-B015-DF2AAE76E7B8"}
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
	   html += '<html><body>'
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=33% align=left>' + ' Hemocultivo : '+vs_to_hojauti_cultivos.hemo +'</td>'
	   html += '<td width=33% align=left>' + ' Urocultivo : '+vs_to_hojauti_cultivos.uro +'</td>'
	   html += '<td width=33% align=left>' + ' Secreciones : '+vs_to_hojauti_cultivos.secreciones +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   html += '</body></html>'
	   globals.tempHTML = html
	   grabar_registro()
	   html = ''
	   html += '<html><body>'
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=33% align=left>' + ' Punta de cateter : '+vs_to_hojauti_cultivos.punta_cateter +'</td>'
	   html += '<td width=33% align=left>' + ' Partes Blandas : '+vs_to_hojauti_cultivos.partes_blandas +'</td>'
	   html += '<td width=33% align=left>' + '  '+'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   html += '</body></html>'
	   globals.tempHTML = html
	   grabar_registro()
	   html = ''
	   html += '<html><body>'
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=center>' + ' ' +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   html += '</body></html>'
	   globals.tempHTML = html
	   grabar_registro()
	   html = ''		   
	   globals.vTipoOtrosEstudios='otrosestud'   
	   if (otros_estudios_to_hojauti_otros_estudios.getSize()>0){
		   html += '<html><body>'
		   html += '<table width=100% cellpadding=1 cellspacing=0>'
		   html += '<tr>'
		   html += '<td width=100% align=center>' + ' Otros Estudios ' +'</td>'
		   html += '</tr>'
		   html += '</table>'	
		   html += '</body></html>'
		   globals.tempHTML = html
		   grabar_registro()
		   html = ''		

		   for(var i=1;i<=otros_estudios_to_hojauti_otros_estudios.getSize();i++){
			   otros_estudios_to_hojauti_otros_estudios.setSelectedIndex(i)
			   html += '<html><body>'
			   html += '<table width=100% cellpadding=1 cellspacing=0>'
			   html += '<tr>'
			   html += '<td width=100% align=left>' + ' Tipo de Estudio: '+otros_estudios_to_hojauti_otros_estudios.concepto+'  '+otros_estudios_to_hojauti_otros_estudios.valor +'</td>'
			   html += '</tr>'
			   html += '</table>'	
			   html += '</body></html>'
			   globals.tempHTML = html
			   grabar_registro()
			   html = ''

		   }
	   }
	   html += '<html><body>'
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=center>' + ' ' +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   html += '</body></html>'
	   globals.tempHTML = html
	   grabar_registro()
	   html = ''		   
		   
	   if(vs_to_hojauti_cultivos.labo==1){
		   sino1='Si'
	   }else{
		   sino1='No'
	   }
	   if(vs_to_hojauti_cultivos.rx==1){
		   sino2='Si'
	   }else{
		   sino2='No'
	   }
	   if(vs_to_hojauti_cultivos.tac==1){
		   sino3='Si'
	   }else{
		   sino3='No'
	   }
	   html += '<html><body>'
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=33% align=left>' + ' Laboratorio : '+ sino1 +'</td>'
	   html += '<td width=33% align=left>' + ' RX : '+ sino2 +'</td>'
	   html += '<td width=33% align=left>' + ' TAC : '+ sino3 +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   html += '</body></html>'
	   globals.tempHTML = html
	   grabar_registro()
	   html = ''
	   sino1=''
	   sino2=''
	   sino3=''
	   if(vs_to_hojauti_cultivos.rmn==1){
		   sino1='Si'
	   }else{
		   sino1='No'
	   }
	   if(vs_to_hojauti_cultivos.eco==1){
		   sino2='Si'
	   }else{
		   sino2='No'
	   }
	   if(vs_to_hojauti_cultivos.anat_patol==1){
		   sino3='Si'
	   }else{
		   sino3='No'
	   }
	   html += '<html><body>'
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=33% align=left>' + ' RMN : '+ sino1 +'</td>'
	   html += '<td width=33% align=left>' + ' ECO : '+ sino2 +'</td>'
	   html += '<td width=33% align=left>' + ' Anatomía Patológica : '+ sino3 +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   html += '</body></html>'
	   globals.tempHTML = html
	   grabar_registro()
	   html = ''
	   sino1=''
	   sino2=''
	   sino3=''
}

/**
 * @properties={typeid:24,uuid:"FE22D10B-2799-4DC8-B30F-ED00864254B4"}
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
 * @properties={typeid:24,uuid:"541A4839-8EAB-49DC-9353-3CE2552AEDE0"}
 * @AllowToRunInFind
 */
function onShow_tmp_prn(firstShow, event) {
	if(vs_to_hojauti_cultivos.getSize()>0){
		sub_buildReport()
		tmp_prn_to_tmp_prn.find()
		tmp_prn_to_tmp_prn.search()
	}
}
