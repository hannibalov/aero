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

**Lens Studio** Puede tener comportamientos poco intuitivos, o que nos puede costar de entender. Vamos a ver un ejemplo, importando Kitty del **Asset Library** (ver [este tutorial](Objetos-3D) si no se conoce esta parte). 
![image](https://github.com/user-attachments/assets/d243a22a-ebca-4e95-863e-231535b8d188)
