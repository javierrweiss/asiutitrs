/**
 * @properties={type:12,typeid:36,uuid:"BDF363DE-6B07-46A3-8756-4FDA442A73EB"}
 */
function nroimagen_descr()
{
	if (nro_imagen == 0 || nro_imagen == null)
		{return null}
	else
		{return nro_imagen}
}

/**
 * @properties={type:12,typeid:36,uuid:"6BD3DDB7-7E74-41E9-A00E-2953D19A56BA"}
 */
function esp_descrip()
{
	if (tipo_atencion == 1)
		{if(tbl_cronoambcab_to_tbl_tablas13.getSize() == 1)
			{return tbl_cronoambcab_to_tbl_tablas13.tabla_desc}
		else {return ''} 
		}
	if (tipo_atencion == 8 || tipo_atencion == 12 || tipo_atencion == 10)
		{if (tbl_cronoambcab_to_tbc_especial.getSize() == 1)
			{return tbl_cronoambcab_to_tbc_especial.esp_descrip}
		else {return ''}
		}
	return ''
}
