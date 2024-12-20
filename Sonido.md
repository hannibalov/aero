# **Tutorial de Uso de Sonido en Lens Studio**  

## **¿Qué es el sonido en Lens Studio?**  

El sonido en Lens Studio permite integrar audio en tus Lentes para mejorar la experiencia del usuario. Puedes reproducir música, efectos de sonido o incluso responder a interacciones del usuario con clips de audio específicos.  

### **Casos de uso comunes para sonido en Lens Studio**  

1. **Efectos de sonido interactivos:**  
   - Reproducir un sonido al tocar un objeto en la pantalla.  
   - Sonidos activados por gestos, como sonrisas o movimientos de la cabeza.  

2. **Música de fondo:**  
   - Añadir una pista que suene continuamente mientras el Lente está activo.  

3. **Sonido sincronizado con animaciones:**  
   - Coordinar un efecto de sonido con el inicio o el final de una animación.  

---

## **Conocimientos previos recomendados**  

- Familiaridad básica con Lens Studio y su **Interfaz de Usuario**.  
- Conocer cómo añadir objetos a la jerarquía de la escena.  
- JavaScript básico, para usar scripts con audio interactivo.  

---

## **Peculiaridades y limitaciones del uso de sonido en Lens Studio**  

### **Peculiaridades:**  

1. **Soporte para múltiples formatos:**  
   Puedes usar archivos de audio en formato MP3, WAV y AAC.  
2. **Control de propiedades:**  
   Es posible ajustar la **intensidad del volumen**, repetir audio en bucle y controlar la reproducción mediante scripts.  

### **Limitaciones:**  

1. **Duración limitada de sonidos:**  
   Evita archivos de audio largos para mantener un buen rendimiento.  
2. **Rendimiento en dispositivos móviles:**  
   Utiliza sonidos comprimidos y evita reproducir varios sonidos al mismo tiempo para no sobrecargar el dispositivo.  

---

## **Gestión de sonido en Lens Studio**  

**Lens Studio** permite añadir y controlar sonidos mediante el panel **Audio** y mediante scripting. Veamos cómo hacerlo paso a paso:  

---

### **Añadir un archivo de sonido**  

1. Ve al panel **Resources** y haz clic en el botón **+**.  
2. Selecciona **Audio** para importar tu archivo de sonido.  
3. Arrastra el archivo a la jerarquía de tu escena. Se creará un objeto con un componente **Audio Component**.  

---

### **Control básico del Audio Component**  

El componente de audio tiene varias propiedades importantes:  

- **Audio Clip:** Selecciona el archivo de sonido que deseas reproducir.  
- **Play Automatically:** Activa esta opción si quieres que el sonido se reproduzca al iniciar el Lente.  
- **Loop:** Actívalo si quieres que el sonido se repita en bucle.  
- **Volume:** Ajusta el nivel de volumen del audio.  

![Captura de pantalla 2024-12-17 131236](https://github.com/user-attachments/assets/e45ad2c8-58f7-4559-b6a0-8f0458f77f99)

---

### **Ejemplo práctico: Reproducir un sonido al tocar un objeto**  

#### Paso 1: Añadir un Audio Component  

1. Añade el archivo de sonido al panel **Resources**.  
2. Crea un objeto vacío en la jerarquía y añade un **Audio Component**.  
3. Asigna el archivo de sonido al campo **Audio Clip** del componente.  

#### Paso 2: Añadir un script para controlar el sonido  

```javascript
//@input SceneObject targetObject  
//@input Asset.AudioTrackAsset soundClip  

// Configurar el componente de audio  
var audioComponent = script.getSceneObject().createComponent("Component.AudioComponent");  
audioComponent.audioTrack = script.soundClip;  

// Reproducir sonido al tocar el objeto  
script.createEvent("TapEvent").bind(function () {  
    audioComponent.play(1); // Reproduce el sonido una vez  
    print("¡Sonido reproducido!");  
});  

```

---

¡Con estos pasos, ya puedes añadir sonidos personalizados a tus Lentes! 🎉

---
[Página previa](Segmentación.md) 
