# Uso de Device Tracking en Lens Studio

En esta sección, aprenderemos cómo utilizar **Device Tracking** en Lens Studio. Completad primero el tutorial de [Face Effects](Face-Effects.md) para tener una primera introducción al concepto de _tracking_. En ese tutorial podréis ver como **Lens Studio** analiza la imágen de la cámara para detectar la posición y orientación de un rostro. **Device Tracking** permite rastrear la posición y rotación del dispositivo en el espacio, creando efectos interactivos que responden al movimiento del teléfono o tablet, de manera que da la impresión de que podemos dejar objetos virtuales en el mundo real.  

---

## ¿Para qué sirve el Device Tracking?

**Device Tracking** permite que los efectos reaccionen dinámicamente al movimiento del dispositivo. Esto es útil para:  

- Anclar objetos virtuales al mundo real.  
- Crear experiencias de realidad aumentada inmersivas.  
- Diseñar efectos interactivos que respondan al movimiento de la cámara.  

Por ejemplo, puedes utilizar **Device Tracking** para posicionar un modelo 3D en el espacio y permitir que los usuarios lo exploren moviendo su dispositivo alrededor de él.  

---

## Cómo configurar Device Tracking

Antes de empezar, vamos a seleccionar una emulación de cámara que sea más útil para esta tarea. Vamos a seleccionar en _Preview_ **Indoor**

![image](https://github.com/user-attachments/assets/7c0276e1-c212-46c7-b3f6-2accf5f8c10c)

En Lens Studio, **Device Tracking** es un **componente** que se añade directamente a la cámara de tu escena. Sigue estos pasos para activarlo:  

1. **Selecciona la cámara en tu proyecto**:  
   En el **Panel de Scene Hierarchy**, busca y selecciona el objeto **Camera Object**. Este objeto está presente de forma predeterminada en todos los proyectos de Lens Studio.  

2. **Añade el componente Device Tracking**:  
   - En el **Panel de Propiedades** (Inspector), haz clic en el botón **Add Component**.  
   - Selecciona **Device Tracking** en el menú desplegable.  

   ![Agregar Device Tracking](https://github.com/user-attachments/assets/8124827a-60ee-4506-ac0a-7246dc22f074)

4. **Configura el modo de rastreo**:  
   En las propiedades del componente **Device Tracking**, selecciona uno de los siguientes modos según tus necesidades:  

   - **Rotation**:  
     Rastrea únicamente la rotación del dispositivo (usando el giroscopio).  
     Ideal para efectos simples donde el contenido reacciona al giro del dispositivo.  

   - **Position and Rotation**:  
     Rastrea tanto la posición como la rotación del dispositivo.  
     Utiliza sensores adicionales para detectar la posición en el espacio.  

   - **World Tracking**:  
     Rastrea posición, rotación y mapeo del entorno físico.  
     Requiere dispositivos compatibles con ARKit (iOS) o ARCore (Android).  

   ![Modos de Device Tracking](https://github.com/user-attachments/assets/1c200c17-42a9-4c6f-829f-67da629e83cf)

---

## Limitaciones del Device Tracking

Aunque el **Device Tracking** es una herramienta poderosa, tiene algunas limitaciones que debes considerar:  

1. **Requiere sensores específicos**:  
   - Modos avanzados como **World Tracking** dependen de hardware compatible (ARKit o ARCore).  
   - El rendimiento varía según el modelo y los sensores del dispositivo.  

2. **Entornos poco iluminados**:  
   - Las cámaras pueden tener dificultades en condiciones de poca luz o con superficies homogéneas.  

3. **Consumo de batería**:  
   - El uso continuo de sensores y cámaras puede agotar rápidamente la batería del dispositivo.  

---

## Ejemplo práctico: Crear un efecto con Device Tracking

1. **Añade un objeto 3D a la escena**:  
   - Ve al **Asset Browser** y selecciona un modelo 3D desde la biblioteca de Lens Studio o importa el tuyo (visita [este tutorial](Objetos-3D.md) si no entiendes este paso).  

2. **Ancla el objeto a la cámara**:  
   - En el **Panel de Scene Hierarchy**, pon el objeto el la raíz de la jerarquía.  
   - Asegúrate de que el **Device Tracking** está habilitado en la cámara.  

3. **Prueba el efecto**:  
   - Simula el movimiento del dispositivo en el visor de Lens Studio.  
   - Si utilizas **World Tracking**, prueba el efecto en un dispositivo físico para verificar que los objetos se comporten correctamente.  

---

## Consejos adicionales

- Usa superficies reconocibles o bien iluminadas para obtener mejores resultados en **World Tracking**.  
- Ajusta la escala y posición de los objetos en el espacio para garantizar que sean visibles y se comporten según lo esperado.  

---

¡Y eso es todo! Ahora puedes aprovechar el **Device Tracking** en Lens Studio para crear efectos interactivos y dinámicos.  

---
[Página previa](Face-Effects.md) - [Página siguiente](Objetos-3D.md)
