/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D5C2878-B4E7-42C3-B860-F98FC339A93D",variableType:4}
 */
var fcompromiso = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5792693F-E08C-4878-9790-B6CA248F04E8",variableType:4}
 */
var finduccion = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5ADA5C77-2878-47D4-ADBC-C9CC64ECAF44",variableType:4}
 */
var fnotainduccion = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3C5242ED-1C1E-4DF1-A555-A223E8D6E532",variableType:4}
 */
var f421 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"12BF687C-27E8-45CB-8258-EEBDF6CEDAB7",variableType:4}
 */
var f411 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8D167B89-7AF3-4371-9A0E-40FA45F8116E",variableType:4}
 */
var f559 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"39AFB661-A7FC-4BA5-A216-738F733FEEBD",variableType:4}
 */
var f412 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A73D6619-65DF-45D7-96F3-5453A727E5FC",variableType:4}
 */
var f2681 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"565BD201-C4C5-49F2-92CB-D3A8F6C9AF62",variableType:4}
 */
var f393 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CEF21FB1-7934-45EA-B121-BEF5F410B4C7",variableType:4}
 */
var f2679 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B1AC235-654C-4952-857F-847E3FC02C8A",variableType:4}
 */
var f2682 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"097E035A-6BD9-435D-8ABF-01F7EF6B64B3",variableType:4}
 */
var f2650 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B40A2739-196B-449E-A343-95C9F90AB272",variableType:4}
 */
var f2660 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BAD40C6E-3FE5-482C-8CA7-5ACFB54C66C6",variableType:4}
 */
var f2663 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"296596BA-594B-4F0C-A279-838DB905F557",variableType:4}
 */
var f2318 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DAF25CA6-BF3C-41CB-9831-F75EB2F2F96B",variableType:4}
 */
var f392 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A0AC6268-FBFE-43AC-B0C6-D5A0F661F379",variableType:4}
 */
var f2601 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"208EB736-8F44-485B-A1BE-84F1BAB48396",variableType:4}
 */
var f2740 = 0;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD5E67A7-D798-45A2-B6EA-EE2C8215BF3F"}
 */
function onAction_btn_sel_todos(event) {
	if(globals.selec_deselec){
		f559=0
		f411=0
		f412=0
		f2681=0
		f393=0
		f2679=0
		f2682=0
		f2650=0
		f2660=0
		f2663=0
		f2318=0
		f2601=0
		f2740=0
		f392=0
		fcompromiso=0
		finduccion=0
		f421=0
		globals.selec_deselec=false
	}else{
		f559=1
		f411=1
		f412=1
		f2681=1
		f393=1
		f2679=1
		f2682=1
		f2650=1
		f2660=1
		f2663=1
		f2318=1
		f2601=1
		f2740=1
		f392=1
		fcompromiso=1
		finduccion=1
		f421=1
		globals.selec_deselec=true
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"554BCAA9-BD9A-4360-BC28-F12A740DCE07"}
 */
function onHide_frm_sel_reglamentos(event) {
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E24A3881-DE6F-4D1A-8993-EEC062FFBC84"}
 */
function onAction_btn_imprime_reglamentos(event) {
	if(f559==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-0559';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_29';
		forms.impr_rtf_29.frm_prog='pr-559'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo='* Datos Maestros del Empleado *'
		forms.impr_rtf_29.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_29.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_29.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
		forms.impr_rtf_29.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_rtf_29.frm_nro_cuil=legajo_to_tbc_personal_rrhh.per_106.toString().substr(0,2)+'-'+legajo_to_tbc_personal_rrhh.per_106.toString().substr(2,8)+'-'+legajo_to_tbc_personal_rrhh.per_106.toString().substr(10,1)
		forms.impr_rtf_29.frm_afjp='REPARTO'
		forms.impr_rtf_29.frm_categ=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
		forms.impr_rtf_29.frm_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
		forms.impr_rtf_29.frm_fec_nac=legajo_to_tbc_personal_rrhh.per_9.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_9.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_9.toString().substr(0,4)
		forms.impr_rtf_29.frm_sexo=application.getValueListDisplayValue('vl_Sexo',legajo_to_tbc_personal_rrhh.per_6)
		forms.impr_rtf_29.frm_nacion=application.getValueListDisplayValue('vl_nacionalidad',legajo_to_tbc_personal_rrhh.per_37)
		forms.impr_rtf_29.frm_estcivil=application.getValueListDisplayValue('vl_estado_civil',legajo_to_tbc_personal_rrhh.per_26)
		forms.impr_rtf_29.frm_tipo_liq=application.getValueListDisplayValue('vl_tipo_liquidacion',legajo_to_tbc_personal_rrhh.per_18)
		forms.impr_rtf_29.frm_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
		forms.impr_rtf_29.frm_fec_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_15.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,4)
		forms.impr_rtf_29.frm_fec_fincon=legajo_to_tbc_personal_rrhh.per_13.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_13.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,4)
		if(legajo_to_tbc_personal_rrhh.per_27!=null&&legajo_to_tbc_personal_rrhh.per_27!=''&&legajo_to_tbc_personal_rrhh.per_23!=null&&legajo_to_tbc_personal_rrhh.per_23!=''&&legajo_to_tbc_personal_rrhh.per_23!=0){
			forms.impr_rtf_29.frm_obra=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_obras_pers.obpdescr
			forms.impr_rtf_29.frm_plan=legajo_to_tbc_personal_rrhh.per_27
		}
		forms.impr_rtf_29.frm_fliares=legajo_to_tbc_personal_rrhh.per_108
		forms.impr_rtf_29.frm_cobro=application.getValueListDisplayValue('vl_banco_cobro',legajo_to_tbc_personal_rrhh.per_52)
		forms.impr_rtf_29.frm_cbu=legajo_to_tbc_personal_rrhh.per_55
		if(legajo_to_tbc_personal_rrhh.per_17_8==0){
			forms.impr_rtf_29.frm_vto_libsan='00/00/0000'
		}else{
			forms.impr_rtf_29.frm_vto_libsan=legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(0,4)	
		}
		forms.impr_rtf_29.frm_domic=legajo_to_tbc_personal_rrhh.per_3
		forms.impr_rtf_29.frm_calle1=legajo_to_tbc_personal_rrhh.per_74
		forms.impr_rtf_29.frm_calle2=legajo_to_tbc_personal_rrhh.per_75
		forms.impr_rtf_29.frm_barrio=legajo_to_tbc_personal_rrhh.per_77
		forms.impr_rtf_29.frm_cpostal=legajo_to_tbc_personal_rrhh.per_4
		forms.impr_rtf_29.frm_locali=legajo_to_tbc_personal_rrhh.per_5
		forms.impr_rtf_29.frm_provin=application.getValueListDisplayValue('vl_provincia',legajo_to_tbc_personal_rrhh.per_94)
		forms.impr_rtf_29.frm_asfalto=application.getValueListDisplayValue('vl_sino',legajo_to_tbc_personal_rrhh.per_76)
		forms.impr_rtf_29.frm_domic_alter=legajo_to_tbc_personal_rrhh.per_domic_alter
		forms.impr_rtf_29.frm_calle1_alter=legajo_to_tbc_personal_rrhh.per_calle1_alter
		forms.impr_rtf_29.frm_calle2_alter=legajo_to_tbc_personal_rrhh.per_calle2_alter
		forms.impr_rtf_29.frm_barrio_alter=legajo_to_tbc_personal_rrhh.per_barrio_alter
		forms.impr_rtf_29.frm_cpostal_alter=legajo_to_tbc_personal_rrhh.per_cpostal_alter
		forms.impr_rtf_29.frm_locali_alter=legajo_to_tbc_personal_rrhh.per_locali_alter
		forms.impr_rtf_29.frm_provin_alter=application.getValueListDisplayValue('vl_provincia',legajo_to_tbc_personal_rrhh.per_provin_alter)
		forms.impr_rtf_29.frm_asfalto_alter=application.getValueListDisplayValue('vl_sino',legajo_to_tbc_personal_rrhh.per_asfalto_alter)
		forms.impr_rtf_29.frm_telefono=legajo_to_tbc_personal_rrhh.per_41
		forms.impr_rtf_29.frm_celular=legajo_to_tbc_personal_rrhh.per_celular_area+'-'+legajo_to_tbc_personal_rrhh.per_celular_nro
		forms.impr_2663_1.printRoutine(true);
	}
	if(f411==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-0411';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_25';
		forms.impr_rtf_25.frm_prog='pr-411'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_rtf_25.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_25.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	}
	if(fcompromiso==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_37';
		forms.impr_2663_1.printRoutine(true);
	}
	if(f412==1){
		
		if(legajo_to_tbc_personal_rrhh.per_19!=10){
			for (var j=1;j<=3;j++){
				forms.impr_2663_1.frm_foundset = 'IMPR-412-1-'+j;
				forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
				globals.prn_titulo=='REGLAMENTO INTERNO DEL PERSONAL'
				forms.impr_rtf_45.fhoja='Hoja '+j+' de 4'
				forms.impr_2663_1.printRoutine(true);
			}
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_21_bis';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_44';
			forms.impr_rtf_44.fhoja = 'Hoja 4 de 4'
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			globals.prn_empresa=''
			globals.prn_titulo=='REGLAMENTO INTERNO DEL PERSONAL'
			forms.impr_rtf_21_bis.fecha_impre=null
			forms.impr_rtf_44.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
			forms.impr_rtf_44.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
			forms.impr_rtf_44.frm_categ=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
			forms.impr_rtf_44.frm_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
			forms.impr_rtf_44.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
			forms.impr_2663_1.printRoutine(true);
		}else{
			forms.impr_2663_1.frm_foundset = '0412-1-NOBEL';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			globals.prn_empresa=''
			globals.prn_titulo==''
			forms.impr_rtf_21.fecha_impre=null
			forms.impr_rtf_21.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
			forms.impr_rtf_21.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
			//forms.impr_rtf_21.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
			//forms.impr_rtf_21.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
			forms.impr_rtf_21.frm_leg_dni=legajo_to_tbc_personal_rrhh.per_8
			forms.impr_2663_1.printRoutine(true);
		}
		
		forms.impr_2663_1.frm_foundset = 'IMPR-0412-2';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
		forms.impr_rtf_22.fecha_impre=null
		//forms.impr_rtf_22.frm_prog='pr-412'
		globals.prn_empresa=''
		globals.prn_titulo==''
		forms.impr_2663_1.printRoutine(true);
		
		if(legajo_to_tbc_personal_rrhh.per_19!=10){
			forms.impr_2663_1.frm_foundset = 'IMPR-0412-3';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
			forms.impr_rtf_22.fecha_impre=null
			globals.prn_empresa=''
			globals.prn_titulo==''
			forms.impr_2663_1.printRoutine(true);
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_21_bis';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_46';
			forms.impr_rtf_46.fhoja = ''
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			forms.impr_2663_1.printRoutine(true);
		}else{
			forms.impr_2663_1.frm_foundset = '0412-3-NOBEL';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
			forms.impr_rtf_22.fecha_impre=null
			globals.prn_empresa=''
			globals.prn_titulo==''
			forms.impr_2663_1.printRoutine(true);
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_21_bis';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_47';
			forms.impr_rtf_46.fhoja = ''
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			forms.impr_2663_1.printRoutine(true);
		}
		
	}
	if(finduccion==1){
		if(legajo_to_tbc_personal_rrhh.per_19==11){
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_39';
			globals.prn_titulo=''
			forms.impr_2663_1.printRoutine(true);
		
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_38';
			globals.prn_titulo='INDUCCIÓN DE PERSONAL RECIENTE INGRESO'
			forms.impr_2663_1.printRoutine(true);
		}else{
			if(legajo_to_tbc_personal_rrhh.per_19==11){				
				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_41';
				globals.prn_titulo=''
				forms.impr_2663_1.printRoutine(true);

				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_40';
				globals.prn_titulo='INDUCCIÓN DE PERSONAL RECIENTE INGRESO'
				forms.impr_2663_1.printRoutine(true);
			}else{
				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_43';
				globals.prn_titulo=''
				forms.impr_2663_1.printRoutine(true);

				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_42';
				globals.prn_titulo='INDUCCIÓN DE PERSONAL RECIENTE INGRESO'
				forms.impr_2663_1.printRoutine(true);
				
			}
		}
	}
	if(f2681==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2681';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_24';
		forms.impr_rtf_24.frm_prog='pr-2681'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo='SERVICIO DE MEDICINA DEL TRABAJO'
		forms.impr_rtf_24.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_24.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_24.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
		forms.impr_rtf_24.frm_leg_horario=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_horarios.hor22
		forms.impr_rtf_24.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
		forms.impr_rtf_24.frm_leg_puesto=legajo_to_tbc_personal_rrhh.per_84
		if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto12==1){
			forms.impr_rtf_24.frm_leg_funcion="BECARIO"
		}else{
			forms.impr_rtf_24.frm_leg_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
		}
		forms.impr_rtf_24.frm_leg_fecha_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,04)
		forms.impr_rtf_24.frm_leg_vto_cont=legajo_to_tbc_personal_rrhh.per_13.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,04)
		forms.impr_2663_1.printRoutine(true);
	}
	if(f393==1){
		/*
		forms.impr_2663_1.frm_foundset = 'IMPR-393';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_25';
		forms.impr_rtf_25.frm_prog='pr-393'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo==''
		globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_rtf_25.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_25.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		*/
		
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_34';
		forms.impr_2663_1.printRoutine(true);
	}
	if(f2679==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2679';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_24';
		forms.impr_rtf_24.frm_prog='pr-2679'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo="EVALUACIÓN DEL PERSONAL"
		forms.impr_rtf_24.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_24.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_24.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
		forms.impr_rtf_24.frm_leg_horario=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_horarios.hor22
		forms.impr_rtf_24.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
		forms.impr_rtf_24.frm_leg_puesto=legajo_to_tbc_personal_rrhh.per_84
		if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto12==1){
			forms.impr_rtf_24.frm_leg_funcion="BECARIO"
		}else{
			forms.impr_rtf_24.frm_leg_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
		}
		forms.impr_rtf_24.frm_leg_fecha_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,04)
		forms.impr_rtf_24.frm_leg_vto_cont=legajo_to_tbc_personal_rrhh.per_13.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,04)
		forms.impr_2663_1.printRoutine(true);
	}
	if(f421==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_35';
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=''
		forms.impr_rtf_35.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_35.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
		
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_36';
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=''
		forms.impr_rtf_36.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_36.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	}
	
	if(f2682==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2682';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_26';
		forms.impr_rtf_26.frm_prog='pr-2682'
		globals.prn_titulo==''
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_rtf_26.frm_titulo = 'PEDIDO DE UNIFORME'
		forms.impr_rtf_26.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_26.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	}
	if(f2650==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2650';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_27';
		forms.impr_rtf_27.frm_prog='pr-2650'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		switch(legajo_to_tbc_personal_rrhh.per_19){
			case 1:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
			       forms.impr_rtf_27.frm_domicilio='Conde 851 Edificio Administrativo 1er. Piso';
			       forms.impr_rtf_27.frm_representante='Horacio Eduardo González';
			       forms.impr_rtf_27.frm_documento_repres='4.387.719';
			       break;
			case 4:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
					forms.impr_rtf_27.frm_domicilio='Av. Federico Lacroze 3225';
		       		forms.impr_rtf_27.frm_representante='Carlos Fernando Gini';
		       		forms.impr_rtf_27.frm_documento_repres='14.768.164';
		       		break;       
			case 9:forms.impr_rtf_27.frm_empresa='Centro Integral de Resonancia S.A.'
					forms.impr_rtf_27.frm_domicilio='Tomas Le Breton 4540 Piso 3 "C"';
					forms.impr_rtf_27.frm_representante='Eduardo Zalis';
					forms.impr_rtf_27.frm_documento_repres='30.278.199';
		            break;
			case 10:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
					forms.impr_rtf_27.frm_domicilio='Conde 815';
					forms.impr_rtf_27.frm_representante='María Teresa Abal';
					forms.impr_rtf_27.frm_documento_repres='93.700.014';
					break;    
			case 11:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
					forms.impr_rtf_27.frm_domicilio='Conde 849';
					forms.impr_rtf_27.frm_representante='Juan Pablo González';
					forms.impr_rtf_27.frm_documento_repres='22.179.240';
					break;       		         
		}
		forms.impr_rtf_27.frm_sexo=legajo_to_tbc_personal_rrhh.per_6
		forms.impr_rtf_27.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_27.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_27.frm_leg_dni=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_rtf_27.frm_leg_dom=legajo_to_tbc_personal_rrhh.per_3
		forms.impr_rtf_27.frm_leg_local=legajo_to_tbc_personal_rrhh.per_5
		forms.impr_2663_1.printRoutine(true);
	}
	if(f2660==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2660';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_28';
		forms.impr_rtf_28.frm_prog='pr-2660'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=" "
		forms.impr_rtf_28.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_28.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_28.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
		forms.impr_rtf_28.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_2663_1.printRoutine(true);
	}
	if(f2663==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2663-1';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_33';
		forms.impr_rtf_33.frm_prog='pr-2663'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo==''
		forms.impr_rtf_33.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_33.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_33.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
		forms.impr_rtf_33.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_2663_1.printRoutine(true);
		/*
		forms.impr_2663_1.frm_foundset = 'IMPR-2663-2';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22_bis';
		globals.prn_titulo=''
		globals.prn_empresa=''
		forms.impr_rtf_22_bis.fecha_impre=null
		forms.impr_rtf_22_bis.frm_prog=''
		forms.impr_2663_1.printRoutine(true);
		*/
		for (var k=1;k<=9;k++){
			forms.impr_2663_1.frm_foundset = 'IMPR-2663-3-'+k;
			forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			forms.impr_rtf_45.fhoja='Hoja '+k+' de 9'
			forms.impr_2663_1.printRoutine(true);
		}
	}
	if(f2318==1){
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_31';
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=' Estructura de Sueldos'
		forms.impr_rtf_31.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_31.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_31.frm_tipo_liq=legajo_to_tbc_personal_rrhh.per_18+'  '+application.getValueListDisplayValue('vl_tipo_liquidacion',legajo_to_tbc_personal_rrhh.per_18)
		forms.impr_rtf_31.frm_tipo_estruc='3  por Puesto ('+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22+' / '+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2+')'
		forms.impr_rtf_31.frm_puesto=legajo_to_tbc_personal_rrhh.per_84
		globals.vtipo_liquidacion=legajo_to_tbc_personal_rrhh.per_18
		globals.vtipo_estructura=3
		globals.vPuesto=legajo_to_tbc_personal_rrhh.per_84
		if(vs_to_tbc_s_estruct.getSize()>0){
			var name6='sestr6_'
			var name7='sestr7_'
			var name8='sestr8_'
			var total_gral=0
			for(var i=1;i<=30;i++){
				if(vs_to_tbc_s_estruct[name6+i]!=0){
					forms.impr_rtf_31.fcod[i]=vs_to_tbc_s_estruct[name6+i]
					globals.vConcepto=vs_to_tbc_s_estruct[name6+i]
					forms.impr_rtf_31.fdescri[i]='&nbsp;&nbsp; '+vconcepto_to_tbc_conc.conc22
					if(vs_to_tbc_s_estruct[name7+i]>0){
						if(legajo_to_tbc_personal_rrhh.per_18==2){
							forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
							total_gral=total_gral+(vs_to_tbc_s_estruct[name8+i])
						}else{
							forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name7+i]*vs_to_tbc_s_estruct[name8+i],'###,##0.00')
							total_gral=total_gral+(vs_to_tbc_s_estruct[name7+i]*vs_to_tbc_s_estruct[name8+i])
						}
						forms.impr_rtf_31.fcanti[i]=vs_to_tbc_s_estruct[name7+i]
					}else{
						forms.impr_rtf_31.fcanti[i]=''
						forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
						total_gral=total_gral+(vs_to_tbc_s_estruct[name8+i])
					}
					forms.impr_rtf_31.funi[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
				}else{
					forms.impr_rtf_31.fcod[i]=''
					forms.impr_rtf_31.fdescri[i]=''
					forms.impr_rtf_31.fcanti[i]=''
					forms.impr_rtf_31.funi[i]=''
					forms.impr_rtf_31.fimp[i]=''	
				}
			}
		}
		forms.impr_rtf_31.ftotal_gral=utils.numberFormat(total_gral,'###,###.00')
		forms.impr_rtf_31.frm_prog='pr-2318'
		forms.impr_2663_1.printRoutine(true);
	}
	if(f392==1&&(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ1==10||legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ1==19)){
		forms.impr_2663_1.frm_foundset = 'IMPR-0392-1';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
		forms.impr_rtf_22.frm_prog='pr-392'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo==''
		forms.impr_2663_1.printRoutine(true);
		
		forms.impr_2663_1.frm_foundset = 'IMPR-0392-2';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
		forms.impr_rtf_22.frm_prog='pr-392'
		globals.prn_titulo==''
		forms.impr_2663_1.printRoutine(true);
		
	}
	
	
	
	if(f2601==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2601';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_23';
		forms.impr_rtf_23.frm_prog='pr-2601'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=''
		forms.impr_rtf_23.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_23.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	}
	if(f2740==1){
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_30';
		forms.impr_rtf_30.frm_prog='pr-2740'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=' ENTREGA DE ROPA Y ELEMENTOS DE PROTECCION PERSONAL'
		forms.impr_rtf_30.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_30.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	}
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79D6F362-FB1E-4430-861C-08BDA7AC0E42"}
 */
function onShow_frm_sel_reglamentos(firstShow, event) {
	if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ1==10 || legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ1==19){
		elements.chk_f392.visible=true
		f392=1
	}else{
		elements.chk_f392.visible=false
		f392=0
	}
}
