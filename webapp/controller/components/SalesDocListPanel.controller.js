sap.ui.define([
    "sap/ui/core/mvc/Controller",
 ], (Controller) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.components.SalesDocListPanel", {
       onInit: function() {
          // Do some init stuff
          
       },
       showDetails: function(oEvent) {
         // Get selected element
         const oItem = oEvent.getSource()
         // Get Router from Component.js
         const oRouter = this.getOwnerComponent().getRouter();
         // Nav to detail page (Use name of route)
			oRouter.navTo("SalesDocDetail", {
            salesDocPath: window.encodeURIComponent(oItem.getBindingContext("salesDocs").getPath().substr(1))
         });
       }
    });
 });