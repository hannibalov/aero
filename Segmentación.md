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

Sigue estos pasos para configurar la segmentación de fondo en tu proyecto:

### 1. Crear un nuevo proyecto

- Abre **Lens Studio** y selecciona "Empty Project" para comenzar con una escena vacía.

### 2. Añadir el componente Background Segmentation

1. **Selecciona la cámara en tu proyecto**:  
   En el **Panel de Scene Hierarchy**, selecciona el objeto **Camera**.

2. **Añade el componente Background Segmentation**:  
   - Ve al **Panel de Propiedades** (Inspector).  
   - Haz clic en **Add Component** y selecciona **Segmentation**.  

3. **Configura el tipo de segmentación**:  
   En las propiedades del componente, selecciona **Background Segmentation** para activar la detección y separación del fondo.

### 3. Modificar el fondo

1. **Añade un objeto visual para el fondo**:  
   - Ve al **Panel de Asset Library** y selecciona una imagen, video o textura para usar como fondo.  
   - Arrastra el recurso al **Scene Hierarchy**.

2. **Organiza los objetos en la jerarquía**:  
   - Asegúrate de que el nuevo fondo esté detrás del sujeto segmentado en la escena. Puedes ajustar el orden de los objetos o sus coordenadas Z para lograr esto.

3. **Aplica materiales y efectos**:  
   - Ve al **Panel de Material Editor** para añadir efectos al fondo, como desvanecimientos, filtros o animaciones.

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
[Página previa](Face-Effects.md) - [Página siguiente](Objetos-3D.md)
