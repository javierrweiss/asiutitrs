/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DB28EE5E-9222-4D47-AD3A-0EF3254343B9",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"D4560A21-A779-4F39-A4E7-C5D3547B53FF"}
 */
function sub_buildReport() {
	globals.lineas_impre=0
	var str=globals.protocolo
	str=str.toString()
	str=str.split('|')
	    var args = new Array();
    args[0]=globals.vHisclin;
    args[1]=utils.stringToNumber(str[0])
	globals.Nprotocolo=args[1];
    
	globals.vHisclin_edit=globals.vHisclin.toString()
	var largo = globals.vHisclin_edit.length
	globals.vHisclin_edit=globals.vHisclin_edit.substr(0,largo-1)+'/'+globals.vHisclin_edit.substr(largo-1,1)
	//plugins.dialogs.showInfoDialog("protocolo",globals.protocolo)
	globals.fecha_comienzo=vs_to_tbc_cirugint2.cirifechainicio.toString()+vs_to_tbc_cirugint2.cirihorainicio.toString()
	var fec=globals.fecha_comienzo;
	fec=fec.substr(6,2)+'/'+fec.substr(4,2)+'/'+fec.substr(0,4)+' '+fec.substr(8,2)+':'+fec.substr(10,2)+' hs.'
	globals.fecha_comienzo=fec
	globals.fecha_finalizacion=vs_to_tbc_cirugint2.cirifechafinal.toString()+vs_to_tbc_cirugint2.cirihorafinal.toString()
	fec=globals.fecha_finalizacion;
	fec=fec.substr(6,2)+'/'+fec.substr(4,2)+'/'+fec.substr(0,4)+' '+fec.substr(8,2)+':'+fec.substr(10,2)+' hs.'
	globals.fecha_finalizacion=fec
	globals.tip_profes=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_tiplegamed
	globals.cod_profes=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_codlegamed
	globals.busco_profesional()
	globals.apeynom_anestesista=globals.apeynom_profes
	globals.matricula=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.tbc_anestesia_to_tbc_medicos_personal.medpermatricula
	globals.Interven=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_interven
	var filas = vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.getSize()
	
	if(filas>0){
	switch (vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_secreali)
	{
		case 1:globals.evaluacion='Circuito Cerrado';break;
		case 2:globals.evaluacion='Piso de Internación';break;
		case 3:globals.evaluacion='Unidad Quirúrgica';break;
		case 4:globals.evaluacion='Guardia';break;
	}
	var escala_mallampati =''
	switch (vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_escalam)
	{
		case 1:escala_mallampati='Grado I - Visualización de paladar blando, uvula y pilares faringeos.';break;
		case 2:escala_mallampati='Grado II - Se visualiza la uvula con dificultad, no se visualizan los pilares faringeos.';break;
		case 3:escala_mallampati='Grado III - No se visualiza el paladar blando.';break;
		case 4:escala_mallampati='Grado IV - Sólo se visualiza el paladar duro.';break;
	}
	globals.hora_inicio=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_horini
	//globals.hora_inicio=globals.hora_inicio.substr(0,2)+':'+globals.hora_inicio.substr(2,2)+' hs.'
	globals.vHora=globals.hora_inicio
	globals.hora_inicio=globals.FormatearHora()+ ' hs.'
	
    
    var html = ''
	var i;
	
	globals.linea_aux = 0;
	
	var tabla = 'tabla1'
	globals[tabla][0]='No hay antec.posit.'
	globals[tabla][1]='Respiratoria '
	globals[tabla][2]='Circulatoria '
	globals[tabla][3]='Neurológica '
	globals[tabla][4]='Urológica '
	globals[tabla][5]='Digestiva '
	globals[tabla][6]='Metabólica '
	globals[tabla][7]='Alérgica '
	tabla = 'tabla2'
	globals[tabla][0]='Sin patol.manifiesta '
	globals[tabla][1]='Arritmia '
	globals[tabla][2]='Insufic.cardíaca/cardiopat.'
	globals[tabla][3]='Hipotensión '
	globals[tabla][4]='Hipertensión '
	globals[tabla][5]='Asma Bronquial '
	globals[tabla][6]='Epoc '
	globals[tabla][7]='Tos '	
	globals[tabla][8]='Secreciones '
	globals[tabla][9]='Fuma '
	globals[tabla][10]='Neumopatía '
	globals[tabla][11]='Hepatopatía '
	globals[tabla][12]='Alergia '
	globals[tabla][13]='Anemia '
	globals[tabla][14]='Diabetes '
	globals[tabla][15]='Deshidratación '
	globals[tabla][16]='Alcohol'
	globals[tabla][17]='Caquexia '
	globals[tabla][18]='Discradas sanguíneas '
	globals[tabla][19]='Hipertiroidismo '
	globals[tabla][20]='Hipotiroidismo '
	globals[tabla][21]='Nefropatías '
	globals[tabla][22]='Miopatías '
	globals[tabla][23]='Hipertermia '
	globals[tabla][24]='Convulsiones '
	globals[tabla][25]='Glaucoma '
	globals[tabla][26]='Disnea '
	globals[tabla][27]='Desnutrido '
	globals[tabla][28]='Distendido '
	globals[tabla][29]='Shock leve '
	globals[tabla][30]='Shock profundo '
	globals[tabla][31]='Inconciente '
	globals[tabla][32]='Moribundo '
	tabla = 'tabla3'
	globals[tabla][0]='No ref.ning.import. '
	globals[tabla][1]='Diuréticos '
	globals[tabla][2]='Digital '
	globals[tabla][3]='B.Bloqueantes '
	globals[tabla][4]='Antihipertensivos '
	globals[tabla][5]='Nitroglicerina '
	globals[tabla][6]='Hipotensores '
	globals[tabla][7]='Anticoagulantes '	
	globals[tabla][8]='Antibióticos '
	globals[tabla][9]='Sedantes '
	globals[tabla][10]='Antihistamínicos '
	globals[tabla][11]='Anticonvulsivos '
	globals[tabla][12]='Inhibidores de la MAO '
	globals[tabla][13]='Corticoides '
	globals[tabla][14]='Anfetaminas '
	globals[tabla][15]='Levodopa '
	globals[tabla][16]='Insulina '
	globals[tabla][17]='hipoglucemiante oral '
	globals[tabla][18]='Ocitocitos '	
	tabla = 'tabla4'
	globals[tabla][0]='Sin patol.manifiesta '
	globals[tabla][1]='Maxilares '
	globals[tabla][2]='Piezas dentarias '
	globals[tabla][3]='Fauces '
	globals[tabla][4]='Cuello '
	tabla = 'tabla5'
	globals[tabla][0]='Epidural '
	globals[tabla][1]='Espinal '
	globals[tabla][2]='Caudal '
	globals[tabla][3]='Normal '
	globals[tabla][4]='Patológico '	
	tabla = 'tabla6'
	globals[tabla][0]='Glucemia '
	globals[tabla][1]='Uremia '
	globals[tabla][2]='Hematocrito '
	globals[tabla][3]='Leucocitos '
	globals[tabla][4]='Hemoglobina '
	globals[tabla][5]='Plaquetas '
	globals[tabla][6]='Eritrosedimentación '
	globals[tabla][7]='KPTT '	
	globals[tabla][8]='To. de Coagulación '
	globals[tabla][9]='To. y cc. Protrombina '
	globals[tabla][10]='Hemograma '
	globals[tabla][11]='PO2 '
	globals[tabla][12]='PCO2 '
	globals[tabla][13]='Na '
	globals[tabla][14]='K '
	globals[tabla][15]='Ca '
	globals[tabla][16]='CO3H '
	globals[tabla][17]='PH '
	globals[tabla][18]='Creatina '
	globals[tabla][19]='Colinesterasa '
	globals[tabla][20]='Sat.O2 '
	tabla = 'tabla7'
	globals[tabla][0]='Sin patolog.manifiesta'
	globals[tabla][1]='Deprimido '
	globals[tabla][2]='Ansioso '
	globals[tabla][3]='Excitado '
	globals[tabla][4]='Comatoso '
	globals[tabla][5]='Hiperemotivo '	
	tabla = 'tabla8'
	globals[tabla][0]='Examen funcional resp. '
	globals[tabla][1]='Rx. vía aérea superior '
	globals[tabla][2]='Rx. columna '
	tabla = 'tabla9'
	globals[tabla][0]='Reflejos oculares '
	globals[tabla][1]='Sensibilidad dolorasa '
	globals[tabla][2]='Obedece órdenes '
	globals[tabla][3]='Conversa '
	globals[tabla][4]='Depresión circulatoria '
	globals[tabla][5]='Depresión respiratoria '
	globals[tabla][6]='Obstrucción respiratoria '
	globals[tabla][7]='Aspiración secreciones faringeas '	
	globals[tabla][8]='Vómitos '
	tabla = 'tabla10'
	globals[tabla][0]='Curarizado '
	globals[tabla][1]='Cánula faríngea '
	globals[tabla][2]='Tubo Traqueal '
	//build top table
	
	var parametros = new Array()
	parametros[0]='frm_anestesia_prn1'
	parametros[1]=globals.vHiscli
	parametros[2]=globals.vNroProtocolo
	parametros[3]=globals.vLega
	parametros[4]=globals.vFechaActual
	parametros[5]=globals.vHoraCarga
	
	html = ''
	html += '<html><body>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html=''
	
	var tipo_internacion;
	if (vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_tipoint==1){
		tipo_internacion='Urgente'
	}else{
		tipo_internacion='Programada'
	}
	globals.column0='<b>Operación propuesta: &nbsp&nbsp '+ interven_to_tbc_interven.itv_descripcion + ' </b> &nbsp&nbsp&nbsp&nbsp&nbsp ' +'       <b>Tipo internación:</b> ' + tipo_internacion
	grabar_titulo1()
	globals.column0='<b>Presión arterial:</b> &nbsp&nbsp Max. '+ vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_presionmax + '&nbsp - Min. ' +  vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_presionmin + ' &nbsp&nbsp&nbsp <b>Pulso:</b> &nbsp&nbsp Frecuencia:   '+vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_pulsofrec+'/minuto    &nbsp&nbsp Caract.: &nbsp '+vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_pulsocarac+ ' &nbsp&nbsp ASA: '+vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_asa
	grabar_titulo1()
	grabar_linea()
	globals.column0='Complicaciones Preoperatorias'
	grabar_titulo()	
	globals.tope_tabla=7;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_complipre_'
	globals.nom_tabla_variable = 'tabla1'	
	grabar_tmp()
	grabar_linea()
	
	globals.column0='Escala de Mallampati: '+escala_mallampati
	grabar_titulo1()
	grabar_linea()
	
	globals.column0='Clinica Preoperatoria'
	grabar_titulo()	
	globals.tope_tabla=32;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_clinpre_'
	globals.nom_tabla_variable = 'tabla2'
	grabar_tmp()	
	grabar_linea()
	globals.column0='Tratamientos previos'
	grabar_titulo()	
	globals.tope_tabla=18;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_tratprev_'
	globals.nom_tabla_variable = 'tabla3'
	grabar_tmp()
	globals.column0='Otros: '+vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_tratpreobs
	grabar_titulo()	
	grabar_linea()
	globals.column0='Examen de cabeza y cuello'
	grabar_titulo()	
	globals.tope_tabla=4;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_cabcue_'
	globals.nom_tabla_variable = 'tabla4'
	grabar_tmp()	
	grabar_linea()
	globals.column0='Areas Exploradas'
	grabar_titulo()	
	globals.tope_tabla=2;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_anesregio_'
	globals.nom_tabla_variable = 'tabla5'
	grabar_tmp()	
	grabar_linea()
	globals.column0='Bloqueo nervioso'
	grabar_titulo()	
	globals.tope_tabla=4;
	globals.tope_desde=3;
	globals.nom_campo_variable = 'anes_anesregio_'
	globals.nom_tabla_variable = 'tabla5'
	grabar_tmp()	
	grabar_linea()
	globals.column0='Exámenes Complementarios'
	grabar_titulo()	
	globals.tope_tabla=20;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_exacompl_'
	globals.nom_tabla_variable = 'tabla6'
	grabar_tmp()
	grabar_linea()
	globals.column0='Estado Psíquico Preoperatorio'
	grabar_titulo()	
	globals.tope_tabla=5;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_psipre_'
	globals.nom_tabla_variable = 'tabla7'
	grabar_tmp()
	grabar_linea()
	globals.column0='Exámenes Especiales'
	grabar_titulo()	
	globals.tope_tabla=2;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_exaesp_'
	globals.nom_tabla_variable = 'tabla8'
	grabar_tmp()
	globals.column0='Otros: '+vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_exaespobs
	grabar_titulo()	
	grabar_linea()
	globals.column0='--INFORME--'
	grabar_titulo()	
	html = ''		
	globals.grupo_texto=1;
	globals.lleno_dataset_txt_anes()
	if(globals.filas_texto > 0){
		for ( i = 1 ; i <=globals.filas_texto ; i++ )
		{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
			var vector = new Array()
			var str1 = '';
			str1= globals.dataset_lineas_texto.getValue(i,1)
			vector = str1.split("\n")
			for (var ii = 0; ii<vector.length;ii++){
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + vector[ii] + '</td>'
				html += '</tr>'
				html += '</table>'	
				globals.lineas_impre++
		    	globals.tempHTML = html
		    	end_of_page()
		    	html=''
			}
	     }
	}
	grabar_linea()
	var tipo_blo;
	switch(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_tipoblo)
	{
		case 0:tipo_blo='GENERAL';break;
		case 1:tipo_blo='PERIDURAL';break;
		case 2:tipo_blo='RAQUIDEO';break;
		case 3:tipo_blo='PLEXUAL';break;
	}
	var si, no;
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_cateter==0){
		no='<b>X</b>'
		si=' &nbsp '	
	}else{
		si='<b>X</b>'
		no=' &nbsp '
	}
	var inha, endo;
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_inhend==1){
		inha='<b>X</b>'
		endo=' &nbsp '	
	}else{
		endo='<b>X</b>'
		inha=' &nbsp '
	}
	globals.column0='<b>Anestesia Conductiva</b>  &nbsp&nbsp&nbsp&nbsp&nbsp    Tipo: &nbsp <b>'+ tipo_blo + '</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    Cateter:   Si  '+si+' &nbsp  No  '+no+' &nbsp&nbsp&nbsp  Apgar:  '+ vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_apgar+' &nbsp&nbsp&nbsp&nbsp&nbsp  Anestesia: Inhaladora  '+inha+' &nbsp&nbsp&nbsp Endovenosa  '+endo     
	grabar_titulo1()
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_intub==0){
		no='<b>X</b>'
		si=' &nbsp '	
	}else{
		si='<b>X</b>'
		no=' &nbsp '
	}
	var con, sin;
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_manguito==0){
		sin='<b>X</b>'
		con=' &nbsp '	
	}else{
		con='<b>X</b>'
		sin=' &nbsp '
	}
	var respiracion, controlada;
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_espasi==1){
		respiracion=' <b>Espontánea</b> '
		controlada= ''	
	}else{
		respiracion=' <b>Asistida</b>   '
		controlada='Controlada en forma: '	
		if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_mecman==1){
			controlada+=' Mecánica '
		}else{
			controlada+=' Manual   '
		}
	}
	var circuito, cerrado;
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_circuito==1){
		circuito=' Abierto '
		cerrado= ''	
	}else{
		circuito=' Cerrado   '
		if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_cerrado==1){
			cerrado=' Circular '
		}else{
			cerrado=' Vaiven   '
		}
	}
	globals.column0='Intubación traqueal:  No  '+no+' &nbsp&nbsp Si  '+si+' &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Con '+con+' &nbsp&nbsp Sin  '+sin+ ' &nbsp&nbsp Manguito'
	grabar_titulo1()
	globals.column0='Respiración: '+respiracion+' &nbsp&nbsp&nbsp '+controlada+' &nbsp&nbsp&nbsp '+'  Circuito:  '+circuito+' &nbsp&nbsp&nbsp '+cerrado
	grabar_titulo1()
	grabar_linea()
	globals.column0='Escala de Aldrete'
	grabar_titulo()	
	var total_aldrete = 0;
	switch(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_esca_1)
    {
       case 0:globals.column0='   Actividad  : '+'No informado. ';break;
       case 1:globals.column0='   Actividad  : '+'Incapaz de mover extremidades. ';break;
       case 2:globals.column0='   Actividad  : '+'Mueve 2 extremidades voluntariamente o ante órdenes.';total_aldrete=total_aldrete + 1;break;
       case 3:globals.column0='   Actividad  : '+'Mueve 4 extremidades voluntariamente o ante órdenes.';total_aldrete=total_aldrete + 2;break;
    }
    grabar_titulo1()
	switch(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_esca_2)
    {
       case 0:globals.column0='   Respiración : '+'No informado. ';break;
       case 1:globals.column0='   Respiración : '+'Apnea. ';break;
       case 2:globals.column0='   Respiración : '+'Disnea o limitación a la respiración.';total_aldrete=total_aldrete + 1;break;
       case 3:globals.column0='   Respiración : '+'Capaz de respirar profundamente y toser libremente.';total_aldrete=total_aldrete + 2;break;
    }
    grabar_titulo1()
	switch(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_esca_3)
    {
       case 0:globals.column0='   Circulación : '+'No informado. ';break;
       case 1:globals.column0='   Circulación : '+'Presion arterial > 50% del nivel preanestesico.';break;
       case 2:globals.column0='   Circulación : '+'Presion arterial 20 - 49% del nivel preanestesico.';total_aldrete=total_aldrete + 1;break;
       case 3:globals.column0='   Circulación : '+'Presion arterial < 20% del nivel preanestesico.';total_aldrete=total_aldrete + 2;break;
    }
    grabar_titulo1()
	switch(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_esca_4)
    {
       case 0:globals.column0='   Conciencia : '+'No informado. ';break;
       case 1:globals.column0='   Conciencia : '+'No responde.';break;
       case 2:globals.column0='   Conciencia : '+'Responde a la llamada.';total_aldrete=total_aldrete + 1;break;
       case 3:globals.column0='   Conciencia : '+'Completamente despierto.';total_aldrete=total_aldrete + 2;break;
    }
    grabar_titulo1()
	switch(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_esca_5)
    {
       case 0:globals.column0='   Saturación Arterial : '+'No informado. ';break;
       case 1:globals.column0='   Saturación Arterial : '+'SaO2 < 90% con O2 suplementario.';break;
       case 2:globals.column0='   Saturación Arterial : '+'Necesita O2 para mantener SaO2 > 90% .';total_aldrete=total_aldrete + 1;break;
       case 3:globals.column0='   Saturación Arterial : '+'Mantiene SaO2 > 92% con aire ambiente de oxigeno.';total_aldrete=total_aldrete + 2;break;
    }
    grabar_titulo1()
	globals.column0='    Total       :  '+total_aldrete+' puntos.'
    grabar_titulo1()
	grabar_linea()
	globals.column0='Estado del paciente al finalizar el acto anestésico - operatorio: '
	grabar_titulo()	
	globals.tope_tabla=8;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_anesoper_'
	globals.nom_tabla_variable = 'tabla9'
	grabar_tmp1()
	grabar_linea()
	globals.column0='1-2-3 Shock '
	grabar_titulo()	
	globals.tope_tabla=2;
	globals.tope_desde=0;
	globals.nom_campo_variable = 'anes_shock_'
	globals.nom_tabla_variable = 'tabla10'
	grabar_tmp1()
	grabar_linea()
	var sector;
	switch (vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_sector)
	{
		case 1:sector=' UTI  ';break;
		case 2:sector=' UCO  ';break;
		case 3:sector=' PISO ';break;
	}
	var hora = vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_horrecup.toString()
	globals.column0='Pasa al sector'+sector+' a las '+ hora.substr(0,2)+':'+hora.substr(2,2)+ ' hs., en condiciones '+vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.anes_condicion
	grabar_titulo1()
	globals.column0=''
	grabar_titulo()
	grabar_titulo()
	grabar_titulo()
	grabar_titulo()
	globals.column1=''
	globals.column0='                                                                     ____________________________________________'
	grabar_tmp2()
	globals.column0='                                                                                       Firma                     '
	grabar_tmp2()
	globals.column0=''
	grabar_titulo()
	globals.column0='                                                                     Aclaración: Dr. '+ globals.apeynom_anestesista
	grabar_tmp2()
	globals.column0='                                                                                        Matrícula '+ globals.matricula
	grabar_tmp2()
	
	//*********************************************************************************************************************************************
	salto_hoja()
	
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=100%>' + 'Medicamentos / Descartables' +'</td>'
	html += '</tr>'
	html += '</table>'	
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html=''
	grabar_linea()
	
	html = ''
	globals.vTipoArt=2
	var z=0;
	globals.ancho_col0=15;
	globals.ancho_col1=30;
	globals.ancho_col2=30;
	globals.ancho_col3=15;
	globals.ancho_col4=5;
	globals.ancho_col5=5;
	for( z=1;z<=99&&vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]>0;z++){
		if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]>0){
			globals.column0=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]
			globals.vArticulo=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]
			globals.column1=varticulo_to_tbc_articulo_read.art_descrip
			globals.column2=varticulo_to_tbc_articulo_read.art_presenta
			globals.column3=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medccant_'+utils.numberFormat(z,0)]
			grabar_tmp3()
		}
	}
	html = ''
	globals.vTipoArt=3
	globals.ancho_col0=15;
	globals.ancho_col1=30;
	globals.ancho_col2=30;
	globals.ancho_col3=15;
	globals.ancho_col4=5;
	globals.ancho_col5=5;
	for( z=1;z<=99&&vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]>0;z++){
		if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]>0){
			globals.column0=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]
			globals.vArticulo=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]
			globals.column1=varticulo_to_tbc_articulo_read.art_descrip
			globals.column2=varticulo_to_tbc_articulo_read.art_presenta
			globals.column3=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medccant_'+utils.numberFormat(z,0)]
			grabar_tmp3()
		}
	}	
				
		
	return globals.vprocesa=true
	}else{
		return globals.vprocesa=false
	}
}

/**
 * @properties={typeid:24,uuid:"FE097692-6598-457F-A66B-DFCBE74FBA61"}
 */
function grabar_tmp() {
	var j=0;
	var k=0;
	var porce =0;
	var tabla = globals.nom_tabla_variable;
	var campo = '';
	var html = '';
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	for(var i=globals.tope_desde;i<=globals.tope_tabla;i++){
		//plugins.dialogs.showInfoDialog(j,html)
	    globals.column0=globals[tabla][i]
	    k=i+1
	    campo = globals.nom_campo_variable + k
		if(k==7&&globals.nom_campo_variable=='anes_clinpre_'){
			campo='anes_clipnre_7'
		}
		if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia[campo]=='X'){
	         globals.column1=globals.chekbox_cheked
		}else{
			 globals.column1=globals.chekbox_uncheked
		}
	    html += '<td width=20% valign="middle" align="right">' + globals.column0 + '    '+'</td>'
	    html += '<td width=5% valign="middle" align="left">' + globals.column1 + '  '+'</td>'
		porce = porce + 25
	    if(++j==4){
	    	html += '</tr>'
	    	html += '</table>'
	    	globals.lineas_impre++
	    	globals.tempHTML = html
	    	end_of_page()
	    	html=''
	    	html += '<table width=100% cellpadding=1 cellspacing=0>'
	    	html += '<tr>'
	    	j=0	
			porce=0
	    }
	    
	}
	var dif = 100 - porce;
	if (dif > 0){
		html += '<td width='+dif+'% valign="middle" align="right">' + '                                                                             ' + '</td>'
	}
	html += '</tr>'
	html += '</table>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()

}

/**
 * @properties={typeid:24,uuid:"2578E24F-9305-4315-BC92-A2CE39CCC1B6"}
 */
function grabar_titulo() {
	var html = '';
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=100% valign="middle" align="left"><b>' + globals.column0 + '</b></td>'	
	html += '</tr>'
	html += '</table>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"13DA21D5-7E57-42F0-9006-9273CB046F98"}
 */
function grabar_linea() {
	var html = '';
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"A8F263FB-632D-4320-9729-4E113BF442D3"}
 */
function grabar_registro() {
	globals.tempHTML = '';
}

/**
 * @properties={typeid:24,uuid:"F1158119-9F9E-42BE-BC06-C31935CD601F"}
 */
function grabar_tmp1() {
	var j=0;
	var k=0;
	var porce =0;
	var tabla = globals.nom_tabla_variable;
	var campo = '';
	var html = '';
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	for(var i=globals.tope_desde;i<=globals.tope_tabla;i++){
		//plugins.dialogs.showInfoDialog(j,html)
	    globals.column0=globals[tabla][i]
	    k=i+1
	    campo = globals.nom_campo_variable + k
		if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia[campo]==0){
	         globals.column1='NO'
		}else{
			 globals.column1='SI'
		}
	    html += '<td width=28% valign="middle" align="left">'+'    ' + globals.column0 +'</td>'
	    html += '<td width=5% valign="middle" align="left">' + globals.column1 + '</td>'
		porce = porce + 33
	    if(++j==3){
	    	html += '</tr>'
	    	html += '</table>'
	    	globals.lineas_impre++
	    	globals.tempHTML = html
	    	end_of_page()
	    	html=''
	    	
	    	html += '<table width=100% cellpadding=0 cellspacing=0>'
	    	html += '<tr>'
	    	j=0	
			porce=0
	    }
	    
	}
	var dif = 100 - porce;
	if (dif > 0){
		html += '<td width='+dif+'% valign="middle" align="left">' + '                                                                             ' + '</td>'
	}
	html += '</tr>'
	html += '</table>'
	
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"E180F535-FDA9-4DC9-B70F-0FC79319605B"}
 */
function grabar_tmp2() {
	var html = '';
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50% valign="middle" align="left">'+'    ' + globals.column1 +'</td>'
    html += '<td width=50% valign="middle" align="center">' + globals.column0 + '</td>'
    html += '</tr>'
	html += '</table>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"FB5161EC-81C9-419F-9C29-BD5DA9CF8A7B"}
 */
function grabar_titulo1() {
	var html = '';
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=100% valign="middle" align="left">' + globals.column0 + '</td>'	
	html += '</tr>'
	html += '</table>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"B3AA9BCB-B29A-4CD5-B7F2-24EF560F7820"}
 */
function end_of_page() {
	if(globals.lineas_impre<52){
		globals.anesteHTML1+=globals.tempHTML
	}else{
		if(globals.lineas_impre>51&&globals.lineas_impre<101){
			if(globals.anesteHTML2==''){
				globals.anesteHTML1+= '</body></html>'
				globals.anesteHTML2+= '<html><body>'+globals.tempHTML
			}else{
				globals.anesteHTML2+=globals.tempHTML
			}
		}else{
			if(globals.lineas_impre>100&&globals.lineas_impre<151){
				if(globals.anesteHTML3==''){
					globals.anesteHTML2+= '</body></html>'
					globals.anesteHTML3+= '<html><body>'+globals.tempHTML
				}else{
					globals.anesteHTML3+=globals.tempHTML
				}
			}else{
				if(globals.lineas_impre>150&&globals.lineas_impre<201){
					if(globals.anesteHTML4==''){
						globals.anesteHTML3+= '</body></html>'
						globals.anesteHTML4+= '<html><body>'+globals.tempHTML
					}else{
						globals.anesteHTML4+=globals.tempHTML
					}
				}else{
					if(globals.lineas_impre>200&&globals.lineas_impre<251){
						if(globals.anesteHTML5==''){
							globals.anesteHTML4+= '</body></html>'
							globals.anesteHTML5+= '<html><body>'+globals.tempHTML
						}else{
							globals.anesteHTML5+=globals.tempHTML
						}
					}else{
						if(globals.lineas_impre>250&&globals.lineas_impre<301){
							if(globals.anesteHTML6==''){
								globals.anesteHTML5+= '</body></html>'
								globals.anesteHTML6+= '<html><body>'+globals.tempHTML
							}else{
								globals.anesteHTML6+=globals.tempHTML
							}
						}
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"8252FDAE-D904-43F4-BC90-11530BBF2BE4"}
 */
function salto_hoja() {
	if(globals.lineas_impre<52){
		globals.lineas_impre=51
	}else{
		if(globals.lineas_impre>51&&globals.lineas_impre<101){
			globals.lineas_impre=100
		}else{
			if(globals.lineas_impre>100&&globals.lineas_impre<151){
				globals.lineas_impre=150
			}else{
				if(globals.lineas_impre>150&&globals.lineas_impre<201){
					globals.lineas_impre=200
				}else{
					if(globals.lineas_impre>200&&globals.lineas_impre<251){
						globals.lineas_impre=250
					}else{
						if(globals.lineas_impre>250&&globals.lineas_impre<301){
							globals.lineas_impre=300
						}
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"C000A831-C8A6-4E5D-A490-67EF05C4DDF6"}
 */
function grabar_tmp3() {
	var html = '';
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width=10% valign="middle" align="right">' + globals.column0 + '</td>'
	html += '<td width=5% valign="middle" align="right">     </td>'
	html += '<td width=35% valign="middle" align="left">' + globals.column1 + '</td>'
	html += '<td width=30% valign="middle" align="left">' + globals.column2 + '</td>'
	html += '<td width=10% valign="middle" align="right">' + globals.column3 + '</td>'
	html += '<td width=10% valign="middle" align="right">     </td>'
	html += '</tr>'
	html += '</table>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}
