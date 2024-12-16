# **Tutorial de Animaciones de Objetos 3D en Lens Studio**

## **¿Qué es la animación en Lens Studio?**

La animación en Lens Studio consiste en mover, rotar, escalar o cambiar propiedades de un objeto 3D a lo largo del tiempo. Esto se puede lograr de manera manual, utilizando el panel de **Timeline**, o mediante scripting para crear animaciones dinámicas e interactivas.

### **Casos de uso comunes para animaciones 3D**

1. **Animaciones cíclicas:**
   - Rotación constante de un modelo, como un planeta o una moneda.
2. **Animaciones por interacción:**
   - Escalar un objeto al tocar la pantalla.
   - Mover un objeto en respuesta a movimientos faciales.
3. **Efectos dinámicos:**
   - Flotar o rebotar un objeto.
   - Animar gradualmente cambios en el color o textura de un material.

---

## **Conocimientos previos recomendados**

- **Conocer el panel Timeline de Lens Studio:**  
  Saber crear keyframes para animaciones básicas.
- **Familiaridad con conceptos de transformación:**  
  Saber cómo mover, rotar y escalar objetos en un espacio tridimensional.
- **JavaScript básico:**  
  Para usar scripting en animaciones avanzadas.

---

## **Peculiaridades y limitaciones de las animaciones en Lens Studio**

### **Peculiaridades:**

1. **Eventos de animación:**  
   Puedes usar eventos como `onStart`, `onUpdate` y `onComplete` para controlar animaciones mediante scripting.

2. **Herramientas integradas:**  
   El panel **Tween Manager** facilita animaciones complejas sin necesidad de crear scripts manualmente.

3. **Optimización:**  
   Las animaciones deben ser ligeras y eficientes para mantener el rendimiento en dispositivos móviles.

### **Limitaciones:**

1. **Duración y ciclos:**  
   Las animaciones definidas en el panel Timeline tienen una duración fija y requieren scripting para configuraciones dinámicas.

2. **Sin física avanzada:**  
   Lens Studio no incluye simulaciones físicas avanzadas, como colisiones realistas o gravedad personalizada.

---

## Gestionar animaciones

**Lens Studio** Puede tener comportamientos poco intuitivos, o que nos puede costar de entender. Vamos a ver un ejemplo, importando Kitty del **Asset Library** (ver [este tutorial](Objetos-3D) si no se conoce esta parte). Este objeto tiene una serie de animaciones, pero están todas en el mismo clip.

![image](https://github.com/user-attachments/assets/d243a22a-ebca-4e95-863e-231535b8d188)

Si añadimos Kitty a la escena y lo seleccionamos, veremos que ha creado el objeto con varios componentes, entre ellos el de **Animation Player**. Además, este componente viene con 3 Clips configurados

![image](https://github.com/user-attachments/assets/ec88b827-062d-4457-9f7e-0a7f3d80c084)

Para entender esto mejor, lo primero hay que aclarar que esto viene configurado por los creadores de este _asset_. Es decir, esto no es algo que se configure sólo por defecto. Por otro lado, este componente es el que gestiona todo lo que tiene que ver con la animación del objeto.

La primera opción disponible que vemos es **Autoplay**, que sirve básicamente para que las animaciones se empiecen a reproducir desde que la aplicación empieza. De otra manera habría que activarlas mediante un script. Para más información sobre scripting, ver el [tutorial de scripting](Scripting.md), pero podemos ver a continuación un ejemplo de cómo cambiar la velocidad de reproducción de las animaciones


```
// Referencia al Animation Player del objeto
//@input SceneObject targetObject

// Velocidades configurables
//@input float slowSpeed = 0.5 {"label":"Velocidad Lenta"}
//@input float normalSpeed = 1.0 {"label":"Velocidad Normal"}

script.createEvent("TapEvent").bind(function () {
    // Obtener el Animation Player del objeto objetivo
    var animationPlayer = script.targetObject.getFirstComponent("Component.AnimationPlayer");
    if (animationPlayer) {
        // Alternar la velocidad entre lenta y normal
        if (animationPlayer.speed === script.normalSpeed) {
            animationPlayer.speed = script.slowSpeed;
            print("Velocidad cambiada a lenta: " + script.slowSpeed);
        } else {
            animationPlayer.speed = script.normalSpeed;
            print("Velocidad cambiada a normal: " + script.normalSpeed);
        }
    } else {
        print("No se encontró Animation Player en el objeto objetivo");
    }
});
```

Por otro lado, veamos cómo trabajar con _Clips_. Un _Clip_ no es más que una sección de una animación, y tiene un frame de comienzo y uno de final. Como veréis, hay 3 clips configurados con las propiedades adecuadas.

![image](https://github.com/user-attachments/assets/4c89be66-7da5-4bff-988c-c8fdac3d7d10)

Ahora bien, cómo sabe **Lens Studio** cuál de los 3 clips reproducir? La respuesta es que los está reproduciendo todos, pero no lo vemos. Vemos sólo un clip porque sólo hay uno con la propiedad _Weight_ (peso del clip) a 1. Es decir, la manera de hacer transiciones de un clip a otro es progresivamente aumentar el peso de un clip, y reducir el del clip que esté en primer plano. Si habéis trabajado con animaciones en entornos de desarrollo de juegos este concepto os será bastante familiar.

---

¡Con estos ejemplos básicos, ya puedes comenzar a experimentar con scripting en Lens Studio para crear experiencias AR interactivas! 🎉

---
[Página previa](Objetos-3D.md) - [Página siguiente](Scripting.md)
