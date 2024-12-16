# Cómo añadir objetos 3D en Lens Studio

En este tutorial aprenderás cómo importar y añadir objetos 3D a tu escena en **Lens Studio**, para utilizarlos en tus efectos de realidad aumentada.  

---

## Paso 1: Importar un objeto 3D

1. **Accede al Asset Browser**:  
   - En la esquina inferior izquierda de Lens Studio, encontrarás el **Asset Browser**.  

2. **Haz clic en el botón "+"**:  
   - Haz clic en el ícono **+** para abrir el menú de recursos.  
   - Selecciona la opción **Import Files...** para cargar un modelo 3D desde tu ordenador.  

   ![Importar archivo 3D](https://github.com/user-attachments/assets/77fc3652-30e9-42c2-a1f5-5c6d1c45c69b)


   > **Nota**: Lens Studio soporta modelos en formatos **.FBX**, **.OBJ**, y **.GLTF/GLB**.  

3. **Usa el Asset Library (opcional)**:  
   - Si no tienes un modelo propio, puedes utilizar los recursos prediseñados en la pestaña **Asset Library**.  
   - Busca modelos 3D gratuitos y descárgalos directamente a tu proyecto.  

   ![Asset Library](https://github.com/user-attachments/assets/bd0f847d-ed20-47f4-a3a9-98ccb83cbc1b)

---

## Paso 2: Añadir el objeto 3D a la escena

1. **Arrastra el modelo 3D al Panel Scene Hierarchy**:  
   - Una vez importado, el modelo aparecerá en el **Asset Browser**.  
   - Arrástralo al **Panel Scene Hierarchy**, que se encuentra en la esquina superior izquierda de Lens Studio.  

2. **Posiciona el objeto en la jerarquía**:  
   - Puedes colocar el objeto en la raíz de la jerarquía o como hijo de la **Camera**, de un **Head Binding**,  según tu efecto. Vamos a ver las opciones: 

   1. Hijo de la **Camera**:

   En este caso el objeto estará estático, siempre mostrándose en la misma posición de la pantalla sin importar cómo se mueve la cara

   ![image](https://github.com/user-attachments/assets/844e5f7f-70f9-4926-867d-6d831971f509)
      
   2. En la raíz:

   ![image](https://github.com/user-attachments/assets/aaf2114f-59e4-495e-a5a5-b1dcc4e9a9a9)

   Si no tenemos un efecto de [Device Tracking](Device-Tracking.md) se comporta como el caso anterior. Pero si lo tenemos, da el efecto de que el objeto se queda estático en el mundo real. 
   
   3. Hijo de un **Head Binding**:
  
   ![image](https://github.com/user-attachments/assets/5fadced0-39e0-4970-a261-59004028b178)

   En este caso la posición y orientación del objeto 3d 

---

## Paso 3: Ajustar propiedades del objeto 3D

1. **Escala, rotación y posición**:  
   - Selecciona el objeto en el **Panel Scene Hierarchy**.  
   - Usa el **Panel de Propiedades** (Inspector) para ajustar su posición, escala y rotación.  

2. **Materiales y texturas**:  
   - Si el modelo no tiene texturas o materiales, puedes añadirlos desde el **Asset Browser**.  
   - Haz clic en el modelo 3D, selecciona el material en las propiedades y asocia una textura.  

---

## Paso 4: Previsualizar tu escena

1. **Simula en Lens Studio**:  
   - Usa el visor de Lens Studio para mover la cámara y ver cómo se comporta el objeto 3D en tu escena.  

2. **Prueba en un dispositivo**:  
   - Conecta un dispositivo móvil compatible y utiliza la función **Preview on Device** para verificar el resultado final en un entorno real.  

---

¡Listo! Ahora tienes un objeto 3D en tu escena. Puedes combinarlo con otros efectos como **Device Tracking** o **Plane Tracking** para crear experiencias más interactivas.  

---
[Página previa](Device-Tracking.md) - [Página siguiente](Animaciones.md)
