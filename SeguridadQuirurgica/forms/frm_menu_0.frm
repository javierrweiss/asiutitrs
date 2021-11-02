items:[
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.vFechaAhora9",
editable:false,
fontType:"Tahoma,1,12",
format:"dd-MM-yyyy HH:mm",
horizontalAlignment:4,
location:"530,5",
name:"vfecha",
size:"170,20",
transparent:true,
typeid:4,
uuid:"182A1D23-D495-4C41-B3F2-2B3DF2EEDAAC"
},
{
fontType:"Microsoft Sans Serif,1,14",
location:"693,73",
mediaOptions:14,
name:"btn_volveramenu",
onActionMethodID:"B6B8042F-4780-48F5-A229-7949392FAFA7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"164,40",
text:"Volver a Menu",
typeid:7,
uuid:"1EAC3EB2-3727-4EA6-B074-B04C9FDA1A54"
},
{
dataProviderID:"globals.vcodnome",
fontType:"Tahoma,1,12",
foreground:"#000000",
format:"##,##,##|#(6)",
horizontalAlignment:0,
location:"275,138",
name:"vcodnome",
onActionMethodID:"-1",
onDataChangeMethodID:"AF203846-F459-47EC-94EB-4A36ABCE7F35",
selectOnEnter:true,
size:"81,20",
typeid:4,
uuid:"1EC99955-AE1B-4226-BBCE-F305E19054FC"
},
{
dataProviderID:"vcodnome_to_tbc_nomencla.nome_descr",
editable:false,
fontType:"Arial,1,12",
location:"366,138",
name:"icod_descrcod",
size:"373,20",
typeid:4,
uuid:"24AAF1CF-1F0D-4114-A9E7-4A971B50A42A"
},
{
height:588,
partType:5,
typeid:19,
uuid:"3CAEF728-A214-4D1C-95C0-11D5ABCE8DF7"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"10,82",
mediaOptions:14,
size:"80,20",
tabSeq:-1,
text:"Hist. Clínica: ",
transparent:true,
typeid:7,
uuid:"4B84D075-CEB0-43CC-9F6B-5C95BD3CFD3F"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"26,138",
mediaOptions:14,
name:"lbl_cirugia",
size:"51,20",
text:"Cirugia:",
transparent:true,
typeid:7,
uuid:"4F5EC808-ED71-4A69-8AC3-CAEA166041F2"
},
{
anchors:9,
customProperties:"",
formIndex:1,
imageMediaID:"23742171-62C2-4737-8714-0016867B680E",
location:"749,138",
name:"lookup_nomenclador",
onActionMethodID:"4D768331-99A1-43D3-AE33-69AE70DE1574",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
size:"20,20",
transparent:true,
typeid:7,
uuid:"64D88202-F476-4E99-B79B-2A4556463D18"
},
{
dataProviderID:"vhiscli_to_tbc_admision.adm_apelnom",
editable:false,
enabled:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"228,83",
name:"adm_apyno",
onDataChangeMethodID:"-1",
size:"219,20",
typeid:4,
uuid:"6EADEF45-5CFD-4A49-A3AB-9B2675F66673"
},
{
dataProviderID:"vhiscli_to_tbc_admision.adm_habita",
editable:false,
enabled:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"533,82",
name:"adm_habita",
size:"40,20",
typeid:4,
uuid:"80A12FEB-FC66-4CEF-8363-5A64A9056ECB"
},
{
fontType:"Verdana,1,22",
foreground:"#000000",
horizontalAlignment:2,
location:"410,34",
margin:"0,10,0,0",
size:"320,32",
text:"Seguridad Quirúrgica",
transparent:true,
typeid:7,
uuid:"868E69A6-021C-4742-870B-0BE2AA7F4E4A"
},
{
dataProviderID:"vhiscli_to_tbc_admision.tbc_admision2_to_tbc_obras.obr_razonsoc",
editable:false,
enabled:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"81,108",
name:"obr_nombre",
size:"348,20",
typeid:4,
uuid:"98DFDC10-CC3E-4B20-B08A-AA2BF7D1BE45"
},
{
dataProviderID:"globals.vservicio",
displayType:2,
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"78,138",
name:"vservicio",
onActionMethodID:"-1",
onDataChangeMethodID:"8A16EBFC-38F1-4257-80C5-106A1FECAB0D",
onFocusLostMethodID:"-1",
size:"189,20",
typeid:4,
uuid:"B31DEA03-E6B1-4115-9364-0871A48A65A7",
valuelistID:"64EFBA7B-3137-4458-95AF-D493C8997A81"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"10,107",
mediaOptions:14,
name:"lbl_cobertura",
size:"70,20",
tabSeq:-1,
text:"Cobertura:",
transparent:true,
typeid:7,
uuid:"B8A02E7D-D02A-46DB-9F4B-8646AFA064C6"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"462,82",
mediaOptions:14,
name:"lbl_habita",
size:"70,20",
tabSeq:-1,
text:"Habitación:",
transparent:true,
typeid:7,
uuid:"C269C8D5-8797-4F72-97E6-F29CCD2700B6"
},
{
anchors:13,
borderType:"EtchedBorder,0,null,null",
formIndex:2,
items:[
{
containsFormID:"BA18855E-E5EB-47F9-805A-53285EBA5C0B",
location:"34,233",
relationName:"vs_to_tbc_seguqui_new",
text:"Circulante Antes Cirugia",
typeid:15,
uuid:"0270462D-A84A-4B7F-889D-835CEF291F64"
},
{
containsFormID:"BB8DC6EB-D2D1-477E-B7EF-8196FAF996CD",
location:"64,271",
relationName:"vs_to_tbc_seguqui_new",
text:"Anestesiologo Antes Cirugia",
typeid:15,
uuid:"0510D90D-EC7D-4F2F-90F6-18CA9628E250"
},
{
containsFormID:"624587D0-5D0B-42A8-A95A-11C1A5A143D7",
location:"117,309",
relationName:"vs_to_tbc_seguqui_new",
text:"Cirujano Antes Cirugia",
typeid:15,
uuid:"26AA9AA9-21E0-4EE7-8CFC-B7A951200E37"
},
{
containsFormID:"64497729-CEDE-4297-810D-1CDEE0C7E638",
location:"577,547",
relationName:"vs_to_tbc_seguqui_new",
text:"frm_dcirculante_new",
typeid:15,
uuid:"761CFD99-A395-4EA3-99F1-21AD3CE24BB1"
},
{
containsFormID:"C959C8C8-4DDF-4B66-BE4D-F1C4ECE28BF6",
location:"322,446",
relationName:"vs_to_tbc_seguqui_new",
text:"frm_dcirujano_new",
typeid:15,
uuid:"7C8B6CC9-D740-46FE-9BF4-B9895C269D35"
},
{
containsFormID:"B92B4869-6312-48F3-B7B6-433D1B38BF42",
location:"185,351",
relationName:"vs_to_tbc_seguqui_new",
text:"Equipo Antes Cirugia",
typeid:15,
uuid:"80F44BBD-84AD-4613-B443-83BA2B36954B"
},
{
containsFormID:"3B2D5B9D-22CA-450F-989B-12D41D8713A9",
location:"14,193",
relationName:"vs_to_tbc_seguqui_new",
text:"Menu de Opciones",
typeid:15,
uuid:"88DCE7D4-807C-4604-A586-091E2F030E7F"
},
{
containsFormID:"CA3BA423-E34C-46C3-9417-47E6711ADF34",
location:"421,513",
relationName:"vs_to_tbc_seguqui_new",
text:"frm_dinstrumentadora_new",
typeid:15,
uuid:"8E2211CC-2A9B-4BCA-B623-DE2EDE6E9D7F"
},
{
containsFormID:"A26C389D-DEBE-462B-94D2-48E1E099D1BA",
location:"236,408",
relationName:"vs_to_tbc_seguqui_new",
text:"Antes de la Incisión\r
",
typeid:15,
uuid:"B842C790-A09E-4B4D-A5B3-85770D00D50E"
},
{
containsFormID:"B887174B-4ACD-4654-8E12-24D452FC0E5F",
location:"374,480",
relationName:"vs_to_tbc_seguqui_new",
text:"frm_danestesiologo_new",
typeid:15,
uuid:"C1E91438-78AA-40E1-9CBB-68D69787C68D"
}
],
location:"5,168",
name:"tabless_opciones",
printable:false,
size:"844,414",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"C3667374-F992-47DE-B2F5-D7657AE35B18"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"169,82",
mediaOptions:14,
name:"lbl_paciente",
size:"60,20",
tabSeq:-1,
text:"Paciente:",
transparent:true,
typeid:7,
uuid:"D3DEA375-4F90-4872-9E71-3663DABCBA59"
},
{
dataProviderID:"vhiscli_to_tbc_admision.hiscli4",
editable:false,
enabled:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"87,82",
name:"vhiscli",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"80,20",
toolTipText:"Ingrese el numero de Historia Clínica.",
typeid:4,
uuid:"E51ECD3F-530D-464A-8B69-E2D9033595B4"
},
{
dataProviderID:"vhiscli_to_tbc_admision.adm_cama",
editable:false,
enabled:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"635,82",
name:"adm_cama",
size:"30,20",
typeid:4,
uuid:"E7F50A39-86EB-4E61-9DA3-2E232CA62A05"
},
{
imageMediaID:"97E0E77B-A2D4-4886-866B-60FA2A9917B2",
location:"2,0",
mediaOptions:4,
size:"398,67",
text:"type",
transparent:true,
typeid:7,
uuid:"ED14E418-756F-43D1-919A-F614EEF960AD"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"588,82",
mediaOptions:14,
name:"lbl_cama",
size:"50,20",
tabSeq:-1,
text:"Cama:",
transparent:true,
typeid:7,
uuid:"FEE9EE2B-F0E6-4683-8A85-6931EBF4CEFA"
}
],
name:"frm_menu_0",
navigatorID:"-2",
onLoadMethodID:"F1E468BF-79EA-4E88-A4FA-D23585349167",
onShowMethodID:"4414AB39-0EE5-43A4-932E-3D84D6ED764A",
paperPrintScale:100,
showInMenu:true,
size:"859,588",
styleName:"Sanatorio",
typeid:3,
uuid:"E7607FBD-8B54-4D4B-940C-780FA11148CB"