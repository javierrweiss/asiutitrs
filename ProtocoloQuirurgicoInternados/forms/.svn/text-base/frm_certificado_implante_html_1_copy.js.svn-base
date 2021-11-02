/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"62C4A43E-B00C-452A-8576-755A655C0963",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"4C036B05-EC2D-4734-9978-D2F25EE9FE82"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	//plugins.dialogs.showInfoDialog("protocolo",globals.protocolo)
	globals.lineas_impre=0
	if(vhiscli_to_tbc_protesis.getSize()>0){
	globals.Hiscli_edit=globals.vHiscli.toString()
	var largo = globals.Hiscli_edit.length
	globals.Hiscli_edit=globals.Hiscli_edit.substr(0,largo-1)+'/'+globals.Hiscli_edit.substr(largo-1,1)
	
	var fecha_nac = vhiscli_unico_to_tbc_admision_scroll.adm_fecnac
	var html = ''
	var i;
	var codigo = 'prote_codiprotesis_'
	var observ = 'prote_observ_'
	var estado = 'prote_estado_'
	
    globals.Edad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad	
    
	var fs2 = databaseManager.getFoundSet("maestros","tbc_mae_prot")
	/*
	var fs3 = databaseManager.getFoundSet("maestros","tbc_medicos_personal")
	
	fs3.find()
	fs3['medpercod']=vhiscli_to_tbc_cirugint.cirilegciru
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
	
	var parametros = new Array()
	parametros[0]='frm_certificado_implante_prn_copy'
	parametros[1]=globals.vHiscli
	parametros[2]=globals.vNroProtocolo
	parametros[3]=globals.vLega
	parametros[4]=globals.vFechaActual
	parametros[5]=globals.vHoraCarga
		
			
    html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%>' + 'Prótesis Implantada' + '</td>'
	html += '<td width=50%>' + '                   ' + '</td>'
	html += '</tr>'
	html += '</table>'	
	globals.tempHTML = html
	globals.lineas_impre++
	globals.implanteHTML1 += globals.tempHTML
	globals.tempHTML=''
	html = ''
		
	var stexto_con_enter = " ";
	var sTextoBuscado = " ";
	sTextoBuscado='\n';
	var contador_enter = 0;
	var largo_texto = 0
	globals.grupo_texto_bis=6
	globals.grupo_texto=6;
		
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
	var sTexto=''
	var kenter = 0
	for(i=1;i<=vhiscli2_to_tbc_protesis.getSize();i++){
		vhiscli2_to_tbc_protesis.setSelectedIndex(i)
		for(var j=1;j<=20;j++){
			if(vhiscli2_to_tbc_protesis[codigo+j]!=0&&vhiscli2_to_tbc_protesis[estado+j]==4){
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=50%>' + 'Descripción:' + '</td>'
				html += '<td width=50%>' + '                   ' + '</td>'
				html += '</tr>'
				html += '</table>'	
				
				globals.tempHTML = html
				globals.lineas_impre++
				globals.implanteHTML1 += globals.tempHTML
				globals.tempHTML=''
					
				fs2.find()
				fs2['mpcodprotesis'] = vhiscli2_to_tbc_protesis[codigo+j]
				fs2.search()
				html = ''
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=10%>' + '   ' +'</td>'
				html += '<td width=40%>' + fs2['mpdescripcion'] +'</td>'
				html += '<td width=50%>' + vhiscli2_to_tbc_protesis[observ+j] +'</td>'
				html += '</tr>'
				html += '</table>'	
				globals.tempHTML = html
				globals.lineas_impre++
				globals.implanteHTML1 += globals.tempHTML
				globals.tempHTML=''
			
				globals.vCodProt=vhiscli2_to_tbc_protesis[codigo+j]
				globals.vItemProt=j
				globals.vNroPedidoProtesis=vhiscli2_to_tbc_protesis.prote_nroprote
				html = ''
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=50%>' + 'Marca y Modelo: '+ vs2_to_tbc_marca_prot.mar_marca +'</td>'
				html += '<td width=50%>' + 'Nro. Serie: '+ vs2_to_tbc_marca_prot.mar_serie +'</td>'
				html += '</tr>'
				html += '</table>'	
					
				globals.tempHTML = html
				globals.lineas_impre++
				globals.implanteHTML1 += globals.tempHTML
				globals.tempHTML=''
					
				html = ''
				html += '<p></p>'
				globals.tempHTML = html
				globals.lineas_impre++
				globals.implanteHTML1 += globals.tempHTML
				globals.tempHTML=''
				html = ''	
			}
		}
		html = ''
		globals.Nprotocolo_bis=globals.vNroProtocolo
		globals.grupo_texto_bis=6
		if(cantidad_lineas > 0){
			 sTexto = ''
			
				sTexto += vs1_to_tbl_protoc_txt.texto
				
			contador_enter = 0;
			stexto_con_enter = sTexto
			while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
				stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
		      contador_enter++; 
			}
			kenter = sTexto.indexOf("\n");
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
		globals.implanteHTML1 += globals.tempHTML
		globals.tempHTML=''
		end_of_page()
			
		}
		//globals.lleno_dataset_texto_bis()
		//grabar_dataset_texto_bis()
		html = ''
		html += '<p></p>'
		globals.tempHTML = html
		globals.lineas_impre++
		globals.implanteHTML1 += globals.tempHTML
		globals.tempHTML=''
		html = ''
	}
	html = ''
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%>' + 'Prótesis Explantada' + '</td>'
	html += '<td width=50%>' + '                   ' + '</td>'
	html += '</tr>'
	html += '</table>'	
	globals.tempHTML = html
	globals.lineas_impre++
	globals.implanteHTML1 += globals.tempHTML
	globals.tempHTML=''
	html = ''
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%>' + 'Descripción:' + '</td>'
	html += '<td width=50%>' + '                   ' + '</td>'
	html += '</tr>'
	html += '</table>'	
	globals.tempHTML = html
	globals.lineas_impre++
	globals.implanteHTML1 += globals.tempHTML
	globals.tempHTML=''
	html = ''
	globals.Nprotocolo_bis=globals.vNroProtocolo
	globals.grupo_texto=7
	stexto_con_enter = " ";
	sTextoBuscado = " ";
	sTextoBuscado='\n';
	contador_enter = 0;
	largo_texto = 0;
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
	
	if(cantidad_lineas > 0){
		sTexto = ''
		
			sTexto += vs1_to_tbl_protoc_txt.texto
			
		contador_enter = 0;
		stexto_con_enter = sTexto
		while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
			stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
	      contador_enter++; 
		}
		kenter = sTexto.indexOf("\n");
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
	globals.implanteHTML1 += globals.tempHTML
	globals.tempHTML=''
	end_of_page()
		
	}
	//globals.lleno_dataset_texto_bis()
	//grabar_dataset_texto_bis()
	return globals.vprocesa=true
	}else{
		return globals.vprocesa=false
	}
}

/**
 * @properties={typeid:24,uuid:"29D6368A-82DD-425E-AEBC-7E56E325C8B0"}
 */
function grabar_dataset_texto_bis() {
	var html = '';
	if(globals.filas_texto_bis > 0){
		for ( var i = 1 ; i <=globals.filas_texto_bis ; i++ )
		{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
			var vector = new Array()
			var str = '';
			str = globals.dataset_lineas_texto_bis.getValue(i,1)
			vector = str.split("\n")
			for (var ii = 0; ii<vector.length;ii++){
				
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '<td width=100%>' + vector[ii] + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.tempHTML = html
				globals.lineas_impre++
				globals.implanteHTML1 += globals.tempHTML
				globals.tempHTML=''
				html = ''
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"07F91F48-03B2-4B64-85F7-9D4EA0BAE428"}
 */
function end_of_page() {
	// TODO Auto-generated method stub
}
