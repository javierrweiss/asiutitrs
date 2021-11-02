/**
 * @properties={type:12,typeid:36,uuid:"DFAA422F-5B3C-463F-BACB-4967E2A3A0F2"}
 */
function codigo()
{
	var ed_codigo = apde_codnom.toString()
	ed_codigo = ed_codigo.substr(0,2)+'.'+ed_codigo.substr(2,2)+'.'+ed_codigo.substr(4,2)
	return ed_codigo;
}

/**
 * @properties={type:12,typeid:36,uuid:"C0C698E4-EAB8-4545-B1D7-EC714B27CD53"}
 */
function tiene_obs()
{
	var sino=''
	if(apde_observa==1){
		sino='Si'
	}else{
		sino='No'
	}
	return sino;
}
