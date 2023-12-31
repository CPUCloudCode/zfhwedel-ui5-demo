sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.SalesDocDetail", {
        onInit: function () {
            // Do some init stuff
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("SalesDocDetail").attachPatternMatched(this.onObjectMatched, this);
        },
        onObjectMatched(oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").salesDocPath),
				model: "salesDocs"
			});
		},
        onNavBack: function() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if(sPreviousHash !== "undefined") {
                window.history.go(-1);
            } else {
                const oRouter = this.getOwnerComponent.getRouter();
                oRouter.navTo("RouteMain", {}, true);
            }
        }

    });
});