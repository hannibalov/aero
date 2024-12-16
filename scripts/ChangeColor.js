// Referencia al objeto al que se asigna este script
//@input SceneObject targetObject

// Evento cuando el usuario toca la pantalla
script.createEvent("TapEvent").bind(function () {
    // Cambiar el color del material del objeto
    var material = script.targetObject.getFirstComponent("Component.RenderMeshVisual").mainMaterial;
    material.mainPass.baseColor = new vec4(Math.random(), Math.random(), Math.random(), 1);
});
