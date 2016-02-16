var poppy = poppy || {};

(function (scope){
    function pop(type, title, message, callback) {
        var popup;
        switch (type) {
            case 'success' :
                popup = new poppy._models.Success(title, message);
                break;
            case 'info' :
                popup = new poppy._models.Info(title, message);
                break;
            case 'error' :
                popup = new poppy._models.Error(title, message);
                break;
            case 'warning' :
                popup = new poppy._models.Warning(title, message, callback);
                break;
        }



        // generate view from view factory
        var view =
            scope._viewFactory.createPopupView(popup._popupData);
        pro

        processPopup(view, popup);
    }

    function processPopup(domView, popup) {
        // TODO: Implement popup logic
    }
    scope.pop = pop;
})(poppy);


poppy.pop('success', "title", "message","www.softuni.bg");
poppy.pop('info', "title", "message");
poppy.pop('error', "title", "message");
poppy.pop('warning',"title", "message", "callback");
