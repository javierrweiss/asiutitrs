/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7009640A-5E50-46BE-A15D-963237D5435C",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"53906730-ED5D-4287-B1B7-A7FE97776825"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	//plugins.dialogs.showInfoDialog("protocolo",globals.protocolo)
	globals.lineas_impre=0
	var str=globals.protocolo
	str=str.toString()
	str=str.split('|')
	//plugins.dialogs.showInfoDialog("str[0]",str[0])
	//plugins.dialogs.showInfoDialog("str[1]",str[1])
	//plugins.dialogs.showInfoDialog("str[2]",str[2])
	//var query = "select * from tbc_seguqui_new where segtipohc = 0 and seghistclinica = ? and segprotocolo = ?";
	  
	var args = new Array();
    args[0]=globals.vHisclin;
    args[1]=utils.stringToNumber(str[0])
	globals.Nprotocolo=args[1];
    
	vs_to_tbc_cirugint2.find()
	vs_to_tbc_cirugint2.search()
	globals.vHisclin_edit=globals.vHisclin.toString()
	var largo = globals.vHisclin_edit.length
	globals.vHisclin_edit=globals.vHisclin_edit.substr(0,largo-1)+'/'+globals.vHisclin_edit.substr(largo-1,1)
	
	globals.fecha_comienzo=vs_to_tbc_cirugint2.cirifechainicio.toString()
	globals.vHora=vs_to_tbc_cirugint2.cirihorainicio.toString()
	var fecini=globals.fecha_comienzo;
	fecini=fecini.substr(6,2)+'/'+fecini.substr(4,2)+'/'+fecini.substr(0,4)+ ' '+globals.FormatearHora()+' hs.'
	//+' '+fecini.substr(8,2)+':'+fecini.substr(10,2)+' hs.'
	globals.fecha_comienzo=fecini
	globals.fecha_finalizacion=vs_to_tbc_cirugint2.cirifechafinal.toString()
	globals.vHora=vs_to_tbc_cirugint2.cirihorafinal.toString()
	var fecfin=globals.fecha_finalizacion;
	fecfin=fecfin.substr(6,2)+'/'+fecfin.substr(4,2)+'/'+fecfin.substr(0,4)+ ' '+globals.FormatearHora()+' hs.'
	//+' '+fecfin.substr(8,2)+':'+fecfin.substr(10,2)+' hs.'
	globals.fecha_finalizacion=fecfin

	
    var fs = databaseManager.getFoundSet("asistencial","tbc_seguqui_new")
	var fs2 = databaseManager.getFoundSet("maestros","tbc_personal")
    //var dataset = new Array();
    //dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 300);
    //var filas = dataset.getMaxRowIndex()
	//plugins.dialogs.showInfoDialog("dataset.1,1",dataset.getValue(1,1))	
	//setup the report HTML when needed
	fs.find()
	fs['segtipohc1']= 0
	fs['seghistclinica1']=args[0]
	fs['segprotocolo']=args[1]
	fs.search()
	var filas = fs.getSize()
	if(filas>0){
	var html = ''
	//var i;
	//var record = ''
	globals.linea_aux = 0;
	
	var parametros = new Array()
	parametros[0]='frm_seguqui_prn1'
	parametros[1]=globals.vHiscli
	parametros[2]=globals.vNroProtocolo
	parametros[3]=globals.vLega
	parametros[4]=globals.vFechaActual
	parametros[5]=globals.vHoraCarga
	
	html='<html><body>'
	globals.lineas_impre++
	globals.tempHTML=html
	end_of_page()
	html=''
	
	globals.column0='ANTES DE LA CIRUGIA';
	globals.column1=''
	globals.column2=''
	globals.column3=''
	globals.column4 = '     ';
	globals.ancho_col0=80;
	globals.ancho_col1=5;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=5;
	grabar_tmp()
	globals.tip_profes=utils.stringToNumber(fs['segtipocirculini'])
	globals.cod_profes=utils.stringToNumber(fs['seglegacirculini'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DEL CIRCULANTE';
	globals.column2='      ';
	globals.column3='      ';
	globals.column4=globals.apeynom_profes;
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='      ';
	if(utils.stringToNumber(fs['segcirculident'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar identificación del paciente.';
	globals.column3, globals.column4= '       ';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=80;
	globals.ancho_col3=5;
	globals.ancho_col4=5;
	grabar_tmp()
	if(utils.stringToNumber(fs['segadmindiag'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar diagnóstico de cirugía programada.';
	globals.column0, globals.column3, globals.column4= '      ';
	grabar_tmp()
	if(utils.stringToNumber(fs['segcirculbanio'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar baño y rasurado.';
	globals.column0, globals.column3, globals.column4= '      ';
	grabar_tmp()
	if(utils.stringToNumber(fs['segcirculmate'])<2){
		globals.column3=globals.chekbox_cheked
	}
	else{
		globals.column3=globals.chekbox_uncheked
	}
	globals.column4='No aplicable'
	globals.column2='Comprobar material entregado';
	globals.column0, globals.column1= '    ';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	if(utils.stringToNumber(fs['segcirculmate'])==2){
		globals.column3=globals.chekbox_cheked
	}
	else{
		globals.column3=globals.chekbox_uncheked
	}
	globals.column4='Aplicable'
	globals.column2='     ';
	globals.column0, globals.column1= '    ';
	grabar_tmp()
	globals.column0='      ';
	if(utils.stringToNumber(fs['segcirculhiscli'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar historia clínica presente.';
	globals.column3='        ';
	globals.column4= '       ';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=80;
	globals.ancho_col3=5;
	globals.ancho_col4=5;
	grabar_tmp()
	globals.column0='      ';
	if(utils.stringToNumber(fs['segcirculestu'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
	}
	globals.column2='Comprobar estudios presentes.';
	globals.column3='    ';
	globals.column4= '       ';
	grabar_tmp()
	globals.column0='      ';
	if(utils.stringToNumber(fs['segcirculprote'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar prótesis dentales y bijouterie ausentes.';
	globals.column3, globals.column4= '       ';
	grabar_tmp()
	globals.column0='      ';
	if(utils.stringToNumber(fs['segcirculconsen'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar consentimiento firmado por paciente o familiar.';
	globals.column3, globals.column4= '       ';
	grabar_tmp()
	/*
	globals.tip_profes=utils.stringToNumber(dataset.getValue(1,21))
	globals.cod_profes=utils.stringToNumber(dataset.getValue(1,20))
	globals.busco_profesional()
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	globals.tip_profes=utils.stringToNumber(fs['segtipoanestini'])
	globals.cod_profes=utils.stringToNumber(fs['seglegaanestini'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DEL ANESTESIÓLOGO';
	globals.column2=''
	globals.column3='  '
	if(utils.stringToNumber(fs['seganestident'])==1&&utils.stringToNumber(fs['seganestpulso'])==1){
		globals.column4='   '
	}else{
		globals.column4='Dr. '+globals.apeynom_profes;
	}
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='      ';
	if(utils.stringToNumber(fs['seganestident'])==1&&utils.stringToNumber(fs['seganestpulso'])==1){
		globals.column1='';
		globals.column2='Sin intervención del Anestesiólogo.'
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;	
		grabar_tmp()	
	}else{
		if(utils.stringToNumber(fs['seganestident'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Comprobar identificación del paciente, procedimiento y localización quirúrgica.';
		globals.column3='        ';
		globals.column4= '       ';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestpulso'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Comprobar funcionamiento de oxímetro de pulso.';
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestseguri'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Comprobar control de seguridad del equipo anestésico.';
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestalergia'])<2){
			globals.column3=globals.chekbox_cheked
		}else{
			globals.column3=globals.chekbox_uncheked
		}
		globals.column2='Alergias conocidas ';
		globals.column1='';
		globals.column4= 'No';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=25;
		globals.ancho_col3=5;
		globals.ancho_col4=60;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestalergia'])==2){
			globals.column3=globals.chekbox_cheked
		}else{
			globals.column3=globals.chekbox_uncheked
		}
		globals.column2=' ';
		globals.column1=' ';
		globals.column4= 'Si';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=25;
		globals.ancho_col3=5;
		globals.ancho_col4=60;
		grabar_tmp()
		if(utils.stringToNumber(fs['seganestalergia'])==2){
			globals.column2 = vs_to_tbc_seguqui.seganestcuales;
			globals.column0='';
			globals.column1='';
			globals.column3='';
			globals.column4= '';
			globals.ancho_col0=5;
			globals.ancho_col1=5;
			globals.ancho_col2=80;
			globals.ancho_col3=5;
			globals.ancho_col4=5;
			grabar_tmp()
		}
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestviaaerea'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Dificultad de la vía aérea.';
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestacceso'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Establecer acceso I.V. adecuado.';
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestsangre'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Establecer riesgo de pérdida de sangre.';
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestocular'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Protección ocular.';
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestdecubi'])<2){
			globals.column1=globals.chekbox_uncheked
		}else{
			globals.column1=globals.chekbox_cheked
		}
		globals.column2='Protección de decúbito.';
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
		globals.column0='   ';
		if(utils.stringToNumber(fs['seganestcomorb'])==1){
			globals.column1=globals.combobox_No
		}else{
			if(utils.stringToNumber(fs['seganestcomorb'])==2){
				globals.column1=globals.combobox_Si
			}else{
				globals.column1='[--]'
			}
		}
		globals.column2='Conoce Comorbilidades.'
		globals.column3='';
		globals.column4= '';
		globals.ancho_col0=5;
		globals.ancho_col1=5;
		globals.ancho_col2=88;
		globals.ancho_col3=1;
		globals.ancho_col4=1;
		grabar_tmp()
	}
	/*
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	grabar_tmp()
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	globals.tip_profes=utils.stringToNumber(fs['segtipociruini'])
	globals.cod_profes=utils.stringToNumber(fs['seglegaciruini'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DEL CIRUJANO';
	globals.column2=''
	globals.column3='  '
	globals.column4='Dr. '+globals.apeynom_profes;
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segciruident'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Confirma verbalmente la identificación del paciente.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	globals.column1='';
	globals.column2='El sitio quirúrgico, el procedimiento y la posición.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segciruantibiot'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar la administración de profiláxis antibiótica.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirubisturi'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Comprobar que la plancha de electrobisturí se encuentre en el sitio correcto.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segciruincidentes'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Anticipación de incidentes críticos e inesperados, duración de la intervención,';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	globals.column1='';
	globals.column2='posibles pérdidas de sangre.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	
	/*
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	globals.tip_profes=utils.stringToNumber(fs['segtipoinstruini'])
	globals.cod_profes=utils.stringToNumber(fs['seglegainstruini'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  TODO EL EQUIPO';
	globals.column2=''
	globals.column3='  '
	globals.column4=globals.apeynom_profes;
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seganestrepasaini'])<2){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='El anestesiólogo repasa elementos críticos del plan de reanimación y ';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	globals.column1='';
	globals.column2='consideraciones específicas del paciente si las hay.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrurepasaini'])<2){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='La instrumentadora repasa indicadores de esterilización.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrugasasini'])<2){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Conteo previo de gasas.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrupinzasini'])<2){
		globals.column3=globals.chekbox_cheked
	}
	else{
		globals.column3=globals.chekbox_uncheked
	}
	globals.column2='¿Se utilizará instrumental?';
	globals.column1='';
	globals.column4= 'No';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrupinzasini'])==2){
		globals.column3=globals.chekbox_cheked
	}
	else{
		globals.column3=globals.chekbox_uncheked
	}
	globals.column2='';
	globals.column1='';
	globals.column4= 'Si';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrupinzasini'])==2){
		globals.column2='Conteo Previo de pinzas.'
	}
	else{
		globals.column2='No se utilizará instrumental.'
	}
	globals.column3='';
	globals.column1='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	
	/*
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	
	globals.column0='ANTES DE LA INCISIÓN CUTÁNEA';
	globals.column1= '     ';
	globals.column2= '     ';
	globals.column3= '     ';
	globals.column4 = '     ';
	globals.ancho_col0=80;
	globals.ancho_col1=5;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=5;
	grabar_tmp()
	globals.tip_profes=utils.stringToNumber(fs['segtipocirculcut'])
	globals.cod_profes=utils.stringToNumber(fs['seglegacirculcut'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DEL CIRCULANTE';
	globals.column2='      ';
	globals.column3='      ';
	globals.column4=globals.apeynom_profes;
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculequipres'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculequipres'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Que todos los miembros del equipo quirúrgico están presente.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculequifunc'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculequifunc'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Que todos los miembros del equipo se hayan presentado con nombre y función.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculidsipr'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculidsipr'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Cirujano, Circulante y Anestesiólogo confirman verbalmente:';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	globals.column1='   ';
	globals.column2='Identidad del paciente, Sitio Quirúrgico, Procedimiento.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculdecubi'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculdecubi'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Chequeo de control de decubitos y fijación del paciente.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculimprev'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculimprev'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Previsión de eventos críticos:  El cirujano revisa en voz alta junto al equipo pasos críticos';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	globals.column1='   ';
	globals.column2='de la operación, posibles imprevistos, pérdida prevista de sangre.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculanesproblema'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculanesproblema'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Anestesiólogo revisa en voz alta junto al equipo posibles problemas específicos que presente';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	globals.column1='   ';
	globals.column2='el paciente.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
		
	globals.column0='DESPUÉS DE LA CIRUGIA';
	globals.column1= '     ';
	globals.column2= '     ';
	globals.column3= '     ';
	globals.column4 = '     ';
	globals.ancho_col0=80;
	globals.ancho_col1=5;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=5;
	grabar_tmp()
	globals.tip_profes=utils.stringToNumber(fs['segtipocirufin'])
	globals.cod_profes=utils.stringToNumber(fs['seglegacirufin'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DEL CIRUJANO';
	globals.column2='      ';
	globals.column3='      ';
	globals.column4='Dr. '+globals.apeynom_profes;
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segciruproced'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Procedimiento realizado.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segciruindica'])==0){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Indicaciones médicas.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	
	/*
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	grabar_tmp()
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	globals.tip_profes=utils.stringToNumber(fs['segtipoanestfin'])
	globals.cod_profes=utils.stringToNumber(fs['seglegaanestfin'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DEL ANESTESIÓLOGO';
	globals.column2='      ';
	globals.column3='      ';
	if(utils.stringToNumber(fs['seganestplan'])==2){
		globals.column4='Dr. '+globals.apeynom_profes;
	}else{
		globals.column4='   '
	}
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seganestplan'])==2){
		globals.column1=globals.chekbox_cheked
		globals.column2='Plan de recuperación.';
	}
	else{
		globals.column1='';
		globals.column2='Sin intervención del Anestesiólogo.'
	}
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.tip_profes=utils.stringToNumber(fs['segtipoganestfin'])
	globals.cod_profes=utils.stringToNumber(fs['seglegaanestfin'])
	globals.busco_profesional()
	/*
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	grabar_tmp()
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	globals.tip_profes=utils.stringToNumber(fs['segtipoinstrufin'])
	globals.cod_profes=utils.stringToNumber(fs['seglegainstrufin'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DE LA INSTRUMENTADORA';
	globals.column2=''
	globals.column3='  '
	globals.column4=globals.apeynom_profes;
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrugasasfin'])<2){
		globals.column1=globals.chekbox_uncheked
	}
	else{
		globals.column1=globals.chekbox_cheked
		
	}
	globals.column2='Conteo previo de gasas.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrupinzasfin'])<2){
		globals.column3=globals.chekbox_cheked
	}
	else{
		globals.column3=globals.chekbox_uncheked
	}
	globals.column2='¿Se utilizará instrumental?';
	globals.column1='';
	globals.column4= 'No';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrupinzasfin'])==2){
		globals.column3=globals.chekbox_cheked
	}
	else{
		globals.column3=globals.chekbox_uncheked
	}
	globals.column2='';
	globals.column1='';
	globals.column4= 'Si';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['seginstrupinzasfin'])==2){
		globals.column2='Conteo Final de pinzas.'
	}
	else{
		globals.column2='No se utilizará instrumental.'
	}
	globals.column3='';
	globals.column1='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	
	/*
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	grabar_tmp()
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	globals.tip_profes=utils.stringToNumber(fs['segtipocirculfin'])
	globals.cod_profes=utils.stringToNumber(fs['seglegacirculfin'])
	globals.busco_profesional()
	globals.column0='       ';
	globals.column1="■"+' &nbsp  A CARGO DEL CIRCULANTE';
	globals.column2=''
	globals.column3='  '
	globals.column4=globals.apeynom_profes;
	globals.ancho_col0=4;
	globals.ancho_col1=41;
	globals.ancho_col2=5;
	globals.ancho_col3=5;
	globals.ancho_col4=45;
	grabar_tmp()
	globals.column0='   ';
	globals.column1='';
	globals.column2='Identificación de muestras de cultivo o anatomía patológica.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculmuestras'])<2){
		globals.column3=globals.chekbox_cheked
	}
	else{
		globals.column3=globals.chekbox_uncheked
	}
	globals.column2='';
	globals.column1='';
	globals.column4= 'No';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculmuestras'])<2){
		globals.column3=globals.chekbox_uncheked
	}
	else{
		globals.column3=globals.chekbox_cheked
	}
	globals.column2='';
	globals.column1='';
	globals.column4= 'Si';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculmuestras'])==2){
		globals.column2='Registro de los mismos en los respectivos cuadernos.'
	}
	else{
		globals.column2='No se identificaron muestras de cultivo.'
	}
	globals.column3='';
	globals.column1='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=50;
	globals.ancho_col3=5;
	globals.ancho_col4=35;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculproinstru'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculproinstru'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Se detectaron problemas relacionados con el instrumental y los equipos.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculnormot'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculnormot'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Control de Normotermia Post-operatorio.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()	
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculparteciru'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculparteciru'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Parte Quirúrgico completo.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()	
	globals.column0='   ';
	if(utils.stringToNumber(fs['segcirculparteanes'])==1){
		globals.column1=globals.combobox_No
	}else{
		if(utils.stringToNumber(fs['segcirculparteanes'])==2){
			globals.column1=globals.combobox_Si
		}else{
			globals.column1='[--]'
		}
	}
	globals.column2='Parte Anestésico completo.';
	globals.column3='';
	globals.column4= '';
	globals.ancho_col0=5;
	globals.ancho_col1=5;
	globals.ancho_col2=88;
	globals.ancho_col3=1;
	globals.ancho_col4=1;
	grabar_tmp()	
	/*
	globals.column0=''
	globals.column1=''
    globals.column2=''
    globals.column3=''
    globals.column4= '       ';
	globals.column4 = 'Informado por: '+globals.apeynom_profes
	globals.ancho_col0=10;
	globals.ancho_col1=10;
	globals.ancho_col2=10;
	globals.ancho_col3=20;
	globals.ancho_col4=50;
	grabar_tmp()
	*/
	html = ''		
	html += '<hr width=100%>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
	html = ''
	return globals.vprocesa= true
	}else{
		return globals.vprocesa = false
	}
	
}

/**
 * @properties={typeid:24,uuid:"67F813FD-C6B2-4A7C-8B4E-29A03C5A1152"}
 */
function grabar_tmp() {
	var html = '';
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=' + globals.ancho_col0 + '% valign="middle" align="left">' + globals.column0 + '</td>'
	html += '<td width=' + globals.ancho_col1 + '% valign="middle" align="left">' + globals.column1 + '</td>'
	html += '<td width=' + globals.ancho_col2 + '% valign="middle" align="left">' + globals.column2 + '</td>'
	html += '<td width=' + globals.ancho_col3 + '% valign="middle" align="left">' + globals.column3 + '</td>'
	html += '<td width=' + globals.ancho_col4 + '% valign="middle" align="left">' + globals.column4 + '</td>'
	html += '</tr>'
	html += '</table>'
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"43951866-E56B-4EC3-A222-B30A49008FE6"}
 */
function grabar_registro() {
	globals.tempHTML = '';
}

/**
 * @properties={typeid:24,uuid:"4522343F-3AA1-45CD-A7AE-986881C12C37"}
 */
function end_of_page() {
	if(globals.lineas_impre<43){
		globals.seguquiHTML1+=globals.tempHTML
	}else{
		if(globals.lineas_impre>42){
			if(globals.seguquiHTML2==''){
				globals.seguquiHTML1+= '</body></html>'
				globals.seguquiHTML2+= '<html><body>'+globals.tempHTML
			}else{
				globals.seguquiHTML2+=globals.tempHTML
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"8D2F0C43-8CFB-4C7D-B24C-37FA59B2A5F9"}
 */
function salto_hoja() {
	// TODO Auto-generated method stub
}
