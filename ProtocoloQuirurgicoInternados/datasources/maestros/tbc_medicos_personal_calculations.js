/**
 * @properties={type:12,typeid:36,uuid:"E8BDBE57-713A-410D-8288-CE03BC2200C6"}
 */
function tipo1()
{
	var tipo='';
	switch (medpertipoie){
		case 0:tipo='Int.';break;
		case 1:tipo='Ext.';break;
	}
	return tipo;
}

/**
 * @properties={type:12,typeid:36,uuid:"74DA4561-CE3B-49BA-9E09-7AE9928777A2"}
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
