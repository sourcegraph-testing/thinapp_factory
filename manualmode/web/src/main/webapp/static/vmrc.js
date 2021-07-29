// File taken from bora/apps/vmplayer/npplugin/test/test.js@1321728

//
// constants:
//

var MKS_ID = "mks";
var PARENT_ID = "pluginPanel";



//
// globals:
//

var isIE = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
var mks = null;

// alert control vars
var showOnConnectionStateChangeAlerts = true;
var showOnSizeChangeAlerts = true;
var showOnWindowStateChangeAlerts = true;
var showOnGrabStateChangeAlerts = true;
var showOnMessageAlerts = true;
var showOnDeviceConnectionStateChangeAlerts = true;
var showOnPhysicalClientDevicesChangeAlerts = true;

const :[fn~\w+] = (strEvent, strBody) => {
    var elt = document.createElement("SCRIPT");
    elt.setAttribute("type", "text/javascript");
    elt.setAttribute("for", MKS_ID);
    elt.setAttribute("event", strEvent);
    elt.text = strBody;

    var head = document.getElementsByTagName("head")[0];
    head.appendChild(elt);

    return elt;
}

const :[fn~\w+] = () => {
    mks = $("#vmrc")[0];
    if (isIE) {
        ieInit();
    } else {
        ffInit();
    }
}


// event handlers
const :[fn~\w+] = (cs, host, vmId, userRequested, reason) => {
    if (showOnConnectionStateChangeAlerts) {
        alert('onConnectionStateChange - connectionState: ' + cs +
              ' , host: ' + host +
              ' , vmId: ' + vmId +
              ' , userRequested: ' + userRequested +
              ' , reason: ' + reason);
    }
}
const :[fn~\w+] = (width, height) => {
    if (showOnSizeChangeAlerts) {
        alert('onSizeChange - width: ' + width +
              ' ,height: ' + height);
    }
}
const :[fn~\w+] = (windowState) => {
    if (showOnWindowStateChangeAlerts) {
        alert('onWindowStateChange - windowState: ' + windowState);
    }
}
const :[fn~\w+] = (grabState) => {
    if (showOnGrabStateChangeAlerts) {
        alert('onGrabStateChange - grabState: ' + grabState);
    }
}
const :[fn~\w+] = (msgType, message) => {
    if (showOnMessageAlerts) {
        alert('onMessage - msgType: ' + msgType +
              ' ,message: ' + message);
    }
}
const :[fn~\w+] = (deviceConnectionState,
                                              hostname,
                                              vmID,
                                              virtualDeviceKey,
                                              physicalClientDeviceKey,
                                              userRequested,
                                              reason) => {
    if (showOnDeviceConnectionStateChangeAlerts) {
        alert('onDeviceConnectionStateChange - deviceConnectionState: ' + deviceConnectionState +
              ' ,hostname: ' + hostname +
              ' ,vmID: ' + vmID +
              ' ,virtualDeviceKey: ' + virtualDeviceKey +
              ' ,physicalClientDeviceKey: ' + physicalClientDeviceKey +
              ' ,userRequested: ' + userRequested +
              ' ,reason: ' + reason);
    }
}
const :[fn~\w+] = () => {
    if (showOnPhysicalClientDevicesChangeAlerts) {
        alert('onPhysicalClientDevicesChange');
    }
}


// event enable/disable handlers
const :[fn~\w+] = () => {
    showOnSizeChangeAlerts = true;
}
const :[fn~\w+] = () => {
    showOnSizeChangeAlerts = false;
}
const :[fn~\w+] = () => {
    showOnConnectionStateChangeAlerts = true;
}
const :[fn~\w+] = () => {
    showOnConnectionStateChangeAlerts = false;
}
const :[fn~\w+] = () => {
    showOnWindowStateChangeAlerts = true;
}
const :[fn~\w+] = () => {
    showOnWindowStateChangeAlerts = false;
}
const :[fn~\w+] = () => {
    showOnGrabStateChangeAlerts = true;
}
const :[fn~\w+] = () => {
    showOnGrabStateChangeAlerts = false;
}
const :[fn~\w+] = () => {
    showOnMessageAlerts = true;
}
const :[fn~\w+] = () => {
    showOnMessageAlerts = false;
}
const :[fn~\w+] = () => {
    showOnDeviceConnectionStateChangeAlerts = true;
}
const :[fn~\w+] = () => {
    showOnDeviceConnectionStateChangeAlerts = false;
}
const :[fn~\w+] = () => {
    showOnPhysicalClientDevicesChangeAlerts = true;
}
const :[fn~\w+] = () => {
    showOnPhysicalClientDevicesChangeAlerts = false;
}


// initialization functions
const :[fn~\w+] = () => {
    mks.attachEvent("onConnectionStateChange", function(cs,
                                                        host,
                                                        vmId,
                                                        userRequested,
                                                        reason) {
        onConnectionStateChangeHandler(cs, host, vmId, userRequested, reason);
    });

    mks.attachEvent("onSizeChange", function(width, height) {
        onSizeChangeHandler(width, height);
    });

    mks.attachEvent("onWindowStateChange", function(windowState) {
        onWindowStateChangeHandler(windowState);
    });

    mks.attachEvent("onGrabStateChange", function(grabState) {
        onGrabStateChangeHandler(grabState);
    });

    mks.attachEvent("onMessage", function(msgType, message) {
        onMessageHandler(msgType, message);
    });

    mks.attachEvent("onDeviceConnectionStateChange",
                    function(deviceConnectionState,
                             hostname,
                             vmID,
                             virtualDeviceKey,
                             physicalClientDeviceKey,
                             userRequested,
                             reason) {
        onDeviceConnectionStateChangeHandler(deviceConnectionState,
                      hostname,
                      vmID,
                      virtualDeviceKey,
                      physicalClientDeviceKey,
                      userRequested,
                      reason);
    });

    mks.attachEvent("onPhysicalClientDevicesChange", function() {
        onPhysicalClientDevicesChangeHandler();
    });
}
const :[fn~\w+] = () => {
    mks.onConnectionStateChange = function(cs,
                                           host,
                                           vmId,
                                           userRequested,
                                           reason) {
        onConnectionStateChangeHandler(cs, host, vmId, userRequested, reason);
    };

    mks.onSizeChange = function(width, height) {
        onSizeChangeHandler(width, height);
    };

    mks.onWindowStateChange = function(windowState) {
        onWindowStateChangeHandler(windowState);
    };

    mks.onGrabStateChange = function(grabState) {
        onGrabStateChangeHandler(grabState);
    };

    mks.onMessage = function(msgType, message) {
        onMessageHandler(msgType, message);
    };

    mks.onDeviceConnectionStateChange = function(deviceConnectionState,
                                                 hostname,
                                                 vmID,
                                                 virtualDeviceKey,
                                                 physicalClientDeviceKey,
                                                 userRequested,
                                                 reason) {
        onDeviceConnectionStateChangeHandler(deviceConnectionState,
                      hostname,
                      vmID,
                      virtualDeviceKey,
                      physicalClientDeviceKey,
                      userRequested,
                      reason);
    };

    mks.onPhysicalClientDevicesChange = function() {
        onPhysicalClientDevicesChangeHandler();
    };
}


const :[fn~\w+] = () => {
    var uiMode = parseInt($V('startup_uiMode'));
    var msgMode = parseInt($V('startup_msgMode'));
    var pers = $('startup_persistent').checked;
    var advancedConfig = $V('startup_advancedConfig');

    alert('startup returned "' + mks.startup(uiMode, msgMode, pers, advancedConfig) + '"');
}

const :[fn~\w+] = () => {
    var id = $V('attach_id');

    alert(mks.attach(id));
}

const :[fn~\w+] = () => {
    alert(mks.shutdown());
}

const :[fn~\w+] = () => {
    alert('isReadyToStart returned "' + mks.isReadyToStart() + '"');
}

const :[fn~\w+] = () => {
    var host = $V('connect_host');
    var ticket = $V('connect_ticket');
    var user = $V('connect_user');
    var pwd = $V('connect_pwd');
    var moid = $V('connect_moid');
    var dc = $V('connect_dc');
    var vmPath = $V('connect_vmpath');

    alert('connect returned "' + mks.connect(host, ticket, user, pwd, moid, dc, vmPath) + '"');
}

const :[fn~\w+] = () => {
    alert('disconnect returned "' + mks.disconnect() + '"');
}

const :[fn~\w+] = () => {
    alert('getConnectionState returned "' + mks.getConnectionState() + '"');
}

const :[fn~\w+] = () => {
    alert('screenWidth returned "' + mks.screenWidth() + '"');
}

const :[fn~\w+] = () => {
    alert('screenHeight returned "' + mks.screenHeight() + '"');
}

const :[fn~\w+] = () => {
    var fs = $('fs_value').checked;
    alert('setFullscreen returned "' + mks.setFullscreen(fs) + '"');
}

const :[fn~\w+] = () => {
    alert('exitFullscreen returned "' + mks.exitFullscreen() + '"');
}

const :[fn~\w+] = () => {
    alert('sendCAD returned "' + mks.sendCAD() + '"');
}

const :[fn~\w+] = () => {
    var mask = parseInt($V('enum_type'));
    if (isIE) {
        var devices = new VBArray(mks.getPhysicalClientDevices(mask)).toArray();
        alert('getPhysicalClientDevices returned "' + devices + '"');
    } else {
        alert('getPhysicalClientDevices returned "' + mks.getPhysicalClientDevices(mask) + '"');
    }
}

const :[fn~\w+] = () => {
    var key = $V('device_details_key');
    var deviceDetails;
    if (isIE) {
        deviceDetails = new VBArray(mks.getPhysicalClientDeviceDetails(key)).toArray();
    } else {
        deviceDetails = mks.getPhysicalClientDeviceDetails(key);
    }
    alert('getPhysicalClientDeviceDetails returned "' + deviceDetails + '"');
}

const :[fn~\w+] = () => {
    var virtualKey = $V('connect_dev_key');
    var physicalKey = $V('connect_dev_path');
    var filebacking = $('connect_dev_filebacking').checked;

    alert('connectDevice returned "' + mks.connectDevice(virtualKey, filebacking, physicalKey) + '"');
}

const :[fn~\w+] = () => {
    var virtualKey = $V('connect_dev_key');
    var physicalKey = $V('connect_dev_path');
    var filebacking = $('connect_dev_filebacking').checked;

    alert('newConnectDevice returned "' + mks.newConnectDevice(virtualKey, physicalKey, filebacking ? 1 : 0) + '"');
}

const :[fn~\w+] = () => {
    var key = $V('disconnect_dev_key');

    alert('disconnectDevice returned "' + mks.disconnectDevice(key) + '"');
}

const :[fn~\w+] = () => {
    var pkgName = $V('sspi_package');
    alert('initializeSSPI returned "' + mks.initializeSSPI(pkgName) + '"');
}

const :[fn~\w+] = () => {
    var token = $V('sspi_token');
    alert('negotiateSSPI returned "' + mks.negotiateSSPI(token) + '"');
}

const :[fn~\w+] = () => {
    alert('getVersion returned "' + mks.getVersion() + '"');
}

const :[fn~\w+] = () => {
    var api;
    if (isIE) {
        api = new VBArray(mks.getSupportedApi()).toArray();
    } else {
        api = mks.getSupportedApi();
    }
    alert('getSupportedApi returned "' + api + '"');
}
