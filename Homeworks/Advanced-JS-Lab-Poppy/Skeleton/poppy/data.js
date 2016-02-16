var poppy = poppy || {};

(function (scope){
    "use strict";
    var Notification = (function () {

        function Notification (title, message, position, type, closeButton, autoHide, timeout, callback) {
            this._popupData = {
                title: title,
                message: message,
                position: position,
                type: type,
                autoHide: autoHide,
                timeout: timeout,
                closeButton: closeButton,
                callback: callback
            }
        }

        return Notification;
    });

    var Success = (function () {

        function Success (title, message) {
            Notification.call(this, title, message, 'bottom-left', 'success', false, false);
        }

        return Success;
    })();

    var Info = (function () {

        function Info (title, message) {
            Notification.call(this, title, message, 'top-left', 'info', true, false, 2000);
        }

        return Info;
    })();

    var Error = (function () {

        function Error (title, message) {
            Notification.call(this, title, message, 'top-right', false, false);
        }

        return Error;
    })();

    var Warning = (function () {

        function Warning (title, message, callback) {
            Notification.call(this, title, message, 'bottom-right', 'warning', false, false, 0, callback)
        }

        return Warning;
    })();

    scope._models = {
        Success: Success,
        Info: Info,
        Error: Error,
        Warning: Warning
    }

})(poppy);
