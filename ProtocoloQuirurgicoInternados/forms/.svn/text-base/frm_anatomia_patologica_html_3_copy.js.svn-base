/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"138A1F28-76F3-44D0-A7CF-B3C766E3EEFF",variableType:4}
 */
var codigo_nomencla = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"99D0F85C-EDFD-4BA2-9321-FE0D37CA1AC8",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B3EDB5B-A75A-4812-BD40-CB02D2388AED",variableType:4}
 */
var tipo_nomencla = 0;

/**
 * @properties={typeid:24,uuid:"FACEC410-FAF7-449E-A2D4-0926D2606A25"}
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
 * @properties={typeid:24,uuid:"7BA4573D-831B-416B-BC5C-F511A4A94146"}
 * @AllowToRunInFind
 */
function sub_buildReport_2() {
	//plugins.dialogs.showInfoDialog("vs2_to_tbc_anatpaca.getSize(2)",vs2_to_tbc_anatpaca.getSize())
	globals.lineas_impre=0
	if(vs2_to_tbc_anatpaca.getSize()>0){
	globals.Hiscli_edit=globals.vHiscli.toString()
	var largo = globals.Hiscli_edit.length
	globals.Hiscli_edit=globals.Hiscli_edit.substr(0,largo-1)+'/'+globals.Hiscli_edit.substr(largo-1,1)
	var fecha_nac = vhiscli_unico2_to_tbc_admision_scroll.adm_fecnac
	var html = ''
	var i;
	globals.Edad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad	
    
	//var fs2 = databaseManager.getFoundSet("maestros","tbc_nomencla_anatopat")
	globals.Nprotocolo_bis=globals.vNroProtocolo
	globals.vlinea_aux = 0;
	//plugins.dialogs.showInfoDialog("globals.vNroProtocolo",globals.vNroProtocolo)
	var parametros = new Array()
	parametros[0]='frm_anatomia_patologica_prn_2_copy'
	parametros[1]=globals.vHiscli
	parametros[2]=globals.vNroProtocolo
	parametros[3]=globals.vLega
	parametros[4]=globals.vFechaActual
	parametros[5]=globals.vHoraCarga
	
	html = ''
	html += '<html><body>'
	html += '<table width=50% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%>' + 'DIAGNOSTICO PRE-OPERATORIO : ' +'</td>'
	html += '</tr>'
	html += '</table>'	
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''		
	globals.grupo_texto_bis=1;
	globals.grupo_texto=1;
	var stexto_con_enter = " ";
	var sTextoBuscado = " ";
	sTextoBuscado='\n';
	var contador_enter = 0;
	var largo_texto = 0
	if(vs1_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs1_to_tbl_protoc_txt.texto.length
	}
	var cantidad_lineas = 0
	var div = 0
	var rem = 0
	if(largo_texto <= 130){
		if(largo_texto>0){
			cantidad_lineas = 1
		}else{
			cantidad_lineas = 0
		}
	}else{
		div = parseInt(largo_texto/130)
		rem = largo_texto % 130
		if (rem > 0){
			rem = 1
		}
		cantidad_lineas = div + rem
	}
	var desde_sub=0
	if(cantidad_lineas > 0){
		for ( i = 1 ; i <=cantidad_lineas ; i++ )
		{
			desde_sub = 130 * (i - 1)
			html=''
			globals.tempHTML='';
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=100%>' + vs1_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
			html += '</tr>'
			html += '</table>'
			globals.lineas_impre++
			contador_enter = 0;
			stexto_con_enter = vs1_to_tbl_protoc_txt.texto.substr(desde_sub,130)
			while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
				stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
		      contador_enter++; 
		    }
		    globals.lineas_impre=globals.lineas_impre+contador_enter
			globals.tempHTML=html;
			end_of_page()
		}
	}
	html = ''
	html += '<p></p>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''		
		
	html += '<table width=50% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%>' + 'DIAGNOSTICO POST-OPERATORIO : ' +'</td>'
	html += '</tr>'
	html += '</table>'	
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''		
	
	globals.grupo_texto_bis=2;
	globals.grupo_texto=2;
	largo_texto=0
	if(vs1_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs1_to_tbl_protoc_txt.texto.length
	}
	cantidad_lineas = 0
	div = 0
	rem = 0
	if(largo_texto <= 130){
		if(largo_texto>0){
			cantidad_lineas = 1
		}else{
			cantidad_lineas = 0
		}
	}else{
		div = parseInt(largo_texto/130)
		rem = largo_texto % 130
		if (rem > 0){
			rem = 1
		}
		cantidad_lineas = div + rem
	}
	desde_sub=0
	if(cantidad_lineas > 0){
		for ( i = 1 ; i <=cantidad_lineas ; i++ ){
			desde_sub = 130 * (i - 1)
			html=''
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=100%>' +  vs1_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
			html += '</tr>'
			html += '</table>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
		}
	}
	
	html += '<p></p>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''		
		
	html += '<table width=60% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=60%>' + 'OPERACION EFECTUADA Y DESCRIPCION : ' +'</td>'
	html += '</tr>'
	html += '</table>'	
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''		
	
	stexto_con_enter = " ";
	sTextoBuscado = " ";
	sTextoBuscado='\n';
	contador_enter = 0;
	globals.grupo_texto_bis=3;
	globals.grupo_texto=3;
	largo_texto=0
	if(vs1_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs1_to_tbl_protoc_txt.texto.length
	}
	cantidad_lineas = 0
	div = 0
	rem = 0
	if(largo_texto <= 130){
		if(largo_texto>0){
			cantidad_lineas = 1
		}else{
			cantidad_lineas = 0
		}
	}else{
		div = parseInt(largo_texto/130)
		rem = largo_texto % 130
		if (rem > 0){
			rem = 1
		}
		cantidad_lineas = div + rem
	}
	
	desde_sub=0
	if(cantidad_lineas > 0){
		var sTexto = ''
		
			sTexto += vs1_to_tbl_protoc_txt.texto
			
		contador_enter = 0;
		stexto_con_enter = sTexto
		while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
			stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
	      contador_enter++; 
		}
		var kenter = sTexto.indexOf("\n");
		while (kenter > 0) {
			sTexto = sTexto.replace("\n", "<br>");
			kenter = sTexto.indexOf("\n");
		}
		
		html=''
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=95%>' + sTexto + '</td>'
		html += '<td width=5%>' + ' ' + '</td>'
		html += '</tr>'
		html += '</table>'
		
		globals.lineas_impre++
		
		
	
	globals.lineas_impre=globals.lineas_impre+contador_enter
	globals.tempHTML=html;
	end_of_page()
		
	}
	
	html =''
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''		
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=35%>' + '      '+'</td>'	
	html += '<td width=30%>' + '*** PARA EL SERVICIO ***' +'</td>'
	html += '<td width=35%>' + '      '+'</td>'
	html += '</tr>'
	html += '</table>'	
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''		
	html += '<hr width=100%>'
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
 * @properties={typeid:24,uuid:"7F716B5B-B073-4F7A-A3B8-BDB1B53BFE79"}
 */
function end_of_page() {
	if(globals.lineas_impre<39){
		globals.anatopatHTML3+=globals.tempHTML
	}else{
		if(globals.lineas_impre>38){
			if(globals.anatopatHTML4==''){
				globals.anatopatHTML3+= '</body></html>'
				globals.anatopatHTML4+= '<html><body>'+globals.tempHTML
			}else{
				globals.anatopatHTML4+=globals.tempHTML
			}
		}
	}
}
