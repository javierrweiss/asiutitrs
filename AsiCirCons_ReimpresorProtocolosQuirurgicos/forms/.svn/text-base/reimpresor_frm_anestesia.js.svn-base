/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"878E8C79-A95B-46FD-8354-7775E9622663"}
 */
var fanesteHTML1 = '';

/**
 * @properties={typeid:35,uuid:"3964B339-BA8F-4DB0-B5E1-D11596E910B9",variableType:-4}
 */
var fds = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"80D2C85D-E116-48FF-ABC0-C0D1CB39FBD4",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"FB5ACC56-559C-4687-A4F8-240BB501181E"}
 */
function sub_buildReport() {
	globals.lineas_impre=0
	
	globals.vHisclin_edit=globals.vHiscli.toString()
	globals.reimpresor_fecha_ingreso=reimpresor_protocolo_to_tbc_ciruguar.cirgfechaingreso
	globals.reimpresor_hora_ingreso=reimpresor_protocolo_to_tbc_ciruguar.cirghoraingreso
	
	try{
		if(reimpresor_vhiscli_to_tbc_guardia.guariva==0){
			var $obr_24 = reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_obras.obr_posiva
			if($obr_24!=2&&$obr_24!=3&&$obr_24!=7){
				globals.vCondicion='Con.IVA Cob'
				switch($obr_24){
					case 1:globals.vCondicion+=" Responsable Inscripto   ";break;
					case 2:globals.vCondicion+=" Responsable No Inscripto";break;
					case 3:globals.vCondicion+=" R.No Insc.s/IVA         ";break;
					case 4:globals.vCondicion+=" Exento                  ";break;
					case 5:globals.vCondicion+=" Consumidor Final        ";break;
					case 6:globals.vCondicion+=" Resp. Inscripto s/IVA   ";break;
					case 7:globals.vCondicion+=" IVA Convenio            ";break;
					case 8:globals.vCondicion+=" Monotributo             ";break;
				}
			}
		}else{
			globals.vCondicion="Prestación:";
			switch (reimpresor_vhiscli_to_tbc_guardia){
				case 1:globals.vCondicion+="no gravada con IVA       ";break;
				case 2:globals.vCondicion+="gravada con IVA alic.gral";break;
				case 3:globals.vCondicion+="gravada con IVA alic.red.";break;
				default:globals.vCondicion+="no gravada con IVA       ";break;
			}
		}
	}catch(msg){
		application.output(msg.message)	
	}
	switch (reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_obras.obr_tipclie){
		case 1:globals.vCategoria="PARTICULAR";break;
		case 2:globals.vCategoria="PREPAGA";break;
		case 3:globals.vCategoria="OBRA SOCIAL";break;
		case 4:globals.vCategoria="EMPRESAS";break;
		case 5:globals.vCategoria="COMPAÑÍA DE SEGUROS";break;
		case 6:globals.vCategoria="PERSONAL DEL SANATORIO";break;
		case 7:globals.vCategoria="PLAN SALUD";break;
		case 8:globals.vCategoria="GERENCIADORA";break;
		case 9:globals.vCategoria="PROFESIONAL";break;
	}
	
	/*
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
	*/
	var filas = reimpresor_vhiscli_to_tbc_anes_ambu.getSize()
	if(filas>0){
		
		globals.hora_inicio=reimpresor_vhiscli_to_tbc_anes_ambu.aneshoraini
		globals.vHora=globals.hora_inicio
		globals.hora_inicio=globals.FormatearHora()+ ' hs.'
		var $column = '';
		var html = ''
		var i=0;
		globals.linea_aux = 0;
		var parametros = new Array()
		parametros[0]='frm_anestesia_prn1'
		parametros[1]=globals.vHiscli
		parametros[2]=globals.vNroProtocolo
		parametros[3]=globals.vLega
		parametros[4]=globals.vFechaActual
		parametros[5]=globals.vHoraCarga
		
		html = ''
		
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
		
		inicializaRegistroDatasetHtml()
		html=''
		html += 'Evaluación Anestésica Pre-quirúrgica'
		globals.lineas_impre++
		fanesteHTML1 += html
		grabaDatasetHtml()
	    
	    inicializaRegistroDatasetHtml()
		html=''
		html += '   Hora Inicio Anestesia : '+globals.hora_inicio
		globals.lineas_impre++
		fanesteHTML1 += html
		grabaDatasetHtml()
		
		globals.column1='CARDIOVASCULAR'
		globals.column2=' '
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='I.M.'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(0,1)))
		globals.column3='I.C.C. Controlada '
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(9,1)))
		imprimeLinea()
		globals.column1='H.T.A.'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(1,1)))
		globals.column3='I.C.C. No Controlada '
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(10,1)))
		imprimeLinea()
		globals.column1='H.I.V.'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(2,1)))
		globals.column3='Enfermedad valvular cardíaca'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(11,1)))
		imprimeLinea()
		globals.column1='Arritmia que requiere tto.'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(3,1)))
		globals.column3='Angioplastia Anterior '
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(12,1)))
		imprimeLinea()
		globals.column1='B. Bloqueantes'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(4,1)))
		globals.column3='Cirugía cardíaca anterior '
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(13,1)))
		imprimeLinea()
		globals.column1='Bloqueantes del canal del Ca'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(5,1)))
		globals.column3='Enfermedad cardíaca congénita'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(14,1)))
		imprimeLinea()
		globals.column1='Marcapaso'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(6,1)))
		globals.column3='E.C.G.'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(15,1)))
		imprimeLinea()
		globals.column1='Angina con actividad'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(7,1)))
		globals.column3='Riesgo cardiovascular habitual.'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(16,1)))
		imprimeLinea()
		globals.column1='Angina en reposo'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(8,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='GASTROINTESTINAL'
		globals.column2=' '
		globals.column3='HEPATICO'
		globals.column4=' '
		imprimeLinea()
		globals.column1='Obesidad Morbida'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_2.toString().substr(0,1)))
		globals.column3='Enzimas Elevadas'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_4.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='Reflujo Gastroesofagico'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_2.toString().substr(1,1)))
		globals.column3='Hictericia'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_4.toString().substr(1,1)))
		imprimeLinea()
		globals.column1='Hernia de Hiatus'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_2.toString().substr(2,1)))
		globals.column3='Ascitis'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_4.toString().substr(2,1)))
		imprimeLinea()
		globals.column1='Obstrucción intestinal'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_2.toString().substr(3,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Disfagia'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_2.toString().substr(4,1)))
		globals.column3='PULMONAR '
		globals.column4=' '
		imprimeLinea()
		globals.column1=' '
		globals.column2=' '
		globals.column3='Antecedentes de Fumador'
		globals.column4='- '+application.getValueListDisplayValue('anesambu_vl_10Anios',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_5.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='DIFICULTAD ANESTESICA'
		globals.column2=' '
		globals.column3='Dejo de Fumar'
		globals.column4='- '+application.getValueListDisplayValue('anesambu_vl_6Meses',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_5.toString().substr(1,1)))
		imprimeLinea()
		globals.column1='Intubación Dificultosa'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_3.toString().substr(0,1)))
		globals.column3='Asma Bronquial'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_5.toString().substr(2,1)))
		imprimeLinea()
		globals.column1='Hist.Fliar. de Hipertensión maligna'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_3.toString().substr(1,1)))
		globals.column3='E.P.O.C.'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_5.toString().substr(3,1)))
		imprimeLinea()
		globals.column1='Estenosis Subglótica'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_3.toString().substr(2,1)))
		globals.column3='Embolismo Pulmonar'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_5.toString().substr(4,1)))
		imprimeLinea()
		globals.column1='Paro Cardíaco'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_3.toString().substr(3,1)))
		globals.column3='Traqueostomia'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_5.toString().substr(5,1)))
		imprimeLinea()
		globals.column1='NEUROLOGICO'
		globals.column2=' '
		globals.column3='ENDOCRINOS'
		globals.column4=' '
		imprimeLinea()
		globals.column1='Trastorno Convulsivo'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(0,1)))
		globals.column3='Diabetes'
		globals.column4='- '+application.getValueListDisplayValue('anesambu_vl_diabetes',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_7.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='P.I.C. elevada'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(1,1)))
		globals.column3='Hipertiroidismo'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_7.toString().substr(1,1)))
		imprimeLinea()
		globals.column1='Enfermedad cerebrovascular'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(2,1)))
		globals.column3='Hipotiroidismo'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_7.toString().substr(2,1)))
		imprimeLinea()
		globals.column1='Lesión Médula Espinal'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(3,1)))
		globals.column3='Tratamiento esteroide'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_7.toString().substr(3,1)))
		imprimeLinea()
		globals.column1='Enfermedad Neuromuscular'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(4,1)))
		globals.column3='Anticonceptivos Orales'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_7.toString().substr(4,1)))
		imprimeLinea()
		globals.column1='Neuropatía Periférica'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(5,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Hidrocefalia'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(6,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Retardo Mental'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(7,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Sindrome Depresivo'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(8,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='ACTIVIDADES DIARIAS'
		globals.column2=' '
		globals.column3='CLASIFICACION A.S.A.'
		globals.column4=' '
		imprimeLinea()
		globals.column1='Reposo Obligado'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_8.toString().substr(0,1)))
		globals.column3='A.S.A.'
		globals.column4='- '+application.getValueListDisplayValue('anesambu_vl_asa',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_10.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='Capaz de realizar ejercicios'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_8.toString().substr(1,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Caquetico'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_8.toString().substr(2,1)))
		globals.column3='PEDIATRICO '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Dolor Crónico'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_8.toString().substr(3,1)))
		globals.column3='Prematuro'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_11.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='Sordo'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_8.toString().substr(4,1)))
		globals.column3='Anomalía Congénica'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_11.toString().substr(1,1)))
		imprimeLinea()
		globals.column1='Ciego'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_8.toString().substr(5,1)))
		globals.column3='Parálisis Cerebral'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_11.toString().substr(2,1)))
		imprimeLinea()
		globals.column1='USO DE DROGAS'
		globals.column2=' '
		globals.column3='OBSTETRICOS'
		globals.column4=' '
		imprimeLinea()
		globals.column1='Alcohol'
		globals.column2='- '+application.getValueListDisplayValue('anesambu_vl_alcohol',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_9.toString().substr(0,1)))
		globals.column3='Preeclampsia/Eclampsia'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_12.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='Cocaína'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_9.toString().substr(1,1)))
		globals.column3='Placenta Previa'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_12.toString().substr(1,1)))
		imprimeLinea()
		globals.column1='Otras'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_9.toString().substr(2,1)))
		globals.column3='Embarazo'
		globals.column4='- '+application.getValueListDisplayValue('anesambu_vl_embarazo',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_12.toString().substr(2,1)))
		imprimeLinea()
		globals.column1='RENAL'
		globals.column2=' '
		globals.column3='HEMATOLOGICO'
		globals.column4=' '
		imprimeLinea()
		globals.column1='Insuficiencia Renal'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_13.toString().substr(0,1)))
		globals.column3='Trastorno en el Sangrado'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_15.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='Falla Renal'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_13.toString().substr(1,1)))
		globals.column3='Trombocitopenia'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_15.toString().substr(1,1)))
		imprimeLinea()
		globals.column1='Hemodialisis'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_13.toString().substr(2,1)))
		globals.column3='Plaquetopenia &#60;  100.000'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_15.toString().substr(2,1)))
		imprimeLinea()
		globals.column1='Dialisis Peritoneal'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_13.toString().substr(3,1)))
		globals.column3='Anticoagulantes'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_15.toString().substr(3,1)))
		imprimeLinea()
		globals.column1=' '
		globals.column2=' '
		globals.column3='Anemia Hgb. &#60;  10'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_15.toString().substr(4,1)))
		imprimeLinea()
		globals.column1=' '
		globals.column2=' '
		globals.column3='Transfusión sanguínea &#60;  3 meses'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_15.toString().substr(5,1)))
		imprimeLinea()
		globals.column1='INFECCIOSAS'
		globals.column2=' '
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Sindrome de Sepsis'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_14.toString().substr(0,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Hepatitis Activa'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_14.toString().substr(1,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='A.I.D.S.'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_14.toString().substr(2,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='Renal en las últimas 4 semanas'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_14.toString().substr(3,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='TBC Activa'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_14.toString().substr(4,1)))
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='OTROS'
		globals.column2=' '
		globals.column3='REGISTROS HABITUALES'
		globals.column4=' '
		imprimeLinea()
		globals.column1='Testigo de Jehová'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_16.toString().substr(0,1)))
		globals.column3='Presión Arterial'
		globals.column4='- '+application.getValueListDisplayValue('anesambu_vl_presion',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_17.toString().substr(0,1)))
		imprimeLinea()
		globals.column1='Negación Transfusión de Sangre'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_16.toString().substr(1,1)))
		globals.column3='        Máxima'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anespresionmax
		imprimeLinea()
		globals.column1='Donante Sangre Autóloga'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_16.toString().substr(2,1)))
		globals.column3='        Mínima'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anespresionmin
		imprimeLinea()
		globals.column1='Quemaduras más de 20&#37; '
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_16.toString().substr(3,1)))
		globals.column3='Prótesis Dentales'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_17.toString().substr(1,1)))
		imprimeLinea()
		globals.column1='U.C.I. Preoperatorio '
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_16.toString().substr(4,1)))
		globals.column3='Lentes de Contacto'
		globals.column4='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_17.toString().substr(2,1)))
		imprimeLinea()
		globals.column1='Alergia'
		globals.column2='- '+application.getValueListDisplayValue('reimpresor_vl_sino',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_16.toString().substr(5,1)))
		globals.column3='Estado Anímico'
		globals.column4='- '+application.getValueListDisplayValue('anesambu_vl_animo',utils.stringToNumber(reimpresor_vhiscli_to_tbc_anes_ambu.ele1_17.toString().substr(3,1)))
		imprimeLinea()
		globals.column1='LABORATORIO'
		globals.column2=' '
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		globals.column1='G.R.'
		globals.column2='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anesgr
		globals.column3='G.B.'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anesgb
		imprimeLinea()
		globals.column1='H.T.O.'
		globals.column2='- '+reimpresor_vhiscli_to_tbc_anes_ambu.aneshto
		globals.column3='H.B.'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.aneshb
		imprimeLinea()
		globals.column1='Gluc.'
		globals.column2='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anesgluc
		globals.column3='UREA'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anesurea
		imprimeLinea()
		globals.column1='Colinest.'
		globals.column2='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anescolinest
		globals.column3='KPTT'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.aneskptt
		imprimeLinea()
		globals.column1='TPO. PROT.'
		globals.column2='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anestpoprot
		globals.column3='Grupo'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anesgrupo
		imprimeLinea()
		globals.column1='Factor RH.'
		globals.column2='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anesfactrh
		globals.column3='Otros'
		globals.column4='- '+reimpresor_vhiscli_to_tbc_anes_ambu.anesotroslab
		imprimeLinea()
		globals.column1='MEDICAMENTOS'
		globals.column2=' '
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		for(var k=1;k<=10;k++){
			if(utils.stringWordCount(reimpresor_vhiscli_to_tbc_anes_ambu['anesmedctos_'+k])>0){
					globals.column1=reimpresor_vhiscli_to_tbc_anes_ambu['anesmedctos_'+k]
					globals.column2=' '
					globals.column3=' '
					globals.column4=' '
					imprimeLinea()
			}
		}
		globals.column1='COMENTARIOS'
		globals.column2=' '
		globals.column3=' '
		globals.column4=' '
		imprimeLinea()
		for(k=1;k<=10;k++){
			if(utils.stringWordCount(reimpresor_vhiscli_to_tbc_anes_ambu['anescoment_'+k])>0){
				globals.column1=reimpresor_vhiscli_to_tbc_anes_ambu['anescoment_'+k]
				globals.column2=' '
				globals.column3=' '
				globals.column4=' '
				imprimeLinea()
			}
		}
		inicializaRegistroDatasetHtml()
		fanesteHTML1 += ' '
		grabaDatasetHtml()
		inicializaRegistroDatasetHtml()
		fanesteHTML1 += 'Evaluación Anestésica Post-Quirurgica'
		grabaDatasetHtml()
		globals.reimpresor_grupoTexto=7
		var largo_t=reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		if(largo_t>0){
			for(k=1;k<=largo_t;k++){
				reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(k)
				if(reimpresor_vhiscli_to_tbc_proamb_t.proalinea.length>0){
					inicializaRegistroDatasetHtml()
					fanesteHTML1 += reimpresor_vhiscli_to_tbc_proamb_t.proalinea
					grabaDatasetHtml()
				}
			}
		}else{
			largo_t=reimpresor_vhiscli_to_tbl_proamb_t.getSize()
			if(largo_t>0){
				for(k=1;k<=largo_t;k++){
					reimpresor_vhiscli_to_tbl_proamb_t.setSelectedIndex(k)
					if(reimpresor_vhiscli_to_tbl_proamb_t.texto.length>0){
						inicializaRegistroDatasetHtml()
						fanesteHTML1 += reimpresor_vhiscli_to_tbl_proamb_t.texto
						grabaDatasetHtml()
					}
				}
			}
		}
		inicializaRegistroDatasetHtml()
		fanesteHTML1 += ' '
		grabaDatasetHtml()
		inicializaRegistroDatasetHtml()
		fanesteHTML1 += 'Escala de Aldrete'
		grabaDatasetHtml()
		var $total_aldrete=0;
		globals.column1='Activididad'
		globals.column2=application.getValueListDisplayValue('reimpresor_vl_aldrete_actividad',reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_1)
		$total_aldrete=$total_aldrete+reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_1
		imprimeLineaBis()
		globals.column1='Respiración'
		globals.column2=application.getValueListDisplayValue('reimpresor_vl_aldrete_respiracion',reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_2)
		$total_aldrete=$total_aldrete+reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_2
		imprimeLineaBis()
		globals.column1='Circulación'
		globals.column2=application.getValueListDisplayValue('reimpresor_vl_aldrete_circulacion',reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_3)
		$total_aldrete=$total_aldrete+reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_3
		imprimeLineaBis()
		globals.column1='Conciencia'
		globals.column2=application.getValueListDisplayValue('reimpresor_vl_aldrete_conciencia',reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_4)
		$total_aldrete=$total_aldrete+reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_4
		imprimeLineaBis()
		globals.column1='Saturación'
		globals.column2=application.getValueListDisplayValue('reimpresor_vl_aldrete_saturacion_arterial',reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_5)
		$total_aldrete=$total_aldrete+reimpresor_vhiscli_to_tbc_anes_ambu.anesesca_5
		imprimeLineaBis()
		globals.column1='Total'
		globals.column2=$total_aldrete+' puntos.'
		imprimeLineaBis()
		return globals.vprocesa=true
	}else{
		return globals.vprocesa=false
	}
}

/**
 * @properties={typeid:24,uuid:"C2A6C4D1-5863-4FFC-85D3-304B22D97274"}
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
 * @properties={typeid:24,uuid:"65503CA8-9681-4F08-A2DD-330951E2A68D"}
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
 * @properties={typeid:24,uuid:"4E43C426-CB1F-4858-9B95-8B29BEC6A8AA"}
 */
function grabar_linea() {
	var html = '';
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"B4B66BAA-F3C3-4BBB-AC66-9D4CB9CEC2FE"}
 */
function grabar_registro() {
	globals.tempHTML = '';
}

/**
 * @properties={typeid:24,uuid:"19AC3417-476B-4D23-9539-2A23906836FB"}
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
 * @properties={typeid:24,uuid:"B8FFCA47-F526-4496-8632-7EBC2F381D72"}
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
 * @properties={typeid:24,uuid:"D74DB694-92A9-4566-A116-6A1F7F2A38C5"}
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
 * @properties={typeid:24,uuid:"D0E264BC-3C91-4CE2-82A4-A9FFCAB4B4A2"}
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
 * @properties={typeid:24,uuid:"E2AFEF82-3D0D-49F1-848D-1BA040E7ECC2"}
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
 * @properties={typeid:24,uuid:"D65B6E8C-28C9-4D21-BDF8-4CDFD2FF2A1A"}
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

/**
 * @properties={typeid:24,uuid:"F5B6C5AD-2403-4B1A-B95F-2AA2DA5A3578"}
 */
function inicializaRegistroDatasetHtml() {
	fanesteHTML1 = '<html><body>'
}

/**
 * @properties={typeid:24,uuid:"1210C297-1249-459D-98EC-BC0659D4FB81"}
 */
function grabaDatasetHtml() {
	fanesteHTML1 += '</body></html>'
	fds.addRow([fanesteHTML1])
}

/**
 * @properties={typeid:24,uuid:"A56346AB-42C0-488F-ADCB-5DD845CBDC2C"}
 * @AllowToRunInFind
 */
function sub_buildReportNew() {
	fds = databaseManager.createEmptyDataSet()
	fds.addColumn('fanesteHTML1',1,JSColumn.TEXT)
	
	sub_buildReport()
	
	var $tipos = [JSColumn.TEXT]
	var $frm = solutionModel.getForm('reimpresor_frm_anestesia')
	$frm.dataSource = fds.createDataSource('Ds_Anes', $tipos)
	forms.reimpresor_frm_anestesia.controller.recreateUI()
	forms.reimpresor_frm_anestesia.controller.loadAllRecords()
	forms.reimpresor_frm_anestesia.controller.setPageFormat(210,297,10,10,10,10,1,0)
	forms.reimpresor_frm_anestesia.controller.print(false,false);	

}

/**
 * @properties={typeid:24,uuid:"A4C0B00E-471C-402A-B5C7-43A1DEF4836E"}
 */
function imprimeLinea(){
	inicializaRegistroDatasetHtml()
	var html = ''
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="1%">' + '  ' + '</td>'
	html += '<td width="18%">' + globals.column1 + '</td>'
	html += '<td width="7%">' + globals.column2 + '</td>'
	html += '<td width="18%">' + globals.column3 + '</td>'
	html += '<td width="7%">' + globals.column4 + '</td>'
	html += '<td width="49%">' + ' ' + '</td>'
	html += '</tr>'
	html += '</table>'
	fanesteHTML1 += html
	grabaDatasetHtml()
}

/**
 * @properties={typeid:24,uuid:"581FFCE5-C5BF-4D7A-B2B3-96E2A1BBE433"}
 */
function imprimeLineaBis(){
	inicializaRegistroDatasetHtml()
	var html = ''
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="1%">' + '  ' + '</td>'
	html += '<td width="6%">' + globals.column1 + '</td>'
	html += '<td width="1%">' + ':' + '</td>'
	html += '<td width="92%">' + globals.column2 + '</td>'
	html += '</tr>'
	html += '</table>'
	fanesteHTML1 += html
	grabaDatasetHtml()
}

/**
 * @AllowToRunInFind
 * 
 * @return {String}
 * @properties={typeid:24,uuid:"1BCCAC67-DE29-4C46-BC79-8C021D7EA15D"}
 */
function sub_buildReportNew_PDF() {
	
	var absoluteFile = '';
	
	fds = databaseManager.createEmptyDataSet()
	fds.addColumn('fanesteHTML1',1,JSColumn.TEXT)
	
	var result = sub_buildReport()
	if(result){
		
		var $tipos = [JSColumn.TEXT]
		var $frm = solutionModel.getForm('reimpresor_frm_anestesia')
		$frm.dataSource = fds.createDataSource('Ds_Anes', $tipos)
		forms.reimpresor_frm_anestesia.controller.recreateUI()
		forms.reimpresor_frm_anestesia.controller.loadAllRecords()
		forms.reimpresor_frm_anestesia.controller.setPageFormat(210,297,10,10,10,10,1,0)
		//forms.reimpresor_frm_anestesia.controller.print(false,false);
		
		var formName = controller.getName();
		var fileNameReport = "PROTOCOLO-ANESTESIA-AMB-" + globals.reimpresor_protocolo;
		
		absoluteFile = globals.GenerarReporte_servoyPDF(formName,fileNameReport);
	}
	
	return absoluteFile;

}
