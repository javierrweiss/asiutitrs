/**
 * @properties={type:12,typeid:36,uuid:"64E5B045-F48D-47AF-80D8-76F62E97F9C1"}
 */
function medperesp1()
{
	var estado='';
	if (medperfechabaja == 0){
		estado='Activo'
	}else{
		estado='Baja'
	}
	return estado;
}

/**
 * @properties={type:12,typeid:36,uuid:"5305DFC8-B56E-4BB3-B0C5-525DEEF095A3"}
 */
function tipo1()
{
	var tipo='';
	switch (medpertipoie){
		case 0:tipo='Interno';break;
		case 1:tipo='Externo';break;
	}
	return tipo;

}

/**
 * @properties={type:12,typeid:36,uuid:"67847EAF-E6A1-419A-95D4-FFDEB693BF2A"}
 */
function legajo1()
{
	var aux_dig = new Array(5);
	if(medpercod.toString().length==2){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = medpercod.toString().substr(0,1);
		aux_dig[4] = medpercod.toString().substr(1,1);
	}else{
		if (medpercod.toString().length==3){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = medpercod.toString().substr(0,1);
			aux_dig[3] = medpercod.toString().substr(1,1);
			aux_dig[4] = medpercod.toString().substr(2,1);
		}else{
			if(medpercod.toString().length==4){
				aux_dig[0] = 0
				aux_dig[1] = medpercod.toString().substr(0,1);
				aux_dig[2] = medpercod.toString().substr(1,1);
				aux_dig[3] = medpercod.toString().substr(2,1);
				aux_dig[4] = medpercod.toString().substr(3,1);
			}else{
				if(medpercod.toString().length==5){
					aux_dig[0] = medpercod.toString().substr(0,1);
					aux_dig[1] = medpercod.toString().substr(1,1);
					aux_dig[2] = medpercod.toString().substr(2,1);
					aux_dig[3] = medpercod.toString().substr(3,1);
					aux_dig[4] = medpercod.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	var digito_verificador = 0;
	if(medpertipoie==0){
		verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	}
	switch (verificador.toString().length){
	case 1:digito_verificador=verificador;break;
	case 2:digito_verificador=verificador.toString().substr(1,1);break;
	case 3:digito_verificador=verificador.toString().substr(2,1);break;
	}
	switch (medpercod.toString().length){
		case 2:return aux_dig[3]+aux_dig[4]+'/'+digito_verificador;break;
		case 3:return aux_dig[2]+aux_dig[3]+aux_dig[4]+'/'+digito_verificador;break;
		case 4:return aux_dig[1]+aux_dig[2]+aux_dig[3]+aux_dig[4]+'/'+digito_verificador;break;
		case 5:return aux_dig[0]+aux_dig[1]+aux_dig[2]+aux_dig[3]+aux_dig[4]+'/'+digito_verificador;break;
		default:return aux_dig[0]+aux_dig[1]+aux_dig[2]+aux_dig[3]+aux_dig[4]+'/'+digito_verificador;break;
	}

}
