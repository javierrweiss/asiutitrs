/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53E61832-4278-4885-A4B2-D8B60B7CD814",variableType:4}
 */
var tipo_nomencla = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8005ACD9-1A55-4040-B1D7-82D1C0D32E1F",variableType:4}
 */
var codigo_nomencla = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"756827D0-FA8F-4A80-9C1A-23DB6B976B7D",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"34AC79CB-1B0F-49C8-A173-4F83B55FA25B"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	//plugins.dialogs.showInfoDialog("vs2_to_tbc_anatpaca.getSize(1)",vs2_to_tbc_anatpaca.getSize())
	globals.lineas_impre=0
	if(vs_to_tbc_anatpaca.getSize()>0){
	globals.Hiscli_edit=globals.vHiscli.toString()
	var largo = globals.Hiscli_edit.length
	globals.Hiscli_edit=globals.Hiscli_edit.substr(0,largo-1)+'/'+globals.Hiscli_edit.substr(largo-1,1)
	var fecha_nac = vhiscli_unico_to_tbc_admision_scroll.adm_fecnac
	var html = ''
	var i;
	//var record = ''
	globals.Edad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad	
    
	var fs2 = databaseManager.getFoundSet("maestros","tbc_nomencla_anatopat")
	
	/*
	var fs3 = databaseManager.getFoundSet("maestros","tbc_medicos_personal")
	
	fs3.find()
	//fs3['medpercod']=vs_to_tbc_cirugint.cirilegciru
	fs3['medpercod']=globals.vciri_legciru
	fs3.search(true)
	
	if(fs3.getSize()>0){
		fs3.setSelectedIndex(1)	
		globals.vNombreCirujano='Dr. '+ fs3['medperapeynom']
		globals.vMatriculaCirujano= 'Matricula nro. '+fs3['medpermatricula']
	}
	*/
	globals.vNombreCirujano=''
	globals.vMatriculaCirujano=''
	globals.vNombreCirujano='Dr. ' + vciri_legciru_to_tbc_medicos_personal.medperapeynom
	globals.vMatriculaCirujano= 'Matricula nro. '+ vciri_legciru_to_tbc_medicos_personal.medpermatricula
	
	globals.vlinea_aux = 0;
	
	
	
	html = ''
    html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%>' + 'Detalle: ' + '</td>'
	html += '<td width=50%>' + '                   ' + '</td>'
	html += '</tr>'
	html += '</table>'	
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	
	for(var j=1;j<=vs_to_tbc_anatpaca.getSize();j++){
		vs_to_tbc_anatpaca.setSelectedIndex(j)
		for(i=1;i<=vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.getSize();i++){
			vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.setSelectedIndex(i)
			fs2.find()
			fs2['nome_tipo'] = 1
			fs2['nome_codigo'] = vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_codnom
			fs2.search()
			html = ''
			html += '<table width=100% border="none" cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_codnom +'</td>'
			html += '<td width=50%>' + fs2['nome_descr'] +'</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			if(vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_observa==1){
				globals.vNroSolicitud=vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_nrosolic;
				codigo_nomencla=vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_codnom;
				tipo_nomencla=1
				lleno_dataset_texto_anatpaob()
				if(globals.filas_texto_bis > 0){
					html = ''
				    html += '<table width=100% cellpadding=1 cellspacing=0>'
					html += '<tr>'
					html += '<td width=50%>' + 'Observaciones: ' + '</td>'
					html += '<td width=50%>' + '                   ' + '</td>'
					html += '</tr>'
					html += '</table>'	
					globals.lineas_impre++
					globals.tempHTML = html
					end_of_page()
					html = ''

					for (var x = 1 ; x <=globals.filas_texto_bis ; x++ )
					{
						html = ''
						html += '<table width=100% cellpadding=1 cellspacing=0>'
						html += '<tr>'
						html += '<td width=100%>' + globals.dataset_lineas_texto_bis.getValue(x,1) + '</td>'
						html += '</tr>'
						html += '</table>'	
						globals.lineas_impre++
						globals.tempHTML = html
						end_of_page()
						html = ''
					}
				}
				html = ''
				html += '<p></p>'
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''
			}
		}
		if(vs_to_tbc_anatpaca.apca_obsgral==1){
				globals.vNroSolicitud=vs_to_tbc_anatpaca.apca_nrosolic;
				codigo_nomencla=0
				tipo_nomencla=1
				lleno_dataset_texto_anatpaob()
				if(globals.filas_texto_bis > 0){
					html = ''
				    html += '<table width=100% cellpadding=1 cellspacing=0>'
					html += '<tr>'
					html += '<td width=50%>' + 'Observaciones generales: ' + '</td>'
					html += '<td width=50%>' + '                   ' + '</td>'
					html += '</tr>'
					html += '</table>'	
					globals.lineas_impre++
					globals.tempHTML = html
					end_of_page()
					html = ''

					for (var k = 1 ; k <=globals.filas_texto_bis ; k++ )
					{
						html = ''
						html += '<table width=100% cellpadding=1 cellspacing=0>'
						html += '<tr>'
						html += '<td width=100%>' + globals.dataset_lineas_texto_bis.getValue(k,1) + '</td>'
						html += '</tr>'
						html += '</table>'	
						globals.lineas_impre++
						globals.tempHTML = html
						end_of_page()
						html = ''
					}
				}

		}
		
		
		
		
	}
		html = ''
		html += '</body></html>'
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
		html = ''
		//plugins.dialogs.showInfoDialog("anatopatHTML1",globals.anatopatHTML1)
		return globals.vprocesa=true
		
	}else{
		return globals.vprocesa=false
	}
	
}

/**
 * @properties={typeid:24,uuid:"A519F5C0-49BD-4AAB-9859-070F705164B7"}
 */
function lleno_dataset_texto_anatpaob() {
	var query = "select apoblinea from tbc_anatpaob where apobnrosolic = ? and apobtiponome = ? and apobcodnome = ? ";
	var args = new Array();
	args[0]=globals.vNroSolicitud;
	args[1]=tipo_nomencla;
	args[2]=codigo_nomencla;
    globals.dataset_lineas_texto_bis = databaseManager.getDataSetByQuery("asistencial", query, args, 100);
    globals.filas_texto_bis = globals.dataset_lineas_texto_bis.getMaxRowIndex()
}

/**
 * @properties={typeid:24,uuid:"2A5BCF0E-9D69-4008-913E-9E7F6F34B7F8"}
 */
function end_of_page() {
	if(globals.lineas_impre<31){
		globals.anatopatHTML1+=globals.tempHTML
	}else{
		if(globals.lineas_impre>30){
			if(globals.anatopatHTML2==''){
				globals.anatopatHTML1+= '</body></html>'
				globals.anatopatHTML2+= '<html><body>'+globals.tempHTML
			}else{
				globals.anatopatHTML2+=globals.tempHTML
			}
		}
	}
}
