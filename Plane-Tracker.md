# Uso del Plane Tracker en Lens Studio

En esta sección, veremos cómo utilizar el **Plane Tracker** en Lens Studio para detectar superficies planas. El concepto es similar al [_Face Tracking_](Face-Tracking.md) que hemos visto en la sección correspondiente, ya que ese sistema utiliza la cámara para detectar un rostro y ejecutar acciones. Por su parte, un **Plane Tracker** detecta una superficie plana para ejecutar las acciones programadas en nuestro efecto.

## Añadir un Plane Tracker a la escena

El primer paso es añadir un **Plane Tracker** a la escena. Para hacerlo, sigue estos pasos:

1. En la **Panel de Objetos** (Objects), haz clic en el botón **+**.
2. En el menú desplegable, selecciona **Plane Tracker**.

Al hacerlo, el **Plane Tracker** aparecerá en la jerarquía de objetos de tu proyecto.

![Plane Tracker en Lens Studio](uploads/plane-tracker-lens-studio.png)

## Configuración de entorno

El **Plane Tracker** en Lens Studio usa la cámara para detectar superficies planas horizontales. Las coordenadas del plano no se definen manualmente; en su lugar, se ajustan dinámicamente cuando el plano es detectado. 

Para probar tu efecto sin necesidad de un dispositivo físico, Lens Studio ofrece simulaciones de entornos. Puedes seleccionar una simulación desde el botón de la **Vista previa de la cámara** (Camera Preview) en la barra superior. 

Escoge un entorno con una superficie horizontal, como una mesa o suelo plano, para asegurarte de que el efecto funcione correctamente.

![Simulación de entorno](uploads/simulation-environment-lens-studio.png)

## Añadir un objeto 3D a la escena

El siguiente paso es importar un objeto 3D. Puedes usar uno de los objetos predeterminados de Lens Studio o añadir un archivo externo.

1. Ve al **Panel de Recursos** (Resources).
2. Haz clic en el botón **+** y selecciona **Importar** para añadir un modelo 3D a tu proyecto.
3. Alternativamente, selecciona un objeto de la biblioteca integrada de Lens Studio.

En este ejemplo, seleccionaremos el modelo **Wolf Head Statue** de la biblioteca. Una vez importado, aparecerá en el panel de **Assets**.

## Vincular el objeto al Plane Tracker

Para que el objeto se mueva en relación con el plano detectado, sigue estos pasos:

1. Arrastra el objeto 3D desde el panel **Assets** a la jerarquía de objetos.
2. Sitúalo como hijo del **Plane Tracker**.

![Jerarquía con Plane Tracker y objeto](uploads/plane-tracker-hierarchy-lens-studio.png)

De esta manera, el objeto permanecerá fijado en la superficie detectada mientras la cámara se mueve.

## Ajustar escala y posición

Es posible que necesites ajustar la posición, rotación o escala del objeto para que se vea correctamente en la escena. Por ejemplo, si el modelo fue creado con diferentes unidades de medida (como pulgadas en lugar de centímetros), ajusta la escala desde el **Panel de Propiedades** (Inspector).

---

¡Y eso es todo! Ahora tienes un efecto que utiliza el **Plane Tracker** en Lens Studio. Experimenta con diferentes objetos y configuraciones para crear experiencias interactivas únicas.

---
[Página previa](Face-Tracking.md) - [Página siguiente](Objetos-3D.md)
