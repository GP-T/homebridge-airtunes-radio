

const HomePodRadioPlatformModule = require('./lib/HomePodRadioPlatform');
const HomePodRadioPlatform = HomePodRadioPlatformModule.HomePodRadioPlatform

module.exports = function (homebridge) {
    HomePodRadioPlatformModule.setHomebridge(homebridge)
    homebridge.registerAccessory("homebridge-homepod-radio", "HomePodRadio", HomePodRadioPlatform);
}