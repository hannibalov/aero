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

3. **Usa la biblioteca de objetos prediseñados (opcional)**:  
   - Si no tienes un modelo propio, puedes utilizar los recursos prediseñados en la pestaña **Asset Library**.  
   - Busca modelos 3D gratuitos y descárgalos directamente a tu proyecto.  

   ![Asset Library](https://github.com/user-attachments/assets/bd0f847d-ed20-47f4-a3a9-98ccb83cbc1b)

---

## Paso 2: Añadir el objeto 3D a la escena

1. **Arrastra el modelo 3D al Panel de Objetos (Objects)**:  
   - Una vez importado, el modelo aparecerá en el **Asset Browser**.  
   - Arrástralo al **Panel de Objetos**, que se encuentra en la esquina superior izquierda de Lens Studio.  

2. **Posiciona el objeto en la jerarquía**:  
   - Asegúrate de colocar el objeto como hijo de la **Camera** o de un **Tracker** (como el **Plane Tracker** o **Device Tracking**) según tu efecto.  

   ![Añadir objeto 3D](uploads/add-3d-object.png)  

---

## Paso 3: Ajustar propiedades del objeto 3D

1. **Escala, rotación y posición**:  
   - Selecciona el objeto en el **Panel de Objetos**.  
   - Usa el **Panel de Propiedades** (Inspector) para ajustar su posición, escala y rotación.  

2. **Materiales y texturas**:  
   - Si el modelo no tiene texturas o materiales, puedes añadirlos desde el **Panel de Recursos**.  
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
[Página previa](Device-Tracking.md) - [Página siguiente](Materiales-y-Texturas.md)