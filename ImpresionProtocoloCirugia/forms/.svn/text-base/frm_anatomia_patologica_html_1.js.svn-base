/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EADA136A-136E-4936-96D1-9930058D6185",variableType:4}
 */
var tipo_nomencla = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F4EE41C-5B4F-4E02-9360-53A2CC463EBA",variableType:4}
 */
var codigo_nomencla = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0953B3B7-9B6C-4A6E-8686-0509C09E8406",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"DC59766B-2A15-4977-AB17-548EF570FFF8"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	//plugins.dialogs.showInfoDialog("vs2_to_tbc_anatpaca.getSize(1)",vs2_to_tbc_anatpaca.getSize())
	globals.lineas_impre=0
	if(vs2_to_tbc_anatpaca.getSize()>0){
	globals.Hiscli_edit=globals.vHiscli.toString()
	var largo = globals.Hiscli_edit.length
	var fecha_nac=0
	var cirujano = 0
	if(vs2_to_tbc_anatpaca.apca_tipadmi==0){
		globals.Hiscli_edit=globals.Hiscli_edit.substr(0,largo-1)+'/'+globals.Hiscli_edit.substr(largo-1,1)
		fecha_nac = vhiscli_unico2_to_tbc_admision_scroll.adm_fecnac
		cirujano=vs_to_tbc_cirugint2.cirilegciru
	}else{
		fecha_nac = impresor_vhiscli_to_tbc_hist_cab.histcab_fecnac
		cirujano=vs_to_tbc_guardia.guar_medico
	}
	var html = ''
	var i;
	//var record = ''
	
	globals.Edad = scopes.globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad	
    
	var fs2 = databaseManager.getFoundSet("maestros","tbc_nomencla_anatopat")
	
	var fs3 = databaseManager.getFoundSet("maestros","tbc_medicos_personal")
	
	
	fs3.find()
	fs3['medpercod']=cirujano
	fs3.search(true)
	
	if(fs3.getSize()>0){
		fs3.setSelectedIndex(1)	
		globals.vNombreCirujano='Dr. '+ fs3['medperapeynom']
		globals.vMatriculaCirujano= 'Matricula nro. '+fs3['medpermatricula']
	}
	
	
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
	
	for(var j=1;j<=vs2_to_tbc_anatpaca.getSize();j++){
		vs2_to_tbc_anatpaca.setSelectedIndex(j)
		for(i=1;i<=vs2_to_tbc_anatpaca.tbc_anatpaca2_to_tbc_anatpade.getSize();i++){
			vs2_to_tbc_anatpaca.tbc_anatpaca2_to_tbc_anatpade.setSelectedIndex(i)
			fs2.find()
			fs2['nome_tipo'] = 1
			fs2['nome_codigo'] = vs2_to_tbc_anatpaca.tbc_anatpaca2_to_tbc_anatpade.apde_codnom
			fs2.search()
			html = ''
			html += '<table width=100% border="none" cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + vs2_to_tbc_anatpaca.tbc_anatpaca2_to_tbc_anatpade.apde_codnom +'</td>'
			html += '<td width=50%>' + fs2['nome_descr'] +'</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			if(vs2_to_tbc_anatpaca.tbc_anatpaca2_to_tbc_anatpade.apde_observa==1){
				globals.vNroSolicitud=vs2_to_tbc_anatpaca.tbc_anatpaca2_to_tbc_anatpade.apde_nrosolic;
				codigo_nomencla=vs2_to_tbc_anatpaca.tbc_anatpaca2_to_tbc_anatpade.apde_codnom;
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
		if(vs2_to_tbc_anatpaca.apca_obsgral==1){
				globals.vNroSolicitud=vs2_to_tbc_anatpaca.apca_nrosolic;
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
 * @properties={typeid:24,uuid:"B165AD54-40D3-4C52-9794-10B7DC006399"}
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
 * @properties={typeid:24,uuid:"F1E6A6E8-34C2-4FDE-971A-A76727F5C05F"}
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
