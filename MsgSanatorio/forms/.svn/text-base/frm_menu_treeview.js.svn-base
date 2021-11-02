/**
 * @properties={typeid:24,uuid:"582D72E5-356E-4EF9-BB7C-7BCA4624E2C9"}
 */
function initTreeView(){		
	elements.treeview.onNodeClicked(onNodeClicked)	
} 

/**
 * @properties={typeid:24,uuid:"16827630-56AA-46DB-A3DE-6A9EFD170BC9"}
 */
function onNodeClicked()
{
	forms.frm_menu_treeview.elements.treeview.setColumnWidth('treeColumn', 350)
	var row = getRowForId(arguments[0])	
	if(row > -1){
	    var $solucion      = forms.frm_menu.frm_ds2.getValue(row, 6)
	    var $parametro_sol = forms.frm_menu.frm_ds2.getValue(row, 7)	
		
	    if ($solucion != null){
	    	
	    	// buscar los elementos expandidos
	    	globals.gbl_expanding_Nodes = new Array()
	    	var $max = forms.frm_menu.frm_ds2.getMaxRowIndex() + 5				        
		    for(var j=0;j< $max ;j++){		    	
			    if(elements.treeview.isNodeExpanded(j)== true){				   
			    	globals.gbl_expanding_Nodes[j]= j
				}else{
					globals.gbl_expanding_Nodes[j]= 0
				}					
		    }
	        var $args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+$parametro_sol+';'+globals.vEmpresa
		             +';'+globals.gbl_expanding_Nodes 
			if(utils.stringTrim($solucion)=='AsiCirTrs_ProtAmbu'||utils.stringTrim($solucion)=='AtencionConsultorio'||utils.stringTrim($solucion)=='Palabint'){
				application.closeSolution(utils.stringTrim($solucion),'llamada_a_'+utils.stringTrim($solucion),$args)
			}else{
				application.closeSolution(utils.stringTrim($solucion),'llamada_desde_Menu',$args)
			}
		}
	}	
}
/**
 * @properties={typeid:24,uuid:"00506B50-9AEF-44B1-8E3A-2232A2D3B45A"}
 */
function getRowForId()
{
	// find the dataset row for the argument id
	for (var i = 2; i <= forms.frm_menu.frm_ds2.getMaxRowIndex(); i++)
	{
		var row = forms.frm_menu.frm_ds2.getRowAsArray(i);
		if(arguments[0] == row[0])
		{
			return i;
		}
	}
	
	return -1;
}

