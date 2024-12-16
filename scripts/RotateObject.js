// Referencia al objeto a rotar
//@input SceneObject targetObject
//@input float rotationSpeed = 45.0 // Velocidad de rotación en grados por segundo

// Evento que se ejecuta cada frame
script.createEvent("UpdateEvent").bind(function (eventData) {
    var currentRotation = script.targetObject.getTransform().getLocalRotation();
    var deltaRotation = quat.angleAxis(script.rotationSpeed * eventData.getDeltaTime(), vec3.up());
    script.targetObject.getTransform().setLocalRotation(currentRotation.multiply(deltaRotation));
});
