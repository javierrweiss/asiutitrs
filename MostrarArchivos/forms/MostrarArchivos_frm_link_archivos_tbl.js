
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"13BFB167-F0DD-4169-BED8-FA17BA873627"}
 */
function onAction(event) {
	if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT){ 
		application.showURL(foundset.flink2)
	}
}
