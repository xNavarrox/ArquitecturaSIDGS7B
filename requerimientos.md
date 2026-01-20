## UrbanAlert

## Requerimeientos Funcionales 

FR-01: El sistema debe permitir a los usuarios reportar incidentes, esto se realizara mediante un formulario.

FR-02:  El sistema debe asignar automáticamente un número de folio único a cada reporte generado.

FR-03: El sistema debe enviar una notificación de confirmación después de que un reporte haya sido registrado correctamente.

FR-04: El sistema debe permitir filtrar los reportes por tipo de incidente y zona geográfica.

FR-05: El sistema debe permitir a los usuarios consultar el estado de su reporte si ya fue revisado o resuelto.

## 2. Requerimientos No Funcionales NFRs (Attributes)

### NFR-01: Rendimiento (Performance)
El tiempo de respuesta del sistema no debe exceder los 300 ms

### NFR-02: Seguridad (Security)
El sistema debe permitir que un usuario complete un reporte en menos de 2 minutos

### NFR-03: Disponibilidad (Availability)
El sistema debe estar disponible el 98% del tiempo al mes para el monitoreo del servidor

## 3. Conflicto de Interés: Velocidad vs Seguridad

Para las personas de UrbanAlert, la velocidad es el atributo más importante, ya que los reportes deben realizarse rápido en situaciones de emergencia. Aunque la seguridad es mas importante, priorizar tiempos de respuesta bajos permite que los incidentes se registren sin retrasos, mejorando la reacción ante problemas urbanos.