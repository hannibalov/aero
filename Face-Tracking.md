# Implementación de efectos en rostros usando **Lens Studio**

En esta sección, aprenderemos cómo usar las herramientas que nos ofrece **Lens Studio** para realizar seguimiento facial y aplicar efectos personalizados.

Antes de comenzar, es importante entender qué significa _face tracking_. En el contexto de **Lens Studio**, el _face tracking_ permite detectar la posición, orientación y características faciales utilizando la cámara del dispositivo. Esta información se utiliza para aplicar efectos visuales dinámicos en tiempo real.

A continuación, veremos un ejemplo práctico para aplicar un efecto en el rostro detectado:

---

## Paso 1: Crear un nuevo proyecto

Abrimos Lens Studio y creamos un nuevo proyecto.  

![Captura del menú inicial de Lens Studio](https://github.com/user-attachments/assets/29a26e19-aa35-4985-9255-f989cee6e5e7)

No hace falta que abramos un proyecto de ejemplo, vamos a desarrollar este ejemplo desde 0.

---

## Paso 2: Agregar un _Face Mask_

En la ventana de la escena (_Scene_), hacemos clic derecho y seleccionamos **+ > Face Mask**. Esto añadirá un objeto que detecta la cara frente a la cámara. Este objeto viene con unas opciones predeterminadas, que cambiaremos a continuación:
![Captura mostrando cómo agregar el Face Mask](https://github.com/user-attachments/assets/c60f0221-3c5f-4d09-b0a0-c9830a50f3fc)

Como veréis, la cara de la persona 

---

## Paso 3: Añadir la textura

En el panel _Asset Browser_ haz click en el botón **+** para importar un nuevo _asset_ al proyecto. 

![Captura para añadir textura](https://github.com/user-attachments/assets/235b4668-94da-4420-9d57-2614a971753c)

En el nuevo panel que se muestra, selecciona el botón _Import Asset_ y escoge el archivo con la textura. En nuestro caso hemos creado un archivo Moustache.png a mano , para simular un simpático bigote y barbilla, que usaremos en el siguiente paso.

![filter](https://github.com/user-attachments/assets/3275cdb1-aa9b-48f3-a150-225ca30d65d3)

---
## Paso 4: Personalizar el material

Con el _Face Mesh_ seleccionado, ve al panel _Inspector_ y haz clic en el botón **Texture**. 

![Captura mostrando el material](https://github.com/user-attachments/assets/e9398947-68b6-4e09-93d6-c00159bf8f5c)

En el nuevo panel que se muestra, selecciona la textura que hemos importado en el paso anterior (Moustache):  

![image](https://github.com/user-attachments/assets/96460075-d8b4-4dd0-afb1-bb54111485c8)


---

¡Y listo! Has creado un efecto facial usando _face mesh en Lens Studio. Ahora puedes experimentar con diferentes diseños y configuraciones para llevar tus creaciones al siguiente nivel. 🚀


