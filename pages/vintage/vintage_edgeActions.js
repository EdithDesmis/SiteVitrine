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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Alice'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseover", function(sym, e) {
         // insérer le code à exécuter lorsque vous survolez l'objet à l'aide de la souris
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseout", function(sym, e) {
         // insérer le code à exécuter lorsque vous déplacez le pointeur de la souris de l'objet
         sym.playReverse();
         

      });
      //Edge binding end

   })("Alice");
   //Edge symbol end:'Alice'

   //=========================================================
   
   //Edge symbol: 'Alice_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseover", function(sym, e) {
         // insérer le code à exécuter lorsque vous survolez l'objet à l'aide de la souris
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseout", function(sym, e) {
         // insérer le code à exécuter lorsque vous déplacez le pointeur de la souris de l'objet
         sym.playReverse();
         

      });
      //Edge binding end

   })("Marina");
   //Edge symbol end:'Marina'

   //=========================================================
   
   //Edge symbol: 'Marina_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseover", function(sym, e) {
         // insérer le code à exécuter lorsque vous survolez l'objet à l'aide de la souris
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseout", function(sym, e) {
         // insérer le code à exécuter lorsque vous déplacez le pointeur de la souris de l'objet
         sym.playReverse();
         

      });
      //Edge binding end

   })("Chloe");
   //Edge symbol end:'Chloe'

   //=========================================================
   
   //Edge symbol: 'Marina_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseover", function(sym, e) {
         // insérer le code à exécuter lorsque vous survolez l'objet à l'aide de la souris
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "mouseout", function(sym, e) {
         // insérer le code à exécuter lorsque vous déplacez le pointeur de la souris de l'objet
         sym.playReverse();
         

      });
      //Edge binding end

   })("marilyne");
   //Edge symbol end:'marilyne'

})(jQuery, AdobeEdge, "EDGE-16445984");