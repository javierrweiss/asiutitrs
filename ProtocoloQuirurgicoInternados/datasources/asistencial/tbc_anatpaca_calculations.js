/**
 * @properties={type:12,typeid:36,uuid:"6CBDAA0A-04FA-4AA9-B575-3FCAFABC5860"}
 */
function fechasolic()
{
	var fecsol = apca_fecsolic_3.toString();
	fecsol = fecsol.substr(6,2)+'/'+fecsol.substr(4,2)+'/'+fecsol.substr(0,4);
	return fecsol;
}
