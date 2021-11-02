/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BAF2B435-78C3-4C6F-896D-9F17D54D9057",variableType:4}
 */
var tipo_nomencla = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4BAB41F3-5200-4A33-BAE1-D6312C2BFC07",variableType:4}
 */
var codigo_nomencla = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"672A7510-1235-49E8-A1FB-AE99BFF59C82",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"5A4F7253-6EA9-44DF-A81F-04B1EA0CD26C"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	
	globals.lineas_impre=0
	
	if(vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.getSize()>0){
		globals.Hiscli_edit=globals.vHiscli.toString()
		var largo = globals.Hiscli_edit.length
		globals.Hiscli_edit=globals.Hiscli_edit.substr(0,largo-1)+'/'+globals.Hiscli_edit.substr(largo-1,1)
		var fecha_nac = vhiscli_unico2_to_tbc_admision_scroll.adm_fecnac
		var html = ''
		var i;
		globals.Edad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad	
		var str=globals.protocolo
		
		str=str.toString()
		str=str.split('|')
		
	    var args = new Array();
	    args[0]=globals.vHisclin;
	    args[1]=utils.stringToNumber(str[0])
		args[2]=utils.stringToNumber(str[1])
		args[3]=utils.stringToNumber(str[2])
		globals.Nprotocolo=args[1];
	    
		var fs3 = databaseManager.getFoundSet("maestros","tbc_medicos_personal")
	
		fs3.find()
		fs3['medpercod']=vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirlegajomed
		fs3.search(true)
	
		if(fs3.getSize()>0){
			fs3.setSelectedIndex(1)	
			globals.vNombreCirujano='Dr. '+ fs3['medperapeynom']
			globals.vMatriculaCirujano= 'Matricula nro. '+fs3['medpermatricula']
		}
		
		globals.vlinea_aux = 0;
		
		var monitoreo_sino=''
		var consentimiento_sino=''
		var antitetanica_sino=''
		var dadores_sino=''
	
		vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.setSelectedIndex(1)
		html = ''
		html += '<html><body>'
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
				
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		html = ''
		html += '<table width=100% border="none" cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=25%>' + 'Hematocritos: '+'</td>'
		html += '<td width=25%>' + vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirhematocrito +'</td>'
		html += '<td width=25%>' + 'Recuento de Blancos: '+'</td>'
		html += '<td width=25%>' + vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirgloblancos +'</td>'
		html += '</tr>'
		html += '</table>'	
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
	
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		html = ''
		html += '<table width=100% border="none" cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=25%>' + 'Glucemia: '+'</td>'
		html += '<td width=25%>' + vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirglucemia +'</td>'
		html += '<td width=25%>' + 'Urea: '+'</td>'
		html += '<td width=25%>' + vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirurea +'</td>'
		html += '</tr>'
		html += '</table>'	
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
			
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		html = ''
		html += '<table width=100% border="none" cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=25%>' + 'Coagulación y Sangría: '+'</td>'
		html += '<td width=25%>' + vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcircoagusangria +'</td>'
		html += '<td width=25%>' + 'Protrombina: '+'</td>'
		html += '<td width=25%>' + vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirprotrombina +'</td>'
		html += '</tr>'
		html += '</table>'	
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		
		if(vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirmonitoreo.charAt(0)=='S'||vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirmonitoreo.charAt(0)=='1'){
			monitoreo_sino='Si'
		}else{
			monitoreo_sino='No'
		}
		if(vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirconsen.charAt(0)=='S'||vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirconsen.charAt(0)=='1'){
			consentimiento_sino='Si'
		}else{
			consentimiento_sino='No'
		}
		
		html = ''
		html += '<table width=100% border="none" cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=25%>' + 'MONITOREO: '+'</td>'
		html += '<td width=25%>' + monitoreo_sino +'</td>'
		html += '<td width=25%>' + 'CONSENTIMIENTO: '+'</td>'
		html += '<td width=25%>' + consentimiento_sino +'</td>'
		html += '</tr>'
		html += '</table>'	
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		if(vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirantite.charAt(0)=='S'||vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirantite.charAt(0)=='1'){
			antitetanica_sino='Si'
		}else{
			antitetanica_sino='No'
		}
		if(vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirdador.charAt(0)=='S'||vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.hcirantite.charAt(0)=='1'){
			dadores_sino='Si'
		}else{
			dadores_sino='No'
		}
		html = ''
		html += '<table width=100% border="none" cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=25%>' + 'ANTITETANICA: '+'</td>'
		html += '<td width=25%>' + antitetanica_sino +'</td>'
		html += '<td width=25%>' + 'Dadores de Sangre: '+'</td>'
		html += '<td width=25%>' + dadores_sino +'</td>'
		html += '</tr>'
		html += '</table>'	
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		

		globals.grupo_texto=1;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'Antecedentes de Alerta: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'Antecedentes de Alerta: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
		}
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		
		globals.grupo_texto=2;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'Otros Estudios: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'Otros Estudios: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''

		}
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		globals.grupo_texto=3;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'Riesgo Quirúrgico: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'Riesgo Quirúrgico: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
		}
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		

		globals.grupo_texto=4;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'Rayos X de Tórax: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'Rayos X de Tórax: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
		}
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		globals.grupo_texto=5;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'Ecografía: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'Ecografía: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
		}
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		globals.grupo_texto=6;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'T.A.C./R.M.N.: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'T.A.C./R.M.N.: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
		}
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		

		globals.grupo_texto=7;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'Condiciones Quirúrgicas Negativas: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'Condiciones Quirúrgicas Negativas: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
		}
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		globals.grupo_texto=8;
		globals.lleno_dataset_txt_hcicir()
		
		if(globals.filas_texto > 0){
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=50%>' + 'Comentarios: ' + '</td>'
			html += '<td width=50%>' + '                   ' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
			for ( i = 1 ; i <=globals.filas_texto ; i++ )
			{
				html += '<table width=100% border=0 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
				globals.tempHTML = html
				end_of_page()
				html = ''		
				
			}
		}else{
			html = ''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=25%>' + 'Comentarios: ' + '</td>'
			html += '<td width=75%>' + '------------------------------------------------------------------------------' + '</td>'
			html += '</tr>'
			html += '</table>'	
			globals.lineas_impre++
			globals.tempHTML = html
			end_of_page()
			html = ''
		}
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
		html='';	
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page();
		
				
	html=''
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=55%>' + ' ' +'</td>'	
	html += '<td width=40% align=center>' + '________________________________________' +'</td>'
	html += '<td width=5%>' + ' ' +'</td>'
	html += '</tr>'
	html += '</table>'	
	
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=55%>' + ' ' +'</td>'	
	html += '<td width=40% align=center>' + globals.vNombreCirujano +'</td>'
	html += '<td width=5%>' + ' ' +'</td>'
	html += '</tr>'
	html += '</table>'	
	
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=55%>' + ' ' +'</td>'	
	html += '<td width=40% align=center>' + globals.vMatriculaCirujano +'</td>'
	html += '<td width=5%>' + ' ' +'</td>'
	html += '</tr>'
	html += '</table>'	
	//html += '</body></html>'
	globals.lineas_impre++
	globals.lineas_impre++
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	globals.campoHTML3 = html
	html = ''			
	
		html = ''
		html += '</body></html>'
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
		html = ''
		
		return globals.vprocesa=true
		
	}else{
		return globals.vprocesa=false
	}
	
}

/**
 * @properties={typeid:24,uuid:"524CB1D9-CB1C-46D4-9965-FD484ABBF14F"}
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
 * @properties={typeid:24,uuid:"68B18B0B-54CC-46E8-AB78-46294C46C727"}
 */
function end_of_page() {
	if(globals.lineas_impre<41){
		globals.hcicirHTML1+=globals.tempHTML
	}else{
		if(globals.lineas_impre>40&&globals.lineas_impre<81){
			if(globals.hcicirHTML2==''){
				globals.hcicirHTML1+= '</body></html>'
				globals.hcicirHTML2+= '<html><body>'+globals.tempHTML
			}else{
				globals.hcicirHTML2+=globals.tempHTML
			}
		}else{
			if(globals.lineas_impre>80&&globals.lineas_impre<121){
				if(globals.hcicirHTML3==''){
					globals.hcicirHTML2+= '</body></html>'
					globals.hcicirHTML3+= '<html><body>'+globals.tempHTML
				}else{
					globals.hcicirHTML3+=globals.tempHTML
				}
			}else{
				if(globals.lineas_impre>120&&globals.lineas_impre<161){
					if(globals.hcicirHTML4==''){
						globals.hcicirHTML3+= '</body></html>'
						globals.hcicirHTML4+= '<html><body>'+globals.tempHTML
					}else{
						globals.hcicirHTML4+=globals.tempHTML
					}
				}
			}
		}
	}
}
