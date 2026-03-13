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



## Requerimientos No Funcionales – Seguridad

NFR-SEC-01: El sistema debe cifrar toda la información sensible de los usuarios utilizando el algoritmo **AES-256** antes de almacenarla en la base de datos.

NFR-SEC-02: El acceso al sistema debe requerir autenticación mediante usuario y contraseña, donde la contraseña tenga un mínimo de **8 caracteres**, incluyendo letras y números.

NFR-SEC-03: El sistema debe bloquear la cuenta de un usuario después de **5 intentos fallidos** de inicio de sesión consecutivos.

NFR-SEC-04: Todas las comunicaciones entre el cliente y el servidor deben realizarse mediante el protocolo **HTTPS (TLS 1.2 o superior)**.

NFR-SEC-05: El sistema debe registrar en un log de seguridad todos los intentos de acceso al panel de autoridades, incluyendo fecha y hora.


 Redes Sociales
 Instagram vs TikTok
Criterio	Instagram	TikTok
Útil	    | Compartir fotos y videos, historias, mensajería| Crear y consumir videos cortos
Usable	    | Barra de navegación clara	                     | Swipe vertical muy natural
Deseable	| Perfil visual + marcas personales              | Contenido divertido + efectos
Encontrable	| Explorar por hashtags y lugares                | Algoritmo que muestra contenido relevante
Accesible	| Texto alternativo y navegación sencilla	     | Subtítulos automáticos en muchos videos
Creíble	    | Reputación establecida	                     | Contenido viral pero a veces menos fiable
Valioso	    | Conectar con contactos y marcas                | Oportunidad de viralidad rápida

➡️ Conclusión:
- Instagram es mejor para identidad visual y comunidad estable,
- TikTok destaca en entretenimiento y descubrimiento creativo.