sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("zfhwedel.salesFreestyle.zfhwedelui5demo.controller.Main", {
            // Called when view is initialized
            onInit: function () {
                // set data model on view
                const oData = {
                    recipient: {
                        name: "World"
                    }
                }
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

        });
    });
