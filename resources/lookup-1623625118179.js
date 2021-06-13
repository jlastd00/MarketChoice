(function(window, undefined) {
  var dictionary = {
    "8d4a0c23-921f-4c93-8e7a-c212bb932fe4": "ConfigCuentaRepartidor",
    "088ab471-5123-4c92-a931-3f616e5698bc": "ConfigCuentaComprador",
    "ae4799e6-dd3c-4088-b167-f31698a1c74c": "MenuRepartidor",
    "77661f97-4ff8-4d92-a4b7-9ff18f5f84e1": "MenuComprador",
    "c0ae25bf-661d-46c2-b7c1-ffcc957ee52e": "MenuVendedor",
    "4af6f99c-4389-4d54-8a0c-ea254ae137bb": "RecPassword",
    "589f8001-0047-4ad9-b695-7ddbd1231694": "ConfigCuentaVendedor",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "PantallaPrincipal",
    "1f2ab872-049a-4439-9889-7b88ff25e294": "Registro",
    "2b278545-d581-44d7-a5ce-fabcbcdf8515": "NuevoPedido",
    "bd7692cd-983f-4c79-a3bd-25ddf3a667f4": "NuevoProducto",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);