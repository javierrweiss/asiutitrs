/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A911FCB0-92E0-4E50-82C8-3C454FBB5CBA"}
 */
var html = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5C08EF3-B6E0-4E65-88AE-BE765ECF53E0"}
 */
var tempHTML = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"53CAC5BA-F19F-47AF-9529-6D88F9DB8158",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"ED45FF16-1794-4A7A-80B4-000F20D79066"}
 */
function cargar_html() {
	//forms.frm_cons_protocolo_quir_dt_1.cargar_detalle()
	//setup the report HTML when needed
	

	//build top table
	
	html += '<table width=100% cellpadding=1 cellspacing=0>'

	html += '<tr>'
	html += '<td width=10%>' + utils.dateFormat(aux_fecha_carga, 'MM/dd/yyyy') + '</td>'
	html += '<td align="left" width=15%>' + 'Protocolo ' + aux_protocolo + '</td>'
	html += '<td align="left" width=40%>' + 'Paciente '+ aux_histcl_alf + ' ' + aux_histcli_nombre + '</td>'
	html += '<td align="left" width=20%>' + 'Cobertura '+ aux_obras_nombre + '</td>'
	html += '<td align="left" width=15%>' + 'Plan '+ aux_obras_plan + '</td>'
	html += '</tr>'
	
	html += '<tr>'
	html += '<td align="center" colspan="6">' + '--Inicio Cirugía: ' + utils.dateFormat(aux_fechainicio, 'MM/dd/yyyy') + ' ' + aux_horainicio 
	html += ' ' + '--Finalizó Cirugía: ' + utils.dateFormat(aux_fechafinal, 'MM/dd/yyyy') + ' ' + aux_horafinal + '</td>'
	html += '</tr>'
	html += '</table>'		
	
    // intervenciones
	var aArgs2 = new Array();
	var SQL2 = "Select * from aux_389a where aux_protocolo_a = ? and aux_operador_a = ? and aux_ip_a = ? order by aux_fecha_carga_a asc, aux_hora_carga_a asc "
    aArgs2.push(globals.gbl_protocolo)
	aArgs2.push(globals.vLega)
	aArgs2.push(application.getIPAddress())
	var _ds2 = databaseManager.getDataSetByQuery("bases_auxiliares", SQL2, aArgs2, -1);
	if (_ds2.getMaxRowIndex() > 0){
	    for (var i= 1; i <= _ds2.getMaxRowIndex(); i++){
	    	html += '<table width=100% cellpadding=1 cellspacing=0>'
	    	html += '<tr>'
	        html += '<td align="center" colspan="4">' + 'Intervención 0' + _ds2.getValue(i,3) + ' ' + utils.numberFormat(_ds2.getValue(i,4), '00,00,00') + ' ' + _ds2.getValue(i,5) + '</td>'
	        html += '</tr>'
		
	        html += '<tr>'
	        html += '<td></td>'
	        html += '</tr>'
		
	        html += '</table>'
	    	
	// Busca Evaluación Preanestésica
	
	        var filas = vis_tbc_cirugint_to_tbc_aneste_txt.getSize()
	        globals.gbl_txt_evaluacion = '';
	        if (filas > 0){
		        vis_tbc_cirugint_to_tbc_aneste_txt.sort('anestxt_protocolo asc, anestxt_grupo asc, anestxt_nro1 asc, anestxt_secuen asc')
		        vis_tbc_cirugint_to_tbc_aneste_txt.setSelectedIndex(1)
		        globals.gbl_txt_evaluacion = vis_tbc_cirugint_to_tbc_aneste_txt.anestxt_linea;
		        for (var j=2;j<filas+1;j++){
			       vis_tbc_cirugint_to_tbc_aneste_txt.setSelectedIndex(j)
		           globals.gbl_txt_evaluacion += vis_tbc_cirugint_to_tbc_aneste_txt.anestxt_linea;
		        }
	        }else{
		        globals.gbl_txt_evaluacion = 'No existe Evaluación'
	        }
	        html += '<table>'
	        html += '<tr>'
	        html += '<td align="tope" colspan="1">' + 'Evaluación Preanestesica </td>'	
	        html += '</tr>'
	        html += '</table>'
	
	        html += '<table width=100% cellpadding=1 cellspacing=0>'
	        html += '<tr>'	
	        html += '<td width=5% >' + '      ' + '</td>'		
	        html += '<td width=95%>' + globals.gbl_txt_evaluacion + '</td>'
	        html += '</tr>'
	        html += '</table>'
	
	// Especialistas
	
	        html += '<table width=100% cellpadding=1 cellspacing=0>'
	
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Especialista Dr.' +'</td>' 
	        html += '<td width=20% >' + _ds2.getValue(i,24) +'</td>'
	        html += '<td width=10% >' + _ds2.getValue(i,25) +'</td>'
	        if (_ds2.getValue(i,23) == 0){
		        html += '<td width=20% >' +' ' + '</td>'
	        }else{
		        html += '<td width=20% >' + '% ' + _ds2.getValue(i,23) + '</td>'
	        }
	        html += '</tr>'
		
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Ayudante 1ro.' +'</td>' 
	        html += '<td width=20% >' + _ds2.getValue(i,29) +'</td>'
	        html += '<td width=10% >' + _ds2.getValue(i,30) +'</td>'
	        if (_ds2.getValue(i,28) == 0){
		        html += '<td width=20% >' +' ' + '</td>'
	        }else{
		        html += '<td width=20% >' + '% ' + _ds2.getValue(i,28) + '</td>'
	        }
	        html += '</tr>'	
	
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Ayudante 2ro.' +'</td>' 
	        html += '<td width=20% >' + _ds2.getValue(i,34) +'</td>'
	        html += '<td width=10% >' + _ds2.getValue(i,35) +'</td>'
	        if (_ds2.getValue(i,33) == 0){
		        html += '<td width=20% >' +' ' + '</td>'
	        }else{
		        html += '<td width=20% >' + '% ' + _ds2.getValue(i,33) + '</td>'
	        }
	        html += '</tr>'	
		
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Ayudante 3ro.' +'</td>' 
	        html += '<td width=20% >' + _ds2.getValue(i,39) +'</td>'
	        html += '<td width=10% >' + _ds2.getValue(i,40) +'</td>'
	        if (_ds2.getValue(i,38) == 0){
		        html += '<td width=20% >' +' ' + '</td>'
	        }else{
		        html += '<td width=20% >' + '% ' + _ds2.getValue(i,38) + '</td>'
	        } 
	        html += '</tr>'	
	
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Anestesista' +'</td>' 
	        html += '<td width=20% >' + _ds2.getValue(i,44) +'</td>'
	        html += '<td width=10% >' + _ds2.getValue(i,45) +'</td>'
	        if (_ds2.getValue(i,43) == 0){
		        html += '<td width=20% >' +' ' + '</td>'
	        }else{
		        html += '<td width=20% >' + '% ' + _ds2.getValue(i,43) + '</td>'
	        }
	        html += '</tr>'	

	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Perfusionista' +'</td>' 
	        html += '<td width=20% >' + _ds2.getValue(i,49) +'</td>'
	        html += '<td width=10% >' + _ds2.getValue(i,50) +'</td>'
	        if (_ds2.getValue(i,48) == 0){
		        html += '<td width=20% >' +' ' + '</td>'
	        }else{
		        html += '<td width=20% >' + '% ' + _ds2.getValue(i,48) + '</td>'
	        }
	        html += '</tr>'	
		
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Instrumentista' +'</td>' 
	        html += '<td width=20% >' + _ds2.getValue(i,54) +'</td>'
	        html += '<td width=10% >' + _ds2.getValue(i,55) +'</td>'
	        if (_ds2.getValue(i,53) == 0){
		        html += '<td width=20% >' +' ' + '</td>'
	        }else{
		        html += '<td width=20% >' + '% ' + _ds2.getValue(i,53) + '</td>'
	        }
	        html += '</tr>'	
	
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Gastos' +'</td>'
	        html += '<td width=20% >' + '      ' + '</td>'
	        html += '<td width=10% >' + '      ' + '</td>'
	        html += '<td width=20% >' + '% ' + _ds2.getValue(i,53) + '</td>'
	        html += '</tr>'	
		
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Partero Dr.' +'</td>' 
	        html += '<td width=30% >' + ' ' +'</td>' 
			//forms.frm_cons_protocolo_quirurgico_tbl.foundset.aux_legpartero
	        html += '</tr>'	
	
	        html += '<tr>'	
	        html += '<td width=20% >' + '      ' + '</td>'		
	        html += '<td width=30% >' + 'Neonatólogo Dr.' +'</td>' 
	        html += '<td width=30% >' + ' ' +'</td>'
			//forms.frm_cons_protocolo_quirurgico_tbl.foundset.aux_legneonato 
	        html += '</tr>'	
	        html += '</table>'
	    }
	}
	// Diagnostico Pre-operatorio
	
	filas = vis_tbc_cirugint_to_tbc_protoc1_txt.getSize()
	globals.gbl_txt_protocolo = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc1_txt.sort('anestxt_protocolo asc, anestxt_grupo asc, anestxt_nro1 asc, anestxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc1_txt.setSelectedIndex(1)
		globals.gbl_txt_protocolo = vis_tbc_cirugint_to_tbc_protoc1_txt.protxt_linea;
		for (j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc1_txt.setSelectedIndex(j)
		    globals.gbl_txt_protocolo += vis_tbc_cirugint_to_tbc_protoc1_txt.protxt_linea;
		}
	}
	var max = vis_tbc_cirugint_to_tbc_protoc1_txt.getSize()
	if(max > 0){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
		
	    html += '<tr>'
	    html += '<td align="tope" colspan="1">' + '** DIAGNOSTICO PRE-OPERATORIO **' + '</td>'	
	    html += '</tr>'
	    html += '</table>'
	
	    html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
	    html += '<td width=5% >' + '      ' + '</td>'		
	    html += '<td width=95%>' + globals.gbl_txt_protocolo + '</td>'
	    html += '</tr>'
	    html += '</table>'
	
	    html += '</tr>'
	    html += '</table>'
	}
		
// Diagnostico Post-operatorio
	
	filas = vis_tbc_cirugint_to_tbc_protoc2_txt.getSize()
	globals.gbl_txt_protocolo = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc2_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc2_txt.setSelectedIndex(1)
		globals.gbl_txt_protocolo = vis_tbc_cirugint_to_tbc_protoc2_txt.protxt_linea;
		for (j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc2_txt.setSelectedIndex(j)
		    globals.gbl_txt_protocolo += vis_tbc_cirugint_to_tbc_protoc2_txt.protxt_linea;
		}
	}
	max = vis_tbc_cirugint_to_tbc_protoc2_txt.getSize()
	if(max > 0){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
		
	    html += '<tr>'
	    html += '<td align="tope" colspan="1">' + '** DIAGNOSTICO POST-OPERATORIO **' + '</td>'	
	    html += '</tr>'
	    html += '</table>'
	
	    html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
	    html += '<td width=5% >' + '      ' + '</td>'		
	    html += '<td width=95%>' + globals.gbl_txt_protocolo + '</td>'
	    html += '</tr>'
	    html += '</table>'
	
	    html += '</tr>'
	    html += '</table>'
	}

// Operacion efectuada y descripcion
	
	filas = vis_tbc_cirugint_to_tbc_protoc3_txt.getSize()
	globals.gbl_txt_protocolo = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc3_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc3_txt.setSelectedIndex(1)
		globals.gbl_txt_protocolo = vis_tbc_cirugint_to_tbc_protoc3_txt.protxt_linea;
		for (j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc3_txt.setSelectedIndex(j)
		    globals.gbl_txt_protocolo += vis_tbc_cirugint_to_tbc_protoc3_txt.protxt_linea;
		}
	}
	max = vis_tbc_cirugint_to_tbc_protoc3_txt.getSize()
	if(max > 0){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
		
	    html += '<tr>'
	    html += '<td align="tope" colspan="1">' + '** OPERACION EFECTUADA Y DESCRIPCION **' + '</td>'	
	    html += '</tr>'
	    html += '</table>'
	
	    html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
	    html += '<td width=5% >' + '      ' + '</td>'		
	    html += '<td width=95%>' + globals.gbl_txt_protocolo + '</td>'
	    html += '</tr>'
	    html += '</table>'
	
	    html += '</tr>'
	    html += '</table>'
	}
	
// Hemoterapia
	
	filas = vis_tbc_cirugint_to_tbc_protoc4_txt.getSize()
	globals.gbl_txt_hemo = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc4_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc4_txt.setSelectedIndex(1)
		globals.gbl_txt_hemo = vis_tbc_cirugint_to_tbc_protoc4_txt.protxt_linea;
		for (j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc4_txt.setSelectedIndex(j)
		    globals.gbl_txt_hemo += vis_tbc_cirugint_to_tbc_protoc4_txt.protxt_linea;
		}
	}
	max = vis_tbc_cirugint_to_tbc_protoc4_txt.getSize()
	if(max > 0){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
		
	    html += '<tr>'
	    html += '<td align="tope" colspan="1">' + '** HEMOTERAPIA **' + '</td>'	
	    html += '</tr>'
	    html += '</table>'
	
	    html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
	    html += '<td width=5% >' + '      ' + '</td>'		
	    html += '<td width=95%>' + globals.gbl_txt_hemo + '</td>'
	    html += '</tr>'
	    html += '</table>'
	
	    html += '</tr>'
	    html += '</table>'
	}	
	
// Monitoreo
	
	filas = vis_tbc_cirugint_to_tbc_protoc5_txt.getSize()
	globals.gbl_txt_monito = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc5_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc5_txt.setSelectedIndex(1)
		globals.gbl_txt_monito = vis_tbc_cirugint_to_tbc_protoc5_txt.protxt_linea;
		for (j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc5_txt.setSelectedIndex(j)
		    globals.gbl_txt_monito += vis_tbc_cirugint_to_tbc_protoc5_txt.protxt_linea;
		}
	}
	max = vis_tbc_cirugint_to_tbc_protoc5_txt.getSize()
	if(max > 0){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
		
	    html += '<tr>'
	    html += '<td align="tope" colspan="1">' + '** MONITOREO **' + '</td>'	
	    html += '</tr>'
	    html += '</table>'
	
	    html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
	    html += '<td width=5% >' + '      ' + '</td>'		
	    html += '<td width=95%>' + globals.gbl_txt_monito + '</td>'
	    html += '</tr>'
	    html += '</table>'
	
	    html += '</tr>'
	    html += '</table>'
	}		
	
// Perfusionista
	
	filas = vis_tbc_cirugint_to_tbc_protoc8_txt.getSize()
	globals.gbl_txt_perfus = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc8_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc8_txt.setSelectedIndex(1)
		globals.gbl_txt_perfus = vis_tbc_cirugint_to_tbc_protoc8_txt.protxt_linea;
		for (j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc8_txt.setSelectedIndex(j)
		    globals.gbl_txt_perfus += vis_tbc_cirugint_to_tbc_protoc8_txt.protxt_linea;
		}
	}
	max = vis_tbc_cirugint_to_tbc_protoc8_txt.getSize()
	if(max > 0){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
		
	    html += '<tr>'
	    html += '<td align="tope" colspan="1">' + '** PERFUSIONISTA **' + '</td>'	
	    html += '</tr>'
	    html += '</table>'
	
	    html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'	
	    html += '<td width=5% >' + '      ' + '</td>'		
	    html += '<td width=95%>' + globals.gbl_txt_perfus + '</td>'
	    html += '</tr>'
	    html += '</table>'
	
	    html += '</tr>'
	    html += '</table>'
	}			
	
// Medicamentos
    globals.gbl_txt_medica= null
	var aArgs = new Array();
	var SQL = "Select Medc_tipart, Medc_codart, Medc_cant, Art.art_descrip, Art.art_presenta from tbc_medic_cir_dtl inner join maestros.tbc_articulos Art on Medc_codart = Art.art_codigo " 
    SQL+="where Medc_Protocolo = ? "
    aArgs.push(globals.gbl_protocolo)		  	   
	var _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
	
	if (_ds.getMaxRowIndex() > 0){
		var ant_tipart = 0
		var html2 = ''
	    for (i= 1; i <= _ds.getMaxRowIndex(); i++){
	       if (ant_tipart != _ds.getValue(i,1)){
	    	   ant_tipart = _ds.getValue(i,1)
    	       html2 += '<table width=100% cellpadding=0 cellspacing=0>'
	           html2 += '<tr>'
               html2 += '<td width=100% valign="middle" align="center">' 
               if (_ds.getValue(i,1) == 1){
                   html2 += '<H2> <U> Medicamentos de Cirugía </U> </H2>'
               }else{
                   if (_ds.getValue(i,1) == 2){
                       html2 += '<H2> <U> Medicamentos de Anestesia </U> </H2>'
                   }else{
                       html2 += '<H2> <U> Medicamentos para Profilaxis </U> </H2>'
                   }
               }
               html2 += '</td>'
               html2 += '</tr>'
		       html2 += '</table>'
		       html2 += '<br>'
               globals.gbl_txt_medica += html2
	    	}
		
            html2 = ''         	
		  	globals.column0=_ds.getValue(i,2)
			globals.column1=_ds.getValue(i,4)
			globals.column2=_ds.getValue(i,5)
			globals.column3=_ds.getValue(i,3)
			           
	   	    html2 += '<table width=100% cellpadding=0 cellspacing=0>'
	        html2 += '<tr>'
            html2 += '<td width=10% valign="middle" align="right">' + globals.column0 + '</td>'
            html2 += '<td width=5% valign="middle" align="right">     </td>'
            html2 += '<td width=35% valign="middle" align="left">' + globals.column1 + '</td>'
            html2 += '<td width=30% valign="middle" align="left">' + globals.column2 + '</td>'
            html2 += '<td width=10% valign="middle" align="right">' + globals.column3 + '</td>'
            html2 += '<td width=10% valign="middle" align="right">     </td>'
	        html2 += '</tr>'
	        html2 += '</table>'
            globals.gbl_txt_medica += html2
			html2 = ''
        }

	   
	}
	
	html += globals.gbl_txt_medica
    html += '<br>'
  
}

/**
 * @properties={typeid:24,uuid:"4DBD3564-1E6B-47BE-A19F-5EBB54542144"}
 */
function recorre_aux() {
	tempHTML = ''
	var reg = forms.frm_cons_protocolo_quirurgico_tbl.foundset.getSize()
	if (reg > 0){
// Barra de proceso 
		forms.msg_bar_progress.elements.bean_progress.minimum = 1
		forms.msg_bar_progress.elements.bean_progress.maximum = reg	
		html = '<html><body>'
		for (var i = 1 ; i <= reg ; i++){
			forms.frm_cons_protocolo_quirurgico_tbl.foundset.setSelectedIndex(i)
			globals.gbl_protocolo = forms.frm_cons_protocolo_quirurgico_tbl.foundset.aux_protocolo
			forms.msg_bar_progress.elements.bean_progress.value = i
			application.updateUI()
	        cargar_html()
		}
		
		html += '</body></html>' 
    	tempHTML = html
		
	}
}
