# **Tutorial de Scripting en Lens Studio**

### **Casos de uso comunes del scripting en Lens Studio**

- **Interacción con el usuario:**
  - Responder al toque de pantalla o gestos como sonrisas o movimientos de la cabeza.
  - Cambiar elementos visuales en función de entradas del usuario.
- **Animaciones dinámicas:**
  - Mover objetos en tiempo real, basados en scripts personalizados.
  - Cambiar colores, texturas o propiedades de materiales.
- **Efectos basados en el tiempo:**
  - Temporizadores para ejecutar acciones después de un intervalo.
  - Animaciones repetitivas como pulsos o efectos de escala.
- **Integración de datos:**
  - Leer información de APIs o datos externos para modificar contenido.

---

## **Conocimientos previos recomendados**

- **JavaScript básico:**
  - Conceptos como variables, funciones, bucles, condicionales y eventos.
- **Conceptos de programación gráfica:**
  - Coordenadas 3D y transformaciones básicas. Aunque en esta serie de tutoriales no hará falta.
- **Familiaridad con Lens Studio:**
  - Saber cómo crear objetos, asignar materiales y agregar scripts.

---

## **Peculiaridades y limitaciones de scripting en Lens Studio**

### **Peculiaridades:**

1. **Eventos y Bindings:**  
   Utiliza eventos predefinidos (por ejemplo, `onTap`, `onUpdate`) que puedes asignar a tus scripts.

2. **Acceso a objetos:**  
   Cada objeto en Lens Studio tiene propiedades y métodos que puedes modificar dinámicamente mediante scripting.

3. **Compatibilidad:**  
   Scripting debe optimizarse para dispositivos móviles con limitaciones de rendimiento.

### **Limitaciones:**

1. **Sin acceso completo a JavaScript:**  
   No puedes usar funciones avanzadas de JavaScript (como `fetch` para llamadas HTTP).

2. **Memoria limitada:**  
   Scripts muy complejos pueden ralentizar la experiencia o incluso hacer que la lente no funcione.

3. **No interacción directa con hardware:**  
   No puedes acceder a elementos del dispositivo como el GPS o almacenamiento interno.

---

## **Primeros pasos en scripting**

1. Abre Lens Studio y crea un nuevo proyecto.
2. Agrega un objeto que será controlado por tu script (por ejemplo, un texto o un modelo 3D).
3. Crea un script:
   - Haz clic derecho en el panel **Resources** y selecciona **Add New > Script**.
   - Asigna el script al objeto desde el panel **Inspector**.

---

## **Ejemplo 1: Cambiar el color de un objeto al tocarlo**

### [Código JavaScript (`ChangeColor.js`)](scripts/ChangeColor.js)

### Pasos:

1. Crea un objeto 3D en Lens Studio.
2. Crea un material (por ejemplo Unlit) y asignaselo al objeto.
3. Agrega este script al objeto desde el panel Inspector.
4. Establece la propiedad targetObject seleccionando el objeto del paso 1.

![image](https://github.com/user-attachments/assets/da4f4d1e-a29d-455e-9453-b6b6ef382184)


## **Ejemplo 2: Rotar un objeto continuamente**

### [Código JavaScript (`RotateObject.js`)](scripts/RotateObject.js)

### Pasos:

1. Agrega un objeto 3D (como un cubo).
2. Asigna este script al objeto desde el panel Inspector.
3. Configura la velocidad de rotación ajustando la propiedad rotationSpeed.

![image](https://github.com/user-attachments/assets/9d8d036a-ad2d-4206-ac67-e3518217e115)

## **Ejemplo 3: Mostrar un texto por tiempo limitado al tocar la pantalla**

### [Código JavaScript (`ShowText.js`)](scripts/ShowText.js)

### Pasos:

1. Crea un objeto de texto en Lens Studio.
2. Agrega este script al objeto desde el panel Inspector.
3. Configura la propiedad textObject apuntando al objeto de texto.

## Cómo añadir estos archivos al proyecto

  1. Crear el script:
    * Haz clic derecho en el panel Resources.
    * Selecciona Add New > Script y nómbralo (por ejemplo, ChangeColor.js).
  2. Copiar el código:
    * Abre el archivo recién creado y pega el código correspondiente.
  3. Asignar el script:
    * Selecciona el objeto desde el panel Objects.
    * En el panel Inspector, agrega un componente Script y selecciona el script creado.
  4. Configurar inputs:
    *Configura las propiedades (inputs) desde el panel Inspector, seleccionando objetos o ajustando valores numéricos según sea necesario.

---

¡Con estos ejemplos básicos, ya puedes comenzar a experimentar con scripting en Lens Studio para crear experiencias AR interactivas! 🎉

---
[Página previa](Animaciones.md) - [Página siguiente](Segmentación.md)
