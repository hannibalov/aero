// Referencia al objeto de texto
//@input SceneObject textObject
//@input float displayDuration = 2.0 // Tiempo que se mostrará el texto en segundos

script.textObject.enabled = false;

script.createEvent("TapEvent").bind(function () {
    script.textObject.enabled = true;

    // Ocultar el texto después de un tiempo
    script.createEvent("DelayedCallbackEvent").bind(function () {
        script.textObject.enabled = false;
    }).reset(script.displayDuration);
});
