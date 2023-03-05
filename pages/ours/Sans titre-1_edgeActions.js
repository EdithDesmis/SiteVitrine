/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver 
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la 
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipsetete}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         sym.play("tete");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipsebrasD}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         sym.play("brasD");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipsebrasG}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         sym.play("brasG");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipsejambeD}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         sym.play("jambeD");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipsejambeG}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         sym.play("jambeG");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipsesaut}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         sym.play("saut");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-2529660");