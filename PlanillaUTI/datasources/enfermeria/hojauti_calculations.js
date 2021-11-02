/**
 * @properties={type:12,typeid:36,uuid:"F5537D6D-8E0C-4EC9-9547-1DE4669DDB16"}
 */
function crono_edit()
{
	var hidrata = new Array("ninguno","Vía Oral","Vía Enteral","Vía Parenteral")
	var expansion = new Array("ninguna","Sol.Fisio","Ringer L.","Voluven","Haemaccel","Albumina")
	var sangre = new Array("ninguno","Glóbulos Rojos","Plasma","Plaquetas")
	var alimentacion = new Array("ninguno","Enteral","Parenteral")
	var diuresis = new Array("ninguno","Pañal","Cateter","Sonda Vesical")
	var crono_ed;
	switch (globals.vMostrarCampo){
		case 'param_ta_max':crono_ed='Máxima: '+param_ta_max+'     Mínima: '+param_ta_min;break;
		case 'param_ta_min':crono_ed='Máxima: '+param_ta_max+'     Mínima: '+param_ta_min;break;
		case 'param_fc':crono_ed='Frecuencia Cardíaca: '+param_fc;break;
		case 'param_fr':crono_ed='Frecuencia Respiratoria: '+param_fr;break;
		case 'param_temper':crono_ed='Temperatura: '+param_temper+'º';break;
		case 'param_hgt':crono_ed='Hemoglucotest: '+param_hgt;break;
		case 'param_glasgow':crono_ed='Glasgow: '+param_glasgow;break;
		case 'param_sat':crono_ed='SAT: '+param_sat;break;
		case 'param_ppc':crono_ed='PPC: '+param_ppc+'    TAM: '+param_tam+'    PIC: '+param_pic;break;
		case 'param_pvc':crono_ed='PVC: '+param_pvc;break;
		case 'param_co2':crono_ed='CO2: '+param_co2;break;
		case 'bal_ing_hidrata_tipo':crono_ed='Tipo de Hidratación: '+hidrata[bal_ing_hidrata_tipo]+'     Cantidad: '+bal_ing_hidrata_cant+'   Dilución: '+bal_ing_dilucion;break;
		case 'bal_ing_expansion_tipo':crono_ed='Tipo de Expansión: '+expansion[bal_ing_expansion_tipo]+'     Cantidad: '+bal_ing_expansion_cant;break;
		case 'bal_ing_sangre_tipo':crono_ed='Sangre y Derivados: '+sangre[bal_ing_sangre_tipo]+'     Cantidad: '+bal_ing_sangre_cant;break;
		case 'bal_ing_alimen_tipo':crono_ed='Tipo de Alimentación: '+alimentacion[bal_ing_alimen_tipo]+'     Cantidad: '+bal_ing_alimen_cant;break;
		case 'bal_egr_diuresis_tipo':crono_ed='Tipo de Diurésis: '+diuresis[bal_egr_diuresis_tipo]+'     Cantidad: '+bal_egr_diuresis_cant;break;
		default:crono_ed='';break;
	}
	return crono_ed;
}

/**
 * @properties={type:12,typeid:36,uuid:"21967A94-EEA6-470E-96B4-8370784698B7"}
 */
function hora_edit()
{
	var ed_hora = hora.toString()
	if (ed_hora.length>3){
		ed_hora=ed_hora.substr(0,2)+':'+ed_hora.substr(2,2)
	}else{
		if(ed_hora.length==1){
			ed_hora='00:0'+ed_hora.substr(0,1)
		}else{
		ed_hora='0'+ed_hora.substr(0,1)+':'+ed_hora.substr(1,2)
		}
	}
	return ed_hora;
}

/**
 * @properties={type:12,typeid:36,uuid:"C7EAFC53-8785-4CE7-9513-4993144EA0A2"}
 */
function fecha_edit()
{
	var ed_fecha = fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear()
	//ed_fecha = ed_fecha.substr(6,2)+'/'+ed_fecha.substr(4,2)+'/'+ed_fecha.substr(0,4);
	return ed_fecha;
}
