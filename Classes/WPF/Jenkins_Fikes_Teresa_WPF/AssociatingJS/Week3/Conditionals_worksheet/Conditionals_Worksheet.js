/**
 * Teresa Jenkins Fikes
 * 10/16/14.
 * WPF 1408 Section 01
 Conditionals Week 3-Tire Pressure
 */
//
Alarm = function() {

    var lowPressureTreshold = 17;
    var highPressureTreshold = 21;
    var sensor = new Sensor();
    var alarmOn = false;
};

Alarm.prototype = {

    check: function () {

        var psiPressureValue = this._sensor.popNextPressurePsiValue();

        if (psiPressureValue < this._lowPressureTreshold || this._highPressureTreshold < psiPressureValue)
        {
            this._alarmOn = true;
        }
    },

    alarmOn: function () {
        console.log(alarmOn);
    }

};