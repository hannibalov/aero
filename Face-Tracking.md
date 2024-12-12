# Implementación de efectos en rostros usando **Lens Studio**

En esta sección, aprenderemos cómo usar las herramientas que nos ofrece **Lens Studio** para realizar seguimiento facial y aplicar efectos personalizados.

Antes de comenzar, es importante entender qué significa _face tracking_. En el contexto de **Lens Studio**, el _face tracking_ permite detectar la posición, orientación y características faciales utilizando la cámara del dispositivo. Esta información se utiliza para aplicar efectos visuales dinámicos en tiempo real.

A continuación, veremos un ejemplo práctico para aplicar un efecto en el rostro detectado:

---

## Paso 1: Crear un nuevo proyecto

Abrimos Lens Studio y creamos un nuevo proyecto.  

![Captura del menú inicial de Lens Studio](https://github.com/user-attachments/assets/29a26e19-aa35-4985-9255-f989cee6e5e7)

---

## Paso 2: Agregar un _Face Tracker_

En la ventana de la escena (_Scene_), hacemos clic derecho y seleccionamos **Add Object > Face Effects > Face Tracker**. Esto añadirá un objeto que detecta la cara frente a la cámara.  
![Captura mostrando cómo agregar el Face Tracker](path/to/screenshot2.png)

Cuando el _Face Tracker_ esté activo, verás un gizmo en el visor (_Viewport_) que representa la posición y orientación del rostro detectado.  
![Captura mostrando el gizmo en el rostro](path/to/screenshot3.png)

---

## Paso 3: Añadir un _Face Mesh_

Con el _Face Tracker_ seleccionado, hacemos clic derecho sobre él y seleccionamos **Add > Face Mesh**.  
El _Face Mesh_ es una malla 3D que se ajusta automáticamente a la geometría del rostro detectado.

![Captura mostrando cómo añadir el Face Mesh](path/to/screenshot4.png)

Verás que la malla 3D aparece sobre el rostro en el visor.  
![Captura mostrando el _Face Mesh_ sobre el rostro](path/to/screenshot5.png)

---

## Paso 4: Crear y aplicar un material

Con el _Face Mesh_ seleccionado, ve al panel de propiedades y haz clic en el botón **+** en la sección **Materials**. Esto crea un nuevo material asociado al _Face Mesh_.  
![Captura mostrando la creación del material](path/to/screenshot6.png)

En el panel de **Assets**, selecciona el material recién creado y configúralo según el tipo de efecto que desees. Por ejemplo:  

1. En **Shader Type**, selecciona **Retouching** para suavizar los rasgos del rostro o **Face Paint** para aplicar una textura personalizada.  
2. Si seleccionas _Face Paint_, podrás cargar una textura personalizada haciendo clic en el campo **Base Texture** y seleccionando **Choose File**.  

![Captura mostrando la configuración del material y carga de una textura](path/to/screenshot7.png)

---

## Paso 5: Añadir la textura personalizada

Crea una textura personalizada (por ejemplo, un bigote, gafas o cualquier diseño). Luego, asocia esta textura al material configurado en el paso anterior.  

1. Haz clic en el material.  
2. En **Base Texture**, selecciona tu archivo de textura.  

![Captura mostrando el efecto final con la textura aplicada](path/to/screenshot8.png)

---

## Paso 6: Ajustar el efecto

Puedes ajustar el tamaño, posición y orientación del _Face Mesh_ usando las herramientas de transformación en el panel de propiedades o directamente en el visor. Experimenta con diferentes configuraciones para personalizar tu efecto.

![Captura mostrando cómo ajustar el _Face Mesh_](path/to/screenshot9.png)

---

## Paso 7: Probar tu efecto

Para probar el efecto en tiempo real, conecta tu dispositivo móvil al ordenador y usa la opción **Preview** de Lens Studio. Esto te permitirá ver cómo se comporta el efecto en un rostro real.  
![Captura mostrando la vista previa en un dispositivo móvil](path/to/screenshot10.png)

---

## Paso final: Exportar y compartir

Una vez satisfecho con tu efecto, haz clic en **Publish Lens** para exportarlo y compartirlo en Snapchat u otras plataformas compatibles.  
![Captura mostrando el proceso de publicación](path/to/screenshot11.png)

---

¡Y listo! Has creado un efecto facial usando _face tracking_ en Lens Studio. Ahora puedes experimentar con diferentes diseños y configuraciones para llevar tus creaciones al siguiente nivel. 🚀


