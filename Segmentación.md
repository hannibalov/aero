# Segmentación de Fondo en Lens Studio

En este tutorial aprenderemos cómo usar **Background Segmentation** en **Lens Studio** para crear efectos que interactúan dinámicamente con el fondo de la cámara. **Background Segmentation** permite identificar y separar el fondo del sujeto principal, ofreciendo la posibilidad de modificar o reemplazar el fondo de la escena de forma creativa.

---

## ¿Qué es la Segmentación de Fondo?

La **Segmentación de Fondo** analiza la imagen capturada por la cámara y distingue entre el sujeto (generalmente una persona) y el fondo. Esto te permite:  

- **Reemplazar el fondo** por imágenes o videos.  
- **Aplicar efectos** al fondo mientras mantienes el sujeto intacto.  
- **Crear efectos inmersivos** que combinan realidad aumentada y manipulación del entorno.

---

## Cómo configurar la Segmentación de Fondo

Este tutorial no será realmente intuitivo, pero sigue estos pasos para configurar la segmentación de fondo en tu proyecto:

### 1. Crear un nuevo proyecto

- Abre **Lens Studio** y selecciona "Empty Project" para comenzar con una escena vacía.

### 2. Añadir el screen images

1. **Añade un screen image**:  
   En el **Panel de Scene Hierarchy**, pulsa **+** y selecciona _screen image_. Esto añade varios elementos en la escena, como veréis en la imagen a continuación:

![image](https://github.com/user-attachments/assets/aa8ff407-9f9c-4d09-965b-a1496dc34180)

2. Estos elementos serán importantes más adelante, pero por el momento vamos a duplicar el _screen image_

![image](https://github.com/user-attachments/assets/e09fead3-903d-4427-8841-fe3663f910d2)

3. Y vamos a renombrar estos dos elementos:

![image](https://github.com/user-attachments/assets/7047ca49-bcdd-4968-af23-ae86a3561ced)

Esto nos servirá en los próximos pasos para distinguir el uno del otro.

### 3. Importa la imagen de fondo

Añade al proyecto la imagen que quieras de fondo. En [este tutorial](Objetos-3D.md) puedes ver cómo importar recursos. En este ejemplo hemos importado la imagen _nature.png_

### 4. Asigna la imagen al _screen image_ background

1. Selecciona el _screen image_ **background** y en el _Inspector_, en el campo _Texture_ asignale la imagen de fondo que acabas de importar:

![image](https://github.com/user-attachments/assets/5c3ecdd8-70ab-4209-b39b-238af5f20a33)

2. Selecciona el modo _Fill_ en Stretch Mode

![image](https://github.com/user-attachments/assets/8dec2b17-26ef-450d-b55f-00f73eb60ee5)

Este modo sirve para configurar que tiene que llenar toda la pantalla. Veréis que este cambio provoca que la pantalla de _Preview_ no sólo está rellena por la imagen de fondo, sino que tenemos superpuesta otra copia de la imagen, más perqueña. Esto se debe a que que los dos _screen images_ que hemos añadido antes utilizan el mismo material, y la acabamos de asignar la textura a ese material. Por lo tanto el próximo paso es crear un material. 

### 5. Crear un material para el _screen image_ user

1. En el **Asset Browser** crea un material nuevo, de tipo _Unlit_. Este será el material que utilizaremos para hacer la segmentación propiamente dicha, por lo tanto no necesitamos que se vea afectado por la iluminación, con lo cual el material más adecuado es _Unlit_

![image](https://github.com/user-attachments/assets/547998a7-893c-49bc-8561-b76818603210)

2. Creamos una textura de segmentación (Segmentation Texture). 

![image](https://github.com/user-attachments/assets/0e8eee4e-48d9-433f-9015-2a8fb4548ddc)


3. Configuramos el material creado en el primer paso. Habilitamos los campos _Base Texture_ y _Opacity Texture_, y les asignamos la textura de segmentación que acabamos de crear

![image](https://github.com/user-attachments/assets/356ddbd1-40eb-4cf5-9f6b-45cc1638fad4)


4. 

---

## Limitaciones y consideraciones

Antes de implementar la segmentación de fondo, ten en cuenta estas limitaciones:

1. **Condiciones de iluminación**:  
   - La detección de fondo funciona mejor en entornos bien iluminados.

2. **Calidad de la cámara**:  
   - Cámaras de baja resolución pueden afectar la precisión de la segmentación.

3. **Objetos similares al fondo**:  
   - La segmentación puede fallar si el sujeto tiene colores o texturas similares al fondo.

---

## Ejemplo práctico: Crear un efecto de reemplazo de fondo

### 1. Añadir un fondo dinámico
- Ve al **Asset Library** y selecciona un video animado como fondo.
- Añade el video a la **Scene Hierarchy** y colócalo detrás del sujeto segmentado.

### 2. Personalizar el sujeto
- Usa materiales o texturas específicas en el sujeto para destacar visualmente.

### 3. Prueba el efecto
- Usa la opción **Preview** en Lens Studio para simular el efecto con diferentes fondos. También puedes probar el efecto en un dispositivo físico.

---

## Consejos adicionales

- Utiliza imágenes de alta calidad y bien iluminadas para el fondo.
- Ajusta los bordes del sujeto en el **Panel de Propiedades** del componente de segmentación para mejorar la precisión.
- Experimenta con efectos adicionales como partículas o cambios de color para enriquecer el diseño.

---

¡Y eso es todo! Ahora sabes cómo implementar la segmentación de fondo en **Lens Studio** para crear efectos visuales impactantes.

---
[Página previa](Scripting.md) - [Página siguiente](Sonido.md)
