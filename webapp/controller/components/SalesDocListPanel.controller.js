sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
 ], (Controller, Filter, FilterOperator) => {
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
       },

       onFilterSalesDocs: function(oEvent) {
         // build filter array
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("SalesDoc", FilterOperator.Contains, sQuery));
			}

			// filter binding
			const oList = this.byId("salesDocsList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
       }



    });
 });